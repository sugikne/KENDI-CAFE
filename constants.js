
import { Category } from './types.js';

export const NAV_LINKS = [
  { label: { EN: 'Menu', ID: 'Menu' }, href: '#menu' },
  { label: { EN: 'Our Story', ID: 'Cerita Kami' }, href: '#story' },
  { label: { EN: 'Smoothie Bowls', ID: 'Smoothie Bowl' }, href: '#smoothie' },
  { label: { EN: 'Locations', ID: 'Lokasi' }, href: '#location' },
];

export const MAP_LINK = 'https://maps.app.goo.gl/uyb7UMFCYiCPeMBFA';
export const WHATSAPP_LINK = 'https://wa.me/6285333049716';

export const CATEGORY_LABELS = {
  [Category.BREAKFAST]: { EN: 'All Day Breakfast', ID: 'Sarapan Sepanjang Hari' },
  [Category.HEALTHY]: { EN: 'Healthy Breakfast', ID: 'Sarapan Sehat' },
  [Category.TOASTS]: { EN: 'Toasts', ID: 'Roti Bakar' },
  [Category.PANCAKES]: { EN: 'Pancakes', ID: 'Panekuk' },
  [Category.SMOOTHIE]: { EN: 'Smoothie Bowls', ID: 'Smoothie Bowl' },
  [Category.GRAINS]: { EN: 'Grains', ID: 'Biji-bijian' },
  [Category.DRINKS]: { EN: 'Minuman', ID: 'Minuman' },
};

export const TRANSLATIONS = {
  hero: {
    badge: { EN: 'Locally Sourced Organic', ID: 'Organik Lokal Alami' },
    title: { EN: 'Breakfast for the Soul, All Day Long.', ID: 'Sarapan untuk Jiwa, Sepanjang Hari.' },
    desc: { EN: 'Experience a sanctuary of healthy, organic, and locally sourced food served in a warm, minimalist atmosphere.', ID: 'Rasakan tempat perlindungan makanan sehat, organik, dan lokal yang disajikan dalam suasana hangat dan minimalis.' },
    order: { EN: 'Order Online', ID: 'Pesan Online' },
    gallery: { EN: 'View Gallery', ID: 'Lihat Galeri' }
  },
  philosophy: {
    title: { EN: 'Our Philosophy', ID: 'Filosofi Kami' },
    quote: { EN: '"We believe in the power of real food. Every dish at Kendi is crafted with organic, local ingredients to nourish your body and soul."', ID: '"Kami percaya pada kekuatan makanan asli. Setiap hidangan di Kendi dibuat dengan bahan organik lokal untuk menyehatkan tubuh dan jiwa Anda."' },
    chef: { EN: 'Organic Chef', ID: 'Koki Organik' },
    harvest: { EN: 'Daily Harvest', ID: 'Panen Harian' },
    love: { EN: 'With Love', ID: 'Dengan Cinta' }
  },
  smoothie: {
    title: { EN: 'The Smoothie Bowl Art', ID: 'Seni Smoothie Bowl' },
    desc: { EN: "Our signature bowls are more than just breakfast—they're a nutrient-dense experience. Blended with raw acai and homemade hemp milk.", ID: 'Bowl khas kami lebih dari sekadar sarapan—ini adalah pengalaman padat nutrisi. Campuran acai murni dan susu rami buatan sendiri.' },
    feat1: { EN: 'No added sugars or preservatives', ID: 'Tanpa tambahan gula atau pengawet' },
    feat2: { EN: 'Topped with activated grain granola', ID: 'Ditaburi granola biji-bijian aktif' },
    feat3: { EN: 'Seasonal fresh tropical fruits', ID: 'Buah tropis segar musiman' },
    cta: { EN: 'Explore All Bowls', ID: 'Jelajahi Semua Bowl' }
  },
  menu: {
    title: { EN: 'The Menu', ID: 'Daftar Menu' },
    desc: { EN: 'Curated nourishment for the modern urban dweller.', ID: 'Nutrisi pilihan untuk penduduk kota modern.' },
    pdf: { EN: 'Download Full Menu (PDF)', ID: 'Unduh Menu Lengkap (PDF)' },
    all: { EN: 'All', ID: 'Semua' }
  },
  visit: {
    badge: { EN: 'Our Sanctuary', ID: 'Tempat Kami' },
    title: { EN: 'Visit us for your daily ritual.', ID: 'Kunjungi kami untuk ritual harian Anda.' },
    address: { EN: '42 Organic Street, Wellness Quarter, LA', ID: 'Jl. Organik No. 42, Distrik Kesehatan, LA' },
    monFri: { EN: 'Mon - Fri', ID: 'Sen - Jum' },
    satSun: { EN: 'Sat - Sun', ID: 'Sab - Min' },
    wa: { EN: 'Chat on WhatsApp', ID: 'Chat di WhatsApp' }
  },
  footer: {
    desc: { EN: 'All ingredients are sustainably sourced.', ID: 'Semua bahan diperoleh secara berkelanjutan.' },
    privacy: { EN: 'Privacy Policy', ID: 'Kebijakan Privasi' },
    terms: { EN: 'Terms of Service', ID: 'Ketentuan Layanan' }
  }
};

