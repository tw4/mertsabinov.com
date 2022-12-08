import { VStack, Text } from "@chakra-ui/react"
import FooterLink from "../../components/FooterLink"
import PageLayout from "../../components/layout/PageLeyout"

const MDSECommerce = () => {
    return (
        <PageLayout
            pageTitle="MDS E Commerce"
        >
            <VStack
                color='white'
            >
                <Text
                    fontSize='xx-large'
                >
                    MDS E Commerce 
                </Text>
                <Text
                    fontSize='large'
                >
                    Sellers and buyers, finally meet each other! MDS's e-commerce platform brings you a one-stop shop to find potential leads, 
                    negotiate prices, and sell your products. No more hassle of looking for buyers or sellers. MDS is the bridge that connects 
                    you to the world.
                </Text>
                <FooterLink 
                    postLink="https://github.com/mertsabinov/mds-e-commerce"
                    postLinkTitle="GitHub MDS E Commerce "
                />
            </VStack>
        </PageLayout>
    )
}

export default MDSECommerce