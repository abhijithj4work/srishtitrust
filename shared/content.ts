export const siteInfo = {
  name: "Srishti Trust",
  tagline: "Nurturing education, fostering empowerment, and creating sustainable livelihoods",
  location: "Munnar, Kerala",
  since: 1991,
  contact: {
    address: "Srishti Trust, Nullatani Estate, Munnar, Kerala 685612",
    phone: "+91 9400563031",
    email: "reachus@srishtitrust.com",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    tiktok: "https://tiktok.com",
  },
};

export const heroContent = {
  eyebrow: "Since 1991 · Munnar, Kerala",
  lines: [
    "We Nurture Education",
    "Foster Empowerment",
    "And Create Sustainable Livelihoods",
  ],
  subtitle:
    "For specially-abled children of plantation workers in Munnar, Kerala",
  ctaPrimary: "Support Our Mission",
  ctaSecondary: "Explore Our Journey",
};

export const impactStats = [
  { value: 193, suffix: "+", label: "Lives Empowered" },
  { value: 8, suffix: "", label: "Welfare Institutes" },
  { value: 35, suffix: "+", label: "Years of Impact" },
  { value: 500, suffix: "+", label: "Products Crafted" },
];

export const whoWeAre = {
  title: "Who We Are",
  content: `In 1991, with support from Tata Tea, we founded a charitable trust to educate and empower specially-abled children and young adults in and around Munnar's plantations. At the time there was little access to special needs education and even fewer opportunities for a sustainable livelihood. What began as a small effort grew into eight welfare institutes, offering education, skills and financial independence.`,
  cta: "Know More",
};

export const makingADifference = {
  title: "Making a Difference",
  subtitle: "At the heart of what we do",
  pillars: [
    {
      title: "Education",
      description:
        "At DARE School, we nurture children with disabilities through education, care and support, creating a holistic environment where they can flourish in academics, life skills and social skills.",
    },
    {
      title: "Empowerment",
      description:
        "At the age of 16, our students begin pre-vocational training guided by skilled artisans in fields that match their abilities and interests, helping them transition into meaningful careers within our welfare units.",
    },
    {
      title: "Livelihoods",
      description:
        "Our Welfare Institutes provide employment to specially-abled youth graduating from the DARE School empowering them to achieve financial freedom and become contributing members of our society.",
    },
  ],
  quote: {
    text: "A hero is an ordinary individual who finds the strength to persevere and endure in spite of overwhelming obstacles.",
    author: "Christopher Reeve",
  },
};

export const institutesIntro = {
  title: "Our Institutes",
  description:
    "At Srishti's eight welfare institutes, children with disabilities are nurtured through a caring environment and specialized education; while our specially-abled adults find dignity, purpose and sustenance through work. From naturally-dyed textiles, wood-free handmade paper and embroidered creations to jams and preserves, baked items and freshly grown vegetables, every product carries their skill, care and story of empowerment.",
  highlight:
    "Our specially-abled artisans, trained by world-class experts, skilfully blend global techniques with heartfelt craftsmanship to create every piece.",
};

