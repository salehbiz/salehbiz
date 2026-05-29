export interface Project {
  slug: string;
  title: string;
  year: string;
  category: string;
  image: string; // Widescreen Mockup Showcase (Screenshot 2)
  client: string;
  services: string[];
  challenge: string; // Quick summary challenge text
  solution: string; // Quick summary solution text
  results: string[]; // General impact metrics

  // Custom Detail Template Fields
  date?: string; // Date displayed on hero (Screenshot 1 top-left)
  tags?: string[]; // Tags displayed on hero (Screenshot 1 bottom-left)
  liveUrl?: string; // Target link for "View Live Website" button
  bgImage?: string; // Fixed blurry warm backdrop image

  // Brief Section (Screenshot 3)
  briefText?: string[]; // 2 paragraphs of description
  briefImages?: string[]; // 2 side-by-side showcase mockups

  // Challenge Section (Screenshot 4)
  challengeText?: string[]; // Detailed challenge analysis (2 paragraphs)
  challengeImage?: string; // Challenge widescreen mockup banner

  // Approach / Results / Conclusion (Screenshot 5)
  approachIntro?: string; // Our Approach intro paragraph
  approachBullets?: string[]; // Our Approach checklist bullets
  resultsIntro?: string; // The Results intro paragraph
  resultsBullets?: string[]; // The Results metric items
  conclusionText?: string; // Summary conclusion wrap-up
}

