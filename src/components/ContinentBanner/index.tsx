import { Flex, Heading } from '@chakra-ui/react'

export function ContinentBanner() {
  return (
    <Flex
      w="100%"
      h="500px"
      bgImage="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        w="100%"
        h="100%"
        align="flex-end"
        justify={['center', 'flex-start', 'flex-start']}
        bgGradient="linear(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))"
      >
        <Heading color="white" ml={['0', '100px', '140px']} mb="60px">
          Europa
        </Heading>
      </Flex>
    </Flex>
  )
}
