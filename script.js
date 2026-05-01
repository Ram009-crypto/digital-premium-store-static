/* =========================================================
   Digital Premium Store - Static JavaScript
   Edit products, prices, links, and config below.
   ========================================================= */

/* ============== SITE CONFIG (Edit these) ============== */
const SUPABASE_URL = "https://mpekparprverhxbbrcnf.supabase.co/rest/v1/";
const SUPABASE_KEY = "https://mpekparprverhxbbrcnf.supabase.co/rest/v1/";
const SITE_CONFIG = {
  brandName: "Digital Premium",
  whatsappNumber: "+917908162155",        // Change to your WhatsApp number (with country code, no +)
  whatsappMessage: "Hi Digital Premium Store, I want to know more about your products.",
  telegramUrl: "https://t.me/digitalpremiumofficial",
  upiId: "chaotix@ybl",           // Change to your UPI ID
  upiPayeeName: "Digital Premium Store",
  adminPassword: "@RAMKRISHNA090@#",     // Change Admin Password Here
};

/* ============== Add More Products Here ============== */
/* Each product: id, name, category, image, prices, features.
   Image path is relative — drop your image into /images and reference it here.
   Example: image: "images/capcut.jpg"                                      */
const PRODUCTS = [
  { id: "p01", name: "CapCut Pro Bundle",        category: "Editing",      image: "images/capcut.jpg",   priceInr: 249, oldPriceInr: 399,  shortDescription: "Premium video editing unlocked",     features: ["All premium effects", "No watermark", "4K export", "Lifetime access"], popular: true,  badge: "Best Value" },
  { id: "p02", name: "Filmora Pro", category: "Editing",    image: "images/filmora.jpg",      priceInr: 149, oldPriceInr: 1199, shortDescription: "Ad-free music forever",              features: ["Ad-free listening", "Offline downloads", "Highest quality audio"],     badge: "Instant Delivery" },
  { id: "p03", name: "After Effects",      category: "Editing",     image: "images/aftereffects.jpg",      priceInr: 149, oldPriceInr: 1999, shortDescription: "GPT-4 access at a fraction of cost", features: ["GPT-4 access", "Faster responses", "Priority access"], popular: true },
  { id: "p04", name: "LightRoom Pro",      category: "Editing",       image: "images/lightroom.jpg",        priceInr: 99, oldPriceInr: 199,  shortDescription: "Design like a pro",                  features: ["Premium templates", "Background remover", "Brand kit"], badge: "Limited Time" },
  { id: "p05", name: "BMW Car Raw Video Clips",       category: "Design",    image: "images/bmw.jpg",      priceInr: 99, oldPriceInr: 149,  shortDescription: "Unlimited entertainment",            features: ["4K Ultra HD", "Multiple screens", "Ad-free"] },
  { id: "p06", name: "1500+ Motion Graphic Packs",     category: "Design",       image: "images/motion.jpg",        priceInr: 99, oldPriceInr: 149, shortDescription: "The ultimate creator toolkit",       features: ["All CC apps", "Cloud storage", "Latest updates"], popular: true },
  { id: "p07", name: "Unlimited 50 GB Editing Pack",            category: "Design",      image: "images/50 gb.jpg",          priceInr: 199, oldPriceInr: 299,  shortDescription: "Secure and private browsing",        features: ["No logs policy", "High-speed servers", "Global locations"] },
  { id: "p08", name: "Premium Assets",    category: "Design",      image: "images/premium.jpg",     priceInr: 99, oldPriceInr: 149,  shortDescription: "Supercharge your messaging",         features: ["4GB uploads", "Faster downloads", "Exclusive stickers"], badge: "Bonus Ends Soon" },
  { id: "p09", name: "SFX Premium Sound Effect Bundle",     category: "Design", image: "images/SFX.jpg",       priceInr: 99, oldPriceInr: 149, shortDescription: "Organize your life and work",        features: ["50+ templates", "Habit trackers", "Finance dashboards"] },
  { id: "p10", name: "10 high Quality Broken Glass Texture",        category: "Design",       image: "images/broken.jpg",        priceInr: 59, oldPriceInr: 99, shortDescription: "Design resources for pros",          features: ["Huge UI kit", "Custom icons", "Auto-layout components"] },
  { id: "p11", name: "Gaming Video Editing Materials",    category: "Design",    image: "images/gaming.jpg",      priceInr: 99, oldPriceInr: 149,  shortDescription: "Ad-free videos & music",             features: ["Ad-free viewing", "Background play", "YouTube Music included"], popular: true },
  { id: "p12", name: "60+ Memes Packs",      category: "Productivity", image: "images/meme.jpg", priceInr: 59, oldPriceInr: 119, shortDescription: "Office tools for productivity",      features: ["All Office apps", "1TB OneDrive", "Latest versions"] },
  { id: "p13", name: "6000+ IPL Reels Bundle",        category: "Productivity", image: "images/ipl.jpg",    priceInr: 119, oldPriceInr: 169, shortDescription: "Write with confidence",              features: ["Plagiarism checker", "Advanced corrections", "Tone adjustments"], badge: "Instant Delivery" },
  { id: "p14", name: "1200+ Meme Pack Reels Bundle",     category: "Productivity",    image: "images/meme2.jpg",     priceInr: 119, oldPriceInr: 169, shortDescription: "Learn from top universities",        features: ["Unlimited courses", "Pro certificates", "Self-paced"] },
  { id: "p15", name: "20 GB Editing Pack",         category: "Design", image: "images/20gb.jpg",     priceInr: 149, oldPriceInr: 119, shortDescription: "Boost your career",                  features: ["InMail credits", "Profile insights", "LinkedIn Learning"] },
  { id: "p16", name: "Motion Graphics Pack",           category: "Design",    image: "images/motion2.jpg",       priceInr: 99, oldPriceInr: 149, shortDescription: "Magic at your fingertips",           features: ["Exclusive originals", "4K UHD", "Ad-free"] },
  { id: "p17", name: "PNG Pack",         category: "Design",    image: "images/png.jpg",        priceInr: 99, oldPriceInr: 149, shortDescription: "Exclusive shows and movies",         features: ["Amazon Originals", "X-Ray features", "Offline viewing"] },
  { id: "p18", name: "SOON",          category: "Design",    image: "images/soon.jpg",      priceInr: 1, oldPriceInr: 2, shortDescription: "-",       features: ["Live sports", "4K resolution", "Ad-free"] },
  { id: "p19", name: "SOON",       category: "Productivity",      image: "images/soon.jpg",       priceInr: 1, oldPriceInr: 2,  shortDescription: "-",           features: ["See who likes you", "Unlimited likes", "5 Super Likes/week"] },
  { id: "p20", name: "SOON",           category: "Design",    image: "images/soon.jpg",     priceInr: 1, oldPriceInr: 2,  shortDescription: "-",             features: ["No ads", "Unlimited hearts", "Personalized practice"] },
  { id: "p21", name: "SOON",             category: "Productivity",    image: "images/soon.jpg",      priceInr: 1, oldPriceInr: 2,  shortDescription: "-",            features: ["Unlimited listening", "Exclusive originals", "Offline access"] },
  { id: "p22", name: "SOON",      category: "Design",    image: "images/soon.jpg",  priceInr: 1, oldPriceInr: 2,  shortDescription: "-",          features: ["Ad-free viewing", "New episodes fast", "Offline viewing"] },
  { id: "p23", name: "SOON",         category: "Productivity", image: "images/soon.jpg",     priceInr: 1, oldPriceInr: 2,  shortDescription: "-",              features: ["Unlimited words", "Advanced modes", "Plagiarism checker"] },
  { id: "p24", name: "SOON",     category: "Design",       image: "images/soon.jpg",       priceInr: 1, oldPriceInr: 2, shortDescription: "-",          features: ["Unlimited downloads", "Commercial license", "Millions of assets"] },
];

