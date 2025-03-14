import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "UsersPageLayout",
    description: "UsersPage",
};
type Props = { children: React.ReactNode }

const UsersPageLayout  = ({children} : Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default UsersPageLayout;