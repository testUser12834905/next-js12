import { gql } from "@apollo/client";
import createApolloClient from "../../lib/apolloClient";

type film = { id: number; title: string };
type Props = { data: { allFilms: { films: film[] } } };

export async function getServerSideProps() {
  const client = createApolloClient(true);
  const { data } = await client.query({
    query: gql`
      query GetFilms {
        allFilms {
          films {
            id
            title
            releaseDate
          }
        }
      }
    `,
  });

  console.log("client<C-S-D-S>d", data);

  return {
    props: {
      data,
    },
  };
}

const Home = ({ data }: Props) => {
  console.log(data);

  return <>asdf</>;
};

export default Home;
