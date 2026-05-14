export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  category: 'desks' | 'chairs' | 'beds';
}

export const products: Product[] = [
  {
    id: "desk-1",
    title: "Ergonomic Steel Standing Desk",
    price: 399.99,
    image: "/image/Ergonomic Steel Standing Desk Height Adjustable Office Computer Table with Modern Design.jpg",
    description: "Height adjustable steel standing desk. Perfect for productivity.",
    category: "desks"
  },
  {
    id: "chair-1",
    title: "BIFMA High-End Ergonomic Chair",
    price: 249.99,
    image: "/image/BIFMA High-End Ergonomic Office Chair Contemporary Design 7D Armrest Adjustable High Back Mesh Chair-Direct Factory Price.jpg",
    description: "Ergonomic mesh chair with adjustable armrests.",
    category: "chairs"
  },
  {
    id: "bed-1",
    title: "Foldable Sofa Bed",
    price: 599.99,
    image: "/image/Apartment Furniture Metal Frame Foldable Sofa Cum Bed Storage Modern Folding Sofa Bed.jpg",
    description: "Space-saving folding sofa bed. Great for apartments.",
    category: "beds"
  },
  {
    id: "desk-2",
    title: "Modern Electric Desk",
    price: 459.99,
    image: "/image/Modern Convertible 2 Stage Memory Digital Display Ergonomic Office Electric Desk Height Adjustable Sit Stand.jpeg",
    description: "Electric height adjustable desk with digital display.",
    category: "desks"
  },
  {
    id: "chair-2",
    title: "Executive Mesh Chair",
    price: 189.99,
    image: "/image/Modern Office Furniture Comfortable Armrest Adjustable Swivel Mesh Executive Chair Ergonomic Office Chair With Lumbar Support.jpg",
    description: "Executive mesh chair with lumbar support.",
    category: "chairs"
  },
  {
    id: "bed-2",
    title: "Queen Size Inflatable Airbed",
    price: 129.99,
    image: "/image/Easy Carry Folding Airbed Queen Size Inflatable Double Hight Automatic Camping Air Mattress With Built-in Pump.png",
    description: "Queen size inflatable airbed with built-in pump.",
    category: "beds"
  },
  {
    id: "chair-3",
    title: "Modern Ergonomic Mesh Chair",
    price: 219.99,
    image: "/image/Leer Hot Sale Modern Style Adjustable Ergonomic Mesh Office Chair with Footrest Swivel Feature Fabric.jpg",
    description: "Modern ergonomic mesh chair with footrest.",
    category: "chairs"
  },
  {
    id: "desk-3",
    title: "Smart Electric Standing Desk",
    price: 499.99,
    image: "/image/Smart Electric Hight Adjustable Sit Stand up Standing Office Desk Table Frame Single Motor Adjustable Height Lift Desk.jpg",
    description: "Single motor electric adjustable standing desk.",
    category: "desks"
  },
  {
    id: "bed-3",
    title: "Outdoor Foldable Bed",
    price: 89.99,
    image: "/image/Easy Storage Adjustable Outdoor Furniture Metal Folding Camping Cots Single Nap Outdoor Foldable Bed.jpg",
    description: "Foldable camping cot, easy to store and carry.",
    category: "beds"
  },
  {
    id: "chair-4",
    title: "Modern Executive Office Chair",
    price: 279.99,
    image: "/image/New Modern Design Executive Ergo Office Chair High Back Manager Computer Recliner Adjustable Mesh Swivel Metal Ergonomic.jpg",
    description: "High back ergonomic manager chair.",
    category: "chairs"
  },
  {
    id: "bed-4",
    title: "Megacore Reformer Pilates Bed",
    price: 899.99,
    image: "/image/Emax Adjustable Aluminum Alloy Megacore Reformer Pilates Machine Core Bed Studio Bodybuilding Durable Portable Eco-Friendly.jpg",
    description: "Aluminum alloy portable pilates machine bed.",
    category: "beds"
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}
