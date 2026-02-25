import "../styles/globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import DotHome from "~/components/DotHome";
import styles from "~/styles";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: never) => (
  <html lang="en">
    <body className={`${inter.className} bg-white text-[#171717] antialiased`}>
      <nav className="py-8 border-b border-[#e5e5e5]/60">
        <div className={`${styles.innerWidth} flex justify-between items-center`}>
          <DotHome />
          <Link
            href="/blog"
            className="text-sm text-[#737373] transition-colors duration-150 hover:text-[#0a0a0a]"
          >
            Blog
          </Link>
        </div>
      </nav>
      {children}
    </body>
  </html>
);

export default RootLayout;
