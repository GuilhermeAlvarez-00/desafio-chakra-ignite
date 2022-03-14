import { Flex, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex as="header" w="100%" h={100} align="center" justify="center">
      <Image src="/images/logo.svg" alt="Logo" w={184} />
    </Flex>
  )
}
