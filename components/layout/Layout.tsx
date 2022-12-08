import { Box } from "@chakra-ui/react"
import type { ReactNode, FC } from "react"
import Head from 'next/head'

type IProps = {
    children: ReactNode
}

const Layout:FC<IProps> = ({children}) => {
    return (
        <>
            <Head>
            <title>Mert Sabinov</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name='description' content='portfolio' />
                <meta name='keywords' content='mert, mertsabinov, sabinov, mert sabinov' />
                <meta name="author" content="Mert Sabinov" />
            </Head>
            <Box
                display='flex'
                flexDirection='row'
            >
                {children}
            </Box>
            </>
    )
}

export default Layout