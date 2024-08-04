import {
  UpBlock,
  About,
  Services,
  Container,
  FormBlock,
} from "@/src/components";

export default function Home() {
  return (
    <>
      <UpBlock />
      <Container className="space-y-[150px] py-[150px]">
        <About />
        <Services />
        <FormBlock />
      </Container>
    </>
  );
}
