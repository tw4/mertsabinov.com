import { VStack, Text, useMediaQuery} from "@chakra-ui/react"
import FooterLink from "../../components/FooterLink"
import PageLayout from "../../components/layout/PageLeyout"

const FilmWallet = () => {
    const [isMobile] = useMediaQuery('(min-width: 768px)')
    return (
        <PageLayout
            pageTitle="Film Walet"
        >
            <VStack
                color='white'
                h='100vh'
                overflowY={isMobile ? "hidden" : "scroll"}
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
                <Text
                    w='100%'
                    paddingTop='2.5%'
                    fontSize='large'
                    fontWeight='bold'
                    textAlign='start'
                >
                    What did Film Wallet add to me ?
                </Text>
                <Text
                    fontSize='large'
                    textAlign='justify'
                >
                    The project was created with next js, I pulled the data via API using getStaticProps. 
                    I performed the Pagination functions by paginating the incoming data. I added the search 
                    method so that users can easily find the movies and TV shows they are looking for. Finally, 
                    I managed user specific data using local storage
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