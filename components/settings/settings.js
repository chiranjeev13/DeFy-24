const settings = {
    graphql: {
      uri: "http://localhost:5001/api/graphql",
    },
    meta: {
      rootUrl: "https://www.defy24.xyz",
      title: "App",
      description: "DeFy'24 stands out from typical college hackathons by prioritizing fresh product ideas in the Web3 space. We're on the lookout for innovative startup concepts that leverage Web3 technology, emphasizing a future where 'decentralization' and 'future yield' coexist.",
      social: {
        graphic:
          "https://pbs.twimg.com/profile_banners/1711670743749230592/1701195199/1500x500",
        twitter: "@cheatcodetuts",
      },
    },
    routes: {
      authenticated: {
        pathAfterFailure: "/login",
      },
      public: {
        pathAfterFailure: "/documents",
      },
    },
  };
  
  export default settings;
  