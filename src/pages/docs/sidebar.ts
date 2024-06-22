export const sidebarConfig = [
  { label: "Home", href: "/" },
  {
    label: "Getting Started",
    items: [
      { label: "Core Concepts", href: "/docs/core-concepts" },
      { label: "Usage", href: "/docs/usage" },
      { label: "Roadmap", href: "/docs/roadmap" },
      { label: "Examples", href: "https://examples.flexydox.org", attrs: { target: '_blank', style: 'font-style: italic' }, },
      
    ]
  },
  {
    label: "Configuration",
    items: [
      { label: "Configuration file", href: "/docs/configuration" },
      { label: "CLI reference", href: "/docs/cli" }
    ]
  },
  {
    label: "Development",
    items: [
      { label: "Development Guide", href: "/docs/development" }
    ]
  }
];