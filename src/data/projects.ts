export type Category =
  | "Blogs & SEO"
  | "Long-form"
  | "Website Copy"
  | "Email"
  | "Social"
  | "Ads"
  | "Scripts";

export interface Project {
  title: string;
  category: Category;
  summary: string;
  brief: string;
  approach: string;
  excerpt: string;
  result: string;
}

export const projects: readonly Project[] = [
  {
    title: "The Quiet Cost of Late Invoices",
    category: "Blogs & SEO",
    summary: "A 1,800-word blog for a small-business accounting app.",
    brief: "A fintech startup needed a blog that ranked for 'late payment' searches and led readers to a free invoice tool.",
    approach: "I mapped search intent first, then wrote around one story: a freelancer waiting 45 days for pay. Short sections, a calculator hook and one clear call to action.",
    excerpt: "Every week an invoice sits unpaid, you are lending your client money for free.",
    result: "Ranked on page one in 8 weeks and brought steady trial sign-ups.",
  },
  {
    title: "Sleep Better in 7 Nights",
    category: "Blogs & SEO",
    summary: "A seven-day guide for a wellness brand.",
    brief: "A sleep-tea brand wanted a helpful article, not a product pitch, to earn trust and email sign-ups.",
    approach: "I turned advice into a daily plan with one small habit per night, backed by simple science and a gentle product mention on day seven.",
    excerpt: "Tonight, do one thing: dim the lights an hour earlier. That is the whole plan.",
    result: "High time on page and a strong newsletter sign-up rate.",
  },
  {
    title: "Skincare Without the Confusion",
    category: "Blogs & SEO",
    summary: "An ingredient explainer for a D2C skincare label.",
    brief: "Shoppers were lost in jargon. The brand needed a page that explained ingredients in plain words.",
    approach: "I built a question-led article: what it is, what it does, who should skip it. Every claim stayed honest and easy to check.",
    excerpt: "Niacinamide is not magic. It is a steady helper for oily, uneven skin.",
    result: "Became the top organic entry page for the brand.",
  },
  {
    title: "Study in Canada: The Complete Guide",
    category: "Long-form",
    summary: "A 4,500-word guide for an education consultancy.",
    brief: "The consultancy wanted one trustworthy resource covering visas, costs, cities and timelines for students.",
    approach: "I interviewed counsellors, built a month-by-month checklist and wrote each section so a parent could follow it too.",
    excerpt: "Start twelve months early. Not because it is hard, but because good choices need time.",
    result: "Generated qualified leads and was shared in student communities.",
  },
  {
    title: "AI in Hiring: A Practical Whitepaper",
    category: "Long-form",
    summary: "A 3,000-word whitepaper for an HR software company.",
    brief: "HR leaders were curious but cautious about AI. The brand needed a calm, evidence-based point of view.",
    approach: "I framed the paper around three honest questions: where AI helps, where it fails, and how to keep people in charge.",
    excerpt: "The best hiring tools do not replace judgment. They give it better questions.",
    result: "Used by the sales team as a main lead magnet.",
  },
  {
    title: "SaaS Homepage Rewrite",
    category: "Website Copy",
    summary: "Full homepage copy for a project-management tool.",
    brief: "The old page listed features and confused visitors. The goal was a clear promise in five seconds.",
    approach: "I reworked the headline around the customer's outcome, cut jargon, added proof near every claim and ended with one action.",
    excerpt: "Plan the week in ten minutes. Finish it without the chasing.",
    result: "Demo requests rose after launch in the first month.",
  },
  {
    title: "Our Story: A Neighbourhood Café",
    category: "Website Copy",
    summary: "About page and menu descriptions for a local café.",
    brief: "The owner wanted the page to feel like the café: warm, a little funny, and rooted in the area.",
    approach: "I interviewed the owner, kept her own phrases and wrote menu lines that make you hungry in one sentence.",
    excerpt: "We opened with six chairs and one stubborn coffee machine. We still love both.",
    result: "Customers began quoting the page in reviews.",
  },
  {
    title: "Handloom Product Descriptions",
    category: "Website Copy",
    summary: "60 product descriptions for an online handloom store.",
    brief: "Each saree and stole needed copy that sold craft, fabric and care without repeating itself.",
    approach: "I created a simple template: feel, story, fabric, care. Then I varied the voice so no two pages read alike.",
    excerpt: "Woven in three days by one weaver, this cotton drapes soft and lasts for years.",
    result: "Lower return rates and better product page sales.",
  },
  {
    title: "Fitness Cohort Landing Page",
    category: "Website Copy",
    summary: "A long-form sales page for an online 8-week programme.",
    brief: "The coach needed to fill a cohort of 40 without sounding pushy.",
    approach: "I used the reader's own doubts as section headings, answered each honestly and added a clear refund promise.",
    excerpt: "You do not need more motivation. You need a plan that fits Tuesday.",
    result: "The cohort filled before the registration deadline.",
  },
  {
    title: "Welcome Email Series (5 Emails)",
    category: "Email",
    summary: "A five-email onboarding flow for a meditation app.",
    brief: "New users downloaded the app and never came back. The series had to build a habit in the first week.",
    approach: "Each email had one job: welcome, first session, a small win, a story, an invitation to a streak. Short, warm, one button.",
    excerpt: "Two minutes is enough today. Seriously. Press play.",
    result: "Day-7 retention improved and open rates stayed high.",
  },
  {
    title: "Cart Recovery Emails",
    category: "Email",
    summary: "A three-email abandoned-cart sequence for a fashion store.",
    brief: "The store lost buyers at checkout. The emails had to nudge without nagging.",
    approach: "I wrote a reminder, a helpful answer to common doubts and a last note with free shipping. Subject lines were tested in pairs.",
    excerpt: "Still thinking it over? Your bag is safe, and so is your size.",
    result: "Recovered a healthy share of abandoned carts.",
  },
  {
    title: "Monthly Startup Newsletter",
    category: "Email",
    summary: "A newsletter template and 6 issues for a B2B startup.",
    brief: "The team wanted updates that customers actually read, not a list of release notes.",
    approach: "I opened each issue with one real customer story, then product news, then one useful tip. Plain text feel, friendly tone.",
    excerpt: "This month, a customer cut her reporting from four hours to twenty minutes.",
    result: "Steady click rates and replies from readers.",
  },
  {
    title: "Money Basics Instagram Carousels",
    category: "Social",
    summary: "A 12-carousel series for a personal finance page.",
    brief: "The page wanted to explain saving and investing to first-jobbers in under ten slides.",
    approach: "One idea per slide, big plain words, a hook on slide one and a save-worthy checklist at the end.",
    excerpt: "Your first salary is not for spending. It is for setting rules.",
    result: "Saves and shares grew month on month.",
  },
  {
    title: "LinkedIn Ghostwriting for a Founder",
    category: "Social",
    summary: "Twelve weeks of LinkedIn posts in a founder's own voice.",
    brief: "The founder was busy and quiet online. The goal was credibility, not noise.",
    approach: "I ran a 30-minute voice interview each week and turned stories into posts: lesson, scene, takeaway.",
    excerpt: "We lost our biggest client. Here is the one thing it taught us about trust.",
    result: "Follower growth and inbound partnership requests.",
  },
  {
    title: "Google Ads Copy Pack",
    category: "Ads",
    summary: "40 ad variants for a home-services marketplace.",
    brief: "The ads needed to win clicks in a crowded search page while staying within strict character limits.",
    approach: "I wrote in themes (speed, price, trust), tested hooks in pairs and matched each ad to its landing page.",
    excerpt: "Verified plumbers at your door today. Pay after the job.",
    result: "Click-through rate rose and cost per lead fell.",
  },
  {
    title: "90-Second Explainer Video Script",
    category: "Scripts",
    summary: "A voice-over script for a payments product.",
    brief: "The product was hard to explain. The video had to make it clear in 90 seconds.",
    approach: "I wrote it to be heard: short lines, one metaphor, a visual note beside each beat for the animator.",
    excerpt: "Sending money should feel like sending a message. Now it does.",
    result: "Used on the homepage and in the sales deck.",
  },
];
