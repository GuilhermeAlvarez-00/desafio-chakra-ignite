import { Flex } from '@chakra-ui/react'

import { Header } from '../../components/Header'
import { ContinentBanner } from '../../components/ContinentBanner'
import { ContinentText } from '../../components/ContinentText'
import { ContinentCities } from '../../components/ContinentCities'
import Head from 'next/head'

export default function Continent() {
  return (
    <>
      <Head>
        <title>WorldTrip - Continent</title>
      </Head>
      <Header />
      <Flex as="main" w="100%" flexDir="column">
        <ContinentBanner />

        <ContinentText />

        <ContinentCities />
      </Flex>
    </>
  )
}
