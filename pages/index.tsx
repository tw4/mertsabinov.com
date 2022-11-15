import {
  Box, 
  Image, 
  Text, 
  VStack, 
  HStack,
  useMediaQuery,
  SimpleGrid,
} from '@chakra-ui/react'
import Head from 'next/head'
import CardLink from '../components/CardLink'

const Home = () => {
  const [isMobile] = useMediaQuery('(min-width: 1200px)')
  return (
    <Box
      height='100vh'
      backgroundColor='#111111'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Head>
        <title>Mert Sabinov</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='description' content='portfolio' />
        <meta name='keywords' content='mert, mertsabinov, sabinov' />
        <meta name="author" content="Mert Sabinov" />
      </Head>
      <VStack
        position='relative'
        width='400px'
        bgGradient='linear(to-b, #0e5569, #4f0e69)'
        borderRadius='10px'
        padding='0.2%'
        marginTop='10%'
        marginBottom='10%'
      >
          <VStack
            position='absolute'
            top='1%'
            left='1%'
            right='1%'
            bottom='1%' 
            backgroundColor='black'
            opacity='0.5'
          > 
          </VStack>
          <VStack
            paddingBottom='5%'
            zIndex='1'
          >
            <Image
              paddingLeft='2%'
              paddingRight='2%'
              src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12cbe8a4-f55c-4b40-85bb-d8e1405e7b84/df1wdk7-fa62d5b6-a1b2-4b2b-b407-02e737476148.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyY2JlOGE0LWY1NWMtNGI0MC04NWJiLWQ4ZTE0MDVlN2I4NFwvZGYxd2RrNy1mYTYyZDViNi1hMWIyLTRiMmItYjQwNy0wMmU3Mzc0NzYxNDguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mLCZ3Vy_z29MbBgLUgiJIocq4NNs0o-pr276Ju8hAtA'
              alt='banner'
            />
            <Image
              position='absolute'
              borderRadius='full'
              boxSize='100px'
              src='https://avatars.githubusercontent.com/u/88425310?v=4'
              alt='Dan Abramov'
              border='8px solid #23272a'
              top='20%'
              left='5%'
            />
            <HStack
              width='100%'
              justifyContent='end'
            >
              <HStack
                backgroundColor='#23272a'
                borderRadius='10px'
                marginRight='5%'
              >
                <Image
                  borderRadius='full'
                  boxSize='40px'
                  src='https://cdn3.emoji.gg/emojis/4323-blurple-verified-bot-developer.png'
                  alt='badage'
                  border='8px solid #23272a'
                  />
                <Image
                  borderRadius='full'
                  boxSize='40px'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Discord_Nitro_badge.webp/256px-Discord_Nitro_badge.webp.png'
                  alt='badage'
                  border='8px solid #23272a'
                />
                <Image
                  borderRadius='full'
                  boxSize='40px'
                  src='https://pbs.twimg.com/media/EWdeUeHXkAQgJh7.png'
                  alt='badage'
                  border='8px solid #23272a'
                />
              </HStack>
            </HStack>
            <VStack
              backgroundColor='#111111'
              borderRadius='10px'
              width='90%'
              align='start'
              paddingLeft='5%'
              paddingRight='5%'
              paddingBottom='5%'
            >
              <HStack
                marginTop='5%'
              >
              <Text
                fontSize='x-large'
                color='white'
              >
                Mert Sabinov
              </Text>
              <Text
                fontSize='x-large'
                color='#99aab5'                
              >
                #?????
              </Text>
              </HStack>
              <VStack
                width='100%'
                align='start'
              >
                <Box height='0.2vh' width='100%' backgroundColor='#36393e' ></Box>
                <Text
                  color='white'
                >
                  About
                </Text>
                <Text
                  marginTop='2.5%'
                  color='white'
                  textAlign='justify'
                >
                  I am a Software Developer passionate about developing ideas 
                  in open source communities. Currently learning React, TypeScript, 
                  Go, React Native and running open source projects. I want to work 
                  with technology
                </Text>
                <Box height='0.2vh' width='100%' backgroundColor='#36393e' ></Box>
                <VStack
                  width='100%'
                  align='center'
                >
                  <SimpleGrid 
                    columns={[2, null, 2]} 
                    spacing={2.5}
                  >
                    <CardLink 
                      src='https://cdn-icons-png.flaticon.com/512/145/145807.png'
                      alt='linkedin'
                      title='linkedin'
                      link='https://www.linkedin.com/in/mertsabinov/'
                    />
                    <CardLink
                      src='https://logo-download.com/images/github7.png?ezimgfmt=ngcb1/notWebP'
                      alt='Github'
                      title='GitHub' 
                      link='https://github.com/mertsabinov'
                    />
                    <CardLink
                      src='https://cdn-icons-png.flaticon.com/512/732/732208.png' 
                      alt='Google Play'
                      title='Google Play'
                      link='https://play.google.com/store/apps/dev?id=4780021152747475031&gl=TR' 
                    />
                    <CardLink 
                      src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png'
                      alt='Twitter'
                      title='Twitter'
                      link='https://twitter.com/mertsabinov'
                    />
                    <CardLink
                      src='https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png'
                      alt='Medium'
                      title='Medium'
                      link='https://medium.com/@mertsabinov'
                    />
                  </SimpleGrid>    
                </VStack>
             </VStack>
            </VStack>
          </VStack>
       </VStack>
    </Box>
  )
}

export default Home