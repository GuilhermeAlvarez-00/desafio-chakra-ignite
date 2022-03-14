import type { NextPage } from 'next'
import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Image,
  useBreakpointValue,
  UnorderedList,
} from '@chakra-ui/react'

import { Header } from '../components/Header'
import { TravelTypes } from '../components/TravelTypes'
import { Slide } from '../components/Slide'

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
      <Flex as="main" w="100%" flexDir="column">
        <Flex as="section" w="100%">
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
                  Chegou a hora de tirar do papel a viagem que você sempre
                  sonhou.{' '}
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

        <Flex as="section" w="100%" px="4">
          <Flex
            w="100%"
            maxW={1160}
            mx="auto"
            justify="center"
            align="center"
            flexDir="column"
          >
            <UnorderedList
              display="flex"
              w="100%"
              mt={['20', '20', '28', '20']}
              mx="auto"
              alignItems="center"
              justifyContent={['center', 'space-between']}
              flexWrap="wrap"
              gap="4"
            >
              <TravelTypes image="/images/cocktail.svg" text="vida noturna" />

              <TravelTypes image="/images/surf.svg" text="praia" />

              <TravelTypes image="/images/building.svg" text="moderno" />

              <TravelTypes image="/images/museum.svg" text="clássico" />

              <TravelTypes image="/images/earth.svg" text="e mais..." />
            </UnorderedList>

            <Box w={90} h="2px" mx="auto" mt="20" bg="gray.600" />

            <Heading
              textAlign="center"
              mt="52px"
              fontSize={['20', '36']}
              fontWeight="medium"
            >
              Vamos nessa? <br /> Então escolha seu continente
            </Heading>
          </Flex>
        </Flex>

        <Flex as="section" w="100%" px="4" mt="52px" mb="10">
          <Flex w="100%" maxW={1160} mx="auto">
            <Slide />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default Home
