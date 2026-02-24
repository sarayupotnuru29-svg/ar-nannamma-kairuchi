import catProtein from "@/assets/cat-protein.jpg";
import catLaddus from "@/assets/cat-laddus.jpg";
import catChatni from "@/assets/cat-chatni.jpg";
import catMasala from "@/assets/cat-masala.jpg";
import catMalt from "@/assets/cat-malt.jpg";
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
import peanutladdu from "@/assets/peanutladdu.jpg";
import proteinpowder from "@/assets/proteinpowder.webp";
import proteinpow from "@/assets/proteinpow.webp";
import FlaxSeedsChatniPowder from "@/assets/flax-seeds-chutney-powder.jpg"
import PeanutChatniPowder from "@/assets/peanutpowder.webp"
import CurryLeavesChatniPowder from "@/assets/curryleavespowder.webp"
import GarlicChatniPowder from "@/assets/garlicpowder.jpg"
import  coconutchutneypudi from "@/assets/coconutchutneypudi.jpeg"
import  sambarmasala from "@/assets/sambarpowder.webp"
import  rasampowder from "@/assets/rasampowder.webp"
import  besibalipowder from "@/assets/bisi-bele-bath-masala.webp"
import  Puliyogarepowder from "@/assets/puliyogarepowder.jpg"
import  vangibathpowder from "@/assets/vangibathpowder.webp"
import  ragimalt from "@/assets/ragimalt.jpg"
import  sathumavvu from "@/assets/Sathumaavu.jpg"
import  badammilkpowder from "@/assets/Badammilkpowder.jpg"
import  babyfoodpowder from "@/assets/babyfoodpowder.jpg"
import  dosapremix from "@/assets/dosapremix.jpg"
import  ragiflour from "@/assets/ragiflour.jpg"
import  jowarflour from "@/assets/jowarflour.jpg"
import  multigrainatta from "@/assets/multigrainatta.webp"
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
}

export const categories = [
  { id: "protein", name: "Protein Powders", description: "Homemade natural protein blends for daily nutrition", image: catProtein },
  { id: "laddus", name: "Healthy Laddus", description: "Traditional laddus made with jaggery & natural sweeteners", image: catLaddus },
  { id: "chatni", name: "Chatni Powders", description: "Flavorful chutney powders for rice, dosa & idli", image: catChatni },
  { id: "masala", name: "Spicy Masalas", description: "Aromatic spice blends ground fresh", image: catMasala },
  { id: "malt", name: "Healthy Malts", description: "Nutritious malt drinks for all ages", image: catMalt },
  { id: "flour", name: "Multigrain Flours", description: "Stone-ground multigrain flours & premixes", image: catFlour },
];

