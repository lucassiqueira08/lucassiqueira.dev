import { socials } from "../constants";
import styles from "../styles";

const Footer = () => (
  <footer className="py-6 border-t border-[#e5e5e5] mt-16">
    <div className={`${styles.innerWidth} flex justify-between items-center`}>
      <p className="text-sm text-[#737373]">© 2025 Lucas Siqueira</p>
      <div className="flex gap-4">
        {socials.map((social) => (
          <a
            href={social.link}
            target="_blank"
            rel="noreferrer"
            key={social.name}
            className="text-sm text-[#737373] capitalize transition-colors duration-150 hover:text-[#0a0a0a]"
          >
            {social.name}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
