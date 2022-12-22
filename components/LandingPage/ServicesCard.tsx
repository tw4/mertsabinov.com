import { Box, Image, Text } from "@chakra-ui/react"
import type { FC } from 'react'

type IProps = {
    img:string
    content:string
}

const ServicesCard:FC<IProps> = ({content, img}) => {
    return (
        <Box
            textAlign='center'
            color='white'
            fontWeight='bold'
        >
            <Image 
                src={img}
                w='100%'
            />
            <Text
                marginTop='5%'
            >
                {content}
            </Text>
        </Box>
    )
}

export default ServicesCard