import {
  Box,
  Image,
  ListItem,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

interface TravelTypesProps {
  image: string
  text: string
}

export function TravelItem({ image, text }: TravelTypesProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  })

  return (
    <ListItem display="flex" alignItems="center" flexDir="column" px="4">
      {isWideVersion ? (
        <Image w={[null, 65, 65, 85]} src={image} alt={text} />
      ) : (
        <Box w="8px" h="8px" borderRadius="50%" bg="yellow.500" />
      )}

      <Text mt="6" fontSize={['18', '18', '24']} fontWeight="semibold">
        {text}
      </Text>
    </ListItem>
  )
}
