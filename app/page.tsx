import { Header, UpBlock, About, Services } from "@/src/components";

export default function Home() {
  return (
    <>
      <Header />
      <div className="space-y-[150px]">
        <UpBlock />
        <About />
        <Services />
      </div>
    </>
  );
}
