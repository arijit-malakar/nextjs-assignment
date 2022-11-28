import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return {
      props: { productData: data },
    };
  };

const Batches = (props) => {
    const {productData} = props;
    return (
        <div>
            <h2>This is Batches page.</h2>
            {productData.map(item => (
                <div><Link href={`/batches/${item.id}`}>{item.title}</Link></div>
            ))}
        </div>
    );
}

export default Batches;