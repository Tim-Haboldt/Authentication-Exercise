import React from "react"
import { BaseComponentProps } from "../../Utils/types"
import Box from "../Box/box"
import Navbar from "../Navbar/navbar"

type BoxProps = BaseComponentProps

function Page({ children }: BoxProps) {
    return (
        <Box className="flex-col">
            <Navbar />
            {children}
        </Box>
    )
}

export default Page
