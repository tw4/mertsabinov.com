import { Box, Text } from "@chakra-ui/react";

const AboutSide = () => {
  return (
    <Box color="white" fontStyle="italic" textAlign="justify">
      <Text fontSize="5xl" fontWeight="bold" fontStyle="normal">
        About me
      </Text>
      <Text fontSize="2xl" marginTop="2.5">
        I am a front-end developer with a passion for solving product problems
        with technical solutions. I am proficient in technologies such as React,
        Next.js, TypeScript, HTML, and CSS and have experience in developing web
        applications.
      </Text>
      <Text fontSize="4xl" marginTop="2.5">
        My Projects
      </Text>
      <Text fontSize="3xl" fontWeight="bold" marginTop="2.5">
        Profilecard.co
      </Text>
      <Text fontSize="2xl">
        A web application that allows users to create their own personal profile
        pages and share links such as social media accounts. Developed using
        React, Firebase, TypeScript and stitches for UI library. Improved
        front-end development skills and developed a reusable UI library.
      </Text>
      <Text fontSize="3xl" fontWeight="bold" marginTop="2.5">
        Workflow Premium
      </Text>
      <Text fontSize="2xl">
        A mobile app that allows users to track and save their daily and monthly
        earnings. Developed using React Native and local storage for user data
        management. Gained experience in mobile development and improved
        understanding of data management and storage.
      </Text>
      <Text fontSize="3xl" marginTop="2.5">
        Contact Me
      </Text>
      <Text fontSize="2xl">
        I am a team player who never gives up on learning and loves to share my
        knowledge around. If you are looking for a motivated and skilled
        front-end developer to join your team, feel free to contact me.
      </Text>
    </Box>
  );
};

export default AboutSide;
