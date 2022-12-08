import { VStack, Text} from "@chakra-ui/react"
import FooterLink from "../../components/FooterLink"
import PageLayout from "../../components/layout/PageLeyout"

const FilmWallet = () => {
    return (
        <PageLayout
            pageTitle="Film Walet"
        >
            <VStack
                color='white'
            >
                <Text
                    fontSize='xx-large'                
                >
                    Film Wallet
                </Text>
                <Text
                    fontSize='large'
                    textAlign='justify'
                >
                    You can't remember when you started watching your TV show, let alone what is on your list?
                     You need a solution to organize and keep track of everything you watch. And you can't do it 
                     without a Movie Wallet! It's the perfect tool to help you track your favorite movies and TV 
                     shows. You'll never miss out on the latest releases again!
                </Text>
                <FooterLink 
                    postLink="https://github.com/mertsabinov/film-wallet"
                    postLinkTitle="GitHub Film Wallet"
                />
            </VStack>
        </PageLayout>
    )
}

export default FilmWallet