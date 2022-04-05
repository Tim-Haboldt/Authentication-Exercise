import React from "react"
import { BaseComponentProps } from "../../Utils/types"

type BoxProps = BaseComponentProps

function Box({ children, className }: BoxProps) {
    return <div className={`flex ${className}`}>{children}</div>
}

export default Box
