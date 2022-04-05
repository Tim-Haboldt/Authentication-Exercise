import React from "react"
import ReactDOM from "react-dom"
import IndexPage from "./Pages/IndexPage/indexPage"
import LoginPage from "./Pages/LoginPage/loginPage"
import HelpPage from "./Pages/HelpPage/helpPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/" element={<IndexPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)
