import { createClient } from "prismic-config";

const loader = async () => {
  const client = createClient();
  const document = await client.getSingle("homepage");

  return document;
};

const Index = async () => {
  const { data } = await loader();

  return (
    <>
      <head>
        <title>{data.meta_title}</title>
        <meta name="description" content={data.meta_description as string} />
      </head>
    </>
  );
};

export default Index;
