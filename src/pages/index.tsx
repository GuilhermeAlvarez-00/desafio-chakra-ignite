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

        <TravelTypes />

        <Heading
          mt="52px"
          textAlign="center"
          fontWeight="medium"
          fontSize={['20', '36']}
        >
          Vamos nessa? <br /> Então escolha seu continente
        </Heading>

        <Slide />
      </Flex>
    </>
  )
}

export default Home
