import { Box, Flex, Image, Text } from '@chakra-ui/react'

interface CardCityProps {
  banner: string
  title: string
  text: string
  image: string
}

export function CardCity({ banner, title, text, image }: CardCityProps) {
  return (
    <Flex
      flexDir="column"
      borderRadius="4"
      border="1px solid rgba(255, 186, 8, 0.5)"
      overflow="hidden"
    >
      <Image src={banner} alt="imagem" w="100%" h="173px" />

      <Flex
        mt="18px"
        align="center"
        justify="space-between"
        px="24px"
        pb="25px"
      >
        <Box>
          <Text fontSize="20" fontWeight="semibold" fontFamily="Barlow">
            {title}
          </Text>
          <Text
            fontSize="16"
            fontWeight="medium"
            fontFamily="Barlow"
            color="gray.500"
            mt="12px"
          >
            {text}
          </Text>
        </Box>

        <Image
          borderRadius="full"
          boxSize="150px"
          src={image}
          alt="Dan Abramov"
          w="30px"
          h="30px"
        />
      </Flex>
    </Flex>
  )
}
