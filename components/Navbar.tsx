import { VStack, Text, Link } from "@chakra-ui/react"

const Navbar = () => {
    return (
        <VStack
            w='20vw'
            h='100vh'
            paddingLeft='5%'
            paddingRight='5%'
            paddingTop='2.5%'
            backgroundColor='#464d5a'
            color='white'
            textAlign='center'
        >
            <Link href="/">
                <Text>Start</Text>
            </Link>
            <Text
                textDecoration='underline'
            >
                Projects
            </Text>
            <Text>Workflow Premium</Text>       
        </VStack>
    )
}

export default Navbar