
import * as img from '../assets/COFFRET/coffret_img';
import * as productImages from '../assets/product/productimg';

 export const siteData = {
  hero: {
    title: "Si vous l'imaginez, nous l'imprimons.",
    description: "Des supports publicitaires personnalisés aux cadeaux photo d'exception, nous avons le produit qu'il vous faut. Grâce à nos outils de conception intuitifs, donnez vie à vos projets exactement comme vous le souhaitez.",
    buttons: [
      { label: "Consulter le catalogue", link: "#", primary: true },
      { label: "Nos meilleures ventes", link: "#", primary: false },
    ]
  },
  categories :[
  { id: 1, name: "ROLL-UP", image: productImages.image4 },
  { id: 2, name: "X-BANNER", image: productImages.image11 },
  { id: 3, name: "FLYING BANNER", image: productImages.image14 },
  { id: 4, name: "BACKDROPS", image: productImages.image30 },
  { id: 5, name: "STOP TROTTOIRS", image: productImages.image33 },
  { id: 6, name: "SIGNALETIQUE", image: productImages.image44 },
  { id: 7, name: "CADRES MURAUX", image: productImages.image75 },
  { id: 8, name: "STOP RAYON", image: productImages.image80 },
  { id: 9, name: "PLV", image: productImages.image88 },
  { id: 10, name: "CHEVALETS", image: productImages.image114 },
  { id: 11, name: "PORTES BROCHURES", image: productImages.image117 },
  { id: 12, name: "GONFLABLE", image: productImages.image122 },
  { id: 13, name: "CHAPITAUX", image: productImages.image140 },
  { id: 14, name: "ENSEIGNES", image: productImages.image151 },
  { id: 16, name: "IMPRESSION NUMERIQUE", image: productImages.image206 },
  { id: 18, name: "SERIGRAPHIE", image: productImages.image177 },
  { id: 19, name: "BRODERIE", image: productImages.image190 },
  { id: 20, name: "TEXTILE", image: productImages.image189 },
  { id: 21, name: "GADGETS", image: productImages.image222 }
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
        url: productImages.image222, 
        handle: "@studio_creatif",
        alt: "Identité visuelle et branding"
      },
      { 
        id: 2, 
        url: productImages.image221, 
        handle: "@pause_cafe",
        alt: "Objets promotionnels et mugs"
      },
   { 
  id: 3, 
  url: productImages.image130, 
  handle: "@expert_bureau",
  alt: "Fournitures et objets de bureau"
},
      { 
        id: 4, 
        url: productImages.image72, 
        handle: "@passion_agenda",
        alt: "Carnets de notes personnalisés"
      },
      { 
        id: 5, 
        url: productImages.image62, 
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
  {
    "category": "ROLL-UP",
    "header": "Roll-up Classique",
    "description": "Support d'information polyvalent, simple à monter et facile à transporter.",
    "features": ["Structure aluminium brossé", "02 pieds de stabilisation", "Format : 85 x 200 cm", "Poids : 3 kgs", "Support d'impression: Syntisol 220 microns", "Livré avec sac de transport"],
    "image": productImages.image4
  },
  {
    "category": "ROLL-UP",
    "header": "Roll-up Standard",
    "description": "Version renforcée du classique pour une meilleure tenue au sol.",
    "features": ["Structure aluminium brossé", "02 pieds de stabilisation", "Format : 85 x 200 cm", "Poids : 4,2 kgs", "Support d'impression: Syntisol 220 microns"],
    "image": productImages.image5
  },
  {
    "category": "ROLL-UP",
    "header": "Roll-up Luxe",
    "description": "Base esthétique haut de gamme avec changement de visuel facilité.",
    "features": ["Structure aluminium anodisé", "Base esthétique et résistante", "Changement aisé du visuel", "Format : 85 x 200 cm", "Poids : 6,0 kgs", "Option Spot disponible"],
    "image": productImages.image6
  },
  {
    "category": "ROLL-UP",
    "header": "Roll-up New Look Indoor",
    "description": "Design moderne avec structure épaisse pour une stabilité optimale.",
    "features": ["Structure épaisse en aluminium anodisé", "Stabilité assurée en indoor", "Format : 85 x 200 cm", "Poids : 7 kgs", "Base de 4 kg"],
    "image": productImages.image7
  },
  {
    "category": "ROLL-UP",
    "header": "Roll-up New Look Indoor XXL",
    "description": "Format large pour un impact visuel maximum.",
    "features": ["Structure épaisse en aluminium anodisé", "Format : 100 x 200 cm", "Poids : 7 kgs", "Stabilité assurée en indoor"],
    "image": productImages.image8
  },
  {
    "category": "X-BANNER",
    "header": "X-Banner Classique Indoor",
    "description": "Structure en fibre de verre ultra légère pour communiquer efficacement à petit prix.",
    "features": ["Structure en fibre de verre", "Fixation du visuel avec œillets", "Format : L60 x H160 cm", "Poids : 330g", "Temps de montage : moins d'1 minute", "Support d'impression: Syntisol Lourd", "Livré avec housse de transport"],
    "image": productImages.image11
  },
  {
    "category": "X-BANNER",
    "header": "X-Banner Socle Outdoor",
    "description": "Structure stable grâce à son embase lestable pour utilisation extérieure.",
    "features": ["Structure en fibre de verre", "Base en PVC avec réserve de 3L", "Lestable eau/sable", "Format : L60 x H160 cm", "Poids : 2,5 kgs", "Temps de montage : moins de 3 minutes"],
    "image": productImages.image12
  },
  // ==================== SECTION 3: FLYING BANNER ====================
  {
    "category": "FLYING BANNER",
    "header": "Flying Banner Rectangular",
    "description": "Drapeau format rectangulaire pour une surface de lecture maximale.",
    "features": ["Impression sublimation HD sur maille polyester 120gr", "Recto/verso visible des deux côtés", "Structure en fibre de carbone", "Largeur: 0,80m", "Hauteur: 2,90m, 4,1m et 5,2m", "Livré avec sac de transport"],
    "image": productImages.image14
  },
  {
    "category": "FLYING BANNER",
    "header": "Flying Banner Teardrop",
    "description": "Drapeau en forme de goutte d'eau, très dynamique.",
    "features": ["Forme goutte d'eau", "Impression sublimation HD sur maille polyester 120gr", "Recto/verso visible", "Structure en fibre de carbone", "Hauteur: 3m, 4m et 5m", "Livré avec sac de transport"],
    "image": productImages.image18
  },
  {
    "category": "FLYING BANNER",
    "header": "Flying Banner Giant Flag",
    "description": "Mât géant pour une visibilité de très loin.",
    "features": ["Structure aluminium", "Hauteur réglable jusqu'à 5m et 7m", "Base en plastique à remplir d'eau ou de sable", "Mât télescopique", "Couleur argent"],
    "image": productImages.image19
  },
  {
    "category": "FLYING BANNER",
    "header": "Backpack Banner",
    "description": "Drapeau sur sac à dos pour street marketing.",
    "features": ["Sac à dos ergonomique", "Système X-banner ou Flying banner", "Ultra mobile", "Idéal pour street marketing"],
    "image": productImages.image20
  },
  {
    "category": "FLYING BANNER",
    "header": "Flying Milles Banner PDV XL",
    "description": "Bannière verticale grand format pour point de vente.",
    "features": ["Structure acier laqué et peint", "Très robuste", "Hauteur: 5m", "Largeur: 1m", "Impression sublimation sur toile", "Finition couture"],
    "image": productImages.image21
  },

  // ==================== SECTION 4: BACKDROPS ====================
  {
    "category": "BACKDROPS",
    "header": "Backdrop Stand Parapluie",
    "description": "Mur d'images pliable pour fond de stand professionnel.",
    "features": ["Structure parapluie pop-up", "Tissu polyester", "Fixation du visuel par système velcro", "Livré avec sac ou valise de transport à roulettes"],
    "image": productImages.image30
  },
  {
    "category": "BACKDROPS",
    "header": "Backdrop Panoramique",
    "description": "Mur d'images extra-large pour une immersion totale.",
    "features": ["Jusqu'à 6m de large", "Visuel continu", "Structure aluminium anodisé", "Dimensions: L3m x H2,25m ou L6m x H2,25m", "+32cm sur les côtés", "Sac de transport à roulettes"],
    "image": productImages.image32
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs modèle Structure",
    "description": "Cadre aluminium classique sur pieds pour PLV extérieure.",
    "features": ["Structure en acier galvanisé", "Cadre clippant recto/verso en aluminium", "Feuille PVC transparent protectrice", "Dimension visuel: L60 x H85cm", "Affichage recto verso"],
    "image": productImages.image33
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs modèle Base Bac à Eau",
    "description": "Stabilité maximale grâce à son socle réservoir d'eau.",
    "features": ["Structure PVC avec réservoir d'eau", "Roulettes intégrées", "Cadre monté sur ressort", "Dimension visuel: L60 x H85cm", "Affichage recto verso", "Pied détachable"],
    "image": productImages.image34
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs modèle Chevalet",
    "description": "Chevalet bois ou alu pliable.",
    "features": ["Pliable", "Ardoise ou affiche", "Économique", "Léger"],
    "image": productImages.image36
  },
  {
    "category": "STOP TROTTOIRS",
    "header": "Stop trottoirs Chevalet PVC",
    "description": "Chevalet plastique léger et imputrescible.",
    "features": ["Matière acrylique", "Epaisseur 4mm", "Impression Quadri UV", "Format maxi 80x120cm", "Double face", "Léger et transportable"],
    "image": productImages.image35
  },
  {
    "category": "SIGNALETIQUE",
    "header": "Plaque de Porte Permanente",
    "description": "Identification des bureaux et salles à information fixe.",
    "features": ["Aluminium", "Insert papier possible", "Fixation adhésive", "Sur mesure", "Large choix de matières"],
    "image": productImages.image44
  },
  {
    "category": "SIGNALETIQUE",
    "header": "Plaque de Porte Personnalisable",
    "description": "Plaque modulable permettant de changer facilement les informations.",
    "features": ["Modulable", "Changement rapide", "Insert papier sous plaque transparente", "Plexiglas ou inox"],
    "image": productImages.image44
  },
  {
    "category": "SIGNALETIQUE",
    "header": "Plaque Diamant Complète",
    "description": "Signalétique premium en relief.",
    "features": ["Effet 3D", "Plexiglas", "Entretoises inox", "Finition haut de gamme"],
    "image": productImages.image51
  },
  {
    "category": "SIGNALETIQUE",
    "header": "Panneau Directionnel Modèle Potence",
    "description": "Signalétique perpendiculaire au mur pour visibilité dans les couloirs.",
    "features": ["Double face", "Alu anodisé", "Visibilité couloir", "Fléchage directionnel"],
    "image": productImages.image57
  },
  {
    "category": "SIGNALETIQUE",
    "header": "Panneau Directionnel Modèle Mural",
    "description": "Panneaux d'information muraux fixes.",
    "features": ["PVC ou Alu", "Format sur mesure", "Impression directe", "Fléchage inclus"],
    "image": productImages.image62
  },

  // ==================== SECTION 7: CADRES MURAUX ====================
  {
    "category": "CADRES MURAUX",
    "header": "Cadre Click-Clack Modèle Mural Simple",
    "description": "Cadre recto en aluminium anodisé pour intérieur.",
    "features": ["Aluminium anodisé", "Angles 45° renforcés", "Ouverture click-clack", "Formats: A4, A3, A2, A1, A0", "Profil 2,5 ou 3,5cm"],
    "image": productImages.image75
  },
  {
    "category": "CADRES MURAUX",
    "header": "Cadre Click-Clack Modèle Mural Arrondi",
    "description": "Cadre à coins arrondis pour plus de sécurité.",
    "features": ["Aluminium anodisé", "Coins arrondis", "Ouverture click-clack", "Profil bombé", "Formats: A4, A3, A2, A1, A0"],
    "image": productImages.image76
  },
  {
    "category": "CADRES MURAUX",
    "header": "Cadre Click-Clack Modèle Mural Etanche Outdoor",
    "description": "Cadre étanche pour utilisation en extérieur.",
    "features": ["Etanche", "Aluminium anodisé", "Ouverture click-clack", "Coins arrondis", "Formats: A4, A3, A2, A1, A0"],
    "image": productImages.image77
  },
  {
    "category": "CADRES MURAUX",
    "header": "Cadre Click-Clack Modèle Mural Alu-Vitre",
    "description": "Cadre double face pour communication sur vitrine.",
    "features": ["Double face", "Fixation sur vitre par adhésif", "2 protecteurs plexis", "Aluminium anodisé", "Formats: A4, A3, A2, A1, A0, 50x70cm, 70x100cm"],
    "image": productImages.image78
  },
  {
    "category": "CADRES MURAUX",
    "header": "Cadre Click-Clack Modèle Eclairé Suspendu",
    "description": "Cadre lumineux à LED à suspendre double face.",
    "features": ["Lumineux LED", "Double face", "Suspension", "Ouverture click-clack 4 côtés", "PVC transparent", "Formats: A4 à A0"],
    "image": productImages.image83
  },

  // ==================== SECTION 8: STOP RAYON ====================
  {
    "category": "STOP RAYON",
    "header": "Stop Rayon Twin Stick Alu",
    "description": "Fixation pour PLV en lamelle d'aluminium.",
    "features": ["Lamelle aluminium", "03 faces adhésives", "Evite le vrillage", "Excellente adhérence", "Fixation adhésive"],
    "image": productImages.image80
  },
  {
    "category": "STOP RAYON",
    "header": "Stop Rayon Maxi Gripe en T",
    "description": "Support grip pour affiches en drapeau.",
    "features": ["S'insère dans porte-étiquette", "Support carton 1200g ou PVC", "Epaisseur visuel jusqu'à 8mm", "Adhésive mousse", "Solution économique"],
    "image": productImages.image85
  },
  {
    "category": "STOP RAYON",
    "header": "Stop Rayon Magnétique Inclinable",
    "description": "Fixation magnétique sur étagères métalliques.",
    "features": ["Aimant puissant", "Inclinaison réglable", "Bras surélevés", "Longueur bras: 20, 30, 40, 60cm", "Pose instantanée"],
    "image": productImages.image86
  },

  {
    "category": "PLV",
    "header": "PLV de Comptoir Multiples Formes",
    "description": "Petit présentoir de caisse découpé à la forme.",
    "features": ["Découpe laser", "Carton ou PVC", "Personnalisé", "Pour comptoir/caisse", "Attire l'attention"],
    "image": productImages.image88
  },
  // ==================== SECTION 9: CHEVALETS ====================
  {
    "category": "CHEVALETS",
    "header": "Chevalet de Table Classique Incliné",
    "description": "Support incliné en acrylique/plexiglas pour affiches.",
    "features": ["Acrylique/PMMA", "Bords polis", "Design incliné", "Insertion facile", "Option impression directe sur PVC"],
    "image": productImages.image114
  },
  {
    "category": "CHEVALETS",
    "header": "Chevalet de Table Classique Droit",
    "description": "Support droit en acrylique/plexiglas pour présentation verticale.",
    "features": ["Acrylique/PMMA", "Bords polis", "Présentation verticale", "Double face possible", "Option impression directe"],
    "image": productImages.image115
  },

  // ==================== SECTION 10: PORTES BROCHURES ====================
  {
    "category": "PORTES BROCHURES",
    "header": "Porte Brochures de Table Modèle Contemporain",
    "description": "Présentoir de catalogues design pour table.",
    "features": ["Design contemporain", "Alu/Verre", "Multi-niveaux", "Pliable", "Finition soignée"],
    "image": productImages.image117
  },
  {
    "category": "PORTES BROCHURES",
    "header": "Porte Brochures de Table Modèle Futuris",
    "description": "Look futuriste pour vos halls d'accueil.",
    "features": ["Forme courbe", "Grande capacité", "Métal", "Design futuriste"],
    "image": productImages.image118
  },
  {
    "category": "PORTES BROCHURES",
    "header": "Porte Brochures sur Pied Modèle Simple",
    "description": "Structure rétractable qui se déplie en accordéon.",
    "features": ["Structure polycarbonate", "Hauteur: 126cm", "Format brochures A4", "Pliable", "Valise souple incluse", "Poids: 7 kgs"],
    "image": productImages.image120
  },
  // ==================== SECTION 11: GONFLABLE ====================
  {
    "category": "GONFLABLE",
    "header": "Arche Gonflable Classique",
    "description": "Arche pour départ ou arrivée de course, entrée de manifestation.",
    "features": ["Structure ultra-résistante triple peau", "Dimensions: 450x320cm, 650x450cm, 850x620cm", "PVC tarp lin", "Traitement anti-feu", "Impression quadri sublimation", "Souffleur inclus"],
    "image": productImages.image122
  },
  {
    "category": "GONFLABLE",
    "header": "Arche Gonflable Personnalisée",
    "description": "Forme spécifique selon votre logo.",
    "features": ["Sur mesure", "Toutes tailles", "Spectaculaire", "Structure triple peau", "Traitement anti-feu"],
    "image": productImages.image123
  },
  {
    "category": "GONFLABLE",
    "header": "Mur Gonflable",
    "description": "Séparation d'espace ou fond de scène rapide.",
    "features": ["Dimensions: 300x230cm, 600x230cm", "Structure triple peau", "PVC tarp lin", "Montage express", "Isolant phonique léger"],
    "image": productImages.image124
  },
  {
    "category": "GONFLABLE",
    "header": "Tente Gonflable",
    "description": "Stand de réception nomade pour foires et événements.",
    "features": ["Toile thermo-soudée", "Dimensions: 3,2x3,2x2,4m à 5,8x5,8x3,9m", "Etanche", "Pompe électrique incluse", "Sac de transport", "Poids: 13,5kg à 21kg"],
    "image": productImages.image125
  },
  {
    "category": "GONFLABLE",
    "header": "Gonflable Aérien (Ballon Hélium)",
    "description": "Ballon captif à l'hélium pour être vu de très loin.",
    "features": ["Hélium", "PVC 0.18mm", "Visibilité jusqu'à 1km+", "Tailles: 1,60m à 3,5m", "1 à 4 faces", "Intérieur/extérieur"],
    "image": productImages.image128
  },

  // ==================== SECTION 12: CHAPITEAUX ====================
  {
    "category": "CHAPITEAUX",
    "header": "Tente Classique semi-brandé petit gabarit",
    "description": "Tente pliable pour manifestation, toit imprimé, murs blancs.",
    "features": ["Structure aluminium pliante", "Dimension: 2,5x2,5x2,5m", "Bâche imperméable", "Norme anti-feu M2", "3 murs pleins imprimés recto", "4 frontons personnalisables"],
    "image": productImages.image140
  },
  {
    "category": "CHAPITEAUX",
    "header": "Tente Classique brandé petit gabarit",
    "description": "Tente entièrement personnalisée petit format.",
    "features": ["Personnalisation 360°", "Dimension: 2x2m, 3x3m", "Structure aluminium", "Toit et murs imprimés", "Sac de transport"],
    "image": productImages.image41
  },
  {
    "category": "CHAPITEAUX",
    "header": "Tente Classique semi-brandé grand gabarit",
    "description": "Grande tente 4,5x3m pour espaces importants.",
    "features": ["Dimension: 300x450cm", "Structure aluminium télescopique", "Toiles de fermeture: 450x300cm", "Option porte zippée", "Poids structure+toit: 46,1kg", "Kit haubanage inclus"],
    "image": productImages.image142
  },
  {
    "category": "CHAPITEAUX",
    "header": "Tente Gazebo Classique",
    "description": "Gazebo aux couleurs vives pour événements.",
    "features": ["Structure légère", "Couleurs vives", "Montage rapide", "Personnalisable"],
    "image": productImages.image144
  },
  {
    "category": "CHAPITEAUX",
    "header": "Tente Gazebo Boutique",
    "description": "Gazebo avec configuration boutique.",
    "features": ["Configuration boutique", "Comptoir intégré", "Personnalisable", "Professionnel"],
    "image": productImages.image145
  },
  // ==================== SECTION 13: ENSEIGNES ====================
  {
    "category": "ENSEIGNES",
    "header": "Enseigne Bandeau",
    "description": "Enseigne en applique à fixer à plat contre le mur.",
    "features": ["Application murale", "Différentes formes", "Eclairage possible", "Graphique personnalisé"],
    "image": productImages.image151
  },
  {
    "category": "ENSEIGNES",
    "header": "Enseigne Drapeau",
    "description": "Enseigne perpendiculaire au mur.",
    "features": ["Fixation perpendiculaire", "Double face", "Visible de loin", "Aluminium"],
    "image": productImages.image152
  },
  {
    "category": "ENSEIGNES",
    "header": "Lettres Enseignes Boîtiers",
    "description": "Lettres 3D pouvant être rétro-éclairées.",
    "features": ["Lettres 3D", "Rétro-éclairées possible", "Différents matériaux", "Epaisseurs variées"],
    "image": productImages.image170
  },

  // ==================== SECTION 15: IMPRESSION NUMERIQUE ====================
  {
    "category": "IMPRESSION NUMERIQUE",
    "header": "Photocopies / Impressions",
    "description": "Photocopies et impressions haute qualité.",
    "features": ["Noir et couleur", "Formats A3/A4/...", "Différents papiers", "Coupe, pliage, plastification"],
    "image": productImages.image206
  },
  {
    "category": "IMPRESSION NUMERIQUE",
    "header": "Tracés de Plans",
    "description": "Impression professionnelle de plans jusqu'à 2 pouces.",
    "features": ["Noir et couleur", "Coupe et pliage", "Assemblage", "Scannérisation"],
    "image": productImages.image207
  },
  {
    "category": "IMPRESSION NUMERIQUE",
    "header": "Brochures / Catalogues",
    "description": "Brochures reliées (spirale, thermocollée, piquée).",
    "features": ["Formats A3/A4/A5", "Noir et couleur", "Recto ou recto/verso", "Différentes reliures"],
    "image": productImages.image208
  },
  {
    "category": "IMPRESSION NUMERIQUE",
    "header": "Affiches et Posters",
    "description": "Impression grand format pour vos affiches.",
    "features": ["Papier jusqu'à 160g", "Tous formats", "Toutes quantités", "Impression express"],
    "image": productImages.image209
  },
  {
    "category": "IMPRESSION NUMERIQUE",
    "header": "Plaquettes",
    "description": "Plaquettes professionnelles pour entreprise.",
    "features": ["Noir et couleur", "Recto ou recto/verso", "Différents grammages", "Finitions: pliage, rainage"],
    "image": productImages.image210
  },

  // ==================== SECTION 17: SERIGRAPHIE ====================
  {
    "category": "SERIGRAPHIE",
    "header": "Sérigraphie Industrielle",
    "description": "Impression sérigraphique pour textile et objets.",
    "features": ["Impressions au trait", "Impressions à plat", "Grandes séries", "Sur textile et objets"],
    "image": productImages.image177
  },

  // ==================== SECTION 18: BRODERIE ====================
  {
    "category": "BRODERIE",
    "header": "Broderie Industrielle",
    "description": "Broderie personnalisée sur textile.",
    "features": ["Sur vêtements", "Logo personnalisé", "Haute qualité", "Durable"],
    "image": productImages.image190
  },
  // ==================== SECTION 19: TEXTILE ====================
  {
    "category": "TEXTILE",
    "header": "T-shirts Personnalisés",
    "description": "T-shirts avec impression ou broderie.",
    "features": ["Toutes tailles", "Différentes couleurs", "Impression ou broderie", "Pour équipes et événements"],
    "image": productImages.image189
  },
  {
    "category": "TEXTILE",
    "header": "Casquettes Personnalisées",
    "description": "Casquettes avec broderie ou impression.",
    "features": ["Différents modèles", "Broderie logo", "Pour équipes", "Goodies"],
    "image": productImages.image196
  },
  // ==================== SECTION 20: GADGETS ====================
  {
    "category": "GADGETS",
    "header": "Tasses Personnalisées",
    "description": "Mugs et tasses avec votre logo.",
    "features": ["Céramique", "Impression personnalisée", "Idéal cadeau", "Utilisation quotidienne"],
    "image": productImages.image222
  },
  {
    "category": "GADGETS",
    "header": "Parapluies Personnalisés",
    "description": "Parapluies avec votre logo.",
    "features": ["Différents modèles", "Résistants", "Impression logo", "Utile au quotidien"],
    "image": productImages.image221
  },
  {
    "category": "GADGETS",
    "header": "Porte-clés Personnalisés",
    "description": "Porte-clés avec votre logo.",
    "features": ["Différents modèles", "Métal ou plastique", "Gravure ou impression", "Petit prix"],
    "image": productImages.image218
  },
  {
    "category": "GADGETS",
    "header": "Stylos Personnalisés",
    "description": "Stylos publicitaires avec votre logo.",
    "features": ["Différents modèles", "Impression logo", "Goodies classique", "Tous budgets"],
    "image": productImages.image223
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