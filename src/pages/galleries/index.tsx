import { PrismicDocument } from '@prismicio/types';
import type { NextPage } from 'next';
import Head from 'next/head';

type GalleriesPage = NextPage & {
  document: PrismicDocument;
};

const Galleries = ({ document }: GalleriesPage) => {
  return (
    <>
      <Head>
        <title>Galleries - Missy Wright</title>
        <meta name="description" content="Galleries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Galleries</h1>
        {JSON.stringify(document, null, 2)}
      </div>
    </>
  );
};

export default Galleries;
