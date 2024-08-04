import {
  UpBlock,
  About,
  Services,
  Container,
  FormBlock,
  Edges,
  Contact,
  Thank,
} from "@/src/components";

export default function Home() {
  return (
    <>
      <UpBlock />
      <Container className="xl:space-y-[150px] space-y-[60px] xl:py-[150px] py-[60px]">
        <About />
        <Services />
        <FormBlock />
        <Edges />
        <Contact />
      </Container>

      <Thank />
    </>
  );
}
