import { Footer, Navbar } from "../components";
import {
  About,
  Console,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lucas | Dev',
  description: 'Welcome to my personal website, check out my journey and my thoughts on software development.',
}

const Page = () => (
  <div className="overflow-hidden bg-primary-black">
    <Navbar />
    <Hero />
    <About />
    <div className="relative">
      <Console />
      <div className="gradient-03 z-0" />
      {/* <Explore /> */}
    </div>
    {/* <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0"/>
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0"/>
      <Feedback />
    </div> */}
    <Footer />
  </div>
);

export default Page;
