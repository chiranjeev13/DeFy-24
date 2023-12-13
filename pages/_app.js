import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { Helmet } from "react-helmet";
import "@/styles/globals.css";
import Header from "@/components/Headerr";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="DeFy'24 stands out from typical college hackathons by prioritizing fresh product ideas in the Web3 space. We're on the lookout for innovative startup concepts that leverage Web3 technology, emphasizing a future where 'decentralization' and 'future yield' coexist."
        />
        {/* Add other meta tags, title, etc. here */}

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="DeFy'24" />
        <meta
          property="og:description"
          content="DeFy'24 stands out from typical college hackathons by prioritizing fresh product ideas in the Web3 space. We're on the lookout for innovative startup concepts that leverage Web3 technology, emphasizing a future where 'decentralization' and 'future yield' coexist."
        />
        <meta
          property="og:image"
          content="https://pbs.twimg.com/profile_banners/1711670743749230592/1701195199/1500x500"
        />
        <meta property="og:url" content="https://www.defy24.xyz/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags (for Twitter Card) */}
        <meta
          name="twitter:card"
          content="https://pbs.twimg.com/profile_banners/1711670743749230592/1701195199/1500x500"
        />
        <meta name="twitter:title" content="DeFy'24" />
        <meta
          name="twitter:description"
          content="DeFy'24 stands out from typical college hackathons by prioritizing fresh product ideas in the Web3 space. We're on the lookout for innovative startup concepts that leverage Web3 technology, emphasizing a future where 'decentralization' and 'future yield' coexist."
        />
        <meta
          name="twitter:image"
          content="https://pbs.twimg.com/profile_banners/1711670743749230592/1701195199/1500x500"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* CSS Reset or Normalize.css */}
        {/* <link rel="stylesheet" href="path-to-reset-or-normalize.css" /> */}

        {/* Your custom stylesheets or fonts */}
        {/* <link rel="stylesheet" href="path-to-your-custom-styles.css" /> */}

        {/* Title */}
        <title>DeFy'24</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
