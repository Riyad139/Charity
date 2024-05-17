import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HelpMeWrite from "@/components/HelpMeWrite";
import OurSolution from "@/components/OurSolutions";
import Whatwedo from "@/components/Whatwedo";
import Container from "@/utils/Container";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Container>
        <Header />
      </Container>
      <div className="bg-white w-full">
        <Container>
          <OurSolution />
        </Container>
      </div>
      <Whatwedo />
      <div className="bg-white w-full">
        <Container>
          <HelpMeWrite />
          <ContactUs />
        </Container>
      </div>
      <Container>
        <Footer />
      </Container>
    </main>
  );
}
