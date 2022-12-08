import { Link, Text } from "@chakra-ui/react"
import type { FC } from 'react'

type IProps = {
    linkItemTitle:string
    linkHref: string
}

const NavbarItem:FC<IProps> = ({ linkItemTitle, linkHref }) => {
    return(
        <Link
            w='100%'
            href={linkHref}
            _hover={{
                textDecoration: 'none'
            }}
        >
            <Text
                textAlign='start'
                _hover={{
                    color:'whatsapp.400'
                }}
            >
                {linkItemTitle}
            </Text>
        </Link>
    )
}

export default NavbarItem