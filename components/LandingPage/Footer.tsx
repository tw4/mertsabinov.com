import { Box, HStack, VStack, Text, Link } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Box
            bgColor='#414141'
            borderTopLeftRadius='20px'
            borderTopRightRadius='20px'
            paddingTop='2.5%'
            paddingBottom='2.5%'

        >
            <HStack
                color='white'
                justifyContent='space-evenly'   
            >
                <VStack>
                    <Text>
                        Based in Bulgaria
                    </Text>
                </VStack>
                <VStack>
                    <Text
                        color='white'
                        fontWeight='bold'
                    >
                        Portfolio
                    </Text>
                    <Link
                        href="https://github.com/mertsabinov"
                    >
                        <Text>
                            GitHub
                        </Text>
                    </Link>
                    <Link
                        href="/projects"
                    >
                        <Text>
                            Projects
                        </Text>
                    </Link>
                </VStack>
                <VStack>
                    <Text
                        color='white'
                        fontWeight='bold'
                    >
                        Social Media
                    </Text>
                <Link
                    href="https://www.reddit.com/user/mertsabinov"
                >
                    <Text>
                        Reddit
                    </Text>
                </Link>
                <Link
                    href="https://twitter.com/mertsabinov"
                >
                    <Text>
                        Twitter
                    </Text>
                </Link>
                <Link
                    href="https://www.linkedin.com/in/mertsabinov/"
                >
                    <Text>
                        Linkedin
                    </Text>
                </Link>
                </VStack>
            </HStack>
        </Box>
    )
}

export default Footer