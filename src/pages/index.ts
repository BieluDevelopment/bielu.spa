import type { APIRoute } from 'astro';
import Api from '../services/api';
export const get: APIRoute = async function get() {
  try {
  var response = await Api.GetRequest("/");
    return new Response(response, {
      status: 200,
    });
  } catch (error: unknown) {
    return new Response(`Something went wrong in pdf-resource.pdf route!: ${error as string}`, {
      status: 501,
      statusText: 'Server error',
    });
  }
};