import { VStack, Text, useMediaQuery } from "@chakra-ui/react"
import FooterLink from "../../components/FooterLink"
import PageLayout from "../../components/layout/PageLeyout"

const MDSECommerce = () => {
    const [isMobile] = useMediaQuery('(min-width: 768px)')
    return (
        <PageLayout
            pageTitle="MDS E Commerce"
        >
            <VStack
                color='white'
                h='100vh'
                overflowY={isMobile ? "hidden" : "scroll"}
            >
                <Text
                    fontSize='xx-large'
                >
                    MDS E Commerce 
                </Text>
                <Text
                    fontSize='large'
                    textAlign='justify'
                >
                    Sellers and buyers, finally meet each other! MDS's e-commerce platform brings you a one-stop shop to find potential leads, 
                    negotiate prices, and sell your products. No more hassle of looking for buyers or sellers. MDS is the bridge that connects 
                    you to the world.
                </Text>
                <Text
                    w='100%'
                    paddingTop='2.5%'
                    fontSize='large'
                    fontWeight='bold'
                    textAlign='start'
                >
                    What did MDS E Commerce add to me ?
                </Text>
                <Text
                    textAlign='justify'
                    fontSize='large'
                >
                    I used golang for the project back-end, I used React for the front-end part. 
                    I implemented auth methods for back-end and used jwt tokens, added data manager methods
                    I implemented auth methods for front-end. I implemented features added according 
                    to the company or user status of the users. I enabled users to see the list of products they 
                    purchased and to comment on the products they purchased.
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