import { Box, Text, HStack, Image, useMediaQuery } from "@chakra-ui/react";
import CostomButton from "./CostomButton";

const HeaderSide = () => {
  const [ismobile] = useMediaQuery("(min-width: 768px)");
  return (
    <Box
      display="flex"
      flexDirection={ismobile ? "row" : "column"}
      justifyContent="space-evenly">
      <Box>
        <Image
          src="https://raw.githubusercontent.com/mertsabinov/mertsabinov.com/dev/assets/pp.svg"
          width="70%"
        />
      </Box>
      <Box marginTop="5%">
        <Box fontSize="xxx-large" textAlign="start" color="white">
          <Text>Hello, I`m a</Text>
          <Text fontWeight="bold">Software Developer</Text>
          <Text>Mert Sabinov</Text>
        </Box>
        <HStack marginTop="5%" justifyContent="space-between">
          <CostomButton
            margin="0% 2.5% 0% 0%"
            content="Hire me"
            href="https://docs.google.com/forms/d/e/1FAIpQLScocMhegBuxU_soiSUSnDp726sd3Ud6PM7FSos4836CsU-XaA/viewform?usp=sf_link"
          />
          <CostomButton
            margin="0% 0% 0% 2.5%"
            content="Portfolio"
            href="/projects"
          />
        </HStack>
        <CostomButton
          margin="5% 0% 0% 0%"
          content="Get in touch by Telegram"
          href="https://t.me/mertsabinov"
        />
      </Box>
    </Box>
  );
};

export default HeaderSide;
