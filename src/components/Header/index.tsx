import { Flex, Icon, Image, useBreakpointValue } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Header() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  })

  const { asPath } = useRouter()

  return (
    <Flex as="header" w="100%" h={100} align="center" justify="center">
      <Flex
        w="100%"
        maxW="1160px"
        align="center"
        justify="center"
        position="relative"
      >
        {isMobile && asPath !== '/' && (
          <Link href="/" passHref>
            <Icon
              as={ChevronLeftIcon}
              position="absolute"
              left="0"
              w={8}
              h={8}
            />
          </Link>
        )}
        <Image src="/images/logo.svg" alt="Logo" w={184} />
      </Flex>
    </Flex>
  )
}
