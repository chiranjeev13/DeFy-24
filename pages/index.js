import Headerr from "../components/Headerr";
import Header from "../components/header";
import Video from "../components/video";
import TickerTape from "../components/ticker";
import Body from "../components/body";
import FAQ from "@/components/faq";
import ScrollSection from "@/components/ScrollSection";
import Sponsorship from "@/components/Sponsorship";

export default function Home() {
  return (
    <>
      <Header />
      <Video />
      <TickerTape />
      <Body />
      <FAQ /> 
      <ScrollSection/>
      <Sponsorship /> 
      <FAQ /> 
    </>
  );
}
