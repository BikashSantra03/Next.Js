import { movies } from "../db";

export async function DELETE(_req:Request, { params }: { params: { id: string } }) {
  const { id } = await params;
  try {
    const movieIndex = await movies.findIndex((movie) => movie.id === +id);

    //Movie not found in db
    if (movieIndex === -1) {
      return new Response(
        JSON.stringify({ error: "Movie Not Found" }, { status: 404 })
      );
    }

    //Delete the movie
    movies.splice(movieIndex, 1);

    return new Response(JSON.stringify(movies), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message || "An error occurred" }),
      {
        status: 500,
      }
    );
  }
}
