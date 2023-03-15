const Head = ({ params: { slug } }: any) => {
  console.log('HEAD: How many times I render', slug);
  return <>
    <title> {slug} </title>
  </>;
};

export default Head;