import { Box, Heading, Text, Flex } from '@chakra-ui/react'
import Link from 'next/link'

interface SlideContainerProps {
  image: string
  title: string
  text: string
}

export function SlideContainer({ image, title, text }: SlideContainerProps) {
  return (
    <Box
      w="100%"
      h="450px"
      maxW={1160}
      bgImage={`${image}`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Link href="/continent" passHref>
        <Flex
          w="100%"
          h="100%"
          align="center"
          justify="center"
          flexDir="column"
          color="gray.50"
          bgGradient="linear(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))"
          px="5"
          textAlign="center"
          cursor="pointer"
        >
          <Heading fontSize={['24', '48']}>{title}</Heading>
          <Text
            fontSize={['14', '24']}
            fontWeight="bold"
            color="gray.100"
            mt="4"
          >
            {text}
          </Text>
        </Flex>
      </Link>
    </Box>
  )
}
