import { Flex, Box, UnorderedList } from '@chakra-ui/react'
import { TravelItem } from './TravelItem'

export function TravelTypes() {
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
          <TravelItem image="/images/cocktail.svg" text="vida noturna" />

          <TravelItem image="/images/surf.svg" text="praia" />

          <TravelItem image="/images/building.svg" text="moderno" />

          <TravelItem image="/images/museum.svg" text="clássico" />

          <TravelItem image="/images/earth.svg" text="e mais..." />
        </UnorderedList>

        <Box w={90} h="2px" mx="auto" mt="20" bg="gray.600" />
      </Flex>
    </Flex>
  )
}
