import { Text,Center,Flex,Box,Square , Image,SimpleGrid,Link  } from "@chakra-ui/react"


const notfoud = () =>{

	return(
		<SimpleGrid minChildWidth="120px" bg="white">
		 <Box >
	 		<Image boxSize="600px" src="girl.gif" alt="Dan Abramov" />
	 	 </Box>
	 	 <Box bg="black" pt={[190,0]}>
	 	 	<Center>
	 	 		<Text color="black" fontSize={[90,300]}>404</Text>
	 	 	</Center>
	 	 	<Center>
	 	 		<Text color="black" fontSize={[20,40]}>Page not found <Link href="/">:(</Link></Text>
	 	 	</Center>

	 	 </Box>
		</SimpleGrid>
		
  		
  		
		)

}

export default notfoud;