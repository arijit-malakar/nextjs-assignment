import React from "react";

export const getStaticPaths = async () => {
//   const yearList = ['2022', '2021', '2020', '2019', '2018'];

    const response = await fetch("https://fakestoreapi.com/products");
    const yearList = await response.json();
  const paths = yearList.map((item) => {
    return {
      params: { year: item.id.toString() }
    };
  });
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  console.log(context.params);
  const productId = context.params.year;
  const response = await fetch("https://fakestoreapi.com/products/" + productId);
  const data = await response.json();

  return {
    props: {
        res: data,
        notFound: true
    }
  }
};

const Year = ({res}) => {
  return (
  <div>
    <h2>Batch page - {res.title}</h2>
    <div>{res.price}</div>
    <div>{res.category}</div>
    <div><img src={res.image} /></div>
  </div>
  );
};

export default Year;
