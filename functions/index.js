const functions = require("firebase-functions");

let kitSSRServer;
exports.kitSSR = functions.region("us-central1").https.onRequest(async (request, response) => {
  if (!kitSSRServer) {
    functions.logger.info("Initialising SvelteKit SSR entry");
    kitSSRServer = require("./kitSSR/index").default;
    functions.logger.info("SvelteKit SSR entry initialised!");
  }
  functions.logger.info("Requested resource: " + request.originalUrl);
  return kitSSRServer(request, response);
});
