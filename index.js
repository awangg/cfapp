// Initialize editors and the provided API url
const API_URL = 'https://cfw-takehome.developers.workers.dev/api/variants';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Computes an expiration date relative to the current time
 * @returns {Date}  computed expiration date
 */
function getExpiration() {
  let expiration = new Date();
  expiration.setTime(expiration.getTime() + 7*24*60*60);
  return expiration.toUTCString();
}

/**
 * Randomly sends users to one of two websites retrieved from the API url
 * @param {Request} request
 */
async function handleRequest(request) {
  // Retrieve cookies from request header
  let cookies = request.headers.get('Cookie') || '';

  // Retrieve and JSONify API response
  let api_response = await fetch(API_URL);
  let api_json = await api_response.json();
  let variants = api_json.variants;
  
  // Randomly choose one the variant URLs
  let chosen_variant = Math.floor(Math.random() * variants.length);
  // Check if a cookie that specifies a variant exists
  cookies.split('; ').forEach( (cookie) => {
    let cookie_components = cookie.split('=');
    if(cookie_components[0].localeCompare('variant') == 0) {
      // Set the chosen variant the one specified in the cookie
      chosen_variant = parseInt(cookie_components[1]);
    }
  })

  // Retrieve the response from the chosen variant
  let variant_response = await fetch(variants[chosen_variant]);
  let mutated_response = new HTMLRewriter().transform(variant_response);

  // Add cookie indicating selected variant to response header
  if(!cookies) mutated_response.headers.append('Set-Cookie', `variant=${chosen_variant}; Expires=${getExpiration()}`);
  return mutated_response;
}
