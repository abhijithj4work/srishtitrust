#!/bin/bash
set -e

GH_USER="abhijithj4work"
DESIGNS=(
  "design-1-editorial:srishti-editorial-poc"
  "design-2-artisan:srishti-artisan-poc"
  "design-3-immersive:srishti-immersive-poc"
)
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

gh auth switch --user "$GH_USER" 2>/dev/null || true

for entry in "${DESIGNS[@]}"; do
  DIR="${entry%%:*}"
  REPO="${entry##*:}"
  echo ""
  echo "=========================================="
  echo " Deploying $DIR -> $GH_USER/$REPO"
  echo "=========================================="

  cd "$ROOT/$DIR"
  GH_PAGES=true npm run build

  # SPA fallback for GitHub Pages — inject redirect into index.html
  SEGMENT_COUNT=1
  REDIRECT_SCRIPT="<script>!function(){var s=sessionStorage.getItem('gh-spa-path');if(s){sessionStorage.removeItem('gh-spa-path');var b='${REPO}';history.replaceState(null,'','/'+b+'/'+s.replace(/^\\//,'')+location.hash)}}();</script>"
  SPA_404="<script>sessionStorage.setItem('gh-spa-path',location.pathname.split('/').slice(2).join('/')+location.search+location.hash);location.replace(location.pathname.split('/').slice(0,2).join('/')+'/');</script>"

  # Inject redirect handler into built index.html
  if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' "s|</head>|${REDIRECT_SCRIPT}</head>|" dist/index.html
  else
    sed -i "s|</head>|${REDIRECT_SCRIPT}</head>|" dist/index.html
  fi
  cp dist/index.html dist/404.html
  # Prepend 404 capture script to 404.html
  if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' "s|<body>|<body>${SPA_404}|" dist/404.html
  else
    sed -i "s|<body>|<body>${SPA_404}|" dist/404.html
  fi

  TMP=$(mktemp -d)
  cp -r dist/* "$TMP/"
  cd "$TMP"
  git init -q
  git config user.email "abhijithj4work@gmail.com"
  git config user.name "abhijithj4work"
  git add -A
  git commit -q -m "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
  git branch -M gh-pages

  if gh repo view "$GH_USER/$REPO" &>/dev/null; then
    git remote add origin "https://github.com/$GH_USER/$REPO.git"
    git push -f origin gh-pages
  else
    gh repo create "$REPO" --public --description "Srishti Trust POC - ${DIR}" --source=. --remote=origin --push
  fi

  # Enable GitHub Pages from gh-pages branch
  gh api -X POST "repos/$GH_USER/$REPO/pages" \
    -f build_type=legacy \
    -f source[branch]=gh-pages \
    -f source[path]=/ 2>/dev/null || \
  gh api -X PUT "repos/$GH_USER/$REPO/pages" \
    -f build_type=legacy \
    -f source[branch]=gh-pages \
    -f source[path]=/ 2>/dev/null || true

  echo "Live URL: https://$GH_USER.github.io/$REPO/"
  rm -rf "$TMP"
done

echo ""
echo "All 3 designs deployed!"
echo "  Editorial:  https://$GH_USER.github.io/srishti-editorial-poc/"
echo "  Artisan:    https://$GH_USER.github.io/srishti-artisan-poc/"
echo "  Immersive:  https://$GH_USER.github.io/srishti-immersive-poc/"
