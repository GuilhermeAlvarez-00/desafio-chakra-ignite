import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react'

export function HomeBanner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  const test = useBreakpointValue({
    base: 'base',
    sm: 'small',
    md: 'medium',
    lg: 'large',
  })

  console.log(test)

  return (
    <Flex as="section" w="100%">
      <Box
        w="100%"
        h={[164, 235, 318, 368]}
        bgImage="/images/background.png"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        display="flex"
        alignItems="center"
        px="4"
        py={['7', '0']}
      >
        <Flex
          w="100%"
          maxW={1160}
          mx="auto"
          align="center"
          justify="space-between"
          flexDir={['column', 'column', 'row', 'row']}
        >
          <Stack spacing="5">
            <Heading
              color="gray.50"
              fontSize={['20', '32']}
              fontWeight="medium"
              lineHeight={['normal', 'normal', '54px']}
            >
              5 Continentes, <br /> infinitas possibilidades.
            </Heading>
            <Text
              color="gray.100"
              fontSize={['14', '20']}
              fontWeight="normal"
              w="100%"
              maxW={418}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
            </Text>
          </Stack>

          {isWideVersion && (
            <Image
              src="/images/airplane.svg"
              alt="Avião nas nuvens"
              mb={[null, null, '0', '-160px']}
              w={[null, null, 360, 416]}
            />
          )}
        </Flex>
      </Box>
    </Flex>
  )
}
