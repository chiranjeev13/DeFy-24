import Headerr from "../components/Headerr";
import Header from "../components/header";
import Video from "../components/video";
import TickerTape from "../components/ticker";
import Body from "../components/body";
import FAQ from "@/components/faq";
import FAQmob from "@/components/mob_faq";
import ScrollSection from "@/components/ScrollSection";
import Tracks from "@/components/tracks";
import Sponsorship from "@/components/Sponsorship";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Header />
      <Video />
      <TickerTape />
      <Body />
      <ScrollSection />
      <Tracks />
      <Sponsorship />
      {/*  Desktop FAQ Section */}
      <div class="lg:block hidden">
        <FAQ />
      </div>

      {/* <!-- Mobile FAQ Section --> */}
      <div class="lg:hidden block">
        <FAQmob />
      </div>
      <Footer />
    </>
  );
}
