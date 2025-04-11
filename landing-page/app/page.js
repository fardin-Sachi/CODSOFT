import AboutUs from "@/component/aboutUs";
import ClientReviews from "@/component/clientReviews";
import Footer from "@/component/footer";
import Header from "@/component/header";
import Hero from "@/component/hero";
import Photography from "@/component/photography";
import Portfolio from "@/component/portfolio";
import Services from "@/component/services";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Portfolio />
      <Photography />
      <Services />
      <ClientReviews />
      <AboutUs />
      <Footer />
    </main>
  );
}
