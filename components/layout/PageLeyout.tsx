import { Box } from "@chakra-ui/react"
import type {FC, ReactNode} from 'react'
import Head from 'next/head'

type IProps = {
    children: ReactNode
    pageTitle: string
}

const PageLayout:FC<IProps> = ({children, pageTitle}) => {
    return (
        <>
            <Head>
               <title>{pageTitle}</title> 
            </Head>
            <Box
                paddingTop='5%'
                paddingLeft='5%'
                paddingRight='5%'
                backgroundColor='#646d7d'
                w='80vw'
            >
                {children}
            </Box>
        </>
    )
}

export default PageLayout