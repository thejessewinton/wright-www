import { createClient } from "prismic-config";

const loader = async () => {
  const client = createClient();
  const document = await client.getSingle("about");

  return document;
};

const About = async () => {
  const { data } = await loader();

  return (
    <>
      <head>
        <title>{data.meta_title}</title>
        <meta name="description" content={data.meta_description as string} />
      </head>
      <h1 className="font-sans text-[15vw] leading-normal text-gray-700"></h1>
    </>
  );
};

export default About;
