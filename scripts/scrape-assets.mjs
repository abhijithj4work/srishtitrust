import { writeFile, mkdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = join(__dirname, "../shared/assets");
const BASE = "https://www.srishtitrust.org";

/** Exact images from srishtitrust.org Shopify CDN */
const ASSETS = [
  // Hero & general
  { name: "hero.jpg", path: "/cdn/shop/files/home-banner-dareschool.png", width: 1920 },
  { name: "plantation.jpg", path: "/cdn/shop/files/home_page_1.png", width: 1920 },
  { name: "making-a-difference.jpg", path: "/cdn/shop/files/Making-a-difference.png", width: 1200 },
  { name: "logo.png", path: "/cdn/shop/files/srishti-logo-removebg-preview.png", width: 600 },
  { name: "favicon.png", path: "/cdn/shop/files/srishti-favicon-removebg-preview.png", width: 128 },

  // Institutes — home-banner images from live site
  { name: "institute-dare.jpg", path: "/cdn/shop/files/home-banner-dareschool.png", width: 1200 },
  { name: "institute-aranya.jpg", path: "/cdn/shop/files/home-banner-aranya.png", width: 1200 },
  { name: "institute-athulya.jpg", path: "/cdn/shop/files/home-banner-athulya.png", width: 1200 },
  { name: "institute-nisarga.jpg", path: "/cdn/shop/files/home-banner-nisarga.png", width: 1200 },
  { name: "institute-deli.jpg", path: "/cdn/shop/files/home-banner-deli.png", width: 1200 },
  { name: "institute-disha.jpg", path: "/cdn/shop/files/home-banner-disha.png", width: 1200 },
  { name: "institute-shakti.jpg", path: "/cdn/shop/files/home-banner-shkti.png", width: 1200 },
  { name: "institute-vatika.jpg", path: "/cdn/shop/files/home-banner-vatika.png", width: 1200 },

  // Products — exact shop images
  { name: "product-gift-box.jpg", path: "/cdn/shop/files/RESIZE_9_1.png", width: 800 },
  { name: "product-notebook.jpg", path: "/cdn/shop/files/AssortedNotebooks_1_7ec90169-2bbf-4cda-8d1f-f89115f4a79a.png", width: 800 },
  { name: "product-lamp.jpg", path: "/cdn/shop/files/BananaFibrePaperLamps_1.png", width: 800 },
  { name: "product-paper.jpg", path: "/cdn/shop/files/Banana_Fibre_Paper_1.jpg", width: 800 },
  { name: "product-stole.jpg", path: "/cdn/shop/files/Miura_Shibori_1.jpg", width: 800 },
  { name: "product-jam.jpg", path: "/cdn/shop/files/nisarga-home-image.png", width: 800 },
  { name: "product-bread.jpg", path: "/cdn/shop/files/ButterCookies1080x1350_1.png", width: 800 },
  { name: "product-cushion.jpg", path: "/cdn/shop/files/embroidery_sling_bag_1.png", width: 800 },

  // People & stories
  { name: "artisan-james.jpg", path: "/cdn/shop/files/jemes_1.png", width: 800 },
  { name: "women-empowerment.jpg", path: "/cdn/shop/files/malika_image_1.png", width: 800 },

  // Extra hero slides for carousel
  { name: "hero-aranya.jpg", path: "/cdn/shop/files/home-banner-aranya.png", width: 1920 },
  { name: "hero-athulya.jpg", path: "/cdn/shop/files/home-banner-athulya.png", width: 1920 },
  { name: "hero-nisarga.jpg", path: "/cdn/shop/files/home-banner-nisarga.png", width: 1920 },
  { name: "hero-deli.jpg", path: "/cdn/shop/files/home-banner-deli.png", width: 1920 },
  { name: "hero-disha.jpg", path: "/cdn/shop/files/home-banner-disha.png", width: 1920 },
  { name: "hero-shakti.jpg", path: "/cdn/shop/files/home-banner-shkti.png", width: 1920 },
  { name: "hero-vatika.jpg", path: "/cdn/shop/files/home-banner-vatika.png", width: 1920 },

  // Section icons
  { name: "icon-education.png", path: "/cdn/shop/files/Education_2.png", width: 400 },
  { name: "icon-empowerment.png", path: "/cdn/shop/files/Empowerment-icon-2.png", width: 400 },
  { name: "icon-livelihoods.png", path: "/cdn/shop/files/Livelihoods.png", width: 400 },
  { name: "icon-sustainability.png", path: "/cdn/shop/files/Sustainability-is-at-the-Core_1.png", width: 400 },
  { name: "award-nari-shakti.png", path: "/cdn/shop/files/Nari-Shakti-Puraskar_1.png", width: 400 },
  { name: "shop-handmade.jpg", path: "/cdn/shop/files/Shop_Handmade_3.png", width: 1000 },
];

function buildUrl(path, width) {
  const separator = path.includes("?") ? "&" : "?";
  return `${BASE}${path}${separator}width=${width}`;
}

async function downloadAsset({ name, path, width }) {
  const url = buildUrl(path, width);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    await writeFile(join(assetsDir, name), buffer);
    console.log(`✓ ${name} (${(buffer.length / 1024).toFixed(0)} KB)`);
  } catch (err) {
    console.warn(`✗ ${name}: ${err.message}`);
  }
}

async function main() {
  await mkdir(assetsDir, { recursive: true });
  console.log("Downloading exact images from srishtitrust.org...\n");
  for (const asset of ASSETS) {
    await downloadAsset(asset);
  }
  console.log("\nDone.");
}

main();
