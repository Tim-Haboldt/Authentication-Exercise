import React from "react"
import { Link, LinkProps } from "react-router-dom"
import Box from "../../Box/box"

type NavbarLinkProps = LinkProps & React.RefAttributes<HTMLAnchorElement>

function NavbarLink({ className, ...props }: NavbarLinkProps) {
    return (
        <Box>
            <Link
                className={`flex mx-3 px-2.5 text-orange-900 text-lg ${className}`}
                {...props}
            />
        </Box>
    )
}

export default NavbarLink
