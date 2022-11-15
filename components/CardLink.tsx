import {HStack, Image, Link, Text } from "@chakra-ui/react"
import {FC} from 'react'

type IProps = {
    src:string;
    alt:string;
    title:string;
    link:string;
}

const CardLink:FC<IProps> = ({src, alt, title, link}) => {
    return (
        <HStack
            width='150px'
            border='2px solid #36393e'
            borderRadius='5px'
            color='white'
            padding='5%'
        >
            <Link
                width='100%'
                display='flex'
                flexDirection='row'
                justifyContent='space-around'
                alignItems='center'
                href={link}
            >
                <Image 
                    height='25px'
                    src={src}
                    alt={alt}
                />
                <Text
                >
                    {title}
                </Text>
                <Image 
                    height='10px'
                    src='https://www.nicepng.com/png/full/57-572111_this-free-clipart-png-design-of-grey-arrow.png'
                    alt='linkImg'
                />
            </Link>
        </HStack>
    )
}

export default CardLink;