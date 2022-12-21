import { Box } from "@chakra-ui/react"
import type {FC, ReactNode} from 'react'
import Head from 'next/head'
import Footer from "../LandingPage/Footer"

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
                h='100%'
                padding='5%'
            >
                <Box>
                    {children}
                </Box>
            </Box>
           <Footer />
        </>
    )
}

export default PageLayout