import React from "react";
import Head from "next/head";
import "../styles/Products.module.css";
import ProductCard from "../common/ProductCard";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch(process.env.API_URL);
  const data = await response.json();
  return {
    props: { productData: data },
  };
};

const Products = (props) => {
  const { productData } = props;
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="container">
        <div className="row mt-4 mb-4">
          <div className="col-12">
            <h2 className="text_nextjs">Welcome to products page!</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {productData.map((item) => (
            <div className="col-md-3" key={item.id}>
              <div className="card mb-4" style={{ width: "100%" }}>
                <div className="card-img-top p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={205}
                    height={270}
                  />
                </div>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: "1",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    <Link
                      href={`/products/${item.id}`}
                      style={{ textDecoration: "none", color: "unset" }}
                    >
                      {item.title}
                    </Link>
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.description}
                  </p>
                  <p style={{ fontWeight: "bold" }}>$ {item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
