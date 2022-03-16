import { Grid, Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react'

import { CardCity } from '../../components/CardCity'
import { Header } from '../../components/Header'
import { ContinentBanner } from '../../components/ContinentBanner'
import { ContinentText } from '../../components/ContinentText'

export default function Continent() {
  return (
    <>
      <Header />
      <Flex as="main" w="100%" flexDir="column">
        <ContinentBanner />

        <ContinentText />
        <Flex as="section" w="100%" px="4" mt="80px">
          <Flex
            w="100%"
            maxW={1160}
            mx="auto"
            justify="center"
            flexDir="column"
            pb="35px"
          >
            <Heading fontSize={['24', '32', '36']} fontWeight="medium">
              Cidades +10
            </Heading>
            <SimpleGrid w="100%" minChildWidth="256px" gap="45px" mt="40px">
              <CardCity
                banner="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="Londres"
                text="Reino Unido"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg/800px-Flag_of_the_United_Kingdom_%282-3%29.svg.png"
              />

              <CardCity
                banner="https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="Roma"
                text="Itália"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/800px-Flag_of_Italy.svg.png"
              />

              <CardCity
                banner="https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="Paris"
                text="França"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Flag_of_France.png/800px-Flag_of_France.png"
              />

              <CardCity
                banner="https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="Praga"
                text="República Tcheca"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/800px-Flag_of_the_Czech_Republic.svg.png"
              />

              <CardCity
                banner="https://images.unsplash.com/photo-1612098606612-e9b63793ca22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="Amsterdã"
                text="Holanda"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/255px-Flag_of_the_Netherlands.svg.png"
              />
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
