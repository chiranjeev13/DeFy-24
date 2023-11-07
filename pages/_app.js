import React from "react";

import "@/styles/globals.css";
import Header from "@/components/Headerr";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  );
}
