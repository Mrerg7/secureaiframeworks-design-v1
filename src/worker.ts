export default {
  async fetch(request: Request, env: { ASSETS: { fetch: (req: Request) => Promise<Response> } }) {
    const url = new URL(request.url);
    const hostname = url.hostname;

    if (
      hostname === 'www.secureaiframeworks.design' ||
      hostname === 'secureaiframeworks-design-v1.pages.dev'
    ) {
      const canonicalUrl = `https://secureaiframeworks.design${url.pathname}${url.search}`;
      return Response.redirect(canonicalUrl, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
