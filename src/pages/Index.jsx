import { Box, Container, Flex, Heading, HStack, Text, VStack, Link, Image, SimpleGrid } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Financial Times
        </Heading>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
          <Link as={RouterLink} to="/news" _hover={{ textDecoration: "none", color: "gray.400" }}>News</Link>
          <Link as={RouterLink} to="/markets" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
          <Link as={RouterLink} to="/opinion" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
          <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
        </HStack>
      </Flex>

      {/* Main Headline Section */}
      <Box bg="gray.100" p={8} my={4}>
        <Heading as="h2" size="xl" mb={4}>Main Headline: Breaking News Story</Heading>
        <Text fontSize="lg">This is a brief description of the main headline news story. It captures the essence of the news and provides a quick overview.</Text>
      </Box>

      {/* Latest News, Market Updates, and Opinion Sections */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} my={4}>
        {/* Latest News */}
        <Box>
          <Heading as="h3" size="lg" mb={4}>Latest News</Heading>
          <VStack align="start" spacing={4}>
            <Box>
              <Heading as="h4" size="md">News Article 1</Heading>
              <Text>Summary of news article 1...</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">News Article 2</Heading>
              <Text>Summary of news article 2...</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">News Article 3</Heading>
              <Text>Summary of news article 3...</Text>
            </Box>
          </VStack>
        </Box>

        {/* Market Updates */}
        <Box>
          <Heading as="h3" size="lg" mb={4}>Market Updates</Heading>
          <VStack align="start" spacing={4}>
            <Box>
              <Heading as="h4" size="md">Market Update 1</Heading>
              <Text>Summary of market update 1...</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">Market Update 2</Heading>
              <Text>Summary of market update 2...</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">Market Update 3</Heading>
              <Text>Summary of market update 3...</Text>
            </Box>
          </VStack>
        </Box>

        {/* Opinion Pieces */}
        <Box>
          <Heading as="h3" size="lg" mb={4}>Opinion</Heading>
          <VStack align="start" spacing={4}>
            <Box>
              <Heading as="h4" size="md">Opinion Piece 1</Heading>
              <Text>Summary of opinion piece 1...</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">Opinion Piece 2</Heading>
              <Text>Summary of opinion piece 2...</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">Opinion Piece 3</Heading>
              <Text>Summary of opinion piece 3...</Text>
            </Box>
          </VStack>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;