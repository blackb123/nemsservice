// src/data/siteData.ts
import backdrop from "../assets/product/backdrop1.webp"
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

/////// PRODUCT IMAGE
import { 
  backdrop1, backdrop2, banner1, carbanner, gonflable2, horizontal, 
  offset, offset2, panneaux, panneaux2, rollup1, rollup2, 
  serigraphie1, serigraphie2, signalition, stoptrottoir1, stoptrottoir2 
} from "../assets/product/productimg.ts";
 export const siteData = {
  hero: {
    title: "Si vous l'imaginez, nous l'imprimons.",
    description: "Des supports publicitaires personnalisés aux cadeaux photo d'exception, nous avons le produit qu'il vous faut. Grâce à nos outils de conception intuitifs, donnez vie à vos projets exactement comme vous le souhaitez.",
    buttons: [
      { label: "Consulter le catalogue", link: "#", primary: true },
      { label: "Nos meilleures ventes", link: "#", primary: false },
    ]
  },
  categories: [
    // Section IMPRESSION NUMÉRIQUE & IMPRIMERIE
    { id: 1, name: "IMPRESSION & REPROGRAPHIE", image: businesscard }, 

    // Section Roll-up
    { id: 2, name: "ROLL-UP", image: podcast }, 

    // Section X-Banner
    { id: 3, name: "X-BANNER", image: banner }, 

    // Section Flying Banner
    { id: 8, name: "FLYING BANNER (DRAPEAUX)", image: banner2 }, 

    // Consolidation Backdrops, Stop Rayon, et PLV
    { id: 6, name: "DISPLAY & PLV", image: backdrop }, 

    // Enseignes, Stop Trottoirs, et Potences
    { id: 10, name: "OUTDOOR (EXTÉRIEUR)", image: roadstand }, 

    // Chevalets et Porte-brochures
    { id: 4, name: "BUREAU & COMPTOIR", image: key }, 

    // Totems (Gonflables et Stop Trottoirs)
    { id: 11, name: "TOTEMS", image: card }, 

    // Broderie et Gadgets Publicitaires
    { id: 5, name: "TEXTILE & BAGAGERIE", image: tshirt },

    // Section GONFLABLES
    { id: 14, name: "STRUCTURES GONFLABLES", image: gonflable },

    // Toiles et grandes structures extérieures
    { id: 15, name: "CHAPITEAUX", image: chapitaux },

    // PANNEAUX DE SIGNALISATION
    { id: 12, name: "SIGNALÉTIQUE", image: signification }
  ],
  navLinks: [
    "Offres", 
    "Cartes de Visite", 
    "Flyers & Publicité",
    "Enseignes, Bannières & Posters", 
    "Autocollants & Étiquettes", 
    "Vêtements & Sacs",
    "Objets Publicitaires", 
    "Packaging", 
    "Faire-part & Invitations", 
    "Mariage"
  ]
,
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
    title: "Réalisé par vous, #MadeWithNemService",
    subtitle: "Nous adorons voir vos créations personnalisées. Publiez une photo sur les réseaux sociaux et taguez-nous pour avoir une chance d'être mis en avant.",
    images: [
      { 
        id: 1, 
        url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800", 
        handle: "@studio_creatif",
        alt: "Identité visuelle et branding"
      },
      { 
        id: 2, 
        url: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=800", 
        handle: "@pause_cafe",
        alt: "Objets promotionnels et mugs"
      },
   { 
  id: 3, 
  url: "https://picsum.photos/id/20/800/800", 
  handle: "@expert_bureau",
  alt: "Fournitures et objets de bureau"
},
      { 
        id: 4, 
        url: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800", 
        handle: "@passion_agenda",
        alt: "Carnets de notes personnalisés"
      },
      { 
        id: 5, 
        url: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800", 
        handle: "@style_promo",
        alt: "Vêtements personnalisés"
      },
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

  
};
export const product = [
  // --- 1. ROLL-UPS (9 produits) ---
  {
    "category": "ROLL-UP",
    "header": "Roll-up Classique",
    "description": "Support d'information polyvalent, simple à monter et facile à transporter.",
    "features": ["Structure aluminium brossé", "02 pieds de stabilisation", "Format : 85 x 200 cm", "Poids : 3 kgs"],
    "image": rollup1
  },
  {
    "category": "ROLL-UP",
    "header": "Roll-up Standard",
    "description": "Version renforcée du classique pour une meilleure tenue au sol.",
    "features": ["Aluminium brossé", "Stabilité accrue", "Format : 85 x 200 cm", "Poids : 4,2 kgs"],
    "image": rollup1
  },
  {
    "category": "ROLL-UP",
    "header": "Roll-up Luxe",
    "description": "Base esthétique haut de gamme avec changement de visuel facilité.",
    "features": ["Alu anodisé", "Option Spot disponible", "Format : 85 x 200 cm", "Poids : 6,0 kgs"],
    "image": rollup2
  },
  {
    "category": "ROLL-UP",
    "header": "Roll-up New Look Indoor",
    "description": "Design moderne avec structure épaisse pour une stabilité optimale.",
    "features": ["Design premium", "Usage intérieur", "Format : 85 x 200 cm"],
    "image": rollup1
  },
  {
    "category": "ROLL-UP",
    "header": "Roll-up New Look Indoor XXL",
    "description": "Format large pour un impact visuel maximum.",
    "features": ["Format : 100 x 200 cm", "Structure robuste", "Poids : 7 kgs"],
    "image": rollup2
  },
  {
    "category": "ROLL-UP",
    "header": "Roll-up New Look Indoor with Table",
    "description": "Combiné display et tablette de présentation.",
    "features": ["Tablette intégrée", "Format 85 ou 100 cm", "Poids : 12 kgs"],
    "image": rollup1
  },
  {
    "category": "ROLL-UP",
    "header": "Roll-up New Look Outdoor",
    "description": "Conçu pour résister aux conditions extérieures légères.",
    "features": ["Pieds pivotants", "Résistant vent", "Format : 85 x 200 cm"],
    "image": rollup2
  },
  {
    "category": "ROLL-UP",
    "header": "Roll-up New Look Outdoor XXL",
    "description": "Version grand format pour l'extérieur.",
    "features": ["Format : 100 x 200 cm", "Stabilité renforcée"],
    "image": rollup1
  },
  {
    "category": "ROLL-UP",
    "header": "Roll-up à Cadre",
    "description": "Système de cadre clippant sur pied de roll-up.",
    "features": ["Cadre alu clippant", "Changement rapide", "Double face possible"],
    "image": rollup2
  },

  // --- 2. X-BANNER (2 produits) ---
  {
    "category": "X-BANNER",
    "header": "X-Banner Classique",
    "description": "Le meilleur rapport qualité/prix pour vos salons.",
    "features": ["Fibre de verre", "60 x 160 cm", "Poids plume 330g"],
    "image": banner1
  },
  {
    "category": "X-BANNER",
    "header": "X-Banner Socle",
    "description": "Structure stable grâce à son embase lestable.",
    "features": ["Base PVC 3L", "Lestable eau/sable", "Format : 60 x 160 cm"],
    "image": banner1
  },

  // --- 3. FLYING BANNERS & FLAGS (12 produits) ---
  {
    "category": "FLYING BANNER",
    "header": "Flying Banner Rectangular",
    "description": "Drapeau format rectangulaire pour une surface de lecture maximale.",
    "features": ["Mât aluminium", "Différentes tailles", "Usage intérieur/extérieur"],
    "image": banner2
  },
  {
    "category": "FLYING BANNER",
    "header": "Flying Banner Teardrop",
    "description": "Drapeau en forme de goutte d'eau, très dynamique.",
    "features": ["Forme goutte", "Fibre de carbone", "Résistance vent"],
    "image": banner2
  },
  {
    "category": "FLYING BANNER",
    "header": "Flying Banner Giant Flag",
    "description": "Mât géant pour une visibilité de très loin.",
    "features": ["Hauteur jusqu'à 5m+", "Base réservoir", "Télescopique"],
    "image": banner2
  },
  {
    "category": "FLYING BANNER",
    "header": "Backpack Banner",
    "description": "Drapeau sur sac à dos pour street marketing.",
    "features": ["Sac à dos ergonomique", "X-banner ou Flying banner", "Ultra mobile"],
    "image": carbanner
  },
  {
    "category": "FLYING BANNER",
    "header": "Flying Milles Banners PDV XL",
    "description": "Bannière verticale grand format pour point de vente.",
    "features": ["Format XL", "Structure autoporteuse", "Impact visuel"],
    "image": banner2
  },
  {
    "category": "FLYING BANNER",
    "header": "Flying Milles Banners PDV XXL",
    "description": "Le plus grand format de bannière verticale pour PDV.",
    "features": ["Format XXL", "Tissu haute qualité", "Usage intérieur"],
    "image": banner2
  },
  {
    "category": "FLYING BANNER",
    "header": "Flying Milles Banners PDV XL Luxe",
    "description": "Finition premium pour environnements de prestige.",
    "features": ["Base lestée luxe", "Mât finition brillante", "Format XL"],
    "image": banner2
  },
  {
    "category": "FLYING BANNER",
    "header": "Flying Milles Banners PDV XXL Luxe",
    "description": "Le summum de la PLV textile grand format.",
    "features": ["Finition luxe", "Stabilité maximale", "Format XXL"],
    "image": banner2
  },
  {
    "category": "FLYING BANNER",
    "header": "Flashies Rotative Car Banner",
    "description": "Drapeau rotatif pour véhicules.",
    "features": ["Fixation vitre", "Effet rotatif", "Petit format dynamique"],
    "image": carbanner
  },
  {
    "category": "FLYING BANNER",
    "header": "Car Windows Banner",
    "description": "Bannière publicitaire à clipser sur les vitres de voiture.",
    "features": ["Clip PVC robuste", "Impression recto/verso", "Marketing mobile"],
    "image": carbanner
  },
  {
    "category": "FLYING BANNER",
    "header": "Mât à Potence Rotative Outdoor",
    "description": "Mât fixe extérieur avec bras de puissance rotatif.",
    "features": ["Rotatif 360°", "Aluminium/Acier", "Visuel toujours tendu"],
    "image": horizontal
  },
  {
    "category": "FLYING BANNER",
    "header": "Pop-up Horizontal Banner",
    "description": "Bannière de sol auto-déployante.",
    "features": ["Structure ressort", "Double face", "Piquets de fixation"],
    "image": horizontal
  },

  // --- 4. BACKDROPS / MURS D'IMAGES (5 produits) ---
  {
    "category": "BACKDROPS",
    "header": "Backdrop Stand Parapluie",
    "description": "Mur d'images pliable pour fond de stand professionnel.",
    "features": ["Structure parapluie", "Tissu ou magnétique", "Valise de transport"],
    "image": backdrop1
  },
  {
    "category": "BACKDROPS",
    "header": "Backdrop Mur d'image Horizontal",
    "description": "Structure tubulaire pour grands visuels horizontaux.",
    "features": ["Tissu stretch", "Montage sans outil", "Format personnalisé"],
    "image": backdrop2
  },
  {
    "category": "BACKDROPS",
    "header": "Backdrop Mur d'image Vertical",
    "description": "Format portrait pour signalétique d'accueil.",
    "features": ["Faible encombrement", "Haute résolution", "Double face"],
    "image": backdrop1
  },
  {
    "category": "BACKDROPS",
    "header": "Backdrop Panoramique",
    "description": "Mur d'images extra-large pour une immersion totale.",
    "features": ["Jusqu'à 6m de large", "Visuel continu", "Impact théâtral"],
    "image": backdrop2
  },
  {
    "category": "BACKDROPS",
    "header": "Backdrop Mini",
    "description": "Version de table ou petit espace du mur d'image.",
    "features": ["Format compact", "Idéal comptoir", "Léger"],
    "image": backdrop1
  },

  // --- 5. STOP TROTTOIRS (12 produits) ---
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs modèle structure",
    "description": "Cadre aluminium classique sur pieds.",
    "features": ["Profilé clippant", "Protection antireflet", "Double face"],
    "image": stoptrottoir1
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs modèle base bac à eau",
    "description": "Stabilité maximale grâce à son socle réservoir.",
    "features": ["Bac 25L+", "Roulettes intégrées", "Résistant tempêtes"],
    "image": stoptrottoir2
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs modèle chevalet",
    "description": "Chevalet bois ou alu pliable.",
    "features": ["Pliable", "Ardoise ou affiche", "Économique"],
    "image": stoptrottoir1
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs Robuste",
    "description": "Châssis acier pour usage intensif.",
    "features": ["Acier laqué", "Anti-corrosion", "Poids élevé"],
    "image": stoptrottoir2
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs chevalets PVC blanc",
    "description": "Chevalet plastique léger et imputrescible.",
    "features": ["PVC 4mm", "Impression UV", "Léger"],
    "image": stoptrottoir1
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs Géant",
    "description": "Format A0 ou supérieur pour voir de loin.",
    "features": ["Format XXL", "Ressorts amortisseurs", "Bac à eau"],
    "image": stoptrottoir2
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs Tropicalisé",
    "description": "Conçu pour les climats humides et forte chaleur.",
    "features": ["Traitement anti-UV", "Joints étanches", "Alu renforcé"],
    "image": stoptrottoir1
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs Rotatif",
    "description": "Affiche tournant avec le vent.",
    "features": ["Axe rotatif", "Attire l'œil", "Outdoor"],
    "image": stoptrottoir2
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs Totem Outdoor",
    "description": "Signalétique verticale fixe pour extérieur.",
    "features": ["Structure acier", "Faces PVC", "Scellable au sol"],
    "image": stoptrottoir1
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs Bois",
    "description": "Aspect naturel pour restaurants et boutiques.",
    "features": ["Bois traité", "Surface craie", "Élégant"],
    "image": stoptrottoir2
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs Magnétique",
    "description": "Changement de visuel ultra-rapide par plaques aimantées.",
    "features": ["Façade lexan", "Contours aimantés", "Étanchéité IP54"],
    "image": stoptrottoir1
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs Ressort",
    "description": "Modèle avec ressorts pour absorber les chocs et le vent.",
    "features": ["Ressorts acier", "Flexibilité", "Base stable"],
    "image": stoptrottoir2
  },

  // --- 6. PLV & SIGNALÉTIQUE DÉTAILLÉE (29 produits) ---
  {
    "category": "SIGNALETIQUE",
    "header": "Plaque de Porte",
    "description": "Identification des bureaux et salles.",
    "features": ["Aluminium", "Insert papier possible", "Fixation adhésive"],
    "image": signalition
  },
  {
    "category": "SIGNALETIQUE",
    "header": "Plaque Diamant Complète",
    "description": "Signalétique premium en relief.",
    "features": ["Effet 3D", "Plexiglas", "Entretoises inox"],
    "image": signalition
  },
  {
    "category": "SIGNALETIQUE",
    "header": "Modèle Potence",
    "description": "Signalétique perpendiculaire au mur.",
    "features": ["Double face", "Alu anodisé", "Visibilité couloir"],
    "image": panneaux
  },
  {
    "category": "SIGNALETIQUE",
    "header": "Modèle Mural",
    "description": "Panneaux d'information muraux fixes.",
    "features": ["PVC ou Alu", "Format sur mesure", "Impression directe"],
    "image": panneaux2
  },
  {
    "category": "SIGNALETIQUE",
    "header": "Modèle Plafond",
    "description": "Signalétique suspendue pour orientation.",
    "features": ["Suspension câbles", "Double face", "Léger"],
    "image": signalition
  },
  {
    "category": "SIGNALETIQUE",
    "header": "Plaque de Table",
    "description": "Identification nominative pour bureaux ou réunions.",
    "features": ["Alu plié", "Changement nom aisé", "Design sobre"],
    "image": signalition
  },
  {
    "category": "PLV",
    "header": "Stop Rayon Twin Stick",
    "description": "Petit drapeau publicitaire pour rayons de supermarché.",
    "features": ["Fixation adhésive", "Tige flexible", "Impact linéaire"],
    "image": panneaux
  },
  {
    "category": "PLV",
    "header": "Stop Rayon Maxi Gripe en T",
    "description": "Fixation robuste pour panneaux en rayon.",
    "features": ["Maintien fort", "PVC transparent", "Réutilisable"],
    "image": panneaux2
  },
  {
    "category": "PLV",
    "header": "Stop Rayon Magnétique",
    "description": "Se fixe sur les étagères métalliques.",
    "features": ["Aimant puissant", "Pose instantanée", "Orientable"],
    "image": panneaux
  },
  {
    "category": "PLV",
    "header": "Stop Rayon Adhésif",
    "description": "Solution économique pour balisage temporaire.",
    "features": ["Double face mousse", "Usage unique", "Pas cher"],
    "image": panneaux2
  },
  {
    "category": "PLV",
    "header": "PLV de Comptoir Formes Multiples",
    "description": "Petit présentoir de caisse découpé à la forme.",
    "features": ["Découpe laser", "Carton ou PVC", "Personnalisé"],
    "image": signalition
  },
  {
    "category": "PLV",
    "header": "Dangler 3D",
    "description": "Publicité suspendue avec volume.",
    "features": ["Montage facile", "Mobile", "Visibilité 360°"],
    "image": horizontal
  },
  {
    "category": "PLV",
    "header": "Porte Chapelet",
    "description": "Présentoir pour produits en sachets (snacks, bonbons).",
    "features": ["Crochets multiples", "En-tête pub", "Gain de place"],
    "image": signalition
  },
  {
    "category": "PLV",
    "header": "Accroche Rétroviseur",
    "description": "Publicité pour parkings ou concessions automobiles.",
    "features": ["Carton rigide", "Forme crochet", "Recto/Verso"],
    "image": carbanner
  },
  {
    "category": "PLV",
    "header": "Oeillet Call-box",
    "description": "Signalétique pour cabines ou points d'appel.",
    "features": ["Résistant extérieur", "Fixation rapide", "Visible"],
    "image": panneaux
  },
  {
    "category": "PLV",
    "header": "Éventail PVC",
    "description": "Objet publicitaire utile lors d'événements extérieurs.",
    "features": ["PVC souple", "Impression quadri", "Durable"],
    "image": offset
  },
  {
    "category": "PLV",
    "header": "Tapis de Sol Publicitaire",
    "description": "Logo et message à l'entrée de vos locaux.",
    "features": ["Antidérapant", "Lavable", "Haute définition"],
    "image": offset2
  },
  {
    "category": "PLV",
    "header": "Mobil Suspendu",
    "description": "Animation aérienne pour points de vente.",
    "features": ["Léger", "Mouvement naturel", "Fixation plafond"],
    "image": horizontal
  },
  {
    "category": "PLV",
    "header": "Chevalet de Table Incliné",
    "description": "Support menu ou info pour tables et comptoirs.",
    "features": ["Plexi transparent", "Format A4/A5/A6", "Lecture aisée"],
    "image": signalition
  },
  {
    "category": "PLV",
    "header": "Chevalet de Table Droit",
    "description": "Présentation verticale double face.",
    "features": ["Base stable", "Insertion rapide", "Double face"],
    "image": signalition
  },
  {
    "category": "PLV",
    "header": "Chevalet Contemporain",
    "description": "Design haut de gamme en aluminium et plexi.",
    "features": ["Look moderne", "Matériaux nobles", "Premium"],
    "image": signalition
  },
  {
    "category": "PLV",
    "header": "Chevalet Magnétique",
    "description": "Maintien du visuel par aimants.",
    "features": ["Changement express", "Luxe", "Lourd"],
    "image": signalition
  },
  {
    "category": "PLV",
    "header": "Porte Brochure Contemporain",
    "description": "Présentoir de catalogues design.",
    "features": ["Alu/Verre", "Multi-niveaux", "Pliable"],
    "image": offset
  },
  {
    "category": "PLV",
    "header": "Porte Brochure Futuris",
    "description": "Look futuriste pour vos halls d'accueil.",
    "features": ["Forme courbe", "Grande capacité", "Métal"],
    "image": offset2
  },
  {
    "category": "PLV",
    "header": "Porte Brochure Bio-plastique",
    "description": "Option écologique pour votre PLV.",
    "features": ["Recyclable", "Léger", "Transparent"],
    "image": offset
  },
  {
    "category": "PLV",
    "header": "Porte Brochure avec Table",
    "description": "Présentoir combiné avec une surface d'écriture.",
    "features": ["Hybride", "Pratique salons", "Stable"],
    "image": offset2
  },
  {
    "category": "PLV",
    "header": "Ramasse Monnaie",
    "description": "Publicité au point de paiement.",
    "features": ["Verre ou Plastique", "Visuel interchangeable", "Antidérapant"],
    "image": offset
  },
  {
    "category": "PLV",
    "header": "Silhouette Découpée",
    "description": "Personnage ou produit grandeur nature sur pied.",
    "features": ["Découpe forme", "Pliable", "Impact fort"],
    "image": offset2
  },
  {
    "category": "PLV",
    "header": "Homme Sandwich",
    "description": "Support publicitaire porté par une personne.",
    "features": ["Double face", "Bretelles réglables", "Street marketing"],
    "image": offset
  },

  // --- 7. GONFLABLES (11 produits) ---
  {
    "category": "GONFLABLE",
    "header": "Arche Classique",
    "description": "Entrée d'événement ou ligne d'arrivée.",
    "features": ["PVC triple peau", "Soufflerie interne", "Marquage amovible"],
    "image": gonflable
  },
  {
    "category": "GONFLABLE",
    "header": "Arche Personnalisée",
    "description": "Forme spécifique selon votre logo.",
    "features": ["Sur mesure", "Toutes tailles", "Spectaculaire"],
    "image": gonflable2
  },
  {
    "category": "GONFLABLE",
    "header": "Mur Gonflable",
    "description": "Séparation d'espace ou fond de scène rapide.",
    "features": ["Montage express", "Isolant phonique léger", "Grand format"],
    "image": gonflable
  },
  {
    "category": "GONFLABLE",
    "header": "Tente Gonflable",
    "description": "Stand de réception nomade.",
    "features": ["Étanche", "Structure air captif", "Personnalisable"],
    "image": gonflable2
  },
  {
    "category": "GONFLABLE",
    "header": "Aérien Gonflable",
    "description": "Ballon captif à l'hélium pour être vu de très haut.",
    "features": ["Hélium", "PVC 0.18mm", "Visibilité 1km+"],
    "image": gonflable
  },
  {
    "category": "GONFLABLE",
    "header": "Objet Gonflable Géant",
    "description": "Réplique de votre produit en format géant.",
    "features": ["Réplique fidèle", "Impact mémorisé", "Événementiel"],
    "image": gonflable2
  },
  {
    "category": "GONFLABLE",
    "header": "Totem Gonflable",
    "description": "Signalétique verticale sans structure rigide.",
    "features": ["Stable", "Auto-ventilé", "Facile à stocker"],
    "image": gonflable
  },
  {
    "category": "GONFLABLE",
    "header": "Mobilier Publicitaire Gonflable",
    "description": "Poufs et canapés personnalisés.",
    "features": ["Confortable", "Housse lavable", "Fun"],
    "image": gonflable2
  },
  {
    "category": "GONFLABLE",
    "header": "Espace de Convivialité",
    "description": "Structure complexe pour accueillir du public.",
    "features": ["Modulaire", "Ouvert ou fermé", "Original"],
    "image": gonflable
  },
  {
    "category": "GONFLABLE",
    "header": "Table d'Accueil Gonflable",
    "description": "Comptoir léger pour salons extérieurs.",
    "features": ["Plateau rigide", "Socle air", "Pliable"],
    "image": gonflable2
  },
  {
    "category": "GONFLABLE",
    "header": "Figurine en Mouvement (Skydancer)",
    "description": "Tube qui danse pour attirer l'attention.",
    "features": ["Soufflerie puissante", "Mouvement perpétuel", "Attractif"],
    "image": gonflable
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