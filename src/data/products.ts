import catProtein from "@/assets/cat-protein.jpg";
import catLaddus from "@/assets/cat-laddus.jpg";
import catdryfruits from "@/assets/cat-dryfruits.jpeg";
import guntururedchilli from "@/assets/guntururedchilli.jpeg";
import catMasala from "@/assets/cat-masala.jpg";
import catMalt from "@/assets/cat-malt.jpg";
import catpapad from "@/assets/cat-papad.jpeg";
import catFlour from "@/assets/cat-flour.jpg";
import dryfruitladdu from "@/assets/dryfruitladdu.jpeg";
import ragiladdu from "@/assets/ragiladdu.jpeg";
import seedsbananabites from "@/assets/seedsbananabites.jpeg";
import healthyseeds from "@/assets/healthyseeds.png";
import minichocos from "@/assets/minichocos.jpeg";
import coconutladdu from "@/assets/coconutladdu.jpeg";
import sesamaseed from "@/assets/sesameseed.jpeg";
import makanaladdu from "@/assets/makanaladdu.png";
import proteinladdu from "@/assets/proteinladdu.png";
import idlipudi from "@/assets/idlipudi.jpeg";
import proteinpowder from "@/assets/proteinpowder.webp";
import coriandermintpowder from "@/assets/coriandermintpowder.jpeg";
import grainspowder from "@/assets/grainspowder.jpeg";
import PeanutChatniPowder from "@/assets/peanutpowder.webp";
import CurryLeavesChatniPowder from "@/assets/curryleavespowder.webp";
import GarlicChatniPowder from "@/assets/garlicpowder.jpg";
import coconutchutneypudi from "@/assets/coconutchutneypudi.jpeg";
import sambarmasala from "@/assets/sambarpowder.webp";
import rasampowder from "@/assets/rasampowder.webp";
import besibalipowder from "@/assets/bisi-bele-bath-masala.webp";
import Puliyogarepowder from "@/assets/puliyogarepowder.jpg";
import makannaproteinpowder from "@/assets/makkanaproteinpowder.jpeg";
import ragimalt from "@/assets/ragimalt.jpg";
import moringaleavespowder from "@/assets/moringaleavespowder.jpeg";
import masalatea from "@/assets/masalateapowder.jpeg";
import babyfoodpowder from "@/assets/babyfoodpowder.jpg";
import dosapremix from "@/assets/dosapremix.jpg";
import abcmilkpowder from "@/assets/abcmilkpowder.jpeg";
import detaxdrink from "@/assets/detoxdrinkpowder.jpeg";
import multigrainatta from "@/assets/multigrainatta.webp";
import daniyapowder from "@/assets/dhaniyapowder.jpeg";
import puliyogaregojju from "@/assets/puliyogaregojju.jpeg";
import playatasteypowder from "@/assets/playatasteypowder.jpeg";
import gojjupowder from "@/assets/gojjupowder.jpeg";
import stuffedmasalapowder from "@/assets/stuffedmasalapowder.jpeg";
import waitloss from "@/assets/waitloss.jpeg";
import riceflour from "@/assets/riceflour.jpeg";
import horsegram from "@/assets/horsegram.jpeg";
import uraddalpapad from "@/assets/uraddalpapad.jpeg";
import moongdal from "@/assets/moongdal.jpeg";
import ricejeerapapad from "@/assets/ricejeerapapad.jpeg";
import alasandipapad from "@/assets/alasandipapad.jpeg";
import bananadips from "@/assets/bananadips.jpeg";
import chocklatebar from "@/assets/chockletbar.jpeg";
import stuffedpeanutbutter from "@/assets/stuffedpeanutbutterdates.jpeg";
import peanutbutterdates from "@/assets/peanutbutterdates.jpeg";
import almondbites from "@/assets/almondbites.jpeg";
import energydates from "@/assets/energydates.jpeg";
export interface Product {
  id: string;
  name: string;
  category: string;
  price1kg: number | null;
  fixedPrice: number | null;
  fixedWeight: string | null;
  minQty: string | null;
  image: string;
  hasWeightOptions: boolean;
  description?: string;
  ingredients?: string[];
  benefits?: string[];
  flavors?: string[];
}

export const categories = [
  { id: "protein", name: "Protein Powders", description: "Homemade natural protein blends", image: catProtein },
  { id: "laddus", name: "Healthy & Tastey snacks", description: "Traditional laddus made with jaggery", image: catLaddus },
  { id: "biscuits", name: "Dryfruits & seeds", description: "Healthy handmade treats and bars", image: catdryfruits },
  { id: "papad", name: "Protein rich papad (Happala)", description: "Traditional protein-rich crispy papads", image: catpapad },
  { id: "chatni", name: "Chutneys powder(kharam pudi)", description: "Kharam pudi for Idli, Chapati & Rice", image: grainspowder },
  { id: "masala", name: "Spices & Masalas", description: "Grandmother's secret recipes", image: catMasala },
  { id: "malt", name: "Healthy malts and flours", description: "Nutritious mixes for all ages", image: catMalt },
];

export const products: Product[] = [
  // 1. PROTEIN POWDERS
  { 
    id: "pp1", name: "Protein Powder (Premium)", category: "protein", price1kg: 1200, fixedPrice: null, fixedWeight: null, minQty: null, image: proteinpowder, hasWeightOptions: true,
    description: "A high-quality protein blend made from carefully selected sprouted grains and premium nuts.",
    ingredients: ["Sprouted Ragi", "Almonds", "Walnuts", "Pumpkin Seeds", "Chia Seeds"],
    benefits: ["Muscle building", "Sustained energy", "Rich in Omega-3"]
  },
  { 
    id: "pp2", name: "Makkana Protein Powder (Classic)", category: "protein", price1kg: 1200, fixedPrice: null, fixedWeight: null, minQty: null, image: makannaproteinpowder, hasWeightOptions: true,
    description: "Traditional roasted Makhana (Fox Nuts) blended into a light, digestible protein powder.",
    ingredients: ["Roasted Makhana", "Peanuts", "Cardamom", "Cashews"],
    benefits: ["Gluten-free", "Heart healthy", "Rich in Calcium"]
  },
  { 
    id: "pp3", name: "Drynuts & Seeds Protein Powder", category: "protein", price1kg: 1200, fixedPrice: null, fixedWeight: null, minQty: null, image: catProtein, hasWeightOptions: true,
    description: "A nutrient-dense mix of multiple super-seeds and sun-dried nuts.",
    ingredients: ["Sunflower Seeds", "Watermelon Seeds", "Flax Seeds", "Almonds", "Pistachios"],
    benefits: ["Brain health booster", "Improves skin/hair", "High dietary fiber"]
  },
  { 
    id: "pp4", name: "ABC Milk Powder", category: "protein", price1kg: 900, fixedPrice: null, fixedWeight: null, minQty: null, image: abcmilkpowder, hasWeightOptions: true,
    description: "The miracle trio: Apple, Beetroot, and Carrot processed naturally into a tasty milk mix.",
    ingredients: ["Dried Apple", "Beetroot", "Carrot", "Stevia/Jaggery Powder"],
    benefits: ["Increases Hemoglobin", "Natural skin glow", "Immunity booster"]
  },
  { 
    id: "pp5", name: "Detox Drink (Weight Loss)", category: "protein", price1kg: 800, fixedPrice: null, fixedWeight: null, minQty: null, image: detaxdrink, hasWeightOptions: true,
    description: "A metabolism-boosting blend designed to cleanse the body and support healthy weight loss.",
    ingredients: ["Cumin", "Ginger", "Cinnamon", "Lemon Peel Extract", "Fennel"],
    benefits: ["Boosts metabolism", "Reduces bloating", "Aids digestion"]
  },
  { 
    id: "pp6", name: "51 Ingredients Masala Tea Powder", category: "protein", price1kg: 1200, fixedPrice: null, fixedWeight: null, minQty: "All in one solution", image: masalatea, hasWeightOptions: true,
    description: "A powerful Ayurvedic blend of 51 herbs and spices for the ultimate healthy tea experience.",
    ingredients: ["Dry Ginger", "Pepper", "Tulsi", "Ashwagandha", "Clove", "Cardamom", "Mulethi"],
    benefits: ["Treats cold/cough", "Stress relief", "Total body wellness"]
  },

  // 2. DATES & CHOCKLETS
  { 
    id: "bc1", name: "Banana dips", category: "biscuits", fixedPrice: 300, fixedWeight: "30 Pieces", price1kg: null, minQty: "Min quantity 30 pieces", image: bananadips, hasWeightOptions: false,
    description: "Crispy banana slices dipped in rich chocolate.",
    ingredients: ["Sun-dried Banana", "Dark Chocolate", "Natural Jaggery"],
    benefits: ["Natural energy", "Kid-friendly", "Healthy snacking"]
  },
  { 
    id: "bc2", name: "Chocolate Bar (Dates &nuts)", category: "biscuits", fixedPrice: 1350, fixedWeight: "30 Pieces", price1kg: null, minQty: "Min quantity 30 pieces", image: chocklatebar, hasWeightOptions: false,
    description: "Handmade premium chocolate bars available in 4 delicious healthy flavors.",
    flavors: ["Dates & nuts chocklet bar", "Dryfruts mix chocklet bar", "Oat&Peanut butter chocklet bar", "Protien chocklet bar"],
    ingredients: ["Cocoa Butter", "Cocoa Mass", "Organic Jaggery", "Natural Flavors", "Nuts/Oats based on selection"],
    benefits: ["High quality ingredients", "No refined sugar", "Nutritious treats"]
  },
  { 
    id: "bc3", name: "Chocolate Bar (Dryfruts mix )", category: "biscuits", fixedPrice: 1350, fixedWeight: "30 Pieces", price1kg: null, minQty: "Min quantity 30 pieces", image: chocklatebar, hasWeightOptions: false,
    description: "Handmade premium chocolate bars available in 4 delicious healthy flavors.",
    flavors: ["Dates & nuts chocklet bar", "Dryfruts mix chocklet bar", "Oat&Peanut butter chocklet bar", "Protien chocklet bar"],
    ingredients: ["Cocoa Butter", "Cocoa Mass", "Organic Jaggery", "Natural Flavors", "Nuts/Oats based on selection"],
    benefits: ["High quality ingredients", "No refined sugar", "Nutritious treats"]
  },
  { 
    id: "bc4", name: "Chocolate Bar (Oat&Peanut butter)", category: "biscuits", fixedPrice: 1350, fixedWeight: "30 Pieces", price1kg: null, minQty: "Min quantity 30 pieces", image: chocklatebar, hasWeightOptions: false,
    description: "Handmade premium chocolate bars available in 4 delicious healthy flavors.",
    flavors: ["Dates & nuts chocklet bar", "Dryfruts mix chocklet bar", "Oat&Peanut butter chocklet bar", "Protien chocklet bar"],
    ingredients: ["Cocoa Butter", "Cocoa Mass", "Organic Jaggery", "Natural Flavors", "Nuts/Oats based on selection"],
    benefits: ["High quality ingredients", "No refined sugar", "Nutritious treats"]
  },
  { 
    id: "bc5", name: "Chocolate Bar (Protien)", category: "biscuits", fixedPrice: 1350, fixedWeight: "30 Pieces", price1kg: null, minQty: "Min quantity 30 pieces", image: chocklatebar, hasWeightOptions: false,
    description: "Handmade premium chocolate bars available in 4 delicious healthy flavors.",
    flavors: ["Dates & nuts chocklet bar", "Dryfruts mix chocklet bar", "Oat&Peanut butter chocklet bar", "Protien chocklet bar"],
    ingredients: ["Cocoa Butter", "Cocoa Mass", "Organic Jaggery", "Natural Flavors", "Nuts/Oats based on selection"],
    benefits: ["High quality ingredients", "No refined sugar", "Nutritious treats"]
  },
  { 
    id: "bc6", name: "Stuffed peanut butter dates chocolets", category: "biscuits", fixedPrice: 300, fixedWeight: "30 Pieces", price1kg: null, minQty: "Min quantity 30 pieces", image: stuffedpeanutbutter, hasWeightOptions: false,
    description: "Sweet dates stuffed with creamy peanut butter and coated in chocolate.",
    ingredients: ["Premium Dates", "Peanut Butter", "Dark Chocolate Coating"],
    benefits: ["Protein rich", "Energy booster", "Natural sweetness"]
  },
  { 
    id: "bc7", name: "Peanut butter dates", category: "biscuits", fixedPrice: 350, fixedWeight: "50 Pieces", price1kg: null, minQty: "Min quantity 50 pieces", image: peanutbutterdates, hasWeightOptions: false,
    description: "Healthy dates filled with premium peanut butter.",
    ingredients: ["Lion Dates", "Homemade Peanut Butter", "Honey"],
    benefits: ["Iron rich", "Healthy fats", "Perfect post-workout snack"]
  },
  // New items to be added under the Biskets & Chocklets category
  { 
    id: "bc8", 
    name: "Almond chocolate bites", 
    category: "biscuits", 
    price1kg: 1300, 
    fixedPrice: null, 
    fixedWeight: null, 
    minQty: "Available in 250g, 500g, 1kg", 
    image: almondbites, // Replace with specific image variable if available
    hasWeightOptions: true,
    description: "Premium roasted almonds coated in smooth, handcrafted dark chocolate for a perfect protein-rich crunch.",
    ingredients: ["Roasted California Almonds", "Cocoa Mass", "Cocoa Butter", "Organic Jaggery"],
    benefits: ["Rich in Vitamin E", "High protein snack", "Heart healthy fats"]
  },
  { 
    id: "bc9", 
    name: "Energy dates bites", 
    category: "biscuits", 
    price1kg: 1200, 
    fixedPrice: null, 
    fixedWeight: null, 
    minQty: "Available in 250g, 500g, 1kg", 
    image: energydates, // Replace with specific image variable if available
    hasWeightOptions: true,
    description: "A powerhouse of energy made with mashed dates, mixed seeds, and a hint of cardamom.",
    ingredients: ["Lion Dates", "Chia Seeds", "Pumpkin Seeds", "Cardamom", "Ghee"],
    benefits: ["Instant energy boost", "High fiber content", "Natural iron source"]
  },
  

  // 3. PROTEIN RICH PAPAD (HAPPALA)
  { 
    id: "pd1", name: "Horse Gram (Huruli) Protein Papad", category: "papad", price1kg: 850, fixedPrice: null, fixedWeight: null, minQty: null, image: horsegram, hasWeightOptions: true,
    description: "Healthy and protein-rich papad made from horse gram.",
    ingredients: ["Horse Gram Flour", "Urad Dal", "Black Pepper", "Salt", "Hing"],
    benefits: ["High protein", "Traditional taste", "Aids weight management"]
  },
  { 
    id: "pd2", name: "Urad Dal Papad (Uddinabele)", category: "papad", price1kg: 850, fixedPrice: null, fixedWeight: null, minQty: null, image: uraddalpapad, hasWeightOptions: true,
    description: "Classic Urad dal papad, handmade for extra crunch.",
    ingredients: ["Urad Dal Flour", "Jeera", "Black Pepper", "Salt"],
    benefits: ["Traditional recipe", "No preservatives", "Easy to digest"]
  },
  { 
    id: "pd3", name: "Moong Dal (Hesaru Kalu) Papad", category: "papad", price1kg: 750, fixedPrice: null, fixedWeight: null, minQty: null, image: moongdal, hasWeightOptions: true,
    description: "Light and crispy papad made from nutrient-dense Moong dal.",
    ingredients: ["Moong Dal Flour", "Urad Dal Flour", "Salt", "Spices"],
    benefits: ["Low calorie", "Rich in vitamins", "Perfect meal accompaniment"]
  },
  { 
    id: "pd4", name: "Rice Jeera Papad", category: "papad", price1kg: 450, fixedPrice: null, fixedWeight: null, minQty: null, image: ricejeerapapad, hasWeightOptions: true,
    description: "Flavorful rice papad with the goodness of cumin seeds.",
    ingredients: ["Rice Flour", "Jeera (Cumin Seeds)", "Green Chilli", "Salt"],
    benefits: ["Cumin aroma", "Crispy texture", "Gluten-free"]
  },
  { 
    id: "pd5", name: "Alasandi Papad (Black Eyed Pea)", category: "papad", price1kg: 650, fixedPrice: null, fixedWeight: null, minQty: null, image: alasandipapad, hasWeightOptions: true,
    description: "Unique protein-rich papad made from black-eyed peas.",
    ingredients: ["Black Eyed Pea Flour", "Urad Dal", "Spices", "Salt"],
    benefits: ["Rich in fiber", "Plant-based protein", "Handmade"]
  },

  // 4. HEALTHY LADDUS
  { 
    id: "ld1", name: "Ragi with Ghee Laddu", category: "laddus", fixedPrice: 300, fixedWeight: "25 Pieces", price1kg: null, minQty: "Min order 25 pieces", image: ragiladdu, hasWeightOptions: false,
    description: "Soft, traditional laddus made from nutrient-rich sprouted ragi and pure cow ghee.",
    ingredients: ["Sprouted Ragi Flour", "Pure Cow Ghee", "Organic Jaggery", "Cardamom"],
    benefits: ["Bone strength", "High Calcium", "Safe for toddlers"]
  },
  { 
    id: "ld2", name: "Dates Protein Laddu", category: "laddus", fixedPrice: 375, fixedWeight: "15 Pieces", price1kg: null, minQty: "Min order 15 pieces", image: proteinladdu, hasWeightOptions: false,
    description: "Naturally sweet laddus packed with iron-rich dates and crushed protein-rich nuts.",
    ingredients: ["Lion Dates", "Almonds", "Walnuts", "Pumpkin Seeds"],
    benefits: ["Instant energy", "Iron booster", "Sugar-free snack"]
  },
  { 
    id: "ld3", name: "Makkana Laddu", category: "laddus", fixedPrice: 300, fixedWeight: "15 Pieces", price1kg: null, minQty: "Min order 15 pieces", image: makanaladdu, hasWeightOptions: false,
    description: "Crunchy and light laddus made from roasted fox nuts, perfect for mid-day cravings.",
    ingredients: ["Roasted Makhana", "Jaggery", "Ghee", "Dry Ginger"],
    benefits: ["Low calorie", "Anti-aging properties", "Rich in antioxidants"]
  },
  { 
    id: "ld4", name: "Sesame Laddu", category: "laddus", fixedPrice: 300, fixedWeight: "20 Pieces", price1kg: null, minQty: "Min order 20 pieces", image: sesamaseed, hasWeightOptions: false,
    description: "Classic Ellu Unde made with black/white sesame seeds, providing essential minerals.",
    ingredients: ["Roasted Sesame Seeds", "Jaggery Syrup", "Groundnuts"],
    benefits: ["Heart health", "Healthy hair", "Rich in Vitamin E"]
  },
  { 
    id: "ld5", name: "Coconut Laddu", category: "laddus", fixedPrice: 300, fixedWeight: "20 Pieces", price1kg: null, minQty: "Min order 20 pieces", image: coconutladdu, hasWeightOptions: false,
    description: "Freshly grated coconut slow-cooked with jaggery for a melt-in-mouth experience.",
    ingredients: ["Fresh Coconut", "Organic Jaggery", "Cardamom", "Pure Ghee"],
    benefits: ["Good fats", "Electrolyte balance", "Improves skin texture"]
  },
  { 
    id: "ld6", name: "Dry Fruits Laddu", category: "laddus", fixedPrice: 500, fixedWeight: "20 Pieces", price1kg: null, minQty: "Min order 20 pieces", image: dryfruitladdu, hasWeightOptions: false,
    description: "A premium assortment of dry fruits bound together with natural sweetness.",
    ingredients: ["Cashews", "Almonds", "Pistachios", "Raisins", "Anjeer"],
    benefits: ["Immunity booster", "Rich in vitamins", "Perfect for giftings"]
  },
  { 
    id: "ld7", name: "Seeds Banana Bites", category: "laddus", fixedPrice: 300, fixedWeight: "30 Pieces", price1kg: null, minQty: "Min order 30 pieces", image: seedsbananabites, hasWeightOptions: false,
    description: "Unique healthy bites combining natural banana fiber with high-protein seeds.",
    ingredients: ["Sun-dried Banana", "Sunflower Seeds", "Melon Seeds", "Chia"],
    benefits: ["Potassium rich", "Great for digestion", "Nutritious snack for kids"]
  },
  { 
    id: "ld8", name: "Healthy Nuts & Seeds Banana Slices", category: "laddus", fixedPrice: 300, fixedWeight: "20 Pieces", price1kg: null, minQty: "Min order 20 pieces", image: healthyseeds, hasWeightOptions: false,
    description: "Dehydrated banana slices coated with a crunchy layer of assorted nuts and seeds.",
    ingredients: ["Raw Banana Slices", "Crushed Almonds", "Flax Seeds", "Honey"],
    benefits: ["Fiber-packed", "Energy on the go", "No refined sugar"]
  },
  { 
    id: "ld9", name: "Mini Choco Bites", category: "laddus", fixedPrice: 200, fixedWeight: "250g", price1kg: null, minQty: "Min order 250g", image: minichocos, hasWeightOptions: false,
    description: "Healthy chocolate alternatives made with cocoa and jaggery instead of white sugar.",
    ingredients: ["Natural Cocoa Powder", "Jaggery", "Nuts", "Ghee"],
    benefits: ["Mood booster", "Kid-friendly healthy chocolate", "Antioxidant rich"]
  },

  // 5. CHUTNEY POWDERS
  { 
    id: "cp1", name: "Moringa Leaves Chutney Pudi", category: "chatni", price1kg: 750, fixedPrice: null, fixedWeight: null, minQty: null, image: moringaleavespowder, hasWeightOptions: true,
    description: "A superfood chutney powder made with sun-dried drumstick leaves.",
    ingredients: ["Moringa Leaves", "Roasted Gram", "Dry Red Chilli", "Garlic"],
    benefits: ["Vitamin A & C rich", "Joint health", "Iron rich"]
  },
  { 
    id: "cp2", name: "Curry Leaves Chutney Pudi", category: "chatni", price1kg: 750, fixedPrice: null, fixedWeight: null, minQty: null, image: CurryLeavesChatniPowder, hasWeightOptions: true,
    description: "Aromatic powder that makes every meal healthy and tasty.",
    ingredients: ["Fresh Curry Leaves", "Urad Dal", "Tamarind", "Hing"],
    benefits: ["Improves eyesight", "Good for hair growth", "Aids digestion"]
  },
  { 
    id: "cp3", name: "Garlic Chutney Pudi", category: "chatni", price1kg: 800, fixedPrice: null, fixedWeight: null, minQty: null, image: GarlicChatniPowder, hasWeightOptions: true,
    description: "Authentic spicy garlic powder with a strong, appetizing aroma.",
    ingredients: ["Desi Garlic", "Dry Coconut", "Red Chilli Powder", "Salt"],
    benefits: ["Cholesterol control", "Antimicrobial", "Cold relief"]
  },
  { 
    id: "cp4", name: "Coriander & Mint Leaves Chutney Pudi", category: "chatni", price1kg: 750, fixedPrice: null, fixedWeight: null, minQty: null, image: coriandermintpowder, hasWeightOptions: true,
    description: "A refreshing and tangy powder made from fresh green herbs.",
    ingredients: ["Dried Coriander Leaves", "Mint Leaves", "Green Chilli", "Roasted Dal"],
    benefits: ["Body coolant", "Fresh breath", "Appetite stimulant"]
  },
  { 
    id: "cp5", name: "Dry Coconut Chutney Pudi", category: "chatni", price1kg: 750, fixedPrice: null, fixedWeight: null, minQty: null, image: coconutchutneypudi, hasWeightOptions: true,
    description: "Classic Kobbari Chutney Pudi, perfect with hot rice and ghee.",
    ingredients: ["Dry Coconut (Kobbari)", "Red Chilli", "Fried Gram", "Curry Leaves"],
    benefits: ["Healthy fats", "Traditional taste", "Long shelf life"]
  },
  { 
    id: "cp6", name: "Peanut Chutney Pudi", category: "chatni", price1kg: 750, fixedPrice: null, fixedWeight: null, minQty: null, image: PeanutChatniPowder, hasWeightOptions: true,
    description: "Crunchy and flavorful peanut powder, an all-time favorite side dish.",
    ingredients: ["Roasted Peanuts", "Garlic", "Jeera", "Red Chilli"],
    benefits: ["High protein", "Energy dense", "Improves heart health"]
  },
  { 
    id: "cp7", name: "GRAINS Chutney Pudi", category: "chatni", price1kg: 750, fixedPrice: null, fixedWeight: null, minQty: null, image: grainspowder, hasWeightOptions: true,
    description: "A unique mix of multiple roasted pulses and grains for extra nutrition.",
    ingredients: ["Toor Dal", "Moong Dal", "Horsegram", "Spices"],
    benefits: ["Multi-protein", "Low oil", "Highly nutritious"]
  },
  { 
    id: "cp8", name: "Idli Pudi", category: "chatni", price1kg: 750, fixedPrice: null, fixedWeight: null, minQty: null, image: idlipudi, hasWeightOptions: true,
    description: "The perfect spicy companion for soft idlis and crispy dosas.",
    ingredients: ["Urad Dal", "Chana Dal", "Sesame Seeds", "Dried Chillies"],
    benefits: ["Authentic hotel style", "Rich in minerals", "Protein rich"]
  },

  // 5. SPICES AND MASALAS
  { 
    id: "sm1", name: "Sambar Premium (17 Ingredients)", category: "masala", price1kg: 750, fixedPrice: null, fixedWeight: null, minQty: "Grandmother's Recipe", image: sambarmasala, hasWeightOptions: true,
    description: "Our signature blend using a secret 100-year-old grandmother's recipe.",
    ingredients: ["Coriander", "Cumin", "Fenugreek", "Curry Leaves", "13 Secret Spices"],
    benefits: ["Authentic home taste", "Chemical-free", "Aromatic"]
  },
  { 
    id: "sm2", name: "Rasam Powder (All types)", category: "masala", price1kg: 550, fixedPrice: null, fixedWeight: null, minQty: null, image: rasampowder, hasWeightOptions: true,
    description: "Versatile rasam powder suitable for pepper, tomato, or classic garlic rasam.",
    ingredients: ["Black Pepper", "Jeera", "Red Chillies", "Turmeric"],
    benefits: ["Instant cold relief", "Easy digestion", "Detoxifying"]
  },
  { 
    id: "sm3", name: "Gunturu Spicy Red Chilli Powder", category: "masala", price1kg: 500, fixedPrice: null, fixedWeight: null, minQty: null, image: guntururedchilli, hasWeightOptions: true,
    description: "Authentic Gunturu chillies ground to perfection for that extra spicy kick.",
    ingredients: ["Premium Guntur Chillies"],
    benefits: ["Natural heat", "Vibrant color", "Preservative-free"]
  },
  { 
    id: "sm4", name: "Dhaniya Powder (Premium)", category: "masala", price1kg: 500, fixedPrice: null, fixedWeight: null, minQty: null, image: daniyapowder, hasWeightOptions: true,
    description: "Slow-roasted coriander seeds ground to retain essential oils and aroma.",
    ingredients: ["Whole Coriander Seeds"],
    benefits: ["Natural aroma", "Rich in vitamins", "Anti-inflammatory"]
  },
  { 
    id: "sm5", name: "Stuffed Brinjal Masala Powder", category: "masala", price1kg: 650, fixedPrice: null, fixedWeight: null, minQty: "Enne Badanekayi", image: stuffedmasalapowder, hasWeightOptions: true,
    description: "The perfect spice mix for the famous North Karnataka Enne Badanekayi dish.",
    ingredients: ["Roasted Peanuts", "Sesame", "Niger Seeds (Uchellu)", "Spices"],
    benefits: ["Authentic taste", "Saves cooking time", "Rich earthy flavor"]
  },
  { 
    id: "sm6", name: "Palya Tasty Masala Powder", category: "masala", price1kg: 850, fixedPrice: null, fixedWeight: null, minQty: "For all Veggies", image: playatasteypowder, hasWeightOptions: true,
    description: "An all-purpose masala powder to make any vegetable stir-fry delicious.",
    ingredients: ["Chana Dal", "Urad Dal", "Clove", "Cinnamon", "Dry Coconut"],
    benefits: ["Enhances veggie flavor", "No MSG", "Purely homemade"]
  },
  { 
    id: "sm7", name: "Bisibelebath Powder", category: "masala", price1kg: 850, fixedPrice: null, fixedWeight: null, minQty: "Grandmother's Recipe", image: besibalipowder, hasWeightOptions: true,
    description: "Traditional Mysore-style Bisibelebath powder for a rich, spicy, and tangy meal.",
    ingredients: ["Maratha Moggu", "Kapok Buds", "Cinnamon", "Byadgi Chilli"],
    benefits: ["Restaurant quality at home", "Natural ingredients", "Perfectly balanced"]
  },
  { 
    id: "sm8", name: "Temple Style Puliyogare Powder", category: "masala", price1kg: 850, fixedPrice: null, fixedWeight: null, minQty: "Grandmother's Recipe", image: Puliyogarepowder, hasWeightOptions: true,
    description: "Get the divine taste of temple prasadam Puliyogare at home.",
    ingredients: ["Black Pepper", "Sesame", "Dried Ginger", "Tamarind Blend Spices"],
    benefits: ["Authentic aroma", "No artificial color", "Traditional method"]
  },
  { 
    id: "sm9", name: "Temple Style Puliyogare Gojju Mix", category: "masala", price1kg: 1200, fixedPrice: null, fixedWeight: null, minQty: "Ready to Mix", image: puliyogaregojju, hasWeightOptions: true,
    description: "Ready-to-use Puliyogare paste. Just mix with hot rice for an instant meal.",
    ingredients: ["Tamarind Paste", "Jaggery", "Peanuts", "Puliyogare Spices", "Ghee"],
    benefits: ["Instant meal", "Saves 30 mins cooking", "Authentic Gojju taste"]
  },
  { 
    id: "sm10", name: "Gojju Tasty Masala Powder", category: "masala", price1kg: 800, fixedPrice: null, fixedWeight: null, minQty: "Grandmother's Recipe", image: gojjupowder, hasWeightOptions: true,
    description: "Special spice mix to prepare any type of tangy tamarind-based curry (Gojju).",
    ingredients: ["Fenugreek Seeds", "Mustard", "Turmeric", "Red Chilli"],
    benefits: ["Tangy & spicy", "Home style", "Hand-ground"]
  },

  // 6. HEALTHY MALTS AND FLOURS
  { 
    id: "mf1", name: "Black Rice Ragi Malt", category: "malt", fixedPrice: 280, fixedWeight: "2kg", price1kg: null, minQty: "Min Order 2kg", image: ragimalt, hasWeightOptions: false,
    description: "A multipurpose healthy mix of Black Rice and Ragi. Perfect for Ragi Mudde or Ganji.",
    ingredients: ["Black Rice (Kavuni Arisi)", "Finger Millet (Ragi)"],
    benefits: ["Diabetes management", "High in fiber", "Weight control"]
  },
  { 
    id: "mf2", name: "Multigrains & Millets Chapati Flour", category: "malt", fixedPrice: 250, fixedWeight: "2kg", price1kg: null, minQty: "Best for Diabetic | Min 2kg", image: multigrainatta, hasWeightOptions: false,
    description: "A mega-blend of over 30 varieties of grains and millets for soft and healthy chapatis.",
    ingredients: ["Wheat", "Jowar", "Bajra", "Foxtail Millet", "Soya", "25+ other grains"],
    benefits: ["Sugar control", "Heart health", "High satiety"]
  },
  { 
    id: "mf3", name: "Baby Food Multigrain Ragi Malt", category: "malt", fixedPrice: 135, fixedWeight: "1kg", price1kg: null, minQty: "Min Order 1kg", image: babyfoodpowder, hasWeightOptions: false,
    description: "The safest and most nutritious first food for your little ones.",
    ingredients: ["Sprouted Ragi", "Green Gram", "Almonds", "Cardamom"],
    benefits: ["Natural growth", "Easy on tummy", "Rich in iron/calcium"]
  },
  { 
    id: "mf4", name: "Multigrain Millet Dosa Premix", category: "malt", fixedPrice: 65, fixedWeight: "500g", price1kg: null, minQty: "Min Order 500g", image: dosapremix, hasWeightOptions: false,
    description: "Instant dosa mix for busy mornings. Health and taste in one pack.",
    ingredients: ["Little Millet", "Kodo Millet", "Urad Dal", "Rice Flour"],
    benefits: ["Instant breakfast", "High protein", "No fermentation needed"]
  },
  { 
    id: "mf5", name: "Rice Flour (Premium)", category: "malt", fixedPrice: 65, fixedWeight: "1kg", price1kg: null, minQty: "Min Order 1kg", image: riceflour, hasWeightOptions: false,
    description: "Super-fine stone-ground rice flour for perfect Akki Rottis and snacks.",
    ingredients: ["Premium Sona Masuri Rice"],
    benefits: ["Extra fine texture", "Natural processing", "Preservative-free"]
  },
  { 
    id: "mf6", name: "Weight Loss Black Rice Menthya Malt", category: "malt", fixedPrice: 560, fixedWeight: "2kg", price1kg: null, minQty: "Min Order 2kg", image: waitloss, hasWeightOptions: false,
    description: "Specifically designed for weight loss using the power of Black Rice and Fenugreek.",
    ingredients: ["Black Rice", "Fenugreek (Menthya)", "Jeera", "Sprouted Grains"],
    benefits: ["Burns fat", "Controls cravings", "Regulates hormones"]
  },
];

export const weightOptions = [
  { label: "250g", grams: 250 },
  { label: "500g", grams: 500 },
  { label: "1kg", grams: 1000 },
];

export function getPriceForWeight(price1kg: number, grams: number): number {
  return Math.round((price1kg / 1000) * grams);
}