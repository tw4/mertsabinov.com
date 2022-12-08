import { Button, HStack, Link } from "@chakra-ui/react"
import type { FC } from 'react'

type IProps = {
    postLink:string;
    postLinkTitle:string
}

const FooterLink:FC<IProps> = ({ postLink, postLinkTitle }) => {
    return (
        <HStack
            paddingTop='5%'
        >
            <Link 
                href={postLink}
                _hover={{
                    textDecoration:'none'
                }}
            >
                <Button 
                    color='whatsapp.400' 
                    variant='outline'
                    borderColor='whatsapp.400'
                    _hover={{
                        backgroundColor: 'whatsapp.400',
                        color: 'white'
                    }}
                >
                    {postLinkTitle}
                </Button>
            </Link>
        </HStack>
    )
}

export default FooterLink