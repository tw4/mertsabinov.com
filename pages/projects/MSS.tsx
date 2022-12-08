import { VStack, Text } from "@chakra-ui/react"
import FooterLink from "../../components/FooterLink"
import PageLayout from "../../components/layout/PageLeyout"

const MSS = () => {
    return (
        <PageLayout
            pageTitle="MSS"
        >
            <VStack
                color='white'
            >
                <Text
                    fontSize='xx-large'
                >
                    MSS
                </Text>
                <Text
                    fontSize='large'
                    textAlign='justify'
                >
                    mss is a productivity app that helps you track hours and monthly earnings.
                    It's the easiest way to know exactly how much you've earned, what you need to earn more, 
                    and what days you're not making any progress. With this information, you'll be able to 
                    improve your productivity and focus on the tasks that matter.
                </Text>
                <FooterLink 
                    postLink="https://github.com/mertsabinov/mss"
                    postLinkTitle="GitHub MSS"
                />
            </VStack>
        </PageLayout>
    )
}

export default MSS