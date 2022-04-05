import React from "react"
import { Link, LinkProps } from "react-router-dom"
import Box from "../../Box/box"

type NavbarLinkProps = LinkProps & React.RefAttributes<HTMLAnchorElement>

function NavbarLink({ className, ...props }: NavbarLinkProps) {
    return (
        <Box>
            <Link
                className={`border-2 rounded-xl border-orange-300 flex mx-2 px-2.5 bg-orange-300 text-orange-900 text-lg ${className}`}
                {...props}
            />
        </Box>
    )
}

export default NavbarLink
