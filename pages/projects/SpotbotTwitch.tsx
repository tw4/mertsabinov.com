import { VStack, Text } from "@chakra-ui/react"
import FooterLink from "../../components/FooterLink"
import PageLayout from "../../components/layout/PageLeyout"

const SpotbotTwitch = () => {
    return (
        <PageLayout
            pageTitle="Spotbot Twitch"
        >
            <VStack
                color='white'
            >
                <Text
                    fontSize='xx-large'
                >
                    Spotbot Twitch
                </Text>
                <Text
                    fontSize='large'
                    textAlign='justify'
                >
                Get ready to have your streamers' chatters increase! Entering is as easy as 1-2-3 with Spotbot.
                 The faster your viewers enter, the more chances they have to win great prizes - and they'll 
                 certainly love it. It's a perfect time to get more feedback and interact with your viewers in
                  the process. Give them a chance to win some awesome prizes by entering with just a few clicks!
                </Text>
                <FooterLink 
                    postLink="https://github.com/mertsabinov/spotbot-twitch"
                    postLinkTitle="GitHub Spotbot Twitch"
                />
            </VStack>
        </PageLayout>
    )
}

export default SpotbotTwitch