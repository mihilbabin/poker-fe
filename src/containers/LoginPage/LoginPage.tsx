import React from "react";

import { Box, Heading, SimpleGrid, IconButton } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

const LoginPage: React.FC = () => {
  const githubIcon = () => <FontAwesomeIcon icon={faGithub} />;
  const facebookIcon = () => <FontAwesomeIcon icon={faFacebook} />;

  return (
    <SimpleGrid columns={3} mt={20}>
      <Box />
      <Box borderWidth="1px" rounded="lg" overflow="hidden" p={10} w="100%">
        <Heading textAlign="center" size="md">
          Login using one of the services below
        </Heading>
        <SimpleGrid columns={2} spacingX={4} mt={10}>
          <IconButton
            aria-label="Log in with Github"
            icon={githubIcon}
            size="lg"
            variantColor="green"
            isRound
          >
            Github
          </IconButton>
          <IconButton
            aria-label="Log in with Facebook"
            icon={facebookIcon}
            size="lg"
            variantColor="blue"
            isRound
          >
            Facebook
          </IconButton>
        </SimpleGrid>
      </Box>
      <Box />
    </SimpleGrid>
  );
};

export default LoginPage;
