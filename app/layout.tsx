import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: never) => (
  <html lang="en">
    <body className={`${inter.className} bg-white text-[#171717] antialiased`}>
      {children}
    </body>
  </html>
);

export default RootLayout;
