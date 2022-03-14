import type { NextPage } from 'next'
import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  })

  console.log(isWideVersion)

  return (
    <>
      <Header />
      <Flex as="main" w="100%">
        <Box
          w="100%"
          h={['auto', 435, 335]}
          bgImage="/images/background.png"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          display="flex"
          alignItems="center"
          px="4"
          py={['7', '0']}
        >
          <Flex
            w="100%"
            maxW={1160}
            mx="auto"
            align="center"
            justify="space-between"
            flexDir={['column', 'column', 'column', 'row']}
          >
            <Stack spacing="5">
              <Heading
                color="gray.50"
                fontSize={['20', '32']}
                fontWeight="medium"
                lineHeight="54px"
              >
                5 Continentes, <br /> infinitas possibilidades.
              </Heading>
              <Text
                color="gray.100"
                fontSize={['14', '20']}
                fontWeight="normal"
                w="100%"
                maxW={418}
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
              </Text>
            </Stack>

            {isWideVersion && (
              <Image
                src="/images/airplane.svg"
                alt="Avião nas nuvens"
                mb="-100px"
                w={[320, 340, 340, 417]}
              />
            )}
          </Flex>
        </Box>
      </Flex>
    </>
  )
}

export default Home