export const products: Product[] = [
  // Protein Powders
  { id: "pp1", name: "Protein Powder (Premium)", category: "protein", price1kg: 1200, fixedPrice: null, fixedWeight: null, minQty: null, image: proteinpow, hasWeightOptions: true },
  { id: "pp2", name: "Protein Powder (Classic)", category: "protein", price1kg: 900, fixedPrice: null, fixedWeight: null, minQty: null, image: proteinpowder, hasWeightOptions: true },
  { id: "pp3", name: "Drynuts & Seeds Protein Powder", category: "protein", price1kg: 1200, fixedPrice: null, fixedWeight: null, minQty: null, image: catProtein, hasWeightOptions: true },

  // Laddus
  { id: "ld1", name: "Ragi Laddu", category: "laddus", fixedPrice: 300, fixedWeight: "15 pcs", price1kg: null, minQty: "Min 15 pieces", image: ragiladdu, hasWeightOptions: false },
  { id: "ld2", name: "Protein Laddu", category: "laddus", fixedPrice: 350, fixedWeight: "15 pcs", price1kg: null, minQty: "Min 15 pieces", image: proteinladdu, hasWeightOptions: false },
  { id: "ld3", name: "Makkana Laddu", category: "laddus", fixedPrice: 350, fixedWeight: "15 pcs", price1kg: null, minQty: "Min 15 pieces", image: makanaladdu, hasWeightOptions: false },
  { id: "ld4", name: "Peanut Laddu", category: "laddus", fixedPrice: 250, fixedWeight: "15 pcs", price1kg: null, minQty: "Min 15 pieces", image: peanutladdu, hasWeightOptions: false },
  { id: "ld5", name: "Sesame Laddu", category: "laddus", fixedPrice: 300, fixedWeight: "15 pcs", price1kg: null, minQty: "Min 15 pieces", image: sesamaseed, hasWeightOptions: false },
  { id: "ld6", name: "Coconut Laddu", category: "laddus", fixedPrice: 280, fixedWeight: "15 pcs", price1kg: null, minQty: "Min 15 pieces", image: coconutladdu, hasWeightOptions: false },
  { id: "ld7", name: "Dryfruit Laddu", category: "laddus", fixedPrice: 400, fixedWeight: "15 pcs", price1kg: null, minQty: "Min 15 pieces", image: dryfruitladdu, hasWeightOptions: false },
  { id: "ld8", name: "Seeds Banana Bites", category: "laddus", fixedPrice: 250, fixedWeight: "15 pcs", price1kg: null, minQty: "Min 15 pieces", image: seedsbananabites, hasWeightOptions: false },
  { id: "ld9", name: "Healthy Nuts & Seeds", category: "laddus", fixedPrice: 350, fixedWeight: "250g", price1kg: null, minQty: null, image: healthyseeds, hasWeightOptions: false },
  { id: "ld10", name: "Mini Chocos", category: "laddus", fixedPrice: 200, fixedWeight: "15 pcs", price1kg: null, minQty: "Min 15 pieces", image: minichocos, hasWeightOptions: false },

  // Chatni Powders
  { id: "cp1", name: "Flax Seeds Chatni Powder", category: "chatni", price1kg: 800, fixedPrice: null, fixedWeight: null, minQty: null, image: FlaxSeedsChatniPowder, hasWeightOptions: true },
  { id: "cp2", name: "Peanut Chatni Powder", category: "chatni", price1kg: 700, fixedPrice: null, fixedWeight: null, minQty: null, image: PeanutChatniPowder, hasWeightOptions: true },
  { id: "cp3", name: "Coconut Chatni Powder", category: "chatni", price1kg: 750, fixedPrice: null, fixedWeight: null, minQty: null, image: coconutchutneypudi, hasWeightOptions: true },
  { id: "cp4", name: "Curry Leaves Chatni Powder", category: "chatni", price1kg: 850, fixedPrice: null, fixedWeight: null, minQty: null, image: CurryLeavesChatniPowder, hasWeightOptions: true },
  { id: "cp5", name: "Garlic Chatni Powder", category: "chatni", price1kg: 800, fixedPrice: null, fixedWeight: null, minQty: null, image: GarlicChatniPowder, hasWeightOptions: true },

  // Spicy Masalas
  { id: "sm1", name: "Sambar Powder", category: "masala", price1kg: 600, fixedPrice: null, fixedWeight: null, minQty: null, image: sambarmasala, hasWeightOptions: true },
  { id: "sm2", name: "Rasam Powder", category: "masala", price1kg: 600, fixedPrice: null, fixedWeight: null, minQty: null, image: rasampowder, hasWeightOptions: true },
  { id: "sm3", name: "Bisi Bele Bath Powder", category: "masala", price1kg: 700, fixedPrice: null, fixedWeight: null, minQty: null, image: besibalipowder, hasWeightOptions: true },
  { id: "sm4", name: "Puliyogare Powder", category: "masala", price1kg: 800, fixedPrice: null, fixedWeight: null, minQty: null, image: Puliyogarepowder, hasWeightOptions: true },
  { id: "sm5", name: "Vangi Bath Powder", category: "masala", price1kg: 700, fixedPrice: null, fixedWeight: null, minQty: null, image: vangibathpowder, hasWeightOptions: true },

  // Healthy Malts
  { id: "hm1", name: "Ragi Malt", category: "malt", price1kg: 500, fixedPrice: null, fixedWeight: null, minQty: null, image: ragimalt, hasWeightOptions: true },
  { id: "hm2", name: "Sathu Maavu (Health Mix)", category: "malt", price1kg: 600, fixedPrice: null, fixedWeight: null, minQty: null, image: sathumavvu, hasWeightOptions: true },
  { id: "hm3", name: "Badam Milk Powder", category: "malt", price1kg: 900, fixedPrice: null, fixedWeight: null, minQty: null, image: badammilkpowder, hasWeightOptions: true },
  { id: "hm4", name: "Baby Food Mix", category: "malt", price1kg: 700, fixedPrice: null, fixedWeight: null, minQty: null, image: babyfoodpowder, hasWeightOptions: true },

  // Multigrain Flours
  { id: "mf1", name: "Ragi Flour", category: "flour", price1kg: 400, fixedPrice: null, fixedWeight: null, minQty: null, image: ragiflour, hasWeightOptions: true },
  { id: "mf2", name: "Jowar Flour", category: "flour", price1kg: 450, fixedPrice: null, fixedWeight: null, minQty: null, image: jowarflour, hasWeightOptions: true },
  { id: "mf3", name: "Multigrain Atta", category: "flour", price1kg: 500, fixedPrice: null, fixedWeight: null, minQty: null, image: multigrainatta, hasWeightOptions: true },
  { id: "mf4", name: "Dosa Premix", category: "flour", price1kg: 550, fixedPrice: null, fixedWeight: null, minQty: null, image: dosapremix, hasWeightOptions: true },
];

export const weightOptions = [
  { label: "50g", grams: 50 },
  { label: "100g", grams: 100 },
  { label: "250g", grams: 250 },
  { label: "500g", grams: 500 },
  { label: "1kg", grams: 1000 },
];

export function getPriceForWeight(price1kg: number, grams: number): number {
  return Math.round((price1kg / 1000) * grams);
}
