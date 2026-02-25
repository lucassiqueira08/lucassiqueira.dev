import Link from "next/link";
import styles from "~/styles";

const Navbar = () => (
  <nav className="py-8 border-b border-[#e5e5e5]/60">
    <div className={`${styles.innerWidth} flex justify-between items-center`}>
      <Link
        href="/"
        className="text-[#171717] font-medium text-base transition-colors duration-150 hover:text-[#0a0a0a]"
      >
        Lucas Siqueira
      </Link>
      <Link
        href="/blog"
        className="text-sm text-[#737373] transition-colors duration-150 hover:text-[#0a0a0a]"
      >
        Blog
      </Link>
    </div>
  </nav>
);

export default Navbar;