/* ============== Pricing Plans (Edit Here) ============== */
const PLANS = [
  { id: "p01",name: "Basic Pack", price: 99, tag: "Perfect to get started", features: ["CapCut Pro", "Setup Guide", "20GB Editing Pack", "Setup Support", "Free Telegram"] },
  { id: "p02", name: "Pro Pack",   price: 199, tag: "For Serious Creators",   features: ["50GB Editing Pack", "Include Basic Plan Benefits", "LightRoom Pro", "6000+ IPL Reels Bundle", "VIP Telegram access"] , featured: true, badge: "Most Popular" },
  { id: "p03", name: "Mega Bundle", price: 499, tag: "Best value for creators", features: ["All 17 Products", "Future Product Updates", "Priority support", "Includes Starter & Pro Pack Benefits", "No monthly fees", "Best Deal for Serious Creators", "VIP Telegram access"], },
];
/* ============== Why Buy From Us (Edit Here) ============== */
const WHY_US = [
  { icon: "zap",   title: "Instant Delivery", desc: "Delivered to your inbox within minutes of payment." },
  { icon: "shield",title: "Safe & Secure",    desc: "UPI transactions encrypted and verified manually." },
  { icon: "users", title: "Trusted",          desc: "10,000+ happy creators across India." },
  { icon: "tag",   title: "Affordable",       desc: "Unbeatable prices on premium tools." },
  { icon: "headset",title:"24/7 Support",    desc: "Always available on WhatsApp & Telegram." },
  { icon: "globe", title: "Works in India",   desc: "No VPN, no ban risk, runs natively." },
  { icon: "book",  title: "Beginner Friendly",desc: "Step-by-step guides included with every order." },
  { icon: "gem",   title: "Premium Quality",  desc: "Verified accounts and clean, malware-free files." }
];

