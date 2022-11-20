import React from "react";

export const getStaticProps = () => {
    return {
        props : { footerStatus: true }
    }
}

const Healthcare = () => {
    return (
        <div>
            <h3>Welcome to the Healthcare section.</h3>
        </div>
    );
}

export default Healthcare;