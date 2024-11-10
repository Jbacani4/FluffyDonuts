import coffee from "../../src/assets/coffee.jpg";
import coffee_mobile from "../../src/assets/coffee_mobile.jpg";
import community from "../../src/assets/community.jpg";
import community_mobile from "../../src/assets/community_mobile.jpg";
import donut from "../../src/assets/donut.jpg";
import donut_mobile from "../../src/assets/donut_mobile.jpg";

const colors = ["var(--darkGreen)", "var(--lightGreen)", "var(--darkPink)","var(--lightPink)"]

const texts = {
    en: {
        greeting: "WELCOME",
        tagline: "COFFEE + DONUTS. PLANT-BASED. GOOD VIBES.",
        nav: ["HOME", "ABOUT", "CONTACT", "FR"],
        contact: ["HOURS", "ADDRESS", "EMAIL", "PHONE"]
    },
    fr: {
        greeting: "BIENVENUE",
        tagline: "CAFÉ + BEIGNES. PLANT-BASED. BONNES VIBES.",
        nav: ["ACCUEIL", "À PROPOS", "CONTACT", "EN"],
        contact: ["HEURES", "ADDRESSE", "COURRIEL", "TÉLÉPHONE"]
    }
};


const slides = [
    {
        image: coffee,
        mobileImage: coffee_mobile,
        en: 'Coffee is more than just a drink — it’s an art form. As a 3rd Wave café, each bean is ethically sourced and each cup is crafted with care for an elevated experience.',
        fr:"Le café, c'est bien plus qu'une boisson — c'est un art de vivre. En tant que café 3rd Wave, chaque grain est choisi de manière éthique et chaque tasse préparée avec soin pour offrir une expérience élevée."
    },
    {
        image: donut,
        mobileImage: donut_mobile,
        en: 'Our deliciously fluffy, 100% plant-based doughnuts are made fresh daily from scratch, with love and using only natural, organic ingredients.',
        fr: "Nos beignes moelleux et délicieux - 100 % à base de plantes - sont préparés maison chaque jour avec amour, uniquement à partir d’ingrédients naturels et biologiques."
    },
    {
        image: community,
        mobileImage: community_mobile,
        en: 'From eco-friendly practices to local partnerships, we’re committed to creating a sustainable future and building a connected community.',
        fr:  "De nos pratiques écoresponsables à nos partenariats locaux, nous sommes engagés à créer un avenir durable et à bâtir une communauté connectée."
    }
];



export { colors, slides, texts };

