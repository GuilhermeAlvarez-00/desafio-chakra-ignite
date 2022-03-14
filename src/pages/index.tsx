import type { NextPage } from 'next'
import { Flex } from '@chakra-ui/react'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <Flex as="main" w="100%">
      <Header />
    </Flex>
  )
}

export default Home
