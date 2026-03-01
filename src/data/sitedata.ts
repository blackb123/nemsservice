// src/data/siteData.ts
import backdrop from "../assets/backdrop.webp"
import banner from "../assets/banner.webp"
import banner2 from "../assets/banner2.webp"
import businesscard from "../assets/businesscard.webp"
import podcast from "../assets/podscast.webp"
import key from "../assets/keys.webp"
import gonflable from "../assets/gonflable.webp"
import roadstand from "../assets/roadstand.webp"
import card from  "../assets/card.webp"
import signification from "../assets/signalisation.webp"
import tshirt from "../assets/tshirts.webp"
import chapitaux from "../assets/chapitaux.webp"
import * as img from '../assets/COFFRET/coffret_img';
export const siteData = {
  hero: {
    title: "If you need it, we print it.",
    description: "From custom-printed business products to beautiful photo gifts, we’ve got the product for you. Plus, with our easy-to-use design tools and services, you get exactly what you want.",
    buttons: [
      { label: "Checkout catalogue", link: "#", primary: true },
      { label: "Bestselling Products", link: "#", primary: false },
    ]
  },
 categories:[
  // From "IMPRESSION NUMÉRIQUE" & "IMPRIMERIE" sections
  { id: 1, name: "IMPRESSION & REPROGRAPHIE", image: businesscard }, 

  // From "Roll-up" section
  { id: 2, name: "ROLL-UP", image: podcast }, 

  // From "x-banner" items
  { id: 3, name: "X-BANNER", image: banner }, 

  // From "Flying Banner" section
  { id: 8, name: "FLYING BANNER", image: banner2 }, 

  // Consolidated Backdrops, Stop Rayon, and PLV items
  { id: 6, name: "DISPLAY & PLV", image: backdrop }, 

  // From "Enseigne", "Stop Trottoirs", and "Potences"
  { id: 10, name: "OUTDOOR", image: roadstand }, 

  // From "Chevalets" and "Porte Brochures"
  { id: 4, name: "DESK & COMPTOIR", image: key }, 

  // From "Totems" items in Gonflables and Stop Trottoirs
  { id: 11, name: "TOTEMS", image: card }, 

  // From "Broderie" and "Gadgets Pub"
  { id: 5, name: "CLOTHING & BAGS", image: tshirt },

  // From "GONFLABLES" section
  { id: 14, name: "GONFLABLE", image: gonflable },

  // From "Toiles" and larger outdoor structures
  { id: 15, name: "CHAPITAUX", image: chapitaux },

  // From "PANNEAUX DE SIGNALISATIONS"
  { id: 12, name: "SIGNALETIQUE", image: signification }
],
  navLinks: [
    // ... (keep existing navLinks data)
    "Deals", "Business Cards", "Postcards & Print Advertising",
    "Signs, Banners & Posters", "Stickers & Labels", "Clothing & Bags",
    "Promotional Products", "Packaging", "Invitations", "Wedding"
  ],
   serviceSlider : [
  {
    id: 1,
    category: "Gifts Pack",
    ref: "REF : CRS-C2P",
    name: "COFFRETS 02 PIÈCES",
    tagline: "Le duo parfait : Un carnet et un accessoire dans un écrin raffiné.",
    image: img.notebooks, // Récupéré du pack "STYL-E" (id: 1)
    price: "Sur Devis",
    colors: "Bleu, Gris, Noir, Marron",
  },
  {
    id: 2,
    category: "Gifts Pack",
    ref: "REF : CRS-C3P",
    name: "COFFRETS 03 PIÈCES",
    tagline: "L'ensemble complet pour les cadres et le networking.",
    image: img.goldenboy, // Récupéré du pack "GOLDEN BOY" (id: 2)
    price: "Sur Devis",
    colors: "Noir, Chocolat, Marron",
  },
  {
    id: 3,
    category: "Gifts Pack",
    ref: "REF : CRS-C4P",
    name: "COFFRETS QUATRE PIÈCES",
    tagline: "Le Prestige Executive : L'alliance de la technologie et du style.",
    image: img.executive, // Récupéré du pack "EXECUTIVE" (id: 3)
    price: "Sur Devis",
    colors: "Noir",
  },
  {
    id: 4,
    category: "Écriture & Bureau",
    ref: "REF : CRS-NBC",
    name: "NOTEBOOK / CONFÉRENCIER",
    tagline: "Organisateurs professionnels et supports de notes individuels.",
    image: img.joshchic, // Récupéré du pack "JOSH CHIC" (id: 4)
    price: "Sur Devis",
    colors: "Bleu, Gold, Anthracite, Noir",
  }
],
  socialShowcase: {
    title: "Made by you, #MadeWithNemService",
    subtitle: "We love to see your custom creations. Post a photo on social media and tag us for a chance to be featured.",
    images: [
      { id: 1, url: "https://via.placeholder.com/400x400?text=Customer+Card", handle: "@creative_studio" },
      { id: 2, url: "https://via.placeholder.com/400x400?text=Custom+Mug", handle: "@morning_vibes" },
      { id: 3, url: "https://via.placeholder.com/400x400?text=Gift+Box", handle: "@gift_expert" },
      { id: 4, url: "https://via.placeholder.com/400x400?text=Notebook+Set", handle: "@planner_addict" },
      { id: 5, url: "https://via.placeholder.com/400x400?text=T-shirt+Design", handle: "@style_co" },
    ]
  },
  
  testimonials: [
    {
      id: 1,
      name: "Jean Dupont",
      role: "Founder, TechScale",
      content: "The quality of the 'Coffret Manager' exceeded my expectations. The leather finish is premium and my clients loved them.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah M.",
      role: "Marketing Director",
      content: "Fast delivery and impeccable customer service. Nem's Service is now our go-to for all corporate gifting.",
      rating: 5
    },
    {
        id: 3,
        name: "Paul N.",
        role: "Event Organizer",
        content: "Ordered 50 custom mugs for an event. Every single one was perfect. Highly recommend their design tools.",
        rating: 4
      }
  ]

  
};export const product = [
  // --- IMPRESSION & REPROGRAPHIE ---
  {
    "category": "IMPRESSION & REPROGRAPHIE",
    "header": "PHOTOCOPIES / IMPRESSIONS",
    "description": "Nous photocopions et imprimons vos fichiers en très haute qualité pour tous vos documents personnels ou professionnels.",
    "features": ["Impressions NOIR et COULEUR", "Tous formats (A3 / A4 / ...)", "Différents types de papiers", "Possibilité de couper, plier, plastifier"],
    "image": "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=800&auto=format&fit=crop"
  },
  {
    "category": "IMPRESSION & REPROGRAPHIE",
    "header": "TRACÉS DE PLANS",
    "description": "Impression de plans de haute précision pour architectes et ingénieurs sur traceur grand format.",
    "features": ["Tracés NOIR et COULEUR jusque 42 pouces", "Coupe et pliage / Assemblage", "Scannérisation / Numérisation de plans"],
    "image": "https://images.unsplash.com/photo-1503387762-592eea58f4e8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "category": "IMPRESSION & REPROGRAPHIE",
    "header": "BROCHURES / CATALOGUES",
    "description": "Conception de supports multi-pages pour votre communication institutionnelle ou commerciale.",
    "features": ["Reliure spirale ou agrafée", "Finition mate ou brillante", "Formats A4, A5, A6"],
    "image": "https://images.unsplash.com/photo-1586075010633-247fe9ed859b?q=80&w=800&auto=format&fit=crop"
  },

  // --- ROLL-UP ---
  {
    "category": "ROLL-UP",
    "header": "Roll-Up Classique",
    "description": "Support d'information polyvalent composé d'une affiche tendue sur une base en aluminium.",
    "features": ["Structure aluminium brossé", "02 pieds de stabilisation", "Format : 85 x 200 cm", "Poids : 3 kgs"],
    "image": "https://images.unsplash.com/photo-1596633605700-1fdc97a6a011?q=80&w=800&auto=format&fit=crop"
  },
  {
    "category": "ROLL-UP",
    "header": "Roll-Up Standard",
    "description": "Support d'information facile à transporter, idéal pour toutes vos manifestations intérieures.",
    "features": ["Structure aluminium", "Sac de transport renforcé", "Format : 85 x 200 cm", "Poids : 4,2 kgs"],
    "image": "https://images.unsplash.com/photo-1531050171669-0158296c0d35?q=80&w=800&auto=format&fit=crop"
  },

  // --- X-BANNER ---
  {
    "category": "X-BANNER",
    "header": "X-Banner Classique",
    "description": "Structure en fibre de verre ultra légère pour communiquer à petit prix.",
    "features": ["Fibre de verre", "Fixation par œillets", "Housse incluse", "Format : 60 x 160 cm"],
    "image": "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop"
  },

  // --- FLYING BANNER ---
  {
    "category": "FLYING BANNER",
    "header": "Flying Banner - Modèle Feather",
    "description": "Drapeau publicitaire avec mât en fibre de carbone.",
    "features": ["Impression traversée", "Fibre de carbone", "Hauteurs : 2,9m à 5,2m", "Sac inclus"],
    "image": "https://images.unsplash.com/photo-1516641396056-0ce60a85d49f?q=80&w=800&auto=format&fit=crop"
  },

  // --- OUTDOOR ---
  {
    "category": "OUTDOOR",
    "header": "Stop Trottoir - Chevalet PVC",
    "description": "Chevalet publicitaire léger pour communication de proximité.",
    "features": ["Acrylique 4mm", "Impression UV", "Format max 80x120cm", "Double face"],
    "image": "https://images.unsplash.com/photo-1523995462485-3d171b5c8fb9?q=80&w=800&auto=format&fit=crop"
  },

  // --- DISPLAY & PLV ---
  {
    "category": "DISPLAY & PLV",
    "header": "Backdrop Stand Parapluie",
    "description": "Mur d'images pliable pour fond de stand professionnel.",
    "features": ["Structure parapluie", "Fixation velcro", "Format : 3m x 2,25m", "Montage < 2 min"],
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  },
  {
    "category": "DISPLAY & PLV",
    "header": "Photocall",
    "description": "Structure autoportante pour conférences de presse.",
    "features": ["Extensible aluminium", "Tissu haute qualité", "Format : 240 x 240 cm"],
    "image": "https://images.unsplash.com/photo-1475721027785-f74dea996971?q=80&w=800&auto=format&fit=crop"
  },

  // --- DESK & COMPTOIR ---
  {
    "category": "DESK & COMPTOIR",
    "header": "Desk / Comptoir d'accueil",
    "description": "Comptoir promotionnel avec rangement intérieur.",
    "features": ["Tablette bois/PVC", "Étagère intérieure", "Pliable", "Montage 2 min"],
    "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop"
  },

  // --- TOTEMS ---
  {
    "category": "TOTEMS",
    "header": "Totem Plat / Bombé",
    "description": "Signalétique intérieure pour orientation.",
    "features": ["Aluminium anodisé", "Faces PVC/Métal", "Hauteur : 150-200cm"],
    "image": "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=800&auto=format&fit=crop"
  },

  // --- GONFLABLE ---
  {
    "category": "GONFLABLE",
    "header": "Arche Gonflable Classique",
    "description": "Structure géante pour marquage d'entrée événementielle.",
    "features": ["PVC haute résistance", "Soufflerie incluse", "Marquage amovible"],
    "image": "https://images.unsplash.com/photo-1520116468816-95b69f847357?q=80&w=800&auto=format&fit=crop"
  },

  // --- SIGNALETIQUE ---
  {
    "category": "SIGNALETIQUE",
    "header": "Signalétique Directionnelle",
    "description": "Plaques et panneaux d'orientation pour bâtiments.",
    "features": ["Plaque diamant", "Fixation plafond/murale", "Modèle potence"],
    "image": "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=800&auto=format&fit=crop"
  }
];
export const coffretProduct = [
  {
    id: 1,
    name: "COFFRETS 02 PIÈCES",
    category: "Gifts Pack",
    tagline: "Le duo parfait : Un carnet et un accessoire dans un écrin raffiné.", 
    packs: [
      { 
        name: "STYL-E", 
        ref: "REF: STYL-E", 
        details: "Notebook A5 en simili cuir avec fermoir en métal servant de support de téléphone.",
        colors: ["Bleu", "Gris", "Noir", "Marron"],
        includes: ["Notebook A5 (Support Tel)", "Stylo métal", "Boîte Cadeau"],
        image: img.notebooks
      },
      { 
        name: "BRIEF", 
        ref: "REF: CRSNB717-005-A", 
        details: "Coffret en simili cuir composé d'un notebook à trois volets avec fermeture magnétique format A5.",
        colors: ["Bleu", "Gris", "Noir", "Marron"],
        includes: ["Notebook 3 Volets A5", "Stylo", "Boîte Cadeau"],
        image: img.brief
      },
      { 
        name: "TWO SIDES", 
        ref: "REF: CRS717-018", 
        details: "Finition simili cuir lisse composé d'un porte carte de visite à deux compartiments et un porte-clés.",
        colors: ["Noir", "Marron"],
        includes: ["Porte-cartes (2 compartiments)", "Porte-clés", "Boîte Cadeau"],
        image: img.twoside
      },
      { 
        name: "AMBASSADOR", 
        ref: "REF: CRS717-017", 
        details: "Composé d'un stylo métal et d'un porte-clés.",
        colors: ["Noir", "Gold"],
        includes: ["Stylo métal premium", "Porte-clés", "Boîte Cadeau"],
        image: img.ambassador
      },
      { 
        name: "ADMINISTRATOR", 
        ref: "REF: CRS717-016", 
        details: "Composé d'un stylo métal et d'un porte-clés haut de gamme.",
        colors: ["Noir", "Marron"],
        includes: ["Stylo métal", "Porte-clés haut de gamme", "Boîte Cadeau"],
        image: img.admin
      },
      { 
        name: "CREATIVE", 
        ref: "REF: CRS717-023", 
        details: "Composé d'un stylo et d'un porte carte de visite finition bi-matière.",
        colors: ["Noir", "Gold", "Mordoré"],
        includes: ["Stylo", "Porte-cartes bi-matière", "Boîte Cadeau"],
        image: img.creative
      }
    ]
  },
  {
    id: 2,
    name: "COFFRETS 03 PIÈCES",
    category: "Gifts Pack",
    tagline: "L'ensemble complet pour les cadres et le networking.",
    packs: [
      { 
        name: "GOLDEN BOY", 
        ref: "REF: CRS717-0220", 
        details: "Coffret en cuir composé d'un portefeuille, une clé USB 4Go porte-clés et un stylo.",
        colors: ["Noir", "Chocolat"],
        includes: ["Portefeuille en cuir", "Clé USB 4Go / Porte-clés", "Stylo", "Boîte Cadeau"],
        image: img.goldenboy
      },
      { 
        name: "SMART MANAGER", 
        ref: "REF: CRS717-007", 
        details: "En cuir avec porte carte automatique (poussoir) et porte-clés métal/cuir.",
        colors: ["Noir"],
        includes: ["Porte-cartes Automatique", "Porte-clés métal et cuir", "Stylo", "Boîte Cadeau"],
        image: img.smartmanager
      },
      { 
        name: "TRAVELER", 
        ref: "REF: CRS717-011B", 
        details: "En simili cuir veiné composé d'un compagnon de voyage avec divers rangements.",
        colors: ["Marron"],
        includes: ["Compagnon de Voyage", "Porte-clés", "Stylo métal", "Boîte Cadeau"],
        image: img.traveler
      },
      { 
        name: "BRAINSTORM", 
        ref: "REF: CRS717-004", 
        details: "Composé d'un porte carte de visite en simili cuir, un porte-clés et un stylo métal.",
        colors: ["Noir", "Marron"],
        includes: ["Porte-cartes simili cuir", "Porte-clés", "Stylo métal", "Boîte Cadeau"],
        image: img.brainstorm
      },
      { 
        name: "WONDER WOMAN", 
        ref: "REF: CRS717-012", 
        details: "Composé d'un accroche sac, un miroir et un porte carte de visite finition métallisée.",
        colors: ["Gold Mordoré", "Noir"],
        includes: ["Accroche sac", "Miroir", "Porte-cartes", "Boîte Cadeau"],
        image: img.wonderman
      },
      { 
        name: "SMART", 
        ref: "REF: CRS717-006", 
        details: "Porte carte automatique avec système à poussoir, stylo et porte-clés métal.",
        colors: ["Noir", "Gold"],
        includes: ["Porte-cartes Automatique", "Stylo", "Porte-clés métal", "Boîte Cadeau"],
        image: img.smart
      }
    ]
  },
  {
    id: 3,
    name: "COFFRETS QUATRE PIÈCES",
    category: "Gifts Pack",
    tagline: "Le Prestige Executive : L'alliance de la technologie et du style.",
    packs: [
      { 
        name: "EXECUTIVE", 
        ref: "REF: CRS717-021", 
        details: "Notebook A5, Power Bank 5200 mAh, Clé USB 4 Go et stylo métal.",
        colors: ["Noir"],
        includes: ["Notebook A5", "Power Bank 5200 mAh", "Clé USB 4 Go", "Stylo métal"],
        image: img.executive
      },
      { 
        name: "MEETING MODERN", 
        ref: "REF: CRS717-015", 
        details: "Porte carte de visite, porte-clés et stylo en métal et simili cuir.",
        colors: ["Noir", "Marron"],
        includes: ["Porte-cartes", "Porte-clés", "Stylo métal", "Boîte Cadeau"],
        image: img.meeting
      }
    ]
  },
  {
    id: 4,
    name: "NOTEBOOK / CONFÉRENCIER",
    category: "Écriture & Bureau",
    tagline: "Organisateurs professionnels et supports de notes individuels.",
    packs: [
      { 
        name: "JOSH CHIC", 
        ref: "REF: CRSNB717-003", 
        details: "Trois volets avec divers rangements et fermeture magnétique. Formats A4, A5, B5.",
        colors: ["Bleu", "Gold", "Gris Anthracite"],
        includes: ["Notebook 3 Volets", "Boîte Cadeau"],
        image: img.joshchic
      },
      { 
        name: "UPDATE", 
        ref: "REF: CRSNB717-001-B5", 
        details: "Format B5 avec fermeture par clé USB silicone détachable de 4 Go.",
        colors: ["Noir"],
        includes: ["Notebook B5", "Clé USB 4 Go intégrée", "Boîte Cadeau"],
        image: img.update
      },
      { 
        name: "TABOUBRACINE", 
        ref: "REF: TABOUBRACINE", 
        details: "Agenda-Notebook B5 avec Power Bank et chargeurs Android/Mac intégrés.",
        colors: ["Anthracite"],
        includes: ["Notebook B5", "Power Bank", "Chargeurs Multi-embouts", "Boîte Cadeau"],
        image: img.handy 
      },
      { 
        name: "CHIC SQUARE", 
        ref: "REF: CHICSQUARE", 
        details: "Notebook avec fermeture magnétique et intérieur en spirale.",
        colors: ["Noir", "Bleu"],
        includes: ["Notebook Spiral"],
        image: img.chicsquare
      },
      { 
        name: "HANDY", 
        ref: "REF: HANDY", 
        details: "Format A5 en simili cuir avec emplacements pour stylo, portable ou cartes.",
        colors: ["Marron", "Beige", "Gris", "Bleu"],
        includes: ["Notebook A5"],
        image: img.handy
      }
    ]
  }
];