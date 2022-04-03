import React, { CSSProperties } from "react"
import { Link } from "react-router-dom"

const list: CSSProperties = {
    listStyleType: "none",
    margin: 0,
    padding: 0,
}

function Navbar() {
    return (
        <div>
            <nav>
                <ul style={list}>
                    <li>
                        <Link to={"/login"}>Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
