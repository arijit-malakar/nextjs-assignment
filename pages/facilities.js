import Link from "next/link";
import React from "react";

const Facilities = () => {
    return (
        <div>
            <h2>We have the following facilities.</h2>
            <ul>
                <li><Link href="/facilities/lab">Lab</Link></li>
                <li><Link href="facilities/playground">Playground</Link></li>
                <li><Link href="facilities/healthcare">Healthcare</Link></li>
                <li><Link href="facilities/stationary">Stationary</Link></li>
            </ul>
        </div>
    );
}

export default Facilities;