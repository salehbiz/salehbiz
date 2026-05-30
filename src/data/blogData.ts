export interface BlogSection {
  heading: string;
  content: string;
  image?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  body: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'does-your-website-cost-you-clients',
    title: 'Does Your Website Cost You Clients?',
    subtitle: 'Most consultants assume their website is neutral. It is not. A weak digital presence actively loses clients before a conversation ever starts.',
    category: 'Web Strategy',
    date: 'May 28, 2026',
    readTime: '5 min read',
    coverImage: '/assets/images/blog-website-cost-clients.png',
    body: [
      {
        heading: 'The silent filter every prospect runs',
        content: 'Before anyone books a call with you, they search your name. This is not speculation — it is standard behaviour among every category of senior professional and corporate buyer. What they find in that moment is either a reason to continue or a quiet reason to move on. Most consultants assume their website is neutral. It is not. A site that looks dated, generic, or misaligned with the seniority of the work you do sends a signal. It says the person behind it either does not take their own positioning seriously or has not updated their digital presence since they were building their career rather than running it.'
      },
      {
        heading: 'What a weak website actually costs',
        content: 'The cost is not visible. Nobody emails to say your website put them off. They simply do not reach out. The deal goes to someone else. The referral does not convert. You never know what you lost. For a consultant charging $5,000 to $15,000 a month per engagement, one missed client per quarter is a significant number. Two or three per year is a serious problem. The website is rarely framed as a revenue problem, but that is exactly what it is.',
        image: '/assets/images/blog-website-loss-metric.png'
      },
      {
        heading: 'What prospects are actually looking for',
        content: 'They are not looking for flashy design. Senior buyers are looking for three things: clarity about what you do and who you do it for, evidence that you have done it before at the right level, and enough professionalism in the presentation to feel comfortable recommending you to their board or their peers. A site that delivers those three things in the first 30 seconds does its job. Most consulting websites fail on all three.'
      },
      {
        heading: 'The fix is simpler than most people think',
        content: 'You do not need a 20-page website. You need a clear positioning statement, two or three outcome-focused case studies or project descriptions, a simple about section that reads like a capable person wrote it rather than a CV template, and a frictionless way to get in touch. That is it. The difference between a website that loses clients and one that converts them is not complexity. It is clarity.'
      }
    ]
  },
  {
    slug: 'what-to-put-on-a-consulting-website',
    title: 'What to Put on a Consulting Website',
    subtitle: 'Most consultants either put too much on their website or too little. Here is the structure that actually converts senior clients.',
    category: 'Web Strategy',
    date: 'May 14, 2026',
    readTime: '6 min read',
    coverImage: '/assets/images/blog-what-to-put.png',
    body: [
      {
        heading: 'The four pages every consulting website needs',
        content: 'You do not need ten pages. You need four good ones. A homepage that communicates who you are, who you work with, and what happens when you engage. A services or work page that describes your offerings in plain language without jargon or vague deliverable lists. An about page that reads like a person wrote it. And a contact page that makes reaching out feel easy rather than like submitting a form to a large corporation. Everything else is noise until these four are working.',
        image: '/assets/images/blog-four-pages-diagram.png'
      },
      {
        heading: 'What belongs on your homepage',
        content: 'The homepage has one job: make the right person feel like they are in the right place within ten seconds. That means a headline that names your ideal client and the situation you help them with. Not a tagline. Not a mission statement. A direct description of who you are for and what changes when they work with you. Below that, a short paragraph that adds context, one or two lines of social proof, and a clear next step. That is a homepage.'
      },
      {
        heading: 'What belongs on your services page',
        content: 'The mistake most consultants make on their services page is listing what they do instead of describing what changes for the client. "Strategic advisory" means nothing. "I work with firms navigating leadership transitions or preparing for acquisition, typically over a six to twelve month engagement" means something. Be specific about who you work with, what the engagement looks like, and what it produces. Buyers at the senior level respect precision. Vagueness makes them hesitate.'
      },
      {
        heading: 'What belongs on your about page',
        content: 'Your about page is not a CV. It is a trust document. It answers the question: why should I trust this person with a serious problem inside my organisation? The answer is not a list of companies you have worked at. It is a short narrative that explains how you think, what kinds of problems you are drawn to, and what makes your approach distinct. One or two paragraphs. Honest and specific. Written the way you actually talk.'
      },
      {
        heading: 'What to leave out',
        content: 'Leave out the generic mission statement. Leave out the services described in buzzwords. Leave out the five-column footer with links to pages that do not exist yet. Leave out the stock photography. Leave out the contact form with fifteen fields. Every element you add that does not serve a clear purpose is an element that dilutes the ones that do.'
      }
    ]
  },
  {
    slug: 'how-to-write-about-yourself-without-sounding-like-a-cv',
    title: 'How to Write About Yourself Without Sounding Like a CV',
    subtitle: 'The way most consultants describe themselves online actively undermines the seniority they have spent years building.',
    category: 'Personal Brand',
    date: 'Apr 30, 2026',
    readTime: '5 min read',
    coverImage: '/assets/images/blog-writing-about-yourself.png',
    body: [
      {
        heading: 'Why CV language kills your positioning',
        content: 'LinkedIn has trained most professionals to describe themselves in passive, institutional language. "Led cross-functional teams." "Delivered transformational outcomes." "Drove strategic alignment across stakeholders." This language made sense inside a corporate context where the audience already had context for your role and your organisation. On a personal website, it lands differently. It sounds like a job application. It positions you as someone looking for approval rather than someone offering expertise. That is not the signal you want to send to a potential client.',
        image: '/assets/images/blog-cv-concept.png'
      },
      {
        heading: 'The shift from activity to outcome',
        content: 'The single most effective change you can make to how you write about yourself is to stop describing what you did and start describing what changed because of it. "Managed a finance function" is activity. "Helped a $40M business get acquisition-ready in nine months" is outcome. The second version creates a picture in the reader\'s mind. It makes them ask whether that is relevant to their situation. That question is the beginning of a sales conversation.'
      },
      {
        heading: 'Write the way you actually speak',
        content: 'The best about pages read like a smart, confident person wrote them in the first person. Not formal. Not corporate. Not self-conscious. Read it aloud. If it sounds like something you would never actually say to a prospective client across a table, rewrite it until it does. The goal is not to sound polished. The goal is to sound like someone worth spending time with on a serious problem.'
      },
      {
        heading: 'The one sentence that matters most',
        content: 'Every about page needs one sentence that makes the right reader think: that is exactly what I need. It is usually the second or third sentence, after you have named who you are for. It describes the specific kind of problem you are best at. Not your entire career. Not your philosophy. Just the thing that makes your ideal client lean forward. Find that sentence and build the rest of the page around it.'
      }
    ]
  },
  {
    slug: 'why-consultants-dont-need-a-big-website',
    title: "Why Consultants Don't Need a Big Website",
    subtitle: 'More pages does not mean more credibility. For most senior consultants, a smaller website converts better.',
    category: 'Web Strategy',
    date: 'Apr 15, 2026',
    readTime: '4 min read',
    coverImage: '/assets/images/blog-small-website.png',
    body: [
      {
        heading: 'The more-is-more trap',
        content: 'When consultants start thinking about their website, the instinct is to build something comprehensive. A services page for every offering. A blog. Case studies. A resources section. A newsletter signup. The reasoning is that a bigger site signals more capability. The opposite is usually true. A site with ten half-finished sections signals that the person behind it is still figuring out their positioning. A site with four sharp, confident pages signals someone who knows exactly what they do and who they do it for.',
        image: '/assets/images/blog-simplicity-concept.png'
      },
      {
        heading: 'What a senior buyer actually wants to see',
        content: 'A managing partner, a CEO, or a board member visiting your site is not looking for breadth. They are looking for relevance. They want to know quickly whether what you do maps to what they need. The faster they can make that determination, the more likely they are to reach out. Every extra page they have to click through before they understand your positioning is a moment where they might leave. Simplicity is not a limitation. It is a conversion tool.'
      },
      {
        heading: 'The one-page test',
        content: 'A useful exercise: can you communicate everything a serious prospect needs to know on a single scrollable page? Who you are, who you work with, what you do, what has changed for clients, and how to get in touch. If you can, you probably have better positioning than most. A multi-page site is fine, but each additional page should earn its place. If you cannot clearly explain what a page is for and why a prospect would read it, cut it.'
      },
      {
        heading: 'What to build instead',
        content: 'Build the smallest version of your site that would make your ideal client comfortable reaching out. For most senior consultants, that is a homepage with strong positioning, a short project or outcomes section, a brief about page, and a contact page. Get those four right first. Add pages when there is a clear reason for them — not because you feel like you should have more.'
      }
    ]
  },
  {
    slug: 'what-clients-actually-do-before-they-book-a-call',
    title: 'What Clients Actually Do Before They Book a Call',
    subtitle: 'Understanding the research phase most consultants never see is the key to building a website that converts.',
    category: 'Client Behaviour',
    date: 'Apr 2, 2026',
    readTime: '5 min read',
    coverImage: '/assets/images/blog-before-booking-call.png',
    body: [
      {
        heading: 'The invisible research phase',
        content: 'Most consultants assume the client journey starts when someone reaches out. It does not. It starts weeks or sometimes months earlier, with a quiet research process that the consultant never sees and rarely influences. A potential client hears your name from a peer, or sees you referenced somewhere, or finds you through a search. Before they contact you, they look you up. They visit your website. They read your LinkedIn. They might read something you have written. They form a view. If that view is positive, they reach out. If it is neutral or negative, they move on without ever telling you.',
        image: '/assets/images/blog-research-phase-concept.png'
      },
      {
        heading: 'What they are evaluating',
        content: 'During this silent research phase, buyers are not looking for reasons to hire you. They are looking for reasons not to. Red flags include a website that looks significantly out of date, a bio that reads like a job application, no evidence of the kind of work they need, and a contact process that feels impersonal or effortful. Any one of these can end the conversation before it starts. Your website\'s job is not to convince anyone. It is to remove doubt.'
      },
      {
        heading: 'The role of peer validation',
        content: 'Senior buyers trust peers more than they trust websites. But the website still matters, because it is what they send to their peers when recommending you. "I think this person might be right for this" is often followed by a link to your website. If that website does not hold up on its own, the recommendation loses momentum. Your site is the supporting material for every introduction someone makes on your behalf.'
      },
      {
        heading: 'What this means for your website',
        content: 'Design your website for the person who is already interested rather than the person who has never heard of you. That reader does not need to be convinced from scratch. They need to be confirmed. Give them a clear picture of what you do, evidence that you have done it at the right level, and a low-friction way to get in touch. That is the website that converts the clients you most want to work with.'
      }
    ]
  },
  {
    slug: 'linkedin-vs-personal-brand-website',
    title: 'The Difference Between a LinkedIn Profile and a Personal Brand',
    subtitle: 'LinkedIn is a directory. A personal brand is a destination. Confusing the two is one of the most common mistakes senior consultants make.',
    category: 'Personal Brand',
    date: 'Mar 19, 2026',
    readTime: '6 min read',
    coverImage: '/assets/images/blog-linkedin-vs-personal-brand.png',
    body: [
      {
        heading: 'What LinkedIn actually is',
        content: 'LinkedIn is a directory with social features. It is the place professionals go to signal that they exist, to see who else is in their network, and to follow what people in their industry are saying. It is useful. For many consultants, it is where most of their inbound originates. But it is not a personal brand. It is a profile on someone else\'s platform, governed by someone else\'s algorithm, displayed in a format that looks identical to every other profile on the site. Your LinkedIn tells people you are a professional. It does not tell them why you specifically are the right person for a serious problem.',
        image: '/assets/images/blog-linkedin-concept.png'
      },
      {
        heading: 'What a personal brand actually is',
        content: 'A personal brand is the impression that forms in someone\'s mind when they encounter your name, your work, or your ideas — in any context, on any platform, over time. It is not a website. It is not a logo. It is not a content strategy. It is the answer to the question: when someone who needs what you do thinks about who can help them, do they think of you? A personal brand is built through visible expertise, consistent positioning, and a track record that speaks for itself. The website is one expression of it — the one you fully control.'
      },
      {
        heading: 'Why the distinction matters',
        content: 'Most consultants over-invest in LinkedIn activity and under-invest in their own digital presence. They post regularly, engage with their network, and build a following — and then send interested contacts to a website that does not hold up. The LinkedIn profile creates the interest. The website either confirms it or kills it. A strong LinkedIn presence with a weak website is a leaky funnel. The work you put into building credibility on LinkedIn does not convert the way it should.'
      },
      {
        heading: 'The website LinkedIn cannot replace',
        content: 'There are things a personal website does that LinkedIn cannot. It gives you full control over how you present your work, your thinking, and your positioning. It is not subject to algorithm changes or platform decisions. It does not put your profile next to hundreds of competitors. It does not have notifications, ads, or distractions pulling the reader away. When someone lands on your website and it is good, their attention is entirely on you. That is the environment where serious business decisions get made.'
      }
    ]
  }
];
