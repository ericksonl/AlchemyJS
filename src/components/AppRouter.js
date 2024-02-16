import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NFTBrowser from '../pages/NFTBrowser';
import Home from '../pages/home';


const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/data" element={<NFTBrowser />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRouter;