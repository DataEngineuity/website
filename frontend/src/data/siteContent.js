const env = import.meta.env || {};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Foundations", href: "#foundations" },
  { label: "Connect", href: "#contact" },
];

export const principles = [
  {
    number: "01",
    title: "Structure",
    description: "Reliable foundations designed to remain useful as complexity grows.",
  },
  {
    number: "02",
    title: "Intelligence",
    description: "Insight designed to sharpen understanding and improve decisions.",
  },
  {
    number: "03",
    title: "Ingenuity",
    description: "Original thinking applied with restraint, purpose and precision.",
  },
];

export const capabilities = [
  {
    number: "01",
    title: "Data Engineering",
    description: "Reliable pipelines, warehouses, lakehouses and structured foundations that connect information across systems.",
    icon: "dataEngineering",
  },
  {
    number: "02",
    title: "Data Processing Automation",
    description: "Automated ingestion, validation, transformation, reconciliation, aggregation and recurring data operations.",
    icon: "dataAutomation",
  },
  {
    number: "03",
    title: "Process Automation",
    description: "Streamlined workflows, approvals, notifications, handovers and repetitive operational processes.",
    icon: "processAutomation",
  },
  {
    number: "04",
    title: "Analytics & Intelligence",
    description: "Clear reporting, analytical products and decision-support solutions built from trusted information.",
    icon: "analytics",
  },
  {
    number: "05",
    title: "Systems Integration",
    description: "Thoughtful connections between platforms, applications, APIs and organisational processes.",
    icon: "integration",
  },
  {
    number: "06",
    title: "Digital Product Engineering",
    description: "Purpose-built web applications, data products and operational tools designed around real organisational needs.",
    icon: "productEngineering",
  },
];

export const socialLinks = [
  {
    platform: "X",
    handle: env.VITE_X_HANDLE || "Data Engineuity",
    href: env.VITE_X_URL || "#",
    icon: "x",
  },
  {
    platform: "GitHub",
    handle: env.VITE_GITHUB_HANDLE || "Data Engineuity",
    href: env.VITE_GITHUB_URL || "#",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    handle: env.VITE_LINKEDIN_HANDLE || "Data Engineuity",
    href: env.VITE_LINKEDIN_URL || "#",
    icon: "linkedin",
  },
];
