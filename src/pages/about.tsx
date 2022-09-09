import { PrismicText } from "@prismicio/react";
import { PrismicDocument } from "@prismicio/types";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { createClient } from "../../prismic.config";

type AboutPage = NextPage & {
  document: PrismicDocument;
};

const About = ({ document }: AboutPage) => {
  return (
    <>
      <Head>
        <title>{document.data.meta_title}</title>
        <meta name="description" content={document.data.meta_description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="font-serif text-[15vw] leading-normal text-gray-700">
        <PrismicText field={document.data.main_title} />
      </h1>
    </>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  return {
    props: {
      document: await client.getSingle("about"),
    },
  };
};
