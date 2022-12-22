import { VStack, Text, useMediaQuery } from "@chakra-ui/react"
import FooterLink from "../../components/FooterLink"
import PageLayout from "../../components/layout/PageLeyout"

const SpotbotTwitch = () => {
    const [isMobile] = useMediaQuery('(min-width: 768px)')
    return (
        <PageLayout
            pageTitle="Spotbot Twitch"
        >
            <VStack
                color='white'
                h='100vh'
                overflowY={isMobile ? "hidden" : "scroll"}
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
                <Text
                    w='100%'
                    paddingTop='2.5%'
                    textAlign='start'
                    fontWeight='bold'
                    fontSize='large'
                >
                    What did spotbot twitch add to me ?
                </Text>
                <Text
                    textAlign='justify'
                    fontSize='large'
                >
                    In the front-end part of the project, I used react, and in the back-end part, 
                    I created an api using nodejs and express. I used the tmi.js library for the twitch bot. 
                    In this project, I learned to use applications with different functions together.
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