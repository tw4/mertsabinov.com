import { Button, Image, Link} from "@chakra-ui/react"
import type {FC} from 'react'

type IProps = {
    content:string
    href:string
    margin?:string
}

const CostomButton:FC<IProps> = ({content, href, margin = '0%'}) => {
    return (
        <Link
            display='contents'
            href={href}
            _hover={{
                textDecoration:'none'
            }}
        >
        <Button
            margin={margin}
            w='100%'
            paddingLeft='5%'
            paddingRight='5%'
            color='white'
            bgColor='#414141'
            fontSize='large'
            _hover={{
                bgColor:'#7996FC'
            }}
        >
            {content}
            <Image
                paddingLeft='20%'
                src="https://raw.githubusercontent.com/mertsabinov/mertsabinov.com/dev/assets/arrow.svg"
            />
        </Button>
        </Link>

    )
}

export default CostomButton