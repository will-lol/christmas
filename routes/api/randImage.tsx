import { HandlerContext } from "$fresh/server.ts";

const imagePaths = [
  "./static/images/will/variation1.webp",
  "./static/images/will/variation2.webp",
];

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  const randomIndex = Math.floor(Math.random() * imagePaths.length);
  const img = await Deno.readFile(imagePaths[randomIndex]);
  return new Response(img);
};