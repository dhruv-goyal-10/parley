export const LOGOS = [
  "Northwind",
  "AEROMARK",
  "Fjord",
  "Kettle&Co",
  "Lumen",
  "PEAKROUTE",
] as const;

export const FEATURES = [
  {
    title: "Auto-join & record",
    description:
      "Parley shows up to Zoom, Meet, and Teams calls on its own — no bots to invite, no buttons to press.",
    icon: "mic",
  },
  {
    title: "Real-time transcription",
    description:
      "99.2% accurate transcripts across 30+ languages, with speaker labels you can actually trust.",
    icon: "text",
  },
  {
    title: "AI action items",
    description:
      "Every decision, owner, and due date is extracted automatically — no more “who’s doing what?”",
    icon: "check",
  },
  {
    title: "Follow-up emails",
    description:
      "A polished recap email lands in every attendee’s inbox seconds after you hang up. Edit or auto-send.",
    icon: "mail",
  },
  {
    title: "Searchable history",
    description:
      "Ask “what did we decide about pricing?” and jump straight to the moment it was said.",
    icon: "search",
  },
  {
    title: "Connects everywhere",
    description:
      "Push notes to Slack, Notion, Linear, and your CRM the instant a call ends. 40+ integrations.",
    icon: "link",
  },
] as const;

export const STATS = [
  { value: "12M+", label: "meetings summarized" },
  { value: "99.2%", label: "transcription accuracy" },
  { value: "4.9", label: "average team rating" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "We cut our standup from 30 minutes to 12. Parley’s recap is genuinely better than the notes any of us used to take.",
    name: "Maya Krishnan",
    role: "Head of Product, Northwind",
  },
  {
    quote:
      "Action items land in Linear before I’ve even closed my laptop. It feels like having a chief of staff in every call.",
    name: "Devin Lowe",
    role: "Eng Manager, Aeromark",
  },
  {
    quote:
      "Our remote team spans nine time zones. Parley’s searchable history means nobody’s ever out of the loop again.",
    name: "Sam Reyes",
    role: "COO, Fjord",
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For individuals trying things out.",
    monthlyPrice: 0,
    annualPrice: 0,
    priceLabel: "Free forever",
    cta: "Get started",
    popular: false,
    features: ["10 meetings / month", "Transcripts & summaries", "7-day history"],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For teams that live in meetings.",
    monthlyPrice: 24,
    annualPrice: 19,
    priceLabel: null,
    cta: "Start free trial",
    popular: true,
    features: [
      "Unlimited meetings",
      "AI action items & emails",
      "40+ integrations",
      "Unlimited history & search",
    ],
  },
  {
    id: "business",
    name: "Business",
    tagline: "For orgs with security needs.",
    monthlyPrice: 49,
    annualPrice: 39,
    priceLabel: null,
    cta: "Contact sales",
    popular: false,
    features: [
      "Everything in Pro",
      "SSO & SCIM provisioning",
      "Custom data retention",
      "Dedicated success manager",
    ],
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Which meeting platforms does Parley support?",
    answer:
      "Parley works with Zoom, Google Meet, and Microsoft Teams out of the box. Webex support is in beta.",
  },
  {
    question: "Do I need to invite a bot to every call?",
    answer:
      "No. Connect your calendar once and Parley auto-joins eligible meetings based on your preferences.",
  },
  {
    question: "Is my data used to train AI models?",
    answer:
      "Never. Your transcripts stay private to your workspace and are excluded from model training.",
  },
  {
    question: "Can I edit summaries before they’re sent?",
    answer:
      "Yes. Review and tweak action items, owners, and recap emails before anything goes out.",
  },
  {
    question: "What happens after the free trial?",
    answer:
      "You can stay on Starter for free or upgrade to Pro. We’ll remind you before anything renews.",
  },
] as const;
