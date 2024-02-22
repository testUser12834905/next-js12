import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const GET_MOVIE_BY_ID = gql`
  query GetMovie($filmId: ID!) {
    film(id: $filmId) {
      id
      title
      director
    }
  }
`;

const Movie = (props: Props) => {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_MOVIE_BY_ID, {
    variables: { filmId: router.query.id },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  const movie = data.film;
  return (
    <div>
      A Movie:
      {movie.title}
      <br />
      {movie.director}
      <br />
      {movie.id}
      <br />
    </div>
  );
};

export default Movie;
