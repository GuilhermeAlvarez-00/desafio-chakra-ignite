import { Flex } from '@chakra-ui/react'

import { Header } from '../../components/Header'
import { ContinentBanner } from '../../components/ContinentBanner'
import { ContinentText } from '../../components/ContinentText'
import { ContinentCities } from '../../components/ContinentCities'

export default function Continent() {
  return (
    <>
      <Header />
      <Flex as="main" w="100%" flexDir="column">
        <ContinentBanner />

        <ContinentText />

        <ContinentCities />
      </Flex>
    </>
  )
}
