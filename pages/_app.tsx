import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import createApolloClient from "../lib/apolloClient";

function MyApp({ Component, pageProps }) {
  const client = createApolloClient(false);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
