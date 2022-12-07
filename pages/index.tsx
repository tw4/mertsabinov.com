import {
  useMediaQuery,
  VStack,
  Text,
  Tag,
  HStack,
  Link
} from '@chakra-ui/react'
import PageLayout from '../components/layout/PageLeyout'

const Home = () => {
  const [isMobile] = useMediaQuery('(min-width: 1200px)')
  return (
    <PageLayout pageTitle='Start'>
      <VStack
        color='white'
      >
        <Text
          fontSize='xx-large'
        >
          Mert Sabinov
        </Text>
        <Text
          fontSize='large'
          textAlign='justify'
        >
          I am a Software Developer passionate about developing ideas in open source communities. 
          Currently learning <Tag>React, Next.js, TypeScript, Go, React Native, graphql, prisma, MongoDB</Tag> and running open source projects. 
          I want to work with technologies like React, Next.js, TypeScript, Go, React Native, graphql, prisma, MongoDB As a developer, 
          most of my time is spent creating projects and learning new things every day.
        </Text>
      </VStack>
      <HStack
        marginTop='5%'
        color='whatsapp.400'
        justifyContent='center'
      >
        <Link href='https://github.com/mertsabinov'>
          <Text>
            GitHub
          </Text>
        </Link>
        <Link href='https://www.linkedin.com/in/mertsabinov/'>
          <Text>
            Linkedin
          </Text>
        </Link>
        <Link href='https://play.google.com/store/apps/dev?id=4780021152747475031&gl'>
          <Text>
            Google Play
          </Text>
        </Link>
      <Link href='https://twitter.com/mertsabinov'>
          <Text>
            Twitter 
          </Text>
      </Link>
      <Link href='https://medium.com/@mertsabinov'>
          <Text>
            Medium 
          </Text>
      </Link>
      <Link href='https://www.reddit.com/user/mertsabinov'>
          <Text>
            Reddit
          </Text>
      </Link>  
      </HStack>
    </PageLayout>
  )
}

export default Home