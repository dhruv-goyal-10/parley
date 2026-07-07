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
      "Parley works with Zoom, Google Meet, and Microsoft Teams out of the box — recording, transcription, and recaps all run automatically on each. Webex is in public beta and we’re actively piloting support for RingCentral and BlueJeans. For calls held over other tools, you can upload the recording afterwards and get the same summary, action items, and follow-up email as a native call.",
  },
  {
    question: "Do I need to invite a bot to every call?",
    answer:
      "No. Connect your calendar once and Parley auto-joins eligible meetings based on rules you set — for example, only internal calls, only meetings with 3+ people, or only sessions you’re hosting. You can pause auto-join with a single toggle, add or drop individual calls from your dashboard, and Parley never records without a visible in-call notice so every attendee knows what’s happening.",
  },
  {
    question: "Is my data used to train AI models?",
    answer:
      "Never. Your transcripts, recordings, and summaries stay inside your workspace and are explicitly excluded from any model training. We use SOC 2 Type II–audited infrastructure, encrypt data at rest with AES-256 and in transit with TLS 1.3, and support customer-managed retention windows so anything older than your policy is permanently deleted — including from our backups.",
  },
  {
    question: "Can I edit summaries before they’re sent?",
    answer:
      "Yes. Every recap opens in a review panel where you can tighten the summary, reassign action items, adjust owners and due dates, and rewrite the follow-up email in your own voice. You can require manual approval for every recap, auto-send for internal calls only, or fully automate delivery — the choice is per user and per meeting type.",
  },
  {
    question: "What happens after the free trial?",
    answer:
      "You can stay on Starter for free forever (10 meetings a month plus 7 days of searchable history), or upgrade to Pro for unlimited meetings, integrations, and history. We send a reminder seven days before your trial ends, never auto-charge without warning, and you can downgrade or cancel any time — your past transcripts remain accessible as long as your workspace exists.",
  },
] as const;
