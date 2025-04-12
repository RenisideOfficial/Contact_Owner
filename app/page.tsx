import About from "@/components/About";
import Carousel from "@/components/Carousel";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import MoreInfo from "@/components/MoreInfo";

export default function Home() {
  return (
    <>
      <div className="lg:mx-24 mx-6">
        <div>
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div>
          <MoreInfo />
        </div>
        <div id="service">
          <Carousel />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
