import { Box, Text } from "@chakra-ui/react";

interface CardInfoProps {
    mainContent: string,
    content: string
}

export const CardInfo = ({ mainContent, content }: CardInfoProps) => {
  return (
    <Box 
        backgroundColor="#fff" 
        minHeight="120px"
        borderRadius="25px"
        padding="25px"
    >
      <Text
        fontSize="2xl"
        fontWeight="bold"
      >
        {mainContent}
      </Text>
      <Text
        fontSize="xl"
      >
        {content}
      </Text>
    </Box>
  );
};
