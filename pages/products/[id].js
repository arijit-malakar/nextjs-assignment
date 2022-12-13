import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export const getServerSideProps = async (context) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  const id = context.params.id;
  console.log("id - ", id);
  const response = await fetch(process.env.API_URL + id);
  const data = await response.json();
  return {
    props: { productData: data },
  };
};

const ProductId = ({ productData }) => {
  //   const router = useRouter();
  //   const {id} = router.query;
  //   console.log(id);
  return (
    <div>
      <h2>Welcome to Product Detail Page</h2>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              src={productData.image}
              alt="Product-detail"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-6">
            <div className="border-bottom pb-2">
              <h5 className="product_title">{productData.title}</h5>
              <p className="product_category">{productData.category}</p>
              <div className="product-rating-box">
                <span>{productData.rating.rate} </span>
                <i class="bi bi-star-fill" style={{ color: "green" }} />
                <span> | {productData.rating.count}</span>
              </div>
            </div>
            <div className="border-bottom py-3">
              <h5>$ {productData.price}</h5>
              <button type="button" className="btn btn-primary me-2 p-2">
                <i class="bi bi-bag" /> ADD TO BAG
              </button>
              <button type="button" className="btn btn-secondary me-2 p-2">
                <i class="bi bi-heart" /> WISHLIST
              </button>
            </div>
            <div className="py-3">
              <h5>Product Description</h5>
              <p>{productData.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
