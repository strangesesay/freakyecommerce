import { Injectable } from '@angular/core';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  Products: Product[] = [
    {
      id: 1,
      title: "Aero Wireless Headphones",
      description: "Over-ear Bluetooth headphones with 30h battery life and ANC.",
      price: 129.99,
      category: "Electronics",
      brand: "Aero",
      imageUrl: "https://picsum.photos/id/10/800/600",
      rating: { rate: 4.5, count: 412 },
      stock: 58
    },
    {
      id: 2,
      title: "Nova 4K Action Camera",
      description: "4K/60fps, waterproof housing, gyro stabilization.",
      price: 199.0,
      category: "Electronics",
      brand: "Nova",
      imageUrl: "https://picsum.photos/id/11/800/600",
      rating: { rate: 4.2, count: 287 },
      stock: 33
    },
    {
      id: 3,
      title: "Urban Laptop Backpack 15”",
      description: "Water-resistant fabric, USB passthrough, padded straps.",
      price: 59.99,
      category: "Accessories",
      brand: "UrbanCo",
      imageUrl: "https://picsum.photos/id/12/800/600",
      rating: { rate: 4.6, count: 154 },
      stock: 72
    },
    {
      id: 4,
      title: "Quartz Analog Watch",
      description: "Minimal stainless-steel case with leather strap.",
      price: 74.5,
      category: "Fashion",
      brand: "Zeit",
      imageUrl: "https://picsum.photos/id/13/800/600",
      rating: { rate: 4.1, count: 98 },
      stock: 40
    },
    {
      id: 5,
      title: "Bamboo Chef Knife 8”",
      description: "High-carbon steel blade, ergonomic grip.",
      price: 39.0,
      category: "Home & Kitchen",
      brand: "Chefline",
      imageUrl: "https://picsum.photos/id/14/800/600",
      rating: { rate: 4.7, count: 221 },
      stock: 120
    },
    {
      id: 6,
      title: "Eco Ceramic Mug 350ml",
      description: "Double-glazed ceramic, microwave and dishwasher safe.",
      price: 12.99,
      category: "Home & Kitchen",
      brand: "MugWorks",
      imageUrl: "https://picsum.photos/id/15/800/600",
      rating: { rate: 4.3, count: 65 },
      stock: 300
    },
    {
      id: 7,
      title: "Trail Running Shoes",
      description: "Breathable upper, aggressive outsole for mixed terrain.",
      price: 89.99,
      category: "Sports",
      brand: "TrailPro",
      imageUrl: "https://picsum.photos/id/16/800/600",
      rating: { rate: 4.4, count: 340 },
      stock: 77
    },
    {
      id: 8,
      title: "Pro Yoga Mat 6mm",
      description: "Non-slip, high-density TPE with carry strap.",
      price: 29.99,
      category: "Sports",
      brand: "ZenFlex",
      imageUrl: "https://picsum.photos/id/17/800/600",
      rating: { rate: 4.6, count: 210 },
      stock: 150
    },
    {
      id: 9,
      title: "Matte Lipstick Set (4)",
      description: "Long-wear formula with vitamin E.",
      price: 24.0,
      category: "Beauty",
      brand: "Velour",
      imageUrl: "https://picsum.photos/id/18/800/600",
      rating: { rate: 4.3, count: 190 },
      stock: 95
    },
    {
      id: 10,
      title: "Vitamin C Serum 30ml",
      description: "Brightening serum with hyaluronic acid.",
      price: 18.5,
      category: "Beauty",
      brand: "GlowLab",
      imageUrl: "https://picsum.photos/id/19/800/600",
      rating: { rate: 4.5, count: 402 },
      stock: 210
    },
    {
      id: 11,
      title: "Hardcover Notebook A5",
      description: "Dot-grid, 160 pages, lay-flat binding.",
      price: 9.99,
      category: "Office",
      brand: "NoteOne",
      imageUrl: "https://picsum.photos/id/20/800/600",
      rating: { rate: 4.8, count: 133 },
      stock: 500
    },
    {
      id: 12,
      title: "Ergo Wireless Mouse",
      description: "Silent clicks, 2.4G receiver, 3 DPI modes.",
      price: 21.0,
      category: "Office",
      brand: "Pointer",
      imageUrl: "https://picsum.photos/id/21/800/600",
      rating: { rate: 4.2, count: 260 },
      stock: 180
    },
    {
      id: 13,
      title: "Carbon Fiber Phone Case",
      description: "Slim, shock-absorbing with raised bezels.",
      price: 16.0,
      category: "Accessories",
      brand: "ShieldX",
      imageUrl: "https://picsum.photos/id/22/800/600",
      rating: { rate: 4.1, count: 88 },
      stock: 240
    },
    {
      id: 14,
      title: "Bluetooth Soundbar",
      description: "2.1 channel with deep bass and optical input.",
      price: 139.0,
      category: "Electronics",
      brand: "SoundBase",
      imageUrl: "https://picsum.photos/id/23/800/600",
      rating: { rate: 4.0, count: 175 },
      stock: 64
    },
    {
      id: 15,
      title: "Smart LED Bulb E27",
      description: "RGB + warm/cool white, app and voice control.",
      price: 14.99,
      category: "Smart Home",
      brand: "Lumo",
      imageUrl: "https://picsum.photos/id/24/800/600",
      rating: { rate: 4.4, count: 520 },
      stock: 1000
    },
    {
      id: 16,
      title: "Stainless Water Bottle 1L",
      description: "Vacuum insulated, keeps drinks cold 24h.",
      price: 22.0,
      category: "Outdoors",
      brand: "Fjord",
      imageUrl: "https://picsum.photos/id/25/800/600",
      rating: { rate: 4.7, count: 418 },
      stock: 310
    },
    {
      id: 17,
      title: "Minimal Desk Lamp",
      description: "Dimmable LED with touch control.",
      price: 34.99,
      category: "Home & Living",
      brand: "Luma",
      imageUrl: "https://picsum.photos/id/26/800/600",
      rating: { rate: 4.3, count: 99 },
      stock: 120
    },
    {
      id: 18,
      title: "Cotton T-Shirt Unisex",
      description: "200gsm heavy cotton, classic fit.",
      price: 15.0,
      category: "Fashion",
      brand: "PlainCo",
      imageUrl: "https://picsum.photos/id/27/800/600",
      rating: { rate: 4.5, count: 620 },
      stock: 800
    },
    {
      id: 19,
      title: "Commuter Sunglasses",
      description: "Polarized lenses, UV400 protection.",
      price: 32.0,
      category: "Fashion",
      brand: "Vista",
      imageUrl: "https://picsum.photos/id/28/800/600",
      rating: { rate: 4.2, count: 140 },
      stock: 90
    },
    {
      id: 20,
      title: "Portable SSD 1TB",
      description: "USB-C 3.2 Gen 2, up to 1000MB/s.",
      price: 119.0,
      category: "Electronics",
      brand: "FlashGo",
      imageUrl: "https://picsum.photos/id/29/800/600",
      rating: { rate: 4.8, count: 990 },
      stock: 55
    },
    {
      id: 21,
      title: "Chef’s Cast Iron Skillet",
      description: "Pre-seasoned 12” pan for stovetop & oven.",
      price: 44.0,
      category: "Home & Kitchen",
      brand: "Forge",
      imageUrl: "https://picsum.photos/id/30/800/600",
      rating: { rate: 4.7, count: 300 },
      stock: 150
    },
    {
      id: 22,
      title: "Slim Mechanical Keyboard",
      description: "Low-profile switches, hot-swappable, USB-C.",
      price: 89.0,
      category: "Electronics",
      brand: "Keylite",
      imageUrl: "https://picsum.photos/id/31/800/600",
      rating: { rate: 4.4, count: 275 },
      stock: 120
    },
    {
      id: 23,
      title: "Noise-Isolating Earbuds",
      description: "Secure fit with 3 sizes of ear tips.",
      price: 29.0,
      category: "Electronics",
      brand: "BeatBox",
      imageUrl: "https://picsum.photos/id/32/800/600",
      rating: { rate: 4.1, count: 188 },
      stock: 260
    },
    {
      id: 24,
      title: "Leather Wallet Bifold",
      description: "RFID shielding, 8 card slots, 2 cash pockets.",
      price: 28.0,
      category: "Fashion",
      brand: "Mavro",
      imageUrl: "https://picsum.photos/id/33/800/600",
      rating: { rate: 4.3, count: 132 },
      stock: 200
    },
    {
      id: 25,
      title: "Studiomic USB Condenser",
      description: "Cardioid pattern, plug-and-play for podcasting.",
      price: 59.0,
      category: "Electronics",
      brand: "Vocal",
      imageUrl: "https://picsum.photos/id/34/800/600",
      rating: { rate: 4.5, count: 242 },
      stock: 88
    },
    {
      id: 26,
      title: "Canvas Wall Art 40x60",
      description: "High-resolution print on premium canvas.",
      price: 49.0,
      category: "Home & Living",
      brand: "Canvasly",
      imageUrl: "https://picsum.photos/id/35/800/600",
      rating: { rate: 4.2, count: 76 },
      stock: 60
    },
    {
      id: 27,
      title: "Stainless Travel Kettle",
      description: "0.8L compact, auto shut-off.",
      price: 35.0,
      category: "Home Appliances",
      brand: "SwiftBoil",
      imageUrl: "https://picsum.photos/id/36/800/600",
      rating: { rate: 4.1, count: 84 },
      stock: 75
    },
    {
      id: 28,
      title: "MagCharge Wireless Pad",
      description: "15W fast charge, USB-C input.",
      price: 23.5,
      category: "Electronics",
      brand: "Magio",
      imageUrl: "https://picsum.photos/id/37/800/600",
      rating: { rate: 4.0, count: 160 },
      stock: 190
    },
    {
      id: 29,
      title: "Adjustable Dumbbells (Pair)",
      description: "2.5–24kg quick-select system.",
      price: 259.0,
      category: "Sports",
      brand: "IronFlex",
      imageUrl: "https://picsum.photos/id/38/800/600",
      rating: { rate: 4.6, count: 205 },
      stock: 38
    },
    {
      id: 30,
      title: "Aroma Diffuser 500ml",
      description: "7-color LED, auto shut-off, timer modes.",
      price: 26.0,
      category: "Home & Living",
      brand: "Aura",
      imageUrl: "https://picsum.photos/id/39/800/600",
      rating: { rate: 4.3, count: 120 },
      stock: 140
    },
    {
      id: 31,
      title: "Carbon Trek Water Filter",
      description: "Portable pump filter for hiking & camping.",
      price: 54.0,
      category: "Outdoors",
      brand: "ClearStream",
      imageUrl: "https://picsum.photos/id/40/800/600",
      rating: { rate: 4.5, count: 91 },
      stock: 66
    },
    {
      id: 32,
      title: "Premium Coffee Beans 1kg",
      description: "100% Arabica, medium roast, chocolate notes.",
      price: 19.5,
      category: "Grocery",
      brand: "RoastLab",
      imageUrl: "https://picsum.photos/id/41/800/600",
      rating: { rate: 4.8, count: 540 },
      stock: 420
    },
    {
      id: 33,
      title: "Smart Plug (2-Pack)",
      description: "Energy monitoring, schedules, voice control.",
      price: 24.99,
      category: "Smart Home",
      brand: "Plugly",
      imageUrl: "https://picsum.photos/id/42/800/600",
      rating: { rate: 4.4, count: 370 },
      stock: 260
    },
    {
      id: 34,
      title: "Kids’ Building Blocks 120-pc",
      description: "Non-toxic ABS, compatible with major brands.",
      price: 22.0,
      category: "Toys",
      brand: "BuildIt",
      imageUrl: "https://picsum.photos/id/43/800/600",
      rating: { rate: 4.7, count: 680 },
      stock: 510
    },
    {
      id: 35,
      title: "Cordless Hand Vacuum",
      description: "Cyclonic suction, washable HEPA filter.",
      price: 49.99,
      category: "Home Appliances",
      brand: "SwiftClean",
      imageUrl: "https://picsum.photos/id/44/800/600",
      rating: { rate: 4.1, count: 144 },
      stock: 85
    },
    {
      id: 36,
      title: "Travel Tripod Aluminum",
      description: "Lightweight, ball head, 1.5kg load.",
      price: 69.0,
      category: "Photography",
      brand: "SnapStand",
      imageUrl: "https://picsum.photos/id/45/800/600",
      rating: { rate: 4.2, count: 201 },
      stock: 74
    }
  ];


}