export const MENU_ITEMS = [
  {
    id: 'b1',
    name: 'Sunny Side Up',
    description: { EN: 'Perfectly fried eggs with a liquid gold yolk.', ID: 'Telur mata sapi dengan kuning telur yang meleleh sempurna.' },
    price: 55,
    category: Category.BREAKFAST,
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=300&h=300&auto=format&fit=crop'
  },
  {
    id: 'b2',
    name: 'Omelette',
    description: { EN: 'Fluffy whisked eggs cooked to golden perfection.', ID: 'Telur dadar lembut yang dimasak hingga keemasan.' },
    price: 55,
    category: Category.BREAKFAST,
    imageUrl: 'https://images.unsplash.com/photo-1510627489930-0c1b0ba84701?q=80&w=300&h=300&auto=format&fit=crop'
  },
  {
    id: 'b3',
    name: 'Scramble Egg',
    description: { EN: 'Served with toast, avocado, bacon and butter.', ID: 'Telur orak-arik disajikan dengan roti panggang, alpukat, bacon, dan mentega.' },
    price: 55,
    category: Category.BREAKFAST,
    imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=300&h=300&auto=format&fit=crop'
  },
  {
    id: 'b4',
    name: 'Garlic Bread',
    description: { EN: 'Toast with egg and smashed avocado.', ID: 'Roti panggang dengan telur dan alpukat tumbuk.' },
    price: 45,
    category: Category.BREAKFAST,
    imageUrl: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=300&h=300&auto=format&fit=crop'
  },
  {
    id: 'h1',
    name: 'Gaga Granola',
    description: { EN: 'Yoghurt, fresh fruit, granola and honey.', ID: 'Yogurt, buah segar, granola, dan madu.' },
    price: 49,
    category: Category.HEALTHY,
    imageUrl: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=300&h=300&auto=format&fit=crop'
  },
  {
    id: 'h2',
    name: 'Grekpedia',
    description: { EN: 'Yoghurt, banana, peanut butter and honey.', ID: 'Yogurt, pisang, selai kacang, dan madu.' },
    price: 49,
    category: Category.HEALTHY,
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=300&h=300&auto=format&fit=crop'
  },
  {
    id: 'h3',
    name: 'Fruit Salad',
    description: { EN: 'With seasonal fresh fruit available daily.', ID: 'Dengan buah-buahan segar musiman yang tersedia setiap hari.' },
    price: 45,
    category: Category.HEALTHY,
    imageUrl: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=300&h=300&auto=format&fit=crop'
  },
  {
    id: 'p1',
    name: 'Original Pancake',
    description: { EN: 'Classic fluffy pancakes served with syrup.', ID: 'Panekuk klasik yang lembut disajikan dengan sirup.' },
    price: 50,
    category: Category.PANCAKES,
    imageUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?q=80&w=300&h=300&auto=format&fit=crop'
  },
  {
    id: 'p2',
    name: 'Banana Pancake',
    description: { EN: 'Our signature pancakes topped with caramelized banana.', ID: 'Panekuk khas kami dengan taburan pisang karamel.' },
    price: 50,
    category: Category.PANCAKES,
    imageUrl: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=300&h=300&auto=format&fit=crop'
  },
  {
    id: 's1',
    name: 'Milk Smash',
    description: { EN: 'Banana, avocado, mango with coconut milk.', ID: 'Pisang, alpukat, mangga dengan santan kelapa.' },
    price: 59,
    category: Category.SMOOTHIE,
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=300&h=300&auto=format&fit=crop'
  },
  {
    id: 's2',
    name: 'Pink Panther',
    description: { EN: 'Banana, strawberry, dragon fruit with coconut milk and lime.', ID: 'Pisang, stroberi, buah naga dengan santan dan jeruk nipis.' },
    price: 59,
    category: Category.SMOOTHIE,
    imageUrl: 'https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?q=80&w=300&h=300&auto=format&fit=crop'
  },
  {
    id: 's3',
    name: 'Mango Sunshine',
    description: { EN: 'Banana, mango, pineapple with coconut milk.', ID: 'Pisang, mangga, nanas dengan santan kelapa.' },
    price: 59,
    category: Category.SMOOTHIE,
    imageUrl: 'https://images.unsplash.com/photo-1623065422902-30a2ad299dd4?q=80&w=300&h=300&auto=format&fit=crop'
  },
  {
    id: 's4',
    name: 'Brown Bowl',
    description: { EN: 'Banana, peanut butter, soy milk.', ID: 'Pisang, selai kacang, susu kedelai.' },
    price: 59,
    category: Category.SMOOTHIE,
    imageUrl: 'https://images.unsplash.com/photo-1476887334197-56adbf254e1a?q=80&w=300&h=300&auto=format&fit=crop'
  },
  {
    id: '1',
    name: 'Truffle Avocado Toast',
    description: { EN: 'Sourdough, smashed avocado, truffle oil, poached egg.', ID: 'Sourdough, alpukat tumbuk, minyak truffle, telur rebus.' },
    price: 65,
    category: Category.TOASTS,
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=300&h=300&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Golden Turmeric Latte',
    description: { EN: 'House almond milk, organic turmeric, ginger, honey.', ID: 'Susu almond, kunyit organik, jahe, madu.' },
    price: 35,
    category: Category.DRINKS,
    imageUrl: 'https://images.unsplash.com/photo-1563200841-3bb0e090a2a4?q=80&w=300&h=300&auto=format&fit=crop'
  },
];

