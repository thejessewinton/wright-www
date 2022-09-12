// src/pages/_app.tsx
import { withTRPC } from "@trpc/next";
import type { AppRouter } from "../server/router";
import superjson from "superjson";
import "../styles/globals.css";

import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import {
  createClient,
  linkResolver,
  repositoryName,
} from "../../prismic.config";
import { Default } from "../layouts/default/Default";
import NextApp, { AppContext, AppProps } from "next/app";
import { PrismicDocument } from "@prismicio/types";

interface AppType extends AppProps {
  navigation: PrismicDocument;
}

const App = ({ Component, pageProps, navigation }: AppType) => {
  console.log(pageProps, navigation);
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Default navigation={navigation}>
          <Component {...pageProps} />
        </Default>
      </PrismicPreview>
    </PrismicProvider>
  );
};

App.getInitialProps = async (context: AppContext) => {
  const ctx = await NextApp.getInitialProps(context);

  const client = createClient({ previewData: ctx.pageProps.previewData });
  const navigation = await client.getSingle("navigation");

  console.log(navigation);

  return { ...ctx, navigation };
};

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  }
  if (process.browser) return ""; // Browser should use current path
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      transformer: superjson,
    };
  },
  ssr: false,
})(App);
