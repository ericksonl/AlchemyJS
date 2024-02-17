import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Browser from '../pages/NFTBrowser';
import Wallet from '../pages/NFTWallet';
import Home from '../pages/home';


const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Browser />} />
                    <Route path="/wallet/*" element={<Wallet />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRouter;