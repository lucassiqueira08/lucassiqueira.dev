import styles from "~/styles";

const About = () => (
  <section className="py-12">
    <div className={styles.innerWidth}>
      <p className="text-[15px] leading-7 text-[#737373]">
        Software engineer with {new Date().getFullYear() - 2018}+ years of experience — from enterprise IT infrastructure and high-scale fintech, to leading engineering teams and now building AI. I&apos;ve always found a way to own problems bigger than my initial title. Today I&apos;m a Product Engineer at Tela, shipping the LLM-powered automation systems that help Brazilian enterprises eliminate entire workflows.
      </p>
    </div>
  </section>
);

export default About;
