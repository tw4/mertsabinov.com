import { VStack, Text, Box, HStack, Link } from "@chakra-ui/react"
import FooterLink from "../../components/FooterLink"
import PageLayout from "../../components/layout/PageLeyout"

const Workflow = () => {
    return (
        <PageLayout pageTitle="Workflow Premium">
            <VStack
                color='white'
            >
                <Text
                    fontSize='xx-large'
                >
                    Workflow Premium
                </Text>
                <Text
                    fontSize='large'
                    textAlign='justify'
                >
                "Workflow Premium" is a monthly and daily planner for your business. 
                You will be able to see the salary you have earned during the current 
                month and the money you have already saved. You will also be able to see 
                your daily, weekly and monthly earnings very clearly.
                </Text>
                <Box
                    fontSize='large'
                    marginTop='5%'
                    textAlign='start'
                >
                     <Text>
                        See the wage we earned as a result of daily work and save it thanks to the calendar, see your monthly earnings and past earnings automatically, now it is very easy to calculate your salary "Workflow Premium"
                    </Text>
                    <Text
                        fontWeight='bold'
                        marginTop='2.5%'
                    >
                        Workflow Premium Features
                    </Text>
                    <Text>
                        - You can use it wherever you want as it does not need internet access.
                    </Text>
                    <Text>
                        - You can instantly see the salary total of the current month.
                    </Text>
                    <Text>
                        - You can see and list the salary records for the month you want
                    </Text>
                    <Text>
                        - Thanks to its customizable features, you can choose the current currency and change your hourly rate as you wish.
                    </Text>
                    <Text>
                        Security & Privacy
                        All the information you have entered is stored on your own phone (local storage), so no data is shared with us.
                    </Text>
                </Box>
                <FooterLink 
                    postLink="https://play.google.com/store/apps/details?id=mds.workflow" 
                    postLinkTitle="Google Play Store"
                />
            </VStack>
        </PageLayout>
    )
}

export default Workflow