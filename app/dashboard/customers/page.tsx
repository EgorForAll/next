// @flow
import * as React from 'react';
import {monserrat} from "@/app/ui/fonts";

const Page: React.FC = () => {
    return (
        <div className={`${monserrat.className} antialiased`}>
            <h1>This is Customers page</h1>
        </div>
    );
};

export default Page;