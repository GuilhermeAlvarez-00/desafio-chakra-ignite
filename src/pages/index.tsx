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
import { HomeBanner } from '../components/HomeBanner'

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
        <HomeBanner />

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
