import { Grid, Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react'

import { CardCity } from '../../components/CardCity'
import { Header } from '../../components/Header'
import { ContinentBanner } from '../../components/ContinentBanner'

export default function Continent() {
  return (
    <>
      <Header />
      <Flex as="main" w="100%" flexDir="column">
        <ContinentBanner />

        <Flex as="section" w="100%" px="4">
          <Flex
            w="100%"
            maxW={1160}
            mx="auto"
            justify="center"
            align="center"
            flexDir="column"
          >
            <Grid
              w="100%"
              mt="80px"
              gap="20px"
              alignItems="center"
              gridTemplateColumns={['1fr', '1fr', '1fr 1fr']}
            >
              <Text fontSize={['14', '18', '24']} textAlign="justify">
                A Europa é, por convenção, um dos seis continentes do mundo.
                Compreendendo a península ocidental da Eurásia, a Europa
                geralmente divide-se da Ásia a leste pela divisória de águas dos
                montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro
                a sudeste
              </Text>
              <Flex gap="42px" justify="center">
                <Flex
                  flexDir="column"
                  align={['flex-start', 'center', 'center']}
                >
                  <Heading
                    fontWeight="semibold"
                    fontSize={['24', '32', '38', '48']}
                    color="yellow.500"
                  >
                    50
                  </Heading>
                  <Text
                    fontWeight="semibold"
                    fontSize={['18', '20', '26', '24']}
                  >
                    países
                  </Text>
                </Flex>
                <Flex
                  flexDir="column"
                  align={['flex-start', 'center', 'center']}
                >
                  <Heading
                    fontWeight="semibold"
                    fontSize={['24', '32', '38', '48']}
                    color="yellow.500"
                  >
                    60
                  </Heading>
                  <Text
                    fontWeight="semibold"
                    fontSize={['18', '20', '26', '24']}
                  >
                    linguas
                  </Text>
                </Flex>
                <Flex
                  flexDir="column"
                  align={['flex-start', 'center', 'center']}
                >
                  <Heading
                    fontWeight="semibold"
                    fontSize={['24', '32', '38', '48']}
                    color="yellow.500"
                  >
                    27
                  </Heading>
                  <Text
                    fontWeight="semibold"
                    fontSize={['18', '20', '26', '24']}
                  >
                    cidades +100
                  </Text>
                </Flex>
              </Flex>
            </Grid>
          </Flex>
        </Flex>

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
