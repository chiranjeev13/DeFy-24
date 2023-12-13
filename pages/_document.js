import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />

      {/* Primary Meta Tags */}
      <title>DeFy'24</title>
      <meta
        name="description"
        content="DeFy'24 stands out from typical college hackathons by prioritizing fresh product ideas in the Web3 space. We're on the lookout for innovative startup concepts that leverage Web3 technology, emphasizing a future where 'decentralization' and 'future yield' coexist."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.defy24.xyz/" />
      <meta
        property="og:title"
        content="DeFy'24 | The Biggest Web3 Hackathon in Chennai"
      />
      <meta
        property="og:description"
        content="DeFy'24 stands out from typical college hackathons by prioritizing fresh product ideas in the Web3 space. We're on the lookout for innovative startup concepts that leverage Web3 technology, emphasizing a future where 'decentralization' and 'future yield' coexist."
      />
      <meta
        property="og:image"
        content="https://pbs.twimg.com/profile_banners/1711670743749230592/1701195199/1500x500"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.defy24.xyz/" />
      <meta
        property="twitter:title"
        content="DeFy'24 | The Biggest Web3 Hackathon in Chennai"
      />
      <meta
        property="twitter:description"
        content="DeFy'24 stands out from typical college hackathons by prioritizing fresh product ideas in the Web3 space. We're on the lookout for innovative startup concepts that leverage Web3 technology, emphasizing a future where 'decentralization' and 'future yield' coexist."
      />
      <meta
        property="twitter:image"
        content="https://pbs.twimg.com/profile_banners/1711670743749230592/1701195199/1500x500"
      />

      {/* Additional Meta Tags */}
      <meta
        name="keywords"
        content="defy, defy24, defy'24, chennai, web3, web3 hackathon, chennai hackathon, web3 chennai, ethindia, dao, daocommunity, daovitchennai, vitchennai, vellore institute of technology"
      />
      <meta name="author" content="Your Name" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
