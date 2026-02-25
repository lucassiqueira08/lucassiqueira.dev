import { Footer } from "../components";
import { About, Experience, Hero } from "../sections";
import { siteMetadata } from "~/lib/metadata";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Lucas Siqueira",
  description: "Product Engineer from São Paulo, Brasil.",
  openGraph: {
    title: "Lucas Siqueira",
    description: "Product Engineer from São Paulo, Brasil.",
    url: siteMetadata.siteUrl,
    type: "profile",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lucas Siqueira",
  url: siteMetadata.siteUrl,
  jobTitle: "Product Engineer",
  description: "Product Engineer from São Paulo, Brasil.",
  sameAs: [siteMetadata.github, siteMetadata.linkedin],
  email: `mailto:${siteMetadata.email}`,
};

const Page = () => (
  <div>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <Hero />
    <About />
    <Experience />
    <Footer />
  </div>
);

export default Page;