export const IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsaX6gF5uOdn8OsiGtJFLLUOCfLn3hfg-_fTdBARl6EQ77KZfkzzZojzx1Ox_CFbYPqT3b8nApLuML7c5XV-bvXXXgN2xP3PzmnA0dmGPeScwrguwd6YN9AjyjLdXqRfKSAoZEY4PHqeGYo7EiMrXjwgNhijfvOZaILshcGotX9bgqnzsIzdmsoOoCStvpP6-Xw8KJS_oAsSyee1ceygm8HMT4AiwZCqZpfYCL6ocbNy4NikrSquac4lyHcLXVBDOQyVvEimEPiiI',
  smoothie: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCg0RI7vJLvL0lQf5uCB-ajRujZ8UPdIIkF2mkUqABh_GdujlOBLJ5elEGPExYvxZ3mcfkTxE0TXtEBKhvRvB164fAAS4pdKPjzNV_93RVsM-QTcTRRGfQMI-mLkP-vSOq3zeo0aS6g0P4pB4LuecUJg9qyumtCGjWCZhYQ1ZjJDCIzImii3x0CY0Ilau6Lf346zP-KamH34PRDRfeIn8Jkwebz3YDpWRRdbrMvvuWiBBkR0DrizvzJhLS0tCqgi80cTCyB8WJU0E',
  map: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAudnqrOBE3j8AOFbtI-ijIetD5DTkUMiSU1lAy_CxLnNNqiOSrSlsZlnGSVb637Glw2PKOkfmJBB1O2nAP3nj_0L-GT1JdJnW3SwFijZlPjKkteRHropkUv_kIOHjnZKa2WtuAOdNCdcvKvIqFySMkpEiF_ByIy5M6FiLtsorDiMNjBR1d-8FYQu5c9KGk4Sp8c9r4xvOSvj-wjg68GnJvLdd2YmfQfMs4Rufg9xYoejRFg2Y2ZXXwzJmXg2TzlIibXTrZ3bUQUk',
  gallery: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBPK01Wp7GLfIAvFFWHEH_-pPpPxU-zM2Rr8VbdDHIgELxWvwjrl_UbqRwZwxp4-pssEIIwSTWuGEkfmPRnNgXHrtlhyaHxxKB5Q4hKhghZv-rC9AHzVMFkeBbp7aFP-3m2yQm6qgPSFwJTd0K8BdNp78_fHsIACE-UzgFw0PLEWJYMugDDIMpyj0ey94lHZnQnPIhyF-GXzYaz8zHpZn-OEgOImGMKgCeKauoSUploruHDLjpgkWWdkWx6ziHJU3vkcJ-TF6AUEjc',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAIgwNp-AcWdZnlOQsSIooRBF1fvu9rJN67TizUJZlmPPVAl4ivxVZpDMIEB5Q15gJxOhiY2Syn4SLCWwUXnPUYJ42b_ypDYB_JZ13Ctzt4bZfYEKp_AasG-7dPMoo0zKF2zPYxhW0Wm1BVncnaGvE9B-ISoaNshWmR4tNuqorxAWe4Iu3_BY3OSoodTCnA4oq2Wodh-mPf8qj6pbbnvJoOUInzb3OMPClyKnBT3Dwyg7JQ_mtOTzEcLhsP1DEiGWlukJZVF7fvdXM',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCN7PXAI1tj0_ImhNdl6k58u8_LagcG8lR7Tu59n-lqSK3Hha3fwlyqYWpdQbo0aT_3lRT2kyn2s4fm2jPZRUQPpCSlRSrtVvRi7U4TZb72XwdcbkbHBscSXaEY9K5_2R2cNJjZ4y1QggFgq8UWCBg9pgzBCFRszIOE2btJxRoAqpYe2JkGTzcgbR9p1JywLPIqtu2XZmGBqNK_FWewp4OMvlb9j6vdCTA1HbWiYyp-ZKzk9CVcb-UIBvc7pNd0L_36mcYSh-_vInw',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB3lAdRUjOT26RvhB-eLil8RM1Hk47v6-Xe86lg_QYu5vjTC8LGnapDrPKu8WC7jYdxAo872NaX8SR4oSM8B3GyI-zYTpyIcrq8bZ27EFF2LqjSj-ssOgvi9U1ts1WsTp_i3Lp9ox1eUFRuMiy_-30aMFcrjB1Ng0Ko8hd9gZyO_iOUdz2xzpyLGSkKzZiyJ7h1KJB8BV3VYqdzU1_KyxvRqLklO-ltrZou4BiNDEmeGQYXcHo3wiHDg0l5mv_nDgxgJXQSBbhECw8'
  ]
};
