import { Box, HStack, Text, useMediaQuery } from "@chakra-ui/react"
import CostomButton from "./CostomButton"
import ServicesCard from "./ServicesCard"

const PortfolioSide = () => {
    const [ismobile] = useMediaQuery('(min-width: 768px)')
    return (
        <Box
            marginTop='5%'
        >
            <Text
                fontSize='xx-large'
                color='white'
                fontWeight='bold'   
            >
                Portfolio
            </Text>
            <Box
                display='flex'
                flexDirection={ismobile ? "row" : "column"}
                marginTop='5%'
                justifyContent='space-between'
            >
                <ServicesCard 
                    img="https://raw.githubusercontent.com/mertsabinov/mertsabinov.com/be9893f1367af0ddba576c89ff6000ce63f767a7/assets/dribbble1.svg"
                    content="APP Development"
                />
                <ServicesCard 
                    img="https://raw.githubusercontent.com/mertsabinov/mertsabinov.com/a64ec41511a1930d1a56b4e5121bb58fcf358a2a/assets/Dribbble2.svg"
                    content="API Development"
                />
                <ServicesCard
                    img="https://raw.githubusercontent.com/mertsabinov/mertsabinov.com/3a1f024ac34bb270d9772d4606c2a599187c10f7/assets/dribbble3.svg" 
                    content="WEB Development"
                />
            </Box>
            <Text
                marginTop='5%'
                color='white'
                fontSize='xx-large'
                fontWeight='bold'
            >
                See All Links
            </Text>
            <Box
                display='flex'
                flexDirection={ismobile ? "row" : "column" }
                marginTop='5%'
                justifyContent='space-evenly'
            >
            <CostomButton
                margin={ismobile ? "0% 2.5% 0% 2.5%" : "2.5%"}
                content="Github"
                href="https://github.com/mertsabinov"
            />
            <CostomButton
                margin={ismobile ? "0% 2.5% 0% 2.5%" : "2.5%"}
                content="Medium"
                href="https://medium.com/@mertsabinov"
            />
            <CostomButton
                margin={ismobile ? "0% 2.5% 0% 2.5%" : "2.5%"} 
                content="Twitter"
                href="https://twitter.com/mertsabinov"
            />
            <CostomButton
                margin={ismobile ? "0% 2.5% 0% 2.5%" : "2.5%"}
                content="Linkedin"
                href="https://www.linkedin.com/in/mertsabinov/"
            />

            </Box>
        </Box>
    )
}

export default PortfolioSide