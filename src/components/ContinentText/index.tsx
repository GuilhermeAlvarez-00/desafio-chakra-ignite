import { Flex, Grid, Heading, Text } from '@chakra-ui/react'

export function ContinentText() {
  return (
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
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <Flex gap="42px" justify="center">
            <Flex flexDir="column" align={['flex-start', 'center', 'center']}>
              <Heading
                fontWeight="semibold"
                fontSize={['24', '32', '38', '48']}
                color="yellow.500"
              >
                50
              </Heading>
              <Text fontWeight="semibold" fontSize={['18', '20', '26', '24']}>
                países
              </Text>
            </Flex>
            <Flex flexDir="column" align={['flex-start', 'center', 'center']}>
              <Heading
                fontWeight="semibold"
                fontSize={['24', '32', '38', '48']}
                color="yellow.500"
              >
                60
              </Heading>
              <Text fontWeight="semibold" fontSize={['18', '20', '26', '24']}>
                linguas
              </Text>
            </Flex>
            <Flex flexDir="column" align={['flex-start', 'center', 'center']}>
              <Heading
                fontWeight="semibold"
                fontSize={['24', '32', '38', '48']}
                color="yellow.500"
              >
                27
              </Heading>
              <Text fontWeight="semibold" fontSize={['18', '20', '26', '24']}>
                cidades +100
              </Text>
            </Flex>
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  )
}
