import { PrismicText } from '@prismicio/react';
import { PrismicDocument } from '@prismicio/types';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { createClient } from '../../prismic.config';

type HomePage = NextPage & {
  document: PrismicDocument;
};

const Home = ({ document }: HomePage) => {
  return (
    <>
      <Head>
        <title>{document.data.meta_title} - Missy Wright</title>
        <meta name="description" content={document.data.meta_description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-serif text-gray-700">
          <PrismicText field={document.data.main_title} />
        </h1>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const document = await client.getSingle('homepage');

  return {
    props: {
      document,
    },
  };
};
