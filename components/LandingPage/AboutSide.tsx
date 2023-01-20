import { Box, Heading, Text, List, ListItem } from "@chakra-ui/react";

const AboutSide = () => {
  return (
    <Box fontSize="x-large" textColor="white" marginTop="2.5%">
      <Heading as="h1">About me</Heading>
      <Text>
        I am a highly skilled and experienced software developer with a focus on
        creating performant and user-friendly web applications. I have extensive
        experience with technologies such as React, Next.js, TypeScript. I am
        always eager to learn new technologies and programming languages,
        currently my interest are GoLang and TypeScript.
      </Text>
      <Heading as="h4" marginTop="2.5%">
        My Professional Experience
      </Heading>
      <List styleType="disc">
        <ListItem>
          Developing and maintaining high-performing and user-friendly web
          applications using technologies such as React, Next.js, and
          TypeScript.
        </ListItem>
        <ListItem>
          Implementing modern web development best practices and following
          industry standards to deliver high-quality, production-ready code.
        </ListItem>
        <ListItem>
          Collaborating with cross-functional teams to deliver projects on time
          and within budget.
        </ListItem>
        <ListItem>
          Continuously learning and staying up-to-date with the latest
          technologies and programming languages, with a current focus on GoLang
          and TypeScript.
        </ListItem>
        <ListItem>
          Strong educational background in Computer Science and relevant
          coursework and projects.
        </ListItem>
        <ListItem>
          Strong problem-solving skills, attention to detail, and ability to
          work well under pressure.
        </ListItem>
        <ListItem>
          Excellent communication and team collaboration skills.
        </ListItem>
        <ListItem>
          Proven ability to consistently deliver high-quality products and
          contribute to the success of the organization.
        </ListItem>
      </List>
    </Box>
  );
};

export default AboutSide;
