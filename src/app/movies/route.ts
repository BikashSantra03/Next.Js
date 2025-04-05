import { movies } from "./db";

export async function GET() {
  return new Response(JSON.stringify(movies));
}