/* ============== FAQs (Edit Here) ============== */
const FAQS = [
  { q: "How fast is delivery after payment?", a: "Most orders are delivered within 5-10 minutes via email or WhatsApp after payment verification." },
  { q: "Are these products beginner friendly?", a: "Yes — every order comes with simple, step-by-step instructions you can follow even if you're new." },
  { q: "Is it safe to use?", a: "Absolutely. All files are scanned, verified, and free from malware. Accounts are clean and ready to use." },
  { q: "Do I need a VPN?", a: "Most products do not require a VPN. If a VPN is needed for a specific product, we mention it clearly." },
  { q: "What kind of support do you provide?", a: "Lifetime support via Telegram and WhatsApp. We're available 24/7 to help with any issue." },
  { q: "How will I receive my product?", a: "You'll get login credentials, download links, or activation files via email or WhatsApp." }
];

/* ====================================================================
   ICON LIBRARY (inline SVG, no external dependency)
   ==================================================================== */
const ICONS = {
  zap:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  shield: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  users:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  tag:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  headset:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z"/></svg>`,
  globe:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  book:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  gem:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 18 3 22 9 12 22 2 9 6 3"/><line x1="11" y1="3" x2="8" y2="9"/><line x1="13" y1="3" x2="16" y2="9"/><line x1="2" y1="9" x2="22" y2="9"/></svg>`,
  check:  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  chev:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  close:  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  whatsapp:`<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0c3.181.001 6.167 1.24 8.413 3.488a11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>`,
  telegram:`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.464.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
  instagram:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  refresh:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
  logout: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  rupee:  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3a4 4 0 0 0 0-8"/></svg>`,
  bag:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  card:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
  user:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  lock:   `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  eye:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
  upload: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  successCheck:`<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  menu:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  bolt:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  spark:  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`
};

/* ====================================================================
   UTILITIES
   ==================================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const fmtINR = (n) => "₹" + Number(n).toLocaleString("en-IN");
const ORDERS_KEY = "dp_orders_v1";

function getOrders() {
  try { return JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]"); } catch { return []; }
}
function saveOrders(list) {
  try { localStorage.setItem(ORDERS_KEY, JSON.stringify(list)); } catch (e) { console.warn(e); }
}
function pushOrder(order) {
  const list = getOrders();
  list.unshift(order);
  saveOrders(list);
}
function getBonusFor(productId) {

if(productId === "p01"){
return {name:"Motion Graphics Pack"};
}

if(productId === "p02"){
return {name:"--"};
}

if(productId === "p03"){
return {name:"1500+ Motion Graphics Pack"};
}
if(productId === "p04"){
return {name:"PNG Pack"};
}
if(productId === "p05"){
return {name:"--"};
}
if(productId === "p06"){
return {name:"--"};
}
if(productId === "p07"){
return {name:"--"};
}
if(productId === "p08"){
return {name:"--"};
}
if(productId === "p09"){
return {name:"--"};
}
if(productId === "p10"){
return {name:"--"};
}
if(productId === "p011"){
return {name:"--"};
}
if(productId === "p12"){
return {name:"--"};
}
if(productId === "p13"){
return {name:"--"};
}
if(productId === "p14"){
return {name:"--"};
}
if(productId === "p15"){
return {name:"--"};
}
if(productId === "p16"){
return {name:"--"};
}
if(productId === "p17"){
return {name:"--"};
}
}

function showToast(msg, type = "info") {
  let t = $("#toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = "toast show " + (type === "error" ? "error" : "");
  setTimeout(() => t.classList.remove("show"), 2400);
}

/* ====================================================================
   INDEX PAGE: render all sections
   ==================================================================== */
function renderHome() {
  if (!$("#products-grid")) return;

  // Pricing plans
  $("#pricing-grid").innerHTML = PLANS.map((p) => `
    <div class="plan ${p.featured ? "featured" : ""}">
      ${p.badge ? `<div class="plan-badge">${p.badge}</div>` : ""}
      <h3>${p.name}</h3>
      <div class="plan-tag">${p.tag}</div>
      <div class="price">${fmtINR(p.price)}<small>one-time</small></div>
      <ul>
        ${p.features.map((f) => `<li>${ICONS.check}<span>${f}</span></li>`).join("")}
      </ul>
      <button class="btn btn-primary btn-block" onclick="openCheckout('${p.id
      }')">Choose Plan</button>
      </div>
  `).join("");

  // Categories chips
  const categories = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];
  $("#product-filters").innerHTML = categories.map((c, i) =>
    `<button class="chip ${i === 0 ? "active" : ""}" data-cat="${c}">${c}</button>`
  ).join("");

  renderProducts("All");

  $$("#product-filters .chip").forEach((btn) =>
    btn.addEventListener("click", () => {
      $$("#product-filters .chip").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(btn.dataset.cat);
    })
  );

  // Why us
  $("#why-grid").innerHTML = WHY_US.map((w) => `
    <div class="why-card">
      <div class="icon">${ICONS[w.icon] || ICONS.zap}</div>
      <h4>${w.title}</h4>
      <p>${w.desc}</p>
    </div>
  `).join("");

  // FAQ
  $("#faq-wrap").innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" data-idx="${i}">
      <button class="faq-q" aria-expanded="false">
        <span>${f.q}</span>
        <span class="chev">${ICONS.chev}</span>
      </button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>
  `).join("");
  $$("#faq-wrap .faq-item").forEach((item) => {
    item.querySelector(".faq-q").addEventListener("click", () => item.classList.toggle("open"));
  });

  // Reveal-on-scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((el) => io.observe(el));
}

