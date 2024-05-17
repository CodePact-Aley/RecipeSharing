import React from "react";
import { Outlet } from "react-router-dom";

const NoMenuLayout = () => {
    return (
        <>
            <Outlet />
        </>
    )
};

export default NoMenuLayout;
