export interface NavLink {
  href: string;
  label: string;
}

export interface TitledText {
  title: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const EMAIL = "kushs3322@gmail.com";
export const PHONE_DISPLAY = "+91 89536 17226";
export const PHONE_HREF = "+918953617226";

export const navLinks: readonly NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const values: readonly TitledText[] = [
  { title: "Reader first", text: "Every piece is written for one clear person, not for everyone." },
  { title: "Clear over clever", text: "Smart ideas deserve simple words." },
  { title: "Research you can trust", text: "Facts checked, sources noted, claims kept honest." },
  { title: "Built for results", text: "SEO, conversion and brand voice planned from the first draft." },
  { title: "Easy to work with", text: "Clear timelines, quick replies and revisions without drama." },
];

export const services: readonly TitledText[] = [
  { title: "Blogs and SEO", text: "Search-led articles with real research, clean structure and a clear next step." },
  { title: "Website copy", text: "Homepages, landing pages, About pages and product descriptions that convert." },
  { title: "Email", text: "Welcome series, cart recovery and newsletters people open and finish." },
  { title: "Social media", text: "Carousels, LinkedIn posts and captions in a steady brand voice." },
  { title: "Ads", text: "Search and social ad copy, tested in variants with sharp hooks." },
  { title: "Scripts and long-form", text: "Explainer videos, guides and whitepapers that make hard topics easy." },
];

export const steps: readonly TitledText[] = [
  { title: "Understand", text: "We talk about your goal, reader, tone and deadline. I send back a short summary to confirm." },
  { title: "Research", text: "I study your product, competitors, keywords and the questions your readers really ask." },
  { title: "Write", text: "I share a clear outline first, then a full draft with headlines, structure and calls to action." },
  { title: "Refine", text: "I edit for flow, fact-check, and make revisions based on your feedback until it is right." },
];

export const faqs: readonly FaqItem[] = [
  {
    question: "What kinds of content do you write?",
    answer:
      "Blogs, SEO articles, website and landing page copy, product descriptions, emails, social media posts, ad copy, video scripts, guides and whitepapers.",
  },
  {
    question: "Can you match our brand voice?",
    answer:
      "Yes. Share your past content, a style guide or just a few examples you like, and I will write in a voice that sounds like your brand.",
  },
  {
    question: "Do you handle SEO?",
    answer:
      "Yes. I research keywords, match search intent, and write clear headings, meta descriptions and internal links as part of the work.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A blog post usually takes a few days and a full website or email series takes one to two weeks. I confirm a timeline before I start.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Revisions are included until you are happy with the piece. We agree the scope at the start so there are no surprises.",
  },
  {
    question: "How do we get started?",
    answer: `Send a short message to ${EMAIL} or call ${PHONE_DISPLAY} with what you need and your deadline.`,
  },
];
