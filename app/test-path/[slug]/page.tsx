const Page = ({ params: { slug } }: any) => {
  console.log('BODY: How many times I render', slug);
  return <h1> Hello {slug} </h1>;
};

export const generateStaticParams = () => {
  const slugs = ['slug-1', 'slug-2'];
  return slugs.map(s => ({ slug: s }));
}

export default Page;
