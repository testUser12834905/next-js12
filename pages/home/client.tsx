import { gql, useQuery } from "@apollo/client";
import React from "react";

type Props = { films: string };

const query = gql`
  query GetFilms {
    allFilms {
      films {
        id
        title
        releaseDate
      }
    }
  }
`;

const Home = ({ films }: Props) => {
  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  return data.allFilms.films.map(({ id, title }) => (
    <div key={id}>
      <h3>{title}</h3>
      <br />
    </div>
  ));
};

export default Home;
