import React from "react"
import Box from "../Box/box"
import NavbarLink from "./Components/navbarLink"
import Text from "../Text/text"
import { Link } from "react-router-dom"
import { defaultBorderColor } from "../../Utils/defaultColors"

function Navbar() {
    return (
        <Box
            className={`border-b ${defaultBorderColor} w-screen justify-between h-14 items-center`}
        >
            <Box className="flex-row mx-6 items-center">
                <Link className="flex" to={"/"}>
                    <img
                        alt="logo"
                        className="w-12"
                        src={require("./../../logo.png")}
                    />
                </Link>
            </Box>
            <Box className="flex-row-reverse mx-6 items-center">
                <NavbarLink to={"/help"}>
                    <Text>Help</Text>
                </NavbarLink>
                <NavbarLink to={"/login"}>
                    <Text>Login</Text>
                </NavbarLink>
            </Box>
        </Box>
    )
}

export default Navbar
