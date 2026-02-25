import { Footer } from "../components";
import { About, Experience, Hero } from "../sections";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Lucas Siqueira",
  description:
    "Full-stack developer from São Paulo, Brasil.",
};

const Page = () => (
  <div>
    <Hero />
    <About />
    <Experience />
    <Footer />
  </div>
);

export default Page;
