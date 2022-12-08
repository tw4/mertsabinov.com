import { VStack, Text } from "@chakra-ui/react"
import FooterLink from "../../components/FooterLink"
import PageLayout from "../../components/layout/PageLeyout"

const NFTShop = () => {
    return (
        <PageLayout
            pageTitle="NFT Shop"
        >
            <VStack
                color='white'
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
                <FooterLink 
                    postLink="https://github.com/mertsabinov/NFT-shop-01"
                    postLinkTitle="GitHub NFT Shop"
                />
            </VStack>
        </PageLayout>
    )
}

export default NFTShop