import React from "react"
import { BaseComponentProps } from "../../Utils/types"
import Box from "../Box/box"

type TextProps = BaseComponentProps

function Text({ className, children }: TextProps) {
    return <Box className={`font-anek ${className}`}>{children}</Box>
}

export default Text
