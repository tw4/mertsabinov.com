import { VStack, Text } from "@chakra-ui/react"
import FooterLink from "../../components/FooterLink"
import PageLayout from "../../components/layout/PageLeyout"

const RandomColorGenerator = () => {
    return (
        <PageLayout
            pageTitle="Random Color Generator"
        >
            <VStack
                color='white'
            >
                <Text
                    fontSize='xx-large'
                >
                    Random Color Generator
                </Text>
                <Text
                    fontSize='large'
                    textAlign='justify'
                >
                Generate a random color with the touch of a button! This app will show you the hex code of the color, 
                and it's RGB value. It will also tell you the hue and saturation of the color. Share your color with 
                friends or use this to pick a new paint color for your room.
                </Text>
                <FooterLink 
                    postLink="https://github.com/mertsabinov/Random-Color-Generator"
                    postLinkTitle="Random Color Generator"
                />
            </VStack>
        </PageLayout>
    )
}

export default RandomColorGenerator