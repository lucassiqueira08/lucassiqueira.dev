import { socials } from "~/constants";
import styles from "~/styles";

const Hero = () => (
  <section className="py-20">
    <div className={styles.innerWidth}>
      <h1 className="text-3xl font-semibold text-[#171717] tracking-tight">
        Lucas Siqueira
      </h1>
      <p className="text-base text-[#737373] mt-2">
        Product Engineer — São Paulo, Brasil
      </p>
      <div className="flex gap-2 flex-wrap mt-8">
        <a
          href="mailto:lucassiqueira.dev@gmail.com"
          className="border border-[#e5e5e5] rounded-full px-3 py-1 text-sm text-[#171717] transition-colors duration-150 hover:bg-[#f5f5f5]"
        >
          Email
        </a>
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="border border-[#e5e5e5] rounded-full px-3 py-1 text-sm text-[#171717] capitalize transition-colors duration-150 hover:bg-[#f5f5f5]"
          >
            {social.name}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