export interface Institute {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export const institutes: Institute[] = [
  {
    slug: "dare-school",
    name: "DARE School",
    tagline: "Where specially-abled children flourish through education and care",
    description:
      "DARE School provides holistic education for children with disabilities, focusing on academics, life skills, and social development in a nurturing environment.",
    image: "assets/institute-dare.jpg",
  },
  {
    slug: "aranya-natural",
    name: "Aranya Natural",
    tagline: "Award-winning naturally-dyed textiles using traditional techniques",
    description:
      "Aranya Natural creates award-winning naturally-dyed textiles using traditional techniques. Recipient of the Nari Shakti Puraskar 2017 and First International Craft Award.",
    image: "assets/institute-aranya.jpg",
  },
  {
    slug: "athulya-paper-studio",
    name: "Athulya Paper Studio",
    tagline: "Eco-friendly handmade paper from tea fiber and elephant dung",
    description:
      "Athulya Paper Studio produces eco-friendly handmade paper from tea fiber and elephant dung, transforming natural discards into beautiful artisanal products.",
    image: "assets/institute-athulya.jpg",
  },
  {
    slug: "nisarga",
    name: "Nisarga",
    tagline: "Delicious preservative-free jams and preserves from local fruits",
    description:
      "Nisarga crafts delicious preservative-free jams and preserves from locally sourced fruits, with no artificial colours or additives.",
    image: "assets/institute-nisarga.jpg",
  },
  {
    slug: "deli-bakery",
    name: "The Deli Bakery",
    tagline: "ISO 22000 certified bakery creating artisanal breads and pastries",
    description:
      "The Deli Bakery is an ISO 22000 certified bakery creating artisanal breads and pastries, providing vocational training and employment opportunities.",
    image: "assets/institute-deli.jpg",
  },
  {
    slug: "disha",
    name: "Disha",
    tagline: "Beautiful hand-embroidered creations by skilled artisans",
    description:
      "Disha produces beautiful hand-embroidered creations by skilled artisans, preserving traditional embroidery techniques while creating contemporary designs.",
    image: "assets/institute-disha.jpg",
  },
  {
    slug: "shakti",
    name: "Shakti",
    tagline: "Women Empowerment",
    description:
      "Shakti focuses on women empowerment, with production units led by women and a workforce with a higher proportion of women than men.",
    image: "assets/institute-shakti.jpg",
  },
  {
    slug: "vatika",
    name: "Vatika",
    tagline: "Fresh Vegetables",
    description:
      "Vatika grows fresh vegetables sustainably, with treated wastewater reused for gardening as part of our circular production practices.",
    image: "assets/institute-vatika.jpg",
  },
];

export const womenEmpowerment = {
  title: "Women Empowerment",
  content: `Women are at the heart of Srishti Trust's operations. All production units are led by women, and the overall workforce has a higher proportion of women than men. From the Managing Trustee to associates, women lead with professionalism, accountability and dignity.`,
  story: `A shining example is Mallika, a specially-abled artisan and natural dye master at Aranya Natural, who has raised her daughter on her own—today, her daughter works as a nurse in Ireland. Stories like hers reflect the real impact of economic independence and social empowerment at Srishti Trust.`,
  closing:
    "Across all our units, women's contributions continue to shape an inclusive, equitable and empowering workplace.",
  award: {
    title: "Nari Shakti Puraskar 2017",
    description:
      "Aranya Natural received the Nari Shakti Puraskar in 2017. It also received the First International Craft Award in the same year in the 'Organization for Business Development in the Craft Sector' category.",
  },
};

export const sustainability = {
  title: "Sustainability is at the Core of What We Do",
  intro:
    "Sustainability is central to Srishti Trust's philosophy and operations. Waste water from all our units is treated at a central ETP and reused for gardening.",
  points: [
    "Raw materials for production are sourced responsibly, including natural discards like tea fiber and elephant dung, while untreated cotton fabric is used for stitching laundry bags.",
    "Food units produce preservative-free and artificial colour-free products, with The Deli Bakery being ISO 22000 certified.",
    "These practices ensure environmentally responsible, circular production and reflect the Trust's commitment to harmony with nature.",
  ],
  award:
    "Srishti Trust has been recognised as the winner at the 8th ICC Social Impact Awards 2026 in the Skill Development category for the project 'Transforming Lives in Kerala's Plantations.'",
};

export const artisanSpotlight = {
  title: "Artisan Spotlight",
  quote:
    "When we were young, my sister and I studied at DARE School. After we completed our studies, we started working at Aranya Natural as natural-dye artisans. We are now earning and supporting our parents.",
  name: "James",
  bio: "James is the specially-abled son of an ex-plantation worker at Chundavurrai Tea Estate, Munnar.",
  sectionTitle: "Sustainable Livelihoods",
  sectionContent:
    "We have empowered 193 specially-abled individuals, including DARE School graduates and specially-abled people from in and around Munnar, to build independent lives. Through training and guidance, they are now employed across our welfare institutes, thriving at work and supporting their families.",
};

export const journeyContent = {
  title: "Our Journey",
  sections: [
    {
      year: "1991",
      title: "The Beginning",
      content:
        "With support from Tata Tea, Srishti Trust was founded to address the critical lack of special needs education and livelihood opportunities for specially-abled children of plantation workers in Munnar, Kerala.",
    },
    {
      year: "1995",
      title: "DARE School Opens",
      content:
        "DARE School was established as the foundation of our mission, providing holistic education for children with disabilities in the plantation communities.",
    },
    {
      year: "2000s",
      title: "Welfare Institutes Grow",
      content:
        "What began as a small effort grew into eight welfare institutes, each offering specialized vocational training and employment opportunities matched to individual abilities and interests.",
    },
    {
      year: "2017",
      title: "National Recognition",
      content:
        "Aranya Natural received the prestigious Nari Shakti Puraskar and the First International Craft Award, bringing national and international recognition to our artisans' craftsmanship.",
    },
    {
      year: "2026",
      title: "Continuing Impact",
      content:
        "Srishti Trust was recognised as the winner at the 8th ICC Social Impact Awards 2026 in the Skill Development category, celebrating 35+ years of transforming lives in Kerala's plantations.",
    },
  ],
};

export const donateContent = {
  title: "Support Our Mission",
  subtitle: "Your donations help us expand our programs, reach more children, and create more sustainable livelihoods.",
  impact: [
    { amount: "₹500", description: "Provides school supplies for one child for a month" },
    { amount: "₹2,000", description: "Supports vocational training materials for one artisan" },
    { amount: "₹5,000", description: "Funds raw materials for one month of production" },
    { amount: "₹10,000", description: "Sponsors a child's education for three months" },
  ],
};

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Our Journey", path: "/journey" },
  { label: "Institutes", path: "/institutes" },
  { label: "Shop", path: "/shop" },
  { label: "Contact", path: "/contact" },
  { label: "Donate", path: "/donate" },
];
