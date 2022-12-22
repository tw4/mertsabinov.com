import { VStack, Text, useMediaQuery } from "@chakra-ui/react"
import FooterLink from "../../components/FooterLink"
import PageLayout from "../../components/layout/PageLeyout"

const NFTShop = () => {
    const [isMobile] = useMediaQuery('(min-width: 768px)')
    return (
        <PageLayout
            pageTitle="NFT Shop"
        >
            <VStack
                color='white'
                h='100vh'
                overflowY={isMobile ? "hidden" : "scroll"}
            >
                <Text
                    fontSize='xx-large'
                >
                    NFT Shop
                </Text>
                <Text
                    fontSize='large'
                    textAlign='justify'
                >
                    NFT Shop is a marketplace for digital goods. We sell unique, one-of-a-kind items made
                     by the community. You'll find anything from art to collectible cards to games and beyond. 
                     Our marketplace is made up of many different communities with diverse interests and skills, 
                     so you can find something you love or just the perfect gift.
                </Text>
                <Text
                    w='100%'
                    fontSize='large'
                    textAlign='start'  
                    paddingTop='2.5%' 
                    fontWeight='bold' 
                >
                    What did NFT Shop bring me ?
                </Text>
                <Text
                    fontSize='large' 
                    textAlign='justify' 
                >
                    I used reaction in front-end development, I used node js 
                    and express in back-end development, I added auth and jwt methods. 
                    Users can sell their NFTs at any price, their accounts are updated 
                    when the sale is made
                </Text>
                <FooterLink 
                    postLink="https://github.com/mertsabinov/NFT-shop-01"
                    postLinkTitle="GitHub NFT Shop"
                />
            </VStack>
        </PageLayout>
    )
}

export default NFTShop