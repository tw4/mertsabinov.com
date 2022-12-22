import { VStack, Text, useMediaQuery, Box } from "@chakra-ui/react"
import PageLayout from "../../components/layout/PageLeyout"
import CostomButton from "../../components/LandingPage/CostomButton"
const projectsjIndex = () => {
    const [isMobile] = useMediaQuery('(min-width: 768px)')
    return (
      <PageLayout
        pageTitle="Projects"
      >
        <VStack
            h='100vh'
        >
            <Text
                fontSize='xx-large'
                color='white'
                fontWeight='bold'
            >
                Projects
            </Text>
            <Box
                w={isMobile ? "25%" : "100%" }
            >
            <CostomButton
                margin={isMobile ? "0%" : "2.5% 0% 2.5% 0%"}
                href="/projects/Workflow"
                content="Workflow Premium"
            />
            <CostomButton
                margin={isMobile ? "0%" : "2.5% 0% 2.5% 0%"} 
                href="/projects/FilmWallet"
                content="Film Wallet"
            />
            <CostomButton
                margin={isMobile ? "0%" : "2.5% 0% 2.5% 0%"}
                href="/projects/mds-e-commerce"
                content="MDS E Commerce"
            />
            <CostomButton 
                margin={isMobile ? "0%" : "2.5% 0% 2.5% 0%"}
                href="/projects/SpotbotTwitch"
                content="Spotbot Twitch"
            />
            <CostomButton 
                margin={isMobile ? "0%" : "2.5% 0% 2.5% 0%"}
                href="/projects/NFTShop"
                content="NFT Shop"
            />
            </Box>
       </VStack>
      </PageLayout> 
    )
}

export default projectsjIndex