import { VStack, Text, Link } from "@chakra-ui/react"
import NavbarItem from "./NavbarItem"

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
            <NavbarItem 
                linkHref="/"
                linkItemTitle="Start"
            />
            <Text
                textDecoration='underline'
            >
                Projects
            </Text>
            <NavbarItem 
                linkHref="/projects/Workflow"
                linkItemTitle="Workflow Premium"
            />
        </VStack>
    )
}

export default Navbar