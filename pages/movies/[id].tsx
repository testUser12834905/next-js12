import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Movie = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      {router.query.id}
      <br />
      Movie
    </div>
  );
};

export default Movie;
