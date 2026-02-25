import { Footer } from "~/components";
import styles from "~/styles";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className={`${styles.innerWidth} flex-1`}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
