import Headerr from "../components/Headerr";
import Header from "../components/Header";
import Video from "../components/video";
import TickerTape from "../components/ticker";
import Body from "../components/body";

export default function Home() {
  return (
    <>
      <Header />
      <Video />
      {/* <Headerr /> */}
      <TickerTape />
      <Body /> 
    </>
  );
}
