import React from "react"
import ReactDOM from "react-dom"
import IndexPage from "./Pages/IndexPage/indexPage"
import LoginPage from "./Pages/LoginPage/loginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<IndexPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)