function renderProducts(filter) {
  const list = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);
  $("#products-grid").innerHTML = list.map((p) => {
    const bonus = getBonusFor(p.id);
    return `
      <div class="product-card reveal">
        <div class="product-thumb">
          ${p.popular ? `<span class="pop">Popular</span>` : ""}
          ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
          <img src="${p.image}" alt="${p.name}" onerror="this.outerHTML='<span class=\\'placeholder\\'>${(p.name[0] || 'D').toUpperCase()}</span>'">
        </div>
        <div class="product-body">
          <span class="product-cat">${p.category}</span>
          <div class="product-title">${p.name}</div>
          <div class="product-desc">${p.shortDescription}</div>
          ${bonus ? `<div class="bonus">${ICONS.spark} FREE Bonus: <strong>${bonus.name}</strong></div>` : ""}
          <div class="product-price-row">
            <div>
              <span class="price-now">${fmtINR(p.priceInr)}</span>
              <span class="price-old" style="margin-left:6px;">${fmtINR(p.oldPriceInr)}</span>
            </div>
          </div>
          <button class="btn btn-primary" data-buy="${p.id}">Buy Now</button>
        </div>
      </div>
    `;
  }).join("");

  $$("#products-grid [data-buy]").forEach((b) =>
    b.addEventListener("click", () => openCheckout(b.dataset.buy))
  );

  // Re-observe newly inserted reveal elements
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
  }, { threshold: 0.12 });
  $$("#products-grid .reveal").forEach((el) => io.observe(el));
}

/* ====================================================================
   CHECKOUT FLOW
   ==================================================================== */
const checkoutState = {
  step: 1,
  productId: null,
  customer: { fullName: "", email: "", phone: "", country: "India", acceptedTerms: false, acceptedPrivacy: false },
  payment: { utr: "", txnId: "", method: "UPI", screenshot: null },
  orderId: null,
};

function openCheckout(productId) {
  checkoutState.step = 1;
  checkoutState.productId = productId;
  checkoutState.payment = { utr: "", txnId: "", method: "UPI", screenshot: null };
  checkoutState.orderId = null;
  $("#checkout-modal").classList.add("open");
  document.body.style.overflow = "hidden";
  renderCheckoutStep();
}
function closeCheckout() {
  $("#checkout-modal").classList.remove("open");
  document.body.style.overflow = "";
}
function renderCheckoutStep() {
  const product =
PLANS.find((p) => p.id === checkoutState.productId) ||
PRODUCTS.find((p) => p.id === checkoutState.productId);
  if (!product) return;
  const bonus = getBonusFor(product.id);

  // Steps indicator
  const steps = ["Details", "Summary", "Payment", "Done"];
  const stepBar = steps.map((_, i) => `<div class="step-dot ${i < checkoutState.step ? "active" : ""}"></div>`).join("");
  const stepLabel = steps[checkoutState.step - 1] || "";

  let body = "";
  let footer = "";

  if (checkoutState.step === 1) {
    body = `
      <div class="field">
        <label>Full Name</label>
        <input class="input" id="cf-name" placeholder="Your full name" value="${checkoutState.customer.fullName}" />
      </div>
      <div class="field">
        <label>Email</label>
        <input class="input" id="cf-email" type="email" placeholder="you@example.com" value="${checkoutState.customer.email}" />
      </div>
      <div class="field">
        <label>Phone (with country code)</label>
        <input class="input" id="cf-phone" inputmode="tel" placeholder="9876543210" value="${checkoutState.customer.phone}" />
      </div>
      <div class="field">
        <label>Country</label>
        <input class="input" id="cf-country" placeholder="India" value="${checkoutState.customer.country}" />
      </div>
      <label class="checkbox-row">
        <input type="checkbox" id="cf-terms" ${checkoutState.customer.acceptedTerms ? "checked" : ""} />
        <span>I agree to the <a href="terms-of-service.html" target="_blank">Terms of Service</a>.</span>
      </label>
      <label class="checkbox-row">
        <input type="checkbox" id="cf-privacy" ${checkoutState.customer.acceptedPrivacy ? "checked" : ""} />
        <span>I have read and accept the <a href="privacy-policy.html" target="_blank">Privacy Policy</a>.</span>
      </label>
    `;
    footer = `
      <button class="btn btn-ghost" onclick="closeCheckout()">Cancel</button>
      <button class="btn btn-primary" id="step1-next">Continue</button>
    `;
  } else if (checkoutState.step === 2) {
    body = `
      <div class="summary-row"><span class="lbl">Customer</span><span class="val">${checkoutState.customer.fullName}</span></div>
      <div class="summary-row"><span class="lbl">Email</span><span class="val">${checkoutState.customer.email}</span></div>
      <div class="summary-row"><span class="lbl">Phone</span><span class="val">${checkoutState.customer.phone}</span></div>
      <div class="summary-row"><span class="lbl">Country</span><span class="val">${checkoutState.customer.country}</span></div>
      <div class="summary-row"><span class="lbl">Product</span><span class="val">${product.name}</span></div>
      ${bonus ? `<div class="bonus-card">${ICONS.spark} Free Rewards & Upcoming Coupon Code in VIP Telegram <strong>${bonus.name}</strong></div>` : ""}
      <div class="summary-total"><span>Total</span><span>${fmtINR(product.price || product.priceInr)}
    `;
    footer = `
      <button class="btn btn-outline" onclick="checkoutState.step=1; renderCheckoutStep();">Back</button>
      <button class="btn btn-primary" onclick="checkoutState.step=3; renderCheckoutStep();">Continue to Payment</button>
    `;
  } else if (checkoutState.step === 3) {
    const upiUrl = `upi://pay?pa=${encodeURIComponent(SITE_CONFIG.upiId)}&pn=${encodeURIComponent(SITE_CONFIG.upiPayeeName)}&am=${product.priceInr}&cu=INR&tn=${encodeURIComponent("Order " + product.name)}`;
    const qrUrl = `images/qrcode/qrcode.png`;
    body = `
      <div class="qr-wrap"><img src="${qrUrl}" alt="UPI QR Code" /></div>
      <div class="upi-id">UPI ID: <strong>${SITE_CONFIG.upiId}</strong> · Amount: <strong>${fmtINR(product.price || product.priceInr)}</strong></div>
      <div class="field">
        <label>Payment App</label>
        <select class="select" id="pf-method">
          ${["UPI", "PhonePe", "GPay", "Paytm"].map((m) => `<option ${checkoutState.payment.method === m ? "selected" : ""}>${m}</option>`).join("")}
        </select>
      </div>
      <div class="field">
        <label>UTR Number *</label>
        <input class="input" id="pf-utr" placeholder="12-digit UTR / Reference number" value="${checkoutState.payment.utr}" />
      </div>
      <div class="field">
        <label>Transaction ID (optional)</label>
        <input class="input" id="pf-txn" placeholder="From your payment app" value="${checkoutState.payment.txnId}" />
      </div>
      <div class="field">
        <label>Payment Screenshot (max 2 MB)</label>
        <label class="upload-box" for="pf-screenshot">
          ${ICONS.upload}
          <div style="margin-top:6px;font-weight:600;">Click to upload screenshot</div>
          <small>PNG or JPG · We'll verify your payment</small>
        </label>
        <input id="pf-screenshot" type="file" accept="image/png,image/jpeg" style="display:none" />
        <div id="pf-preview"></div>
      </div>
    `;
    footer = `
      <button class="btn btn-outline" onclick="checkoutState.step=2; renderCheckoutStep();">Back</button>
      <button class="btn btn-primary" id="step3-submit">Submit Order</button>
    `;
  } else if (checkoutState.step === 4) {
    const order = checkoutState.orderId;
    body = `
      <div class="success-wrap">
        <div class="success-icon">${ICONS.successCheck}</div>
        <h3>Order Submitted!</h3>
        <p>Order #${order} received. We'll verify your payment and deliver your product on WhatsApp / email within 5–30 minutes.</p>
        <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
          <a class="btn btn-primary" href="${waLink('Hi! I just placed order #' + order + ' for ' + product.name + '. Please verify.')}" target="_blank" rel="noopener">Notify on WhatsApp</a>
          <a class="btn btn-outline" href="${SITE_CONFIG.telegramUrl}" target="_blank" rel="noopener">Join Telegram</a>
        </div>
      </div>
    `;
    footer = `<button class="btn btn-ghost btn-block" onclick="closeCheckout()">Close</button>`;
  }

  $("#checkout-modal").innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h3>${checkoutState.step < 4 ? "Checkout · " + product.name : "Thank you!"}</h3>
        <button class="close" onclick="closeCheckout()">${ICONS.close}</button>
      </div>
      <div class="steps">${stepBar}</div>
      <div class="step-label">Step ${checkoutState.step} of 4 · ${stepLabel}</div>
      <div class="modal-body">${body}</div>
      <div class="modal-footer">${footer}</div>
    </div>
  `;

  // Wire step actions
  if (checkoutState.step === 1) {
    $("#step1-next").addEventListener("click", () => {
      const c = {
        fullName: $("#cf-name").value.trim(),
        email: $("#cf-email").value.trim(),
        phone: $("#cf-phone").value.trim(),
        country: $("#cf-country").value.trim() || "India",
        acceptedTerms: $("#cf-terms").checked,
        acceptedPrivacy: $("#cf-privacy").checked,
      };
      if (!c.fullName || !c.email || !c.phone) return showToast("Please fill in all required fields.", "error");
      if (!/^\S+@\S+\.\S+$/.test(c.email)) return showToast("Please enter a valid email.", "error");
      if (!c.acceptedTerms || !c.acceptedPrivacy) return showToast("Please accept Terms and Privacy Policy.", "error");
      checkoutState.customer = c;
      checkoutState.step = 2;
      renderCheckoutStep();
    });
  }
  if (checkoutState.step === 3) {
    $("#pf-screenshot").addEventListener("change", (e) => {
      const f = e.target.files?.[0];
      if (!f) return;
      if (f.size > 2 * 1024 * 1024) return showToast("Image too large (max 2 MB).", "error");
      const reader = new FileReader();
      reader.onload = () => {
        checkoutState.payment.screenshot = reader.result;
        $("#pf-preview").innerHTML = `<div class="upload-preview"><img src="${reader.result}" alt="Payment screenshot"/></div>`;
      };
      reader.readAsDataURL(f);
    });
    $("#step3-submit").addEventListener("click", () => {
      const utr = $("#pf-utr").value.trim();
      if (!utr) return showToast("Please enter your UTR number.", "error");
      checkoutState.payment.utr = utr;
      checkoutState.payment.txnId = $("#pf-txn").value.trim();
      checkoutState.payment.method = $("#pf-method").value;

      // Save order to localStorage so admin can view
  fetch(`${SUPABASE_URL}/rest/v1/orders`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "apikey": SUPABASE_KEY,
    "Authorization": 'Bearer ${SUPABASE_KEY}',
    "Prefer": "return=representation"
  },
  body: JSON.stringify({
    customer_name: checkoutState.customer.fullName,
    email: checkoutState.customer.email,
    phone: checkoutState.customer.phone,
    product: product.name,
    amount: product.price || product.priceInr,
    utr: checkoutState.payment.utr,
    status: "Pending"
  })
})
.then(res => res.json())
.then(data => {
  checkoutState.orderId = "DP-" + Date.now();
  checkoutState.step = 4;
  renderCheckoutStep();
})
.catch(err => {
  showToast("Order failed. Try again.", "error");
  console.log(err);
});
    });
  }
}

function waLink(message) {
  const text = encodeURIComponent(message || SITE_CONFIG.whatsappMessage);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
}

/* ====================================================================
   NAVBAR + FAB common to all pages
   ==================================================================== */
function injectChrome() {
  // Floating WhatsApp on every page
  if (!$(".fab-whatsapp")) {
    const a = document.createElement("a");
    a.href = waLink();
    a.className = "fab-whatsapp";
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", "Chat on WhatsApp");
    a.innerHTML = ICONS.whatsapp;
    document.body.appendChild(a);
  }

  // Inject icons inside navbar/footer placeholders
  const ph = (id, icon) => { const el = document.getElementById(id); if (el) el.innerHTML = icon; };
  ph("nav-logo-icon", ICONS.bolt);
  ph("ic-telegram", ICONS.telegram);
  ph("ic-whatsapp", ICONS.whatsapp.replace('width="28" height="28"', 'width="18" height="18"'));
  ph("ic-instagram", ICONS.instagram);
  ph("menu-icon", ICONS.menu);

  // Mobile menu toggle
  const toggle = $(".menu-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => $("#mobile-menu").classList.toggle("open"));
    $$("#mobile-menu a").forEach((a) =>
      a.addEventListener("click", () => $("#mobile-menu").classList.remove("open"))
    );
  }

  // Set telegram + whatsapp links from config
  $$("[data-link='telegram']").forEach((el) => el.setAttribute("href", SITE_CONFIG.telegramUrl));
  $$("[data-link='whatsapp']").forEach((el) => el.setAttribute("href", waLink()));
  $$("[data-text='year']").forEach((el) => (el.textContent = new Date().getFullYear()));
}

/* ====================================================================
   ADMIN PAGE
   ==================================================================== */
const ADMIN_AUTH_KEY = "dp_admin_auth_v1";

function isAdminAuthed() {
  try { return sessionStorage.getItem(ADMIN_AUTH_KEY) === "1"; } catch { return false; }
}
function setAdminAuthed(v) {
  try { v ? sessionStorage.setItem(ADMIN_AUTH_KEY, "1") : sessionStorage.removeItem(ADMIN_AUTH_KEY); } catch {}
}

function renderAdmin() {
  const root = $("#admin-root");
  if (!root) return;
  if (!isAdminAuthed()) return renderAdminLogin(root);
  renderAdminDashboard(root);
}

function renderAdminLogin(root) {
  root.innerHTML = `
    <div class="admin-login">
      <div class="login-card">
        <div class="lock">${ICONS.lock}</div>
        <h1>Admin Access</h1>
        <p>Enter your admin password to view orders.</p>
        <form id="login-form">
          <div class="field" style="text-align:left;">
            <label>Password</label>
            <div style="position:relative;">
              <input id="pw" class="input" type="password" autocomplete="current-password" placeholder="••••••••" autofocus />
              <button type="button" id="toggle-pw" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);padding:6px;border-radius:8px;color:var(--muted);">
                ${ICONS.eye}
              </button>
            </div>
            <div id="pw-error" class="error-msg" style="display:none;"></div>
          </div>
          <button class="btn btn-primary btn-block btn-lg" type="submit">Sign In</button>
        </form>
        <div class="footnote">Secure admin area · Authorized personnel only</div>
      </div>
    </div>
  `;
  let visible = false;
  $("#toggle-pw").addEventListener("click", () => {
    visible = !visible;
    $("#pw").type = visible ? "text" : "password";
    $("#toggle-pw").innerHTML = visible ? ICONS.eyeOff : ICONS.eye;
  });
  $("#login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const pw = $("#pw").value;
    if (pw === SITE_CONFIG.adminPassword) {
      setAdminAuthed(true);
      renderAdmin();
    } else {
      const err = $("#pw-error");
      err.style.display = "block";
      err.textContent = "Incorrect password. Please try again.";
    }
  });
}

function renderAdminDashboard(root) {
  const orders = getOrders();
  const totalRevenue = orders.filter((o) => o.status === "paid" || o.status === "delivered")
    .reduce((s, o) => s + (o.product?.priceInr || 0), 0);
  const totalOrders = orders.filter((o) => o.payment?.utr).length;
  const totalLeads = orders.length;
  const productCounts = {};
  orders.forEach((o) => { productCounts[o.product?.name] = (productCounts[o.product?.name] || 0) + 1; });
  const topProduct = Object.entries(productCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";

  root.innerHTML = `
    <div class="admin-shell">
      <div class="admin-header">
        <div>
          <h1>Admin Dashboard</h1>
          <div style="color:var(--muted);font-size:13px;">Manage your orders and customers</div>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="btn btn-outline" id="refresh-btn">${ICONS.refresh} Refresh</button>
          <a class="btn btn-outline" href="index.html">View Site</a>
          <button class="btn btn-ghost" id="logout-btn">${ICONS.logout} Sign out</button>
        </div>
      </div>

      <div class="admin-stats">
        <div class="stat-card"><div class="icon">${ICONS.rupee}</div><div class="lbl">Total Revenue</div><div class="val">${fmtINR(totalRevenue)}</div></div>
        <div class="stat-card"><div class="icon">${ICONS.card}</div><div class="lbl">Total Orders</div><div class="val">${totalOrders}</div></div>
        <div class="stat-card"><div class="icon">${ICONS.user}</div><div class="lbl">Total Leads</div><div class="val">${totalLeads}</div></div>
        <div class="stat-card"><div class="icon">${ICONS.bag}</div><div class="lbl">Top Product</div><div class="val" style="font-size:18px;">${topProduct}</div></div>
      </div>

      <div class="admin-toolbar">
        <input class="input" id="search-input" placeholder="Search by name, email, phone, product, UTR..." />
        <select class="select" id="filter-status" style="max-width:200px;">
          <option value="all">All statuses</option>
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
          <option value="delivered">Delivered</option>
        </select>
        <button class="btn btn-outline" id="export-btn">Export CSV</button>
        <button class="btn btn-ghost" id="clear-btn" style="color:#f87171;">Clear All</button>
      </div>

      <div class="table-wrap">
        <div id="orders-table-wrap"></div>
      </div>
    </div>
  `;

  const renderTable = () => {
    const q = $("#search-input").value.trim().toLowerCase();
    const status = $("#filter-status").value;
    const filtered = orders.filter((o) => {
      if (status !== "all" && o.status !== status) return false;
      if (!q) return true;
      const blob = [
        o.customer?.fullName, o.customer?.email, o.customer?.phone,
        o.product?.name, o.payment?.utr, o.payment?.txnId, o.id,
      ].filter(Boolean).join(" ").toLowerCase();
      return blob.includes(q);
    });

    if (filtered.length === 0) {
      $("#orders-table-wrap").innerHTML = `<div class="empty-state">No orders yet. Place a test order from the site to see it appear here.</div>`;
      return;
    }

    $("#orders-table-wrap").innerHTML = `
      <table class="orders-table">
        <thead>
          <tr>
            <th>S.No</th><th>Customer</th><th>Product</th><th>Amount</th>
            <th>Payment Info</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${filtered.map((o, i) => `
            <tr>
              <td>#${filtered.length - i}<br><small style="color:var(--muted);">${o.id}</small></td>
              <td>
                <strong>${o.customer?.fullName || "—"}</strong><br>
                <small style="color:var(--muted);">${o.customer?.email || ""}</small><br>
                <small style="color:var(--muted);">${o.customer?.phone || ""} · ${o.customer?.country || ""}</small>
              </td>
              <td>
                ${o.product?.name || "—"}
                ${o.bonus ? `<br><small style="color:var(--gold);">+ ${o.bonus.name} (Bonus)</small>` : ""}
              </td>
              <td><strong>${fmtINR(o.product?.priceInr || 0)}</strong></td>
              <td>
                <small><strong>${o.payment?.method || "—"}</strong></small><br>
                <small style="color:var(--muted);">UTR: ${o.payment?.utr || "—"}</small><br>
                <small style="color:var(--muted);">TXN: ${o.payment?.txnId || "—"}</small><br>
                <small style="color:var(--muted);">${new Date(o.createdAt).toLocaleString()}</small>
              </td>
              <td><span class="status-badge status-${o.status}">${o.status}</span></td>
              <td>
                <div class="action-cell">
                  ${o.payment?.screenshot ? `<button data-view="${o.id}">View</button>` : ""}
                  <button data-status="${o.id}" data-set="paid">Paid</button>
                  <button data-status="${o.id}" data-set="delivered">Delivered</button>
                  <button data-status="${o.id}" data-set="pending">Pending</button>
                  <button data-delete="${o.id}" style="color:#f87171;">Delete</button>
                </div>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;

    $$("[data-view]").forEach((b) =>
      b.addEventListener("click", () => {
        const o = orders.find((x) => x.id === b.dataset.view);
        if (!o?.payment?.screenshot) return;
        const win = window.open();
        if (win) win.document.write(`<title>Screenshot ${o.id}</title><body style="margin:0;background:#000;display:grid;place-items:center;min-height:100vh;"><img src="${o.payment.screenshot}" style="max-width:100%;max-height:100vh;"/></body>`);
      })
    );
    $$("[data-status]").forEach((b) =>
      b.addEventListener("click", () => {
        const o = orders.find((x) => x.id === b.dataset.status);
        if (!o) return;
        o.status = b.dataset.set;
        saveOrders(orders);
        showToast("Status updated to " + o.status);
        renderAdminDashboard(root);
      })
    );
    $$("[data-delete]").forEach((b) =>
      b.addEventListener("click", () => {
        if (!confirm("Delete this order?")) return;
        const i = orders.findIndex((x) => x.id === b.dataset.delete);
        if (i >= 0) {
          orders.splice(i, 1);
          saveOrders(orders);
          renderAdminDashboard(root);
        }
      })
    );
  };

  renderTable();
  $("#search-input").addEventListener("input", renderTable);
  $("#filter-status").addEventListener("change", renderTable);
  $("#refresh-btn").addEventListener("click", () => renderAdminDashboard(root));
  $("#logout-btn").addEventListener("click", () => { setAdminAuthed(false); renderAdmin(); });
  $("#clear-btn").addEventListener("click", () => {
    if (confirm("Delete ALL orders permanently?")) { saveOrders([]); renderAdminDashboard(root); }
  });
  $("#export-btn").addEventListener("click", () => {
    if (orders.length === 0) return showToast("No orders to export.", "error");
    const headers = ["Order ID", "Date", "Name", "Email", "Phone", "Country", "Product", "Bonus", "Amount", "Method", "UTR", "TXN", "Status"];
    const rows = orders.map((o) => [
      o.id,
      new Date(o.createdAt).toISOString(),
      o.customer?.fullName, o.customer?.email, o.customer?.phone, o.customer?.country,
      o.product?.name, o.bonus?.name || "",
      o.product?.priceInr,
      o.payment?.method, o.payment?.utr, o.payment?.txnId, o.status,
    ]);
    const csv = [headers, ...rows].map((r) => r.map((v) => `"${String(v ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "orders.csv"; a.click();
    URL.revokeObjectURL(url);
  });
}

/* ====================================================================
   BOOTSTRAP
   ==================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  injectChrome();
  renderHome();
  renderAdmin();
});
