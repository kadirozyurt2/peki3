import Hero from "@/components/hero/Hero";
import Sales from "@/components/sales/Sales";
import Marquee from "@/components/marquee_slider/Marquee";
import Services from "@/components/Services/Services";
import Faq from "@/components/faq/Faq";
import StartLearning from "@/components/started/StartLearning";
import References from "@/components/references/References";
import Blog from "@/components/blog/Blog";



const Home = () => {

 

  return (
    <>
      <Hero />
      <Sales />
      <Marquee title="Peki has you covered" />
      <Services />
      <Faq title="Frequently asked questions" />
      <StartLearning />
      <References
        title="Trusted By"
        description="Best companies in the Turkey"
      />
      <Blog 
        
        description="We have so many great services for products"
      />
    </>
  );
};

export default Home;
