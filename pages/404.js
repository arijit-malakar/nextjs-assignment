import React, { useEffect } from "react";
import {useRouter} from "next/router";

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])

    return (
        <div>
            <h2>Oops! Seems like you've hit the wrong one.</h2>
        </div>
    );
}

export default NotFound;