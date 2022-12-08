import { VStack, Text } from "@chakra-ui/react"
import FooterLink from "../../components/FooterLink"
import PageLayout from "../../components/layout/PageLeyout"

const ElectronReactTaskApp = () => {
    return (
        <PageLayout
            pageTitle="Electron React Task App"
        >
            <VStack
               color='white' 
            >
                <Text
                    fontSize='xx-large'
                >
                    Electron React Task App   
                </Text>
                <Text
                    fontSize='large'
                    textAlign='justify'
                >
                Automate routine tasks so you can focus on the work that matters. 
                Prioritize tasks, set due dates and check statuses with a glance.
                </Text>
                <FooterLink 
                    postLink="https://github.com/mertsabinov/Electron-React-Task-App"
                    postLinkTitle="GitHub Electron React Task"
                />
            </VStack>
        </PageLayout>
    )
}

export default ElectronReactTaskApp