import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";
import * as prismicNext from "@prismicio/next";

import sm from "./sm.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */
// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case "homepage":
      return "/";
    case "about":
      return "/about";
    case "gallery":
      return `/galleries/${doc.uid}`;
    case "galleries":
      return `/galleries`;
    default:
      return null;
  }
}

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = () => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes: [
      {
        type: "homepage",
        path: "/",
      },
      {
        type: "galleries",
        path: "/galleries",
      },
      {
        type: "gallery",
        path: "/galleries/:uid",
      },
    ],
  });

  return client;
};
