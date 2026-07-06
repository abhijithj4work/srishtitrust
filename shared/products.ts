export interface Product {
  id: string;
  name: string;
  institute: string;
  price: number;
  description: string;
  image: string;
  colors?: string[];
  category: string;
}

export const products: Product[] = [
  {
    id: "a6-mini-gift-box",
    name: "A6 Mini Gift Box",
    institute: "Athulya Paper Studio",
    price: 1,
    description:
      "A charming mini gift box crafted from eco-friendly handmade paper, perfect for small treasures and thoughtful gifts.",
    image: "assets/product-gift-box.jpg",
    category: "Paper",
  },
  {
    id: "assorted-notebook",
    name: "Assorted Notebook",
    institute: "Athulya Paper Studio",
    price: 10,
    description:
      "Beautifully bound notebooks made from tea fiber and elephant dung paper, each page telling a story of sustainable craftsmanship.",
    image: "assets/product-notebook.jpg",
    colors: ["Natural", "Tea Green", "Earth Brown"],
    category: "Paper",
  },
  {
    id: "banana-fiber-lamp",
    name: "Banana Fiber Paper Lamp",
    institute: "Athulya Paper Studio",
    price: 10,
    description:
      "An elegant paper lamp crafted from banana fiber, casting warm ambient light through its delicate handmade structure.",
    image: "assets/product-lamp.jpg",
    category: "Paper",
  },
  {
    id: "banana-fibre-paper",
    name: "Banana Fibre Paper",
    institute: "Athulya Paper Studio",
    price: 1,
    description:
      "Premium handmade banana fibre paper sheets, ideal for art, craft, and eco-conscious creative projects.",
    image: "assets/product-paper.jpg",
    category: "Paper",
  },
  {
    id: "naturally-dyed-stole",
    name: "Naturally-Dyed Stole",
    institute: "Aranya Natural",
    price: 2500,
    description:
      "Award-winning naturally-dyed textile stole using traditional plant-based dyeing techniques from roots, barks and leaves.",
    image: "assets/product-stole.jpg",
    colors: ["Indigo", "Mustard", "Forest Green", "Terracotta"],
    category: "Textiles",
  },
  {
    id: "handmade-jam",
    name: "Handmade Jam Preserve",
    institute: "Nisarga",
    price: 350,
    description:
      "Delicious preservative-free jam made from locally sourced fruits, with no artificial colours or additives.",
    image: "assets/product-jam.jpg",
    colors: ["Strawberry", "Guava", "Passion Fruit"],
    category: "Food",
  },
  {
    id: "artisan-sourdough",
    name: "Artisan Sourdough Loaf",
    institute: "The Deli Bakery",
    price: 180,
    description:
      "ISO 22000 certified artisanal sourdough bread, freshly baked with traditional techniques and premium ingredients.",
    image: "assets/product-bread.jpg",
    category: "Food",
  },
  {
    id: "embroidered-cushion",
    name: "Hand-Embroidered Cushion",
    institute: "Disha",
    price: 1200,
    description:
      "Beautiful hand-embroidered cushion cover created by skilled artisans, blending traditional techniques with contemporary design.",
    image: "assets/product-cushion.jpg",
    colors: ["Cream", "Sage", "Rose"],
    category: "Embroidery",
  },
];

export interface CartItem {
  product: Product;
  quantity: number;
}

export function formatPrice(price: number): string {
  return `Rs. ${price.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
