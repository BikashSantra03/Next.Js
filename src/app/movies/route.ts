import { NextRequest } from "next/server";
import { movies } from "./db";

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  const searchParams = url.searchParams;
  const query = searchParams.get("query");

  const filteredMovies = query
    ? movies.filter((m) => m.name.toLowerCase().includes(query.toLowerCase()))
    : movies;

  return new Response(JSON.stringify(filteredMovies));
}
