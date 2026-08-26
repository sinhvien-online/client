export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  strapiUrl: string;
  directusUrl: string;
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    siteName: string;
    ogImage: string;
    ogType: string;
    twitterCard: string;
    keywords: string;
  };
  navigation: { main: NavItem[] };
  mainNav: NavItem[];
  footer: {
    description: string;
    sections: { title: string; links: { label: string; href: string }[] }[];
  };
  footerNav: { title: string; items: NavItem[] }[];
};

export const siteConfig: SiteConfig = {
  name: "sinhvien-online",
  description: "San moi gioi gia su cho sinh vien",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/og.jpg",
  strapiUrl: process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337",
  directusUrl: process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055",
  seo: {
    defaultTitle: "sinhvien-online",
    titleTemplate: "%s | sinhvien-online",
    defaultDescription: "San moi gioi gia su cho sinh vien",
    siteName: "sinhvien-online",
    ogImage: "/og.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    keywords: "gia su, sinh vien, hoc tap",
  },
  navigation: {
    main: [
      { label: "Trang chu", href: "/" },
      { label: "Dai hoc", href: "/dai-hoc" },
      { label: "THPT", href: "/thpt" },
      { label: "THCS", href: "/thcs" },
      { label: "Tai lieu", href: "/tai-lieu" },
      { label: "Blog", href: "/blog" },
    ],
  },
  mainNav: [
    { label: "Trang chu", href: "/" },
    { label: "Dai hoc", href: "/dai-hoc" },
    { label: "THPT", href: "/thpt" },
    { label: "THCS", href: "/thcs" },
    { label: "Tai lieu", href: "/tai-lieu" },
    { label: "Blog", href: "/blog" },
  ],
  footer: {
    description: "San moi gioi gia su cho sinh vien - Nen tang hoc tap truc tuyen",
    sections: [
      {
        title: "Noi dung",
        links: [
          { label: "Dai hoc", href: "/dai-hoc" },
          { label: "THPT", href: "/thpt" },
          { label: "THCS", href: "/thcs" },
          { label: "Tai lieu", href: "/tai-lieu" },
        ],
      },
      {
        title: "Ve chung toi",
        links: [
          { label: "Gioi thieu", href: "/gioi-thieu" },
          { label: "Lien he", href: "/lien-he" },
          { label: "Dieu khoan", href: "/dieu-khoan" },
          { label: "Bao mat", href: "/bao-mat" },
        ],
      },
    ],
  },
  footerNav: [],
};
