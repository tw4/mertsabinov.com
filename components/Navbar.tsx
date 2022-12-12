import { VStack, Text, useMediaQuery } from "@chakra-ui/react"
import NavbarItem from "./NavbarItem"

const Navbar = () => {
    const [isMobile] = useMediaQuery('(min-width: 768px)')
    return (
        <VStack
            w='20vw'
            h='100vh'
            paddingLeft='2.5%'
            paddingRight='2.5%'
            paddingTop='2.5%'
            backgroundColor='#464d5a'
            color='white'
            textAlign='center'
            overflowY={isMobile ? "hidden" : "scroll"}
        >
            <NavbarItem 
                linkHref="/"
                linkItemTitle="Start"
            />
            <Text
                textDecoration='underline'
            >
                Projects
            </Text>
            <NavbarItem 
                linkHref="/projects/Workflow"
                linkItemTitle="Workflow Premium"
            />
            <NavbarItem 
                linkHref="/projects/FilmWallet"
                linkItemTitle="Film Wallet"
            />
            <NavbarItem
                linkHref="/projects/mds-e-commerce"
                linkItemTitle="MDS E Commerce"
            />
            <NavbarItem 
                linkHref="/projects/SpotbotTwitch"
                linkItemTitle="Spotbot Twitch"
            />
            <NavbarItem 
                linkHref="/projects/NFTShop"
                linkItemTitle="NFT Shop"
            />
        </VStack>
    )
}

export default Navbar