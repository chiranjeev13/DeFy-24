import { Inter } from "next/font/google";
import Header from "../components/header";
import Video from "../components/video";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Video />
    </>
  );
}
