import styles from "~/styles";

const About = () => (
  <section className="py-12">
    <div className={styles.innerWidth}>
      <p className="text-[15px] leading-7 text-[#737373]">
        Software engineer with {new Date().getFullYear() - 2018}+ years of experience — from
        enterprise IT infrastructure and high-scale fintech to leading engineering teams.
        Today I work as a Product Engineer at Tela, applying AI to transform how
        Brazilian companies operate.
      </p>
    </div>
  </section>
);

export default About;
