import { Footer } from "~/components";
import Head from "./head";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-primary-black">
      <Head />
      <div className="h-full min-h-[100vh]">
        <section className={`h-full p-2`}>
          <div
            className={`mx-auto flex w-full justify-between gap-8 2xl:max-w-[1280px] px-4`}
          >
            <a href="/" className="cursor-pointer" title="Back to home page">
              <h2 className="text-[24px] font-extrabold leading-[30px] text-white">
                Lucas Siqueira{" "}
                <span className="align-middle text-sm">| Dev</span>
              </h2>
            </a>
          </div>
          <div
            className={`mx-auto flex w-full justify-between gap-8 2xl:max-w-[1280px] px-4`}
          >
            <a href="/" className="cursor-pointer" title="Back to home page">
              <span className="text-yellow-500">
                I&apos;m building this blog ⚙️
              </span>
            </a>
          </div>
          {/* <nav></nav> */}
          {children}
        </section>
      </div>
      <Footer />
    </div>
  );
}
