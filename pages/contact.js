import React from "react";

export const getStaticProps = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json(); // to convert stringified json to parsed json (readable json)
    return {
        props: {productData: data}
    }
}

const ContactUs = (props) => {
    const {productData} = props;
    return (
        <div>
            <h2>This is contact us page.</h2>
            {productData.map(item => (
                <div>{item.image}</div>
            ))}
        </div>
    );
}

export default ContactUs;