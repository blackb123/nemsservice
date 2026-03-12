// src/data/siteData.ts
import backdrop from "../assets/product/backdrop1.webp"
import banner from "../assets/banner.webp"
import businesscard from "../assets/businesscard.webp"
import podcast from "../assets/podscast.webp"
import key from "../assets/keys.webp"
import roadstand from "../assets/roadstand.webp"
import card from  "../assets/card.webp"
import signification from "../assets/signalisation.webp"
import tshirt from "../assets/tshirts.webp"
import chapitaux from "../assets/chapitaux.webp"
import * as img from '../assets/COFFRET/coffret_img';

/////// PRODUCT IMAGE
import { 
  backdrop1, backdrop2, banner1, banner2, carbanner, gonflable, gonflable2, horizontal, 
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
 categories : [
  // Section 1: ROLL-UP (from page 6-10)
  { id: 1, name: "ROLL-UP", image: rollup1 },
  
  // Section 2: X-BANNER (from page 10)
  { id: 2, name: "X-BANNER", image: banner1 },
  
  // Section 3: FLYING BANNER (from page 11-17)
  { id: 3, name: "FLYING BANNER", image: banner2 },
  
  // Section 4: BACKDROPS (from page 18-19)
  { id: 4, name: "BACKDROPS", image: backdrop1 },
  
  // Section 5: STOP TROTTOIRS (from page 20-24)
  { id: 5, name: "STOP TROTTOIRS", image: stoptrottoir1 },
  
  // Section 6: PANNEAUX DE SIGNALISATIONS (from page 25-30)
  { id: 6, name: "SIGNALETIQUE", image: signalition },
  
  // Section 7: CADRES MURAUX (from page 31-34)
  { id: 7, name: "CADRES MURAUX", image: panneaux },
  
  // Section 8: STOP RAYON (from page 35-41)
  { id: 8, name: "STOP RAYON", image: panneaux },
  
  // Section 9: PLV (from page 35-41, mixed with Stop Rayon)
  { id: 9, name: "PLV", image: signalition },
  
  // Section 10: CHEVALETS (from page 42-43)
  { id: 10, name: "CHEVALETS", image: signalition },
  
  // Section 11: PORTES BROCHURES (from page 44-46)
  { id: 11, name: "PORTES BROCHURES", image: offset },
  
  // Section 12: GONFLABLES (from page 47-54)
  { id: 12, name: "GONFLABLE", image: gonflable },
  
  // Section 13: CHAPITAUX (from page 55-60)
  { id: 13, name: "CHAPITAUX", image: chapitaux },
  
  // Section 14: ENSEIGNES ET PANNEAUX PUBLICITAIRES (from page 61-63)
  { id: 14, name: "ENSEIGNES", image: panneaux },
  
  // Section 15: POTENCES (from page 64)
  { id: 15, name: "POTENCES", image: panneaux },
  
  // Section 16: IMPRESSION NUMÉRIQUE (from page 68-72)
  { id: 16, name: "IMPRESSION NUMERIQUE", image: businesscard },
  
  // Section 17: OFFSET (from page 68)
  { id: 17, name: "OFFSET", image: offset },
  
  // Section 18: SÉRIGRAPHIE (from page 64-65)
  { id: 18, name: "SERIGRAPHIE", image: serigraphie1 },
  
  // Section 19: BRODERIE INDUSTRIELLE (from page 66)
  { id: 19, name: "BRODERIE", image: serigraphie2 },
  
  // Section 20: TEXTILE & BAGAGERIE (from page 73)
  { id: 20, name: "TEXTILE", image: tshirt },
  
  // Section 21: GADGETS PUBLICITAIRES (from page 73)
  { id: 21, name: "GADGETS", image: offset2 }
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

  
};export const product = [
  // ==================== SECTION 1: ROLL-UP ====================
  // From document page 7-10
  {
    "category": "ROLL-UP",
    "header": "Roll-up Classique",
    "description": "Support d'information polyvalent, simple à monter et facile à transporter.",
    "features": ["Structure aluminium brossé", "02 pieds de stabilisation", "Format : 85 x 200 cm", "Poids : 3 kgs", "Support d'impression: Syntisol 220 microns", "Livré avec sac de transport"],
    "image": rollup1
  },
  {
    "category": "ROLL-UP",
    "header": "Roll-up Standard",
    "description": "Version renforcée du classique pour une meilleure tenue au sol.",
    "features": ["Structure aluminium brossé", "02 pieds de stabilisation", "Format : 85 x 200 cm", "Poids : 4,2 kgs", "Support d'impression: Syntisol 220 microns"],
    "image": rollup1
  },
  {
    "category": "ROLL-UP",
    "header": "Roll-up Luxe",
    "description": "Base esthétique haut de gamme avec changement de visuel facilité.",
    "features": ["Structure aluminium anodisé", "Base esthétique et résistante", "Changement aisé du visuel", "Format : 85 x 200 cm", "Poids : 6,0 kgs", "Option Spot disponible"],
    "image": rollup2
  },
  {
    "category": "ROLL-UP",
    "header": "Roll-up New Look Indoor",
    "description": "Design moderne avec structure épaisse pour une stabilité optimale.",
    "features": ["Structure épaisse en aluminium anodisé", "Stabilité assurée en indoor", "Format : 85 x 200 cm", "Poids : 7 kgs", "Base de 4 kg"],
    "image": rollup1
  },
  {
    "category": "ROLL-UP",
    "header": "Roll-up New Look Indoor XXL",
    "description": "Format large pour un impact visuel maximum.",
    "features": ["Structure épaisse en aluminium anodisé", "Format : 100 x 200 cm", "Poids : 7 kgs", "Stabilité assurée en indoor"],
    "image": rollup2
  },
  {
    "category": "ROLL-UP",
    "header": "Roll-up New Look Indoor with Table",
    "description": "Combiné display et tablette de présentation.",
    "features": ["Tablette intégrée", "Format 85 x 200 cm ou 100 x 200 cm", "Poids : 12 kgs", "Structure épaisse en aluminium anodisé"],
    "image": rollup1
  },

  // ==================== SECTION 2: X-BANNER ====================
  // From document page 10
  {
    "category": "X-BANNER",
    "header": "X-Banner Classique Indoor",
    "description": "Structure en fibre de verre ultra légère pour communiquer efficacement à petit prix.",
    "features": ["Structure en fibre de verre", "Fixation du visuel avec œillets", "Format : L60 x H160 cm", "Poids : 330g", "Temps de montage : moins d'1 minute", "Support d'impression: Syntisol Lourd", "Livré avec housse de transport"],
    "image": banner1
  },
  {
    "category": "X-BANNER",
    "header": "X-Banner Socle Outdoor",
    "description": "Structure stable grâce à son embase lestable pour utilisation extérieure.",
    "features": ["Structure en fibre de verre", "Base en PVC avec réserve de 3L", "Lestable eau/sable", "Format : L60 x H160 cm", "Poids : 2,5 kgs", "Temps de montage : moins de 3 minutes"],
    "image": banner1
  },

  // ==================== SECTION 3: FLYING BANNER ====================
  // From document page 12-17
  {
    "category": "FLYING BANNER",
    "header": "Flying Banner Rectangular",
    "description": "Drapeau format rectangulaire pour une surface de lecture maximale.",
    "features": ["Impression sublimation HD sur maille polyester 120gr", "Recto/verso visible des deux côtés", "Structure en fibre de carbone", "Largeur: 0,80m", "Hauteur: 2,90m, 4,1m et 5,2m", "Livré avec sac de transport"],
    "image": banner2
  },
  {
    "category": "FLYING BANNER",
    "header": "Flying Banner Teardrop",
    "description": "Drapeau en forme de goutte d'eau, très dynamique.",
    "features": ["Forme goutte d'eau", "Impression sublimation HD sur maille polyester 120gr", "Recto/verso visible", "Structure en fibre de carbone", "Hauteur: 3m, 4m et 5m", "Livré avec sac de transport"],
    "image": banner2
  },
  {
    "category": "FLYING BANNER",
    "header": "Flying Banner Giant Flag",
    "description": "Mât géant pour une visibilité de très loin.",
    "features": ["Structure aluminium", "Hauteur réglable jusqu'à 5m et 7m", "Base en plastique à remplir d'eau ou de sable", "Mât télescopique", "Couleur argent"],
    "image": banner2
  },
  {
    "category": "FLYING BANNER",
    "header": "Backpack Banner",
    "description": "Drapeau sur sac à dos pour street marketing.",
    "features": ["Sac à dos ergonomique", "Système X-banner ou Flying banner", "Ultra mobile", "Idéal pour street marketing"],
    "image": carbanner
  },
  {
    "category": "FLYING BANNER",
    "header": "Flying Milles Banner PDV XL",
    "description": "Bannière verticale grand format pour point de vente.",
    "features": ["Structure acier laqué et peint", "Très robuste", "Hauteur: 5m", "Largeur: 1m", "Impression sublimation sur toile", "Finition couture"],
    "image": banner2
  },
  {
    "category": "FLYING BANNER",
    "header": "Flying Milles Banner PDV XXL",
    "description": "Le plus grand format de bannière verticale pour PDV.",
    "features": ["Structure acier laqué et peint", "Version robuste tropicalisée", "Utilisation continue sur point de vente", "Haute qualité"],
    "image": banner2
  },
  {
    "category": "FLYING BANNER",
    "header": "Flashies Rotative Car Banner",
    "description": "Drapeau rotatif pour véhicules qui tourne au moindre souffle.",
    "features": ["Fixation sur vitre", "Effet rotatif", "Hauteur: 75x33cm", "Flag 4: 56x24cm", "Résistance au vent: 90 km/h", "Se verrouille en remontant la vitre"],
    "image": carbanner
  },
  {
    "category": "FLYING BANNER",
    "header": "Car Windows Banner",
    "description": "Bannière publicitaire à clipser sur les vitres de voiture.",
    "features": ["Clip PVC robuste", "Impression recto/verso", "Marketing mobile", "Fixation sur vitre"],
    "image": carbanner
  },
  {
    "category": "FLYING BANNER",
    "header": "Mât à Potence Rotative Outdoor",
    "description": "Mât fixe extérieur avec bras de puissance rotatif.",
    "features": ["Mât aluminium cylindrique", "Rotatif 360°", "Hauteur: 6 à 10m", "En 1 ou 2 parties", "Solution permanente", "Pour pavillons verticaux"],
    "image": horizontal
  },
  {
    "category": "FLYING BANNER",
    "header": "Pop-Up Horizontal Banner",
    "description": "Bannière de sol auto-déployante pour extérieur.",
    "features": ["Structure ressort", "Double face arrondie", "Hauteur: 70/100/100/136 cm", "Largeur: 120/200/250/273 cm", "Poids: 2,3kg à 5kg", "Piquets de fixation inclus", "Sac de transport fourni"],
    "image": horizontal
  },

  // ==================== SECTION 4: BACKDROPS ====================
  // From document page 18-19
  {
    "category": "BACKDROPS",
    "header": "Backdrop Stand Parapluie",
    "description": "Mur d'images pliable pour fond de stand professionnel.",
    "features": ["Structure parapluie pop-up", "Tissu polyester", "Fixation du visuel par système velcro", "Livré avec sac ou valise de transport à roulettes"],
    "image": backdrop1
  },
  {
    "category": "BACKDROPS",
    "header": "Backdrop Mur d'image Horizontal",
    "description": "Structure tubulaire pour grands visuels horizontaux.",
    "features": ["Tissu stretch infroissable", "Montage sans outil", "Format personnalisé", "Structure aluminium"],
    "image": backdrop2
  },
  {
    "category": "BACKDROPS",
    "header": "Backdrop Mur d'image Vertical",
    "description": "Format portrait pour signalétique d'accueil.",
    "features": ["Faible encombrement", "Haute résolution", "Double face possible", "Idéal photo call"],
    "image": backdrop1
  },
  {
    "category": "BACKDROPS",
    "header": "Backdrop Panoramique",
    "description": "Mur d'images extra-large pour une immersion totale.",
    "features": ["Jusqu'à 6m de large", "Visuel continu", "Structure aluminium anodisé", "Dimensions: L3m x H2,25m ou L6m x H2,25m", "+32cm sur les côtés", "Sac de transport à roulettes"],
    "image": backdrop2
  },
  {
    "category": "BACKDROPS",
    "header": "Backdrop Mini",
    "description": "Version de table ou petit espace du mur d'image.",
    "features": ["Format compact", "Idéal comptoir", "Léger", "Facile à transporter"],
    "image": backdrop1
  },

  // ==================== SECTION 5: STOP TROTTOIRS ====================
  // From document page 20-24
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs modèle Structure",
    "description": "Cadre aluminium classique sur pieds pour PLV extérieure.",
    "features": ["Structure en acier galvanisé", "Cadre clippant recto/verso en aluminium", "Feuille PVC transparent protectrice", "Dimension visuel: L60 x H85cm", "Affichage recto verso"],
    "image": stoptrottoir1
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs modèle Base Bac à Eau",
    "description": "Stabilité maximale grâce à son socle réservoir d'eau.",
    "features": ["Structure PVC avec réservoir d'eau", "Roulettes intégrées", "Cadre monté sur ressort", "Dimension visuel: L60 x H85cm", "Affichage recto verso", "Pied détachable"],
    "image": stoptrottoir2
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs modèle Chevalet",
    "description": "Chevalet bois ou alu pliable.",
    "features": ["Pliable", "Ardoise ou affiche", "Économique", "Léger"],
    "image": stoptrottoir1
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs Chevalet PVC",
    "description": "Chevalet plastique léger et imputrescible.",
    "features": ["Matière acrylique", "Epaisseur 4mm", "Impression Quadri UV", "Format maxi 80x120cm", "Double face", "Léger et transportable"],
    "image": stoptrottoir1
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs Chevalet PVC Blanc",
    "description": "Chevalet en plastique blanc avec surface effaçable.",
    "features": ["PVC blanc", "Ecriture à la craie ou feutre liquide", "Double face", "Epaisseur 4mm", "Réutilisable"],
    "image": stoptrottoir1
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs Géant",
    "description": "Format A0 ou supérieur pour voir de loin.",
    "features": ["Format XXL", "Dimension: 60x150cm", "Structure acier galvanisé", "Cadre clippant", "Haute stabilité"],
    "image": stoptrottoir2
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs Robuste",
    "description": "Châssis acier pour usage intensif.",
    "features": ["Acier laqué", "Anti-corrosion", "Poids élevé", "Grande résistance"],
    "image": stoptrottoir2
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs Tropicalisé",
    "description": "Conçu pour les climats humides et forte chaleur.",
    "features": ["Traitement anti-UV", "Joints étanches", "Alu renforcé", "Résistant aux intempéries"],
    "image": stoptrottoir1
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs Rotatif",
    "description": "Affiche tournant avec le vent.",
    "features": ["Socle acier galvanisé", "Elément rotatif acier zingué", "Hauteur: 115cm", "Largeur: 41cm", "Dimension hors tout: 133x50cm", "Poids: 24 kgs", "Ventilateur incorporé"],
    "image": stoptrottoir2
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Mini Totem Indoor Eclairé",
    "description": "Mini totem lumineux double face pour intérieur.",
    "features": ["Métal et aluminium anodisé", "Double face", "Hauteur: 170cm", "Largeur: 60cm", "Poids: 12 kgs", "PVC transparent protecteur", "Impression sur backlight"],
    "image": stoptrottoir1
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Totem Outdoor",
    "description": "Signalétique verticale fixe pour extérieur scellée au sol.",
    "features": ["Structure acier", "Faces PVC", "Scellable au sol sur massif béton", "Faces planes ou galbées", "Lumineux ou non"],
    "image": stoptrottoir1
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs Bois",
    "description": "Aspect naturel pour restaurants et boutiques.",
    "features": ["Bois traité", "Surface craie", "Élégant", "Aspect naturel"],
    "image": stoptrottoir2
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs Magnétique",
    "description": "Changement de visuel ultra-rapide par plaques aimantées.",
    "features": ["Façade lexan", "Contours aimantés", "Étanchéité IP54", "Changement rapide"],
    "image": stoptrottoir1
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs Ressort",
    "description": "Modèle avec ressorts pour absorber les chocs et le vent.",
    "features": ["Ressorts acier", "Flexibilité", "Base stable", "Absorption des chocs"],
    "image": stoptrottoir2
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Homme Sandwich",
    "description": "Support publicitaire porté par une personne.",
    "features": ["Double face", "Dimension visuel: 60x60cm", "PVC expansé 6mm", "Bretelles réglables", "Street marketing", "Découpe à la forme"],
    "image": offset
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "PLV Silhouette Découpée sur Pied",
    "description": "Personnage ou produit grandeur nature sur pied.",
    "features": ["Découpe forme", "Pliable", "Impact fort", "Visibilité maximale"],
    "image": offset2
  },

  // ==================== SECTION 6: PANNEAUX DE SIGNALISATIONS ====================
  // From document page 26-30
  {
    "category": "SIGNALETIQUE",
    "header": "Plaque de Porte Permanente",
    "description": "Identification des bureaux et salles à information fixe.",
    "features": ["Aluminium", "Insert papier possible", "Fixation adhésive", "Sur mesure", "Large choix de matières"],
    "image": signalition
  },
  {
    "category": "SIGNALETIQUE",
    "header": "Plaque de Porte Personnalisable",
    "description": "Plaque modulable permettant de changer facilement les informations.",
    "features": ["Modulable", "Changement rapide", "Insert papier sous plaque transparente", "Plexiglas ou inox"],
    "image": signalition
  },
  {
    "category": "SIGNALETIQUE",
    "header": "Plaque Diamant Complète",
    "description": "Signalétique premium en relief.",
    "features": ["Effet 3D", "Plexiglas", "Entretoises inox", "Finition haut de gamme"],
    "image": signalition
  },
  {
    "category": "SIGNALETIQUE",
    "header": "Panneau Directionnel Modèle Potence",
    "description": "Signalétique perpendiculaire au mur pour visibilité dans les couloirs.",
    "features": ["Double face", "Alu anodisé", "Visibilité couloir", "Fléchage directionnel"],
    "image": panneaux
  },
  {
    "category": "SIGNALETIQUE",
    "header": "Panneau Directionnel Modèle Mural",
    "description": "Panneaux d'information muraux fixes.",
    "features": ["PVC ou Alu", "Format sur mesure", "Impression directe", "Fléchage inclus"],
    "image": panneaux2
  },
  {
    "category": "SIGNALETIQUE",
    "header": "Panneau de Plafond Suspendu",
    "description": "Signalétique suspendue pour orientation dans grands espaces.",
    "features": ["Suspension câbles", "Double face", "Léger", "Guidage vertical"],
    "image": signalition
  },
  {
    "category": "SIGNALETIQUE",
    "header": "Plaque de Table",
    "description": "Identification nominative pour bureaux ou réunions.",
    "features": ["Alu plié", "Changement nom aisé", "Design sobre", "Pour bureau"],
    "image": signalition
  },
  {
    "category": "SIGNALETIQUE",
    "header": "Oriflamme Classique",
    "description": "Porte affiche pour stand et point de vente.",
    "features": ["Impression quadri sublimation", "Deux profiles fixés haut et bas", "Crochets de suspension", "Facile à mettre en place"],
    "image": signalition
  },
  {
    "category": "SIGNALETIQUE",
    "header": "Oriflamme Standard",
    "description": "Kakémono sur-mesure avec qualité d'impression irréprochable.",
    "features": ["Format sur-mesure", "Bâche, tissu polyester ou PVC souple", "Finition œillets ou baguettes", "Option recto/verso"],
    "image": signalition
  },

  // ==================== SECTION 7: CADRES MURAUX ====================
  // From document page 32-34
  {
    "category": "CADRES MURAUX",
    "header": "Cadre Click-Clack Modèle Mural Simple",
    "description": "Cadre recto en aluminium anodisé pour intérieur.",
    "features": ["Aluminium anodisé", "Angles 45° renforcés", "Ouverture click-clack", "Formats: A4, A3, A2, A1, A0", "Profil 2,5 ou 3,5cm"],
    "image": panneaux
  },
  {
    "category": "CADRES MURAUX",
    "header": "Cadre Click-Clack Modèle Mural Arrondi",
    "description": "Cadre à coins arrondis pour plus de sécurité.",
    "features": ["Aluminium anodisé", "Coins arrondis", "Ouverture click-clack", "Profil bombé", "Formats: A4, A3, A2, A1, A0"],
    "image": panneaux2
  },
  {
    "category": "CADRES MURAUX",
    "header": "Cadre Click-Clack Modèle Mural Etanche Outdoor",
    "description": "Cadre étanche pour utilisation en extérieur.",
    "features": ["Etanche", "Aluminium anodisé", "Ouverture click-clack", "Coins arrondis", "Formats: A4, A3, A2, A1, A0"],
    "image": panneaux
  },
  {
    "category": "CADRES MURAUX",
    "header": "Cadre Click-Clack Modèle Mural Alu-Vitre",
    "description": "Cadre double face pour communication sur vitrine.",
    "features": ["Double face", "Fixation sur vitre par adhésif", "2 protecteurs plexis", "Aluminium anodisé", "Formats: A4, A3, A2, A1, A0, 50x70cm, 70x100cm"],
    "image": panneaux2
  },
  {
    "category": "CADRES MURAUX",
    "header": "Cadre Click-Clack Modèle Eclairé Suspendu",
    "description": "Cadre lumineux à LED à suspendre double face.",
    "features": ["Lumineux LED", "Double face", "Suspension", "Ouverture click-clack 4 côtés", "PVC transparent", "Formats: A4 à A0"],
    "image": horizontal
  },

  // ==================== SECTION 8: STOP RAYON ====================
  // From document page 36-41
  {
    "category": "STOP RAYON",
    "header": "Stop Rayon Twin Stick Alu",
    "description": "Fixation pour PLV en lamelle d'aluminium.",
    "features": ["Lamelle aluminium", "03 faces adhésives", "Evite le vrillage", "Excellente adhérence", "Fixation adhésive"],
    "image": panneaux
  },
  {
    "category": "STOP RAYON",
    "header": "Stop Rayon Maxi Gripe en T",
    "description": "Support grip pour affiches en drapeau.",
    "features": ["S'insère dans porte-étiquette", "Support carton 1200g ou PVC", "Epaisseur visuel jusqu'à 8mm", "Adhésive mousse", "Solution économique"],
    "image": panneaux2
  },
  {
    "category": "STOP RAYON",
    "header": "Stop Rayon Magnétique Inclinable",
    "description": "Fixation magnétique sur étagères métalliques.",
    "features": ["Aimant puissant", "Inclinaison réglable", "Bras surélevés", "Longueur bras: 20, 30, 40, 60cm", "Pose instantanée"],
    "image": panneaux
  },
  {
    "category": "STOP RAYON",
    "header": "Stop Rayon Adhésif",
    "description": "Solution économique pour balisage temporaire.",
    "features": ["Double face mousse", "Usage unique", "Economique", "Temporaire"],
    "image": panneaux2
  },
  {
    "category": "PLV",
    "header": "PLV de Comptoir Multiples Formes",
    "description": "Petit présentoir de caisse découpé à la forme.",
    "features": ["Découpe laser", "Carton ou PVC", "Personnalisé", "Pour comptoir/caisse", "Attire l'attention"],
    "image": signalition
  },
  {
    "category": "PLV",
    "header": "Dangler Modèle Classique",
    "description": "PLV suspendue pour communication sans occuper d'espace au sol.",
    "features": ["Suspension plafond", "PVC ou Carton", "Recto/verso", "Formes: carré, rectangulaire, circulaire", "Idéal promotions"],
    "image": horizontal
  },
  {
    "category": "PLV",
    "header": "Dangler Modèle 3D",
    "description": "Publicité suspendue avec volume.",
    "features": ["Effet 3D", "Montage facile", "Mobile", "Visibilité 360°", "PVC ou Carton"],
    "image": horizontal
  },
  {
    "category": "PLV",
    "header": "Dangler Modèle 3D Façonnable",
    "description": "Dangler 3D personnalisable selon vos besoins.",
    "features": ["Forme personnalisée", "Effet 3D", "PVC ou Carton", "Recto/verso"],
    "image": horizontal
  },
  {
    "category": "PLV",
    "header": "Porte Chapelet",
    "description": "Présentoir pour produits en sachets (snacks, bonbons).",
    "features": ["Crochets multiples", "En-tête publicitaire", "Gain de place", "Pour rayons"],
    "image": signalition
  },
  {
    "category": "PLV",
    "header": "PLV Accroche Rétroviseur",
    "description": "Support de communication pour intérieur de taxi.",
    "features": ["PVC expansé 6mm", "Format 9x26cm", "Impression quadri UV recto/verso", "Découpe à forme", "Entaille d'accroche"],
    "image": carbanner
  },
  {
    "category": "PLV",
    "header": "Oeillet Call-Box",
    "description": "PLV pour marchands sur trottoirs à accrocher sur parasols.",
    "features": ["Résistant extérieur", "Fixation rapide", "Visible", "Formats: A5, A4, A3, 40x40cm", "PVC ABS 6-8mm"],
    "image": panneaux
  },
  {
    "category": "PLV",
    "header": "Eventail Personnalisé PVC",
    "description": "Objet publicitaire utile lors d'événements extérieurs.",
    "features": ["PVC souple 0,80mm ou 6mm", "Impression quadri UV recto/verso", "Dimensions: 20x14cm", "Découpe à forme", "Vernis UV selectif"],
    "image": offset
  },
  {
    "category": "PLV",
    "header": "Tapis de Sol Publicitaire",
    "description": "Logo et message à l'entrée de vos locaux.",
    "features": ["Antidérapant", "Lavable", "Haute définition", "Résistant"],
    "image": offset2
  },
  {
    "category": "PLV",
    "header": "Mobil Suspendu",
    "description": "Animation aérienne pour points de vente.",
    "features": ["Léger", "Mouvement naturel", "Fixation plafond", "Attire le regard"],
    "image": horizontal
  },

  // ==================== SECTION 9: CHEVALETS DE TABLE ====================
  // From document page 43
  {
    "category": "CHEVALETS",
    "header": "Chevalet de Table Classique Incliné",
    "description": "Support incliné en acrylique/plexiglas pour affiches.",
    "features": ["Acrylique/PMMA", "Bords polis", "Design incliné", "Insertion facile", "Option impression directe sur PVC"],
    "image": signalition
  },
  {
    "category": "CHEVALETS",
    "header": "Chevalet de Table Classique Droit",
    "description": "Support droit en acrylique/plexiglas pour présentation verticale.",
    "features": ["Acrylique/PMMA", "Bords polis", "Présentation verticale", "Double face possible", "Option impression directe"],
    "image": signalition
  },
  {
    "category": "CHEVALETS",
    "header": "Chevalet de Table Contemporain",
    "description": "Design haut de gamme en aluminium et plexi.",
    "features": ["Look moderne", "Matériaux nobles", "Premium", "Design épuré"],
    "image": signalition
  },
  {
    "category": "CHEVALETS",
    "header": "Chevalet de Table Magnétique",
    "description": "Maintien du visuel par aimants.",
    "features": ["Maintien par aimants", "Changement express", "Luxe", "Stable"],
    "image": signalition
  },
  {
    "category": "CHEVALETS",
    "header": "Chevalet Economique PVC Expansé",
    "description": "Solution économique en PVC expansé.",
    "features": ["PVC expansé", "Economique", "Léger", "Bon rapport qualité/prix"],
    "image": signalition
  },

  // ==================== SECTION 10: PORTES BROCHURES ====================
  // From document page 45-46
  {
    "category": "PORTES BROCHURES",
    "header": "Porte Brochures de Table Modèle Contemporain",
    "description": "Présentoir de catalogues design pour table.",
    "features": ["Design contemporain", "Alu/Verre", "Multi-niveaux", "Pliable", "Finition soignée"],
    "image": offset
  },
  {
    "category": "PORTES BROCHURES",
    "header": "Porte Brochures de Table Modèle Futuris",
    "description": "Look futuriste pour vos halls d'accueil.",
    "features": ["Forme courbe", "Grande capacité", "Métal", "Design futuriste"],
    "image": offset2
  },
  {
    "category": "PORTES BROCHURES",
    "header": "Porte Brochures Bio-plastique",
    "description": "Option écologique pour votre PLV.",
    "features": ["Recyclable", "Léger", "Transparent", "Matériau écologique"],
    "image": offset
  },
  {
    "category": "PORTES BROCHURES",
    "header": "Porte Brochures sur Pied avec Table",
    "description": "Présentoir combiné avec une surface d'écriture.",
    "features": ["Hybride", "Pratique salons", "Stable", "Avec tablette"],
    "image": offset2
  },
  {
    "category": "PORTES BROCHURES",
    "header": "Porte Brochures sur Pied Modèle Simple",
    "description": "Structure rétractable qui se déplie en accordéon.",
    "features": ["Structure polycarbonate", "Hauteur: 126cm", "Format brochures A4", "Pliable", "Valise souple incluse", "Poids: 7 kgs"],
    "image": offset
  },
  {
    "category": "PORTES BROCHURES",
    "header": "Porte Brochures sur Pied Modèle Roulette",
    "description": "Présentoir sur roulettes pour grande capacité.",
    "features": ["Hauteur: 156cm", "Format brochures A4", "Très stable", "Polycarbonate résistant", "Valise renforcée", "Poids: 9 kgs"],
    "image": offset2
  },
  {
    "category": "PORTES BROCHURES",
    "header": "Ramasse Monnaie",
    "description": "Publicité au point de paiement.",
    "features": ["Verre ou Plastique", "Visuel interchangeable", "Antidérapant", "Pour caisse"],
    "image": offset
  },
  {
    "category": "PORTES BROCHURES",
    "header": "Porte Affiches sur Pied",
    "description": "Présentoir pour affiches sur pied.",
    "features": ["Structure stable", "Pour affiches", "Mobile", "Professionnel"],
    "image": offset
  },

  // ==================== SECTION 11: GONFLABLES ====================
  // From document page 48-54
  {
    "category": "GONFLABLE",
    "header": "Arche Gonflable Classique",
    "description": "Arche pour départ ou arrivée de course, entrée de manifestation.",
    "features": ["Structure ultra-résistante triple peau", "Dimensions: 450x320cm, 650x450cm, 850x620cm", "PVC tarp lin", "Traitement anti-feu", "Impression quadri sublimation", "Souffleur inclus"],
    "image": gonflable
  },
  {
    "category": "GONFLABLE",
    "header": "Arche Gonflable Personnalisée",
    "description": "Forme spécifique selon votre logo.",
    "features": ["Sur mesure", "Toutes tailles", "Spectaculaire", "Structure triple peau", "Traitement anti-feu"],
    "image": gonflable2
  },
  {
    "category": "GONFLABLE",
    "header": "Mur Gonflable",
    "description": "Séparation d'espace ou fond de scène rapide.",
    "features": ["Dimensions: 300x230cm, 600x230cm", "Structure triple peau", "PVC tarp lin", "Montage express", "Isolant phonique léger"],
    "image": gonflable
  },
  {
    "category": "GONFLABLE",
    "header": "Tente Gonflable",
    "description": "Stand de réception nomade pour foires et événements.",
    "features": ["Toile thermo-soudée", "Dimensions: 3,2x3,2x2,4m à 5,8x5,8x3,9m", "Etanche", "Pompe électrique incluse", "Sac de transport", "Poids: 13,5kg à 21kg"],
    "image": gonflable2
  },
  {
    "category": "GONFLABLE",
    "header": "Gonflable Aérien (Ballon Hélium)",
    "description": "Ballon captif à l'hélium pour être vu de très loin.",
    "features": ["Hélium", "PVC 0.18mm", "Visibilité jusqu'à 1km+", "Tailles: 1,60m à 3,5m", "1 à 4 faces", "Intérieur/extérieur"],
    "image": gonflable
  },
  {
    "category": "GONFLABLE",
    "header": "Objet Gonflable Géant",
    "description": "Réplique de votre produit en format géant.",
    "features": ["Réplique fidèle", "Impact mémorisé", "Événementiel", "Sur mesure"],
    "image": gonflable2
  },
  {
    "category": "GONFLABLE",
    "header": "Totem Gonflable (Colonne)",
    "description": "Signalétique verticale sans structure rigide.",
    "features": ["Auto-ventilé", "Dimensions: 45x90cm à 60x300cm", "Visible à 360°", "Impression 2 faces ou totale", "Minimun encombrement au sol"],
    "image": gonflable
  },
  {
    "category": "GONFLABLE",
    "header": "Mobilier Publicitaire Gonflable",
    "description": "Poufs et canapés personnalisés.",
    "features": ["Structure PVC souple", "Couverture polyester sublimé", "Confortable", "Housse lavable", "Option imitation cuir", "Peu encombrant"],
    "image": gonflable2
  },
  {
    "category": "GONFLABLE",
    "header": "Espace de Convivialité Gonflable",
    "description": "Structure complexe pour accueillir du public.",
    "features": ["Modulaire", "Ouvert ou fermé", "Original", "Sur mesure"],
    "image": gonflable
  },
  {
    "category": "GONFLABLE",
    "header": "Table d'Accueil Gonflable",
    "description": "Comptoir léger pour salons extérieurs.",
    "features": ["Plateau rigide", "Socle air", "Pliable", "Léger"],
    "image": gonflable2
  },
  {
    "category": "GONFLABLE",
    "header": "Figurine en Mouvement (Skydancer)",
    "description": "Tube qui danse pour attirer l'attention.",
    "features": ["Soufflerie puissante", "Mouvement perpétuel", "Hauteur jusqu'à 7m", "Attractif", "Option éclairage LED", "1 ou 2 jambes"],
    "image": gonflable
  },

  // ==================== SECTION 12: CHAPITAUX / TENTES ====================
  // From document page 56-60
  {
    "category": "CHAPITEAUX",
    "header": "Tente Classique semi-brandé petit gabarit",
    "description": "Tente pliable pour manifestation, toit imprimé, murs blancs.",
    "features": ["Structure aluminium pliante", "Dimension: 2,5x2,5x2,5m", "Bâche imperméable", "Norme anti-feu M2", "3 murs pleins imprimés recto", "4 frontons personnalisables"],
    "image": chapitaux
  },
  {
    "category": "CHAPITEAUX",
    "header": "Tente Classique brandé petit gabarit",
    "description": "Tente entièrement personnalisée petit format.",
    "features": ["Personnalisation 360°", "Dimension: 2x2m, 3x3m", "Structure aluminium", "Toit et murs imprimés", "Sac de transport"],
    "image": chapitaux
  },
  {
    "category": "CHAPITEAUX",
    "header": "Tente Classique semi-brandé grand gabarit",
    "description": "Grande tente 4,5x3m pour espaces importants.",
    "features": ["Dimension: 300x450cm", "Structure aluminium télescopique", "Toiles de fermeture: 450x300cm", "Option porte zippée", "Poids structure+toit: 46,1kg", "Kit haubanage inclus"],
    "image": chapitaux
  },
  {
    "category": "CHAPITEAUX",
    "header": "Tente Gazebo Classique",
    "description": "Gazebo aux couleurs vives pour événements.",
    "features": ["Structure légère", "Couleurs vives", "Montage rapide", "Personnalisable"],
    "image": chapitaux
  },
  {
    "category": "CHAPITEAUX",
    "header": "Tente Gazebo Boutique",
    "description": "Gazebo avec configuration boutique.",
    "features": ["Configuration boutique", "Comptoir intégré", "Personnalisable", "Professionnel"],
    "image": chapitaux
  },
  {
    "category": "CHAPITEAUX",
    "header": "Comptoir d'Accueil Fronton Classique",
    "description": "Comptoir promotionnel en PVC pour salon.",
    "features": ["PVC léger", "Hauteur: 204,5cm", "Largeur: 81cm", "Profondeur: 47cm", "Fronton inclus", "Poids: 9,8kg", "Sac de transport"],
    "image": chapitaux
  },
  {
    "category": "CHAPITEAUX",
    "header": "Comptoir d'Accueil sans Fronton",
    "description": "Comptoir avec grande surface de communication.",
    "features": ["Structure aluminium pliable", "Plateau + tablette", "Format visuel: L183xH90cm", "Fixation velcro", "Poids: 17kg", "Sac de transport"],
    "image": chapitaux
  },
  {
    "category": "CHAPITEAUX",
    "header": "Parasol Publicitaire",
    "description": "Parasol rond personnalisé pour terrasse.",
    "features": ["Diamètre: 1,80 à 3m", "Toile polyester 165g", "Traitement déperlant", "Mât acier blanc 2 parties", "Impression sublimation", "Sac de transport"],
    "image": chapitaux
  },

  // ==================== SECTION 13: ENSEIGNES ET PANNEAUX ====================
  // From document page 62-63
  {
    "category": "ENSEIGNES",
    "header": "Enseigne Bandeau",
    "description": "Enseigne en applique à fixer à plat contre le mur.",
    "features": ["Application murale", "Différentes formes", "Eclairage possible", "Graphique personnalisé"],
    "image": panneaux
  },
  {
    "category": "ENSEIGNES",
    "header": "Enseigne Drapeau",
    "description": "Enseigne perpendiculaire au mur.",
    "features": ["Fixation perpendiculaire", "Double face", "Visible de loin", "Aluminium"],
    "image": panneaux2
  },
  {
    "category": "ENSEIGNES",
    "header": "Lettres Enseignes Boîtiers",
    "description": "Lettres 3D pouvant être rétro-éclairées.",
    "features": ["Lettres 3D", "Rétro-éclairées possible", "Différents matériaux", "Epaisseurs variées"],
    "image": panneaux
  },
  {
    "category": "ENSEIGNES",
    "header": "Lettres Enseignes Découpées",
    "description": "Lettres découpées sans caisson.",
    "features": ["Découpées", "Sans caisson", "Aluminium ou PVC", "Fixation directe"],
    "image": panneaux2
  },
  {
    "category": "ENSEIGNES",
    "header": "Lettres Enseignes en Relief",
    "description": "Lettres avec effet de relief.",
    "features": ["Effet relief", "3D", "Différentes finitions", "Premium"],
    "image": panneaux
  },

  // ==================== SECTION 14: POTENCES ====================
  // From document page 64
  {
    "category": "POTENCES",
    "header": "Potence Modèle Classique",
    "description": "Support pour drapeau fixé au mur.",
    "features": ["Fixation murale", "Bras horizontal", "Aluminium", "Pour drapeau"],
    "image": panneaux
  },
  {
    "category": "POTENCES",
    "header": "Potence Drapeaux Bâches Tendues",
    "description": "Potence pour bâches tendues.",
    "features": ["Pour bâche tendue", "Tension réglable", "Double face possible"],
    "image": panneaux2
  },
  {
    "category": "POTENCES",
    "header": "Potence Porte Fanion 90°",
    "description": "Potence à 90° pour fanion.",
    "features": ["Angle 90°", "Pour fanion", "Fixation murale", "Aluminium"],
    "image": panneaux
  },
  {
    "category": "POTENCES",
    "header": "Potence Verticale",
    "description": "Support vertical pour affichage.",
    "features": ["Fixation verticale", "Pour affiche", "Aluminium"],
    "image": panneaux2
  },
  {
    "category": "POTENCES",
    "header": "Potence sur Pied Porte Drapeaux non Flottant",
    "description": "Porte drapeau sur pied fixe.",
    "features": ["Sur pied", "Drapeau non flottant", "Stable", "Pour extérieur"],
    "image": panneaux
  },
  {
    "category": "POTENCES",
    "header": "Potence sur Pied Porte Drapeaux Flottant",
    "description": "Porte drapeau sur pied avec drapeau flottant.",
    "features": ["Sur pied", "Drapeau flottant", "Rotatif possible", "Pour extérieur"],
    "image": panneaux2
  },

  // ==================== SECTION 15: IMPRESSION NUMÉRIQUE ====================
  // From document page 69-72
  {
    "category": "IMPRESSION NUMERIQUE",
    "header": "Photocopies / Impressions",
    "description": "Photocopies et impressions haute qualité.",
    "features": ["Noir et couleur", "Formats A3/A4/...", "Différents papiers", "Coupe, pliage, plastification"],
    "image": businesscard
  },
  {
    "category": "IMPRESSION NUMERIQUE",
    "header": "Tracés de Plans",
    "description": "Impression professionnelle de plans jusqu'à 2 pouces.",
    "features": ["Noir et couleur", "Coupe et pliage", "Assemblage", "Scannérisation"],
    "image": businesscard
  },
  {
    "category": "IMPRESSION NUMERIQUE",
    "header": "Brochures / Catalogues",
    "description": "Brochures reliées (spirale, thermocollée, piquée).",
    "features": ["Formats A3/A4/A5", "Noir et couleur", "Recto ou recto/verso", "Différentes reliures"],
    "image": businesscard
  },
  {
    "category": "IMPRESSION NUMERIQUE",
    "header": "Affiches et Posters",
    "description": "Impression grand format pour vos affiches.",
    "features": ["Papier jusqu'à 160g", "Tous formats", "Toutes quantités", "Impression express"],
    "image": businesscard
  },
  {
    "category": "IMPRESSION NUMERIQUE",
    "header": "Plaquettes",
    "description": "Plaquettes professionnelles pour entreprise.",
    "features": ["Noir et couleur", "Recto ou recto/verso", "Différents grammages", "Finitions: pliage, rainage"],
    "image": businesscard
  },
  {
    "category": "IMPRESSION NUMERIQUE",
    "header": "Flyers",
    "description": "Flyers publicitaires pour tous vos événements.",
    "features": ["Dès 115g", "Couché mat ou brillant", "Avec ou sans pelliculage", "Recto ou recto/verso"],
    "image": businesscard
  },
  {
    "category": "IMPRESSION NUMERIQUE",
    "header": "Cartes de Visite",
    "description": "Cartes de visite professionnelles.",
    "features": ["Papier 250 à 350g", "Couché mat ou brillant", "Avec ou sans pelliculage", "Découpe possible", "Vernis sélectif"],
    "image": businesscard
  },
  {
    "category": "IMPRESSION NUMERIQUE",
    "header": "Dépliants",
    "description": "Dépliants pour présenter vos produits.",
    "features": ["Plusieurs volets", "Différents formats", "Qualité professionnelle"],
    "image": businesscard
  },
  {
    "category": "IMPRESSION NUMERIQUE",
    "header": "Papiers à Entête",
    "description": "Papier à entête personnalisé pour votre courrier.",
    "features": ["Noir et couleur", "Recto ou recto/verso", "Différents papiers", "Finitions variées"],
    "image": businesscard
  },
  {
    "category": "IMPRESSION NUMERIQUE",
    "header": "Cartes Postales / Correspondance",
    "description": "Cartes postales personnalisées.",
    "features": ["Noir et couleur", "Recto ou recto/verso", "Différents grammages", "Finitions variées"],
    "image": businesscard
  },

  // ==================== SECTION 16: OFFSET / SÉRIGRAPHIE ====================
  {
    "category": "OFFSET",
    "header": "Offset",
    "description": "Impression offset pour grandes quantités.",
    "features": ["Grandes quantités", "Qualité supérieure", "Noir et couleur", "Tous formats"],
    "image": offset
  },
  {
    "category": "SERIGRAPHIE",
    "header": "Sérigraphie Industrielle",
    "description": "Impression sérigraphique pour textile et objets.",
    "features": ["Impressions au trait", "Impressions à plat", "Grandes séries", "Sur textile et objets"],
    "image": serigraphie1
  },

  // ==================== SECTION 17: BRODERIE ====================
  {
    "category": "BRODERIE",
    "header": "Broderie Industrielle",
    "description": "Broderie personnalisée sur textile.",
    "features": ["Sur vêtements", "Logo personnalisé", "Haute qualité", "Durable"],
    "image": serigraphie2
  },

  // ==================== SECTION 18: TEXTILE & BAGAGERIE ====================
  {
    "category": "TEXTILE",
    "header": "T-shirts Personnalisés",
    "description": "T-shirts avec impression ou broderie.",
    "features": ["Toutes tailles", "Différentes couleurs", "Impression ou broderie", "Pour équipes et événements"],
    "image": tshirt
  },
  {
    "category": "TEXTILE",
    "header": "Casquettes Personnalisées",
    "description": "Casquettes avec broderie ou impression.",
    "features": ["Différents modèles", "Broderie logo", "Pour équipes", "Goodies"],
    "image": tshirt
  },

  // ==================== SECTION 19: GADGETS PUBLICITAIRES ====================
  {
    "category": "GADGETS",
    "header": "Tasses Personnalisées",
    "description": "Mugs et tasses avec votre logo.",
    "features": ["Céramique", "Impression personnalisée", "Idéal cadeau", "Utilisation quotidienne"],
    "image": offset2
  },
  {
    "category": "GADGETS",
    "header": "Parapluies Personnalisés",
    "description": "Parapluies avec votre logo.",
    "features": ["Différents modèles", "Résistants", "Impression logo", "Utile au quotidien"],
    "image": offset2
  },
  {
    "category": "GADGETS",
    "header": "Porte-clés Personnalisés",
    "description": "Porte-clés avec votre logo.",
    "features": ["Différents modèles", "Métal ou plastique", "Gravure ou impression", "Petit prix"],
    "image": offset2
  },
  {
    "category": "GADGETS",
    "header": "Stylos Personnalisés",
    "description": "Stylos publicitaires avec votre logo.",
    "features": ["Différents modèles", "Impression logo", "Goodies classique", "Tous budgets"],
    "image": offset2
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
