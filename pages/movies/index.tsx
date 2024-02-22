import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import React from "react";

type Props = {};

const GET_ALL_FILMS = gql`
  query GetAllFilms {
    allFilms {
      films {
        id
        title
        releaseDate
      }
    }
  }
`;

const Home = ({}: Props) => {
  const { loading, error, data } = useQuery(GET_ALL_FILMS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  const films: Record<string, string>[] = data.allFilms.films;

  return films.map(({ id, title }) => (
    <div key={id}>
      <h3>{title}</h3>
      <Link href={`movies/${id}/`}>
        <h4>{id}</h4>
      </Link>
      <br />
      <br />
    </div>
  ));
};

export default Home;