export const projects: Project[] = [
  {
    slug: "marabi",
    title: "Marabi",
    year: "2026",
    date: "08/14/2025",
    category: "Consultancy Website",
    image: "/assets/images/marabi-1.png",
    client: "Mario Marcus, Founder of Marabi",
    services: ["Website Design", "Copy", "Build", "Launch"],
    challenge: "Marabi needed a digital presence that finally reflected the work Mario was already doing in the room.",
    solution: "A business website for Marabi, the consultancy founded by Mario Marcus. The goal was to give the business a digital presence that finally reflected the work Mario was already doing in the room.",
    results: [],
    tags: ["Website", "Consultancy"],
    liveUrl: "https://marbiuae.com",
    bgImage: "/assets/images/7zSE0iCVh5ArDivW2EDOo20IJI.png",
    briefText: [
      "Mario had been running Marabi on referrals and LinkedIn outreach for years. The business was healthy. The website was not. Every new prospect who heard about him through a connection ended up Googling the company, and what they found did not match the conversations they had just had with him.",
      "The brief was simple. Build a site that finally matched the quality of the work Marabi was already delivering. No marketing language, no filler. Something Mario could send a senior prospect without flinching."
    ],
    briefImages: [
      "/assets/images/marabi-2.png",
      "/assets/images/marabi-3.png"
    ],
    challengeText: [
      "The harder part was the positioning. Mario works across multiple industries and a single line of copy could not capture all of it. The site needed to read as senior and specific without locking the business into one narrow vertical.",
      "We also needed structure that could grow with the business. Mario adds new offerings regularly, and the site needed to absorb that without becoming a constant maintenance project."
    ],
    challengeImage: "/assets/images/marabi-4.png",
    approachIntro: "The site is built around clarity, not novelty. A clean layout, considered typography, and short, deliberate copy that lets Mario's experience speak without trying to dress it up.",
    approachBullets: [
      "Custom design system built around Mario's voice, not a template",
      "Copy written from scratch after a deep positioning conversation",
      "A structure that handles new services and offerings without redesigns",
      "Fast, accessible, and built to load cleanly on every device",
      "A simple lead path that routes serious inquiries directly to Mario"
    ],
    resultsIntro: "The site is live and Mario now sends it as the default response to every serious inbound conversation. It has replaced the \"let me explain what I do\" message that used to come after every introduction.",
    resultsBullets: [],
    conclusionText: "Marabi did not need a louder website. It needed a quieter, more confident one. The kind of site that does the work of explaining who Mario is before the first call, so the call itself can be about the actual problem."
  },
  {
    slug: "world-business-hub",
    title: "World Business Hub",
    year: "2025",
    date: "11/22/2025",
    category: "Corporate Website",
    image: "/assets/images/portfolio-4.png",
    client: "World Business Hub",
    services: ["Website Design", "Copy", "Build", "Launch"],
    challenge: "World Business Hub sought a corporate website that needed to read as institutional and serious from the first second.",
    solution: "A corporate website for World Business Hub, a UAE-based consultancy working with governments, investors, and large organizations. The site needed to read as institutional and serious from the first second.",
    results: [],
    tags: ["Website", "Corporate"],
    liveUrl: "https://wbhholding.com",
    bgImage: "/assets/images/7zSE0iCVh5ArDivW2EDOo20IJI.png",
    briefText: [
      "World Business Hub had outgrown its old site. The business was working with serious clients, but the digital presence still looked like a small consultancy. The new site needed to match the scale and seriousness of the actual work happening behind the scenes.",
      "The brief was to build a site that signaled credibility immediately. Something a government counterpart, an investor, or a senior advisor could land on and instantly understand the weight of the firm."
    ],
    briefImages: [
      "/assets/images/world-business-hub-2.png",
      "/assets/images/world-business-hub-3.png"
    ],
    challengeText: [
      "The hardest part was tone. The site needed to read as senior and institutional without becoming dry, and as ambitious without becoming startup-y. It also needed to handle a lot of information across multiple service lines and audience types, from sovereign clients to private partners, without becoming cluttered."
    ],
    challengeImage: "/assets/images/world-business-hub-4.png",
    approachIntro: "We led with structure. Every page was built around a clear hierarchy that lets a serious reader find what they need within seconds. The visual system is restrained on purpose. No gradients, no excess motion, no design tricks.",
    approachBullets: [
      "A clear information architecture mapped to real visitor intents",
      "Custom typography pairing that reads as established, not new",
      "Copy that respects the reader's time and seniority",
      "Performance and SEO foundations built in from day one",
      "Layouts that hold up across desktop, tablet, and mobile"
    ],
    resultsIntro: "The site is live and is now the firm's primary digital surface for both inbound and outbound conversations. It has replaced the older site as the link the team sends in every introduction email.",
    resultsBullets: [],
    conclusionText: "When the audience is senior, the website has to act senior. World Business Hub did not need flair. It needed a site that earned the room before the first meeting started."
  },
  {
    slug: "usman-zafar",
    title: "Usman Zafar",
    year: "2024",
    date: "04/09/2024",
    category: "Personal Brand + Internal System",
    image: "/assets/images/portfolio-1.png",
    client: "Usman Zafar",
    services: ["Personal Brand Site", "Internal Platform", "Design", "Build"],
    challenge: "Usman Zafar required a public personal brand site and a private internal platform built to support his operations.",
    solution: "A personal brand site and an internal business platform for Usman Zafar, a senior advisor and strategist. Two surfaces, one identity. Built to support both the public face of his practice and the systems running behind it.",
    results: [],
    tags: ["Personal Brand", "Internal Platform"],
    liveUrl: "https://usmanzafar.com",
    bgImage: "/assets/images/7zSE0iCVh5ArDivW2EDOo20IJI.png",
    briefText: [
      "Usman needed two things at once. A public personal brand site that reflected the seniority of his career, and a private internal platform that supported the operational side of his practice. The two had to feel like the same brand, even though they served completely different audiences.",
      "The brief was unusual but clean. Build the public face that convinces senior counterparts to engage, and build the internal system that supports the work once they do."
    ],
    briefImages: [
      "/assets/images/usman-zafar-2.png",
      "/assets/images/usman-zafar-3.png"
    ],
    challengeText: [
      "The challenge was holding one identity across two completely different contexts. The public site needed to feel calm, established, and authoritative. The internal platform needed to feel fast, functional, and quietly powerful. Most teams would have split this into two unrelated projects. We treated it as one.",
      "The other challenge was sensitivity. The internal platform handles work Usman cannot share publicly, so the design had to assume confidentiality from the first decision."
    ],
    challengeImage: "/assets/images/usman-zafar-4.png",
    approachIntro: "We designed the brand once and let it carry across both surfaces. The visual language, the typography, and the voice are consistent. What changes is the density and pace, depending on the context.",
    approachBullets: [
      "A single design system serving both the public site and the internal platform",
      "A public brand site focused on credibility, not lead volume",
      "An internal platform built around real workflows, not generic dashboards",
      "Quiet, deliberate motion that reads as senior across both surfaces",
      "Built to scale as Usman adds new internal tools over time"
    ],
    resultsIntro: "Both surfaces are live in their respective contexts. The public site supports introductions and senior referrals. The internal platform supports the actual operations behind the practice.",
    resultsBullets: [],
    conclusionText: "A serious operator needs more than a website. They need a brand that holds together whether the audience is a prospective client or their own team. Usman's project was a quiet reminder that the best digital work is rarely the loudest."
  },
  {
    slug: "raco",
    title: "Raco",
    year: "2024",
    date: "10/05/2024",
    category: "Internal Platform",
    image: "/assets/images/portfolio-raco-2.png",
    client: "Raco",
    services: ["Custom CRM", "Dashboard Design", "Build"],
    challenge: "Raco wanted a custom internal CRM and operations dashboard to replace spreadsheets with a calm system.",
    solution: "An internal CRM and operations dashboard for Raco, a Dubai-based real estate business. Built to replace spreadsheets, scattered notes, and manual follow-ups with one calm system.",
    results: [],
    tags: ["Internal CRM", "Real Estate"],
    liveUrl: "",
    bgImage: "/assets/images/7zSE0iCVh5ArDivW2EDOo20IJI.png",
    briefText: [
      "Raco's operations had outgrown spreadsheets. The team was running a real estate business across multiple deals, leads, and clients, and the existing setup was eating hours every week in manual updates and missed follow-ups. They didn't want a generic CRM. They wanted a custom system that fit how they actually worked.",
      "The brief was clear. Build a tool that the team would actually use every day, not one they would resist."
    ],
    briefImages: [
      "/assets/images/raco-2.png",
      "/assets/images/raco-3.png"
    ],
    challengeText: [
      "Most off-the-shelf CRMs are bloated. They try to serve every industry and end up serving none of them well. Raco needed something narrow and specific. Fields, flows, and views that matched how a real estate operation actually moves. Not a tool the team had to bend around.",
      "The other challenge was speed. The system had to be fast enough that the team would default to it instead of falling back on spreadsheets when they were busy."
    ],
    challengeImage: "/assets/images/raco-4.png",
    approachIntro: "We started with how the team actually worked, not with how a CRM is supposed to work. The system is built around their real day, not a generic sales funnel.",
    approachBullets: [
      "A custom CRM designed around real estate workflows, not adapted from a template",
      "Clean, fast interfaces that make data entry feel like less of a chore",
      "Dashboards built around the questions the team actually asks",
      "A structure that grows with new deal types and new team members",
      "No monthly seat fees, no vendor lock-in, full ownership"
    ],
    resultsIntro: "The platform replaced the team's spreadsheet setup and is now the daily working surface for the business. The team uses it without being asked to, which is the only meaningful signal that an internal tool actually works.",
    resultsBullets: [],
    conclusionText: "The best internal tools are the ones the team forgets they were ever without. Raco's project was about removing friction quietly. No hero metrics, no launch announcement. Just a system that does its job and gets out of the way."
  }
];
