import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Heading,
  Container,
  Link,
  Center,
 
} from '@chakra-ui/react';
import {useState} from 'react'
import { Skeleton, SkeletonCircle, SkeletonText,Image } from "@chakra-ui/react"
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import Footer from '../components/Footer'




const creative = () =>{

	const [backImage,putImage] = useState(" ")
	const [text,putText] =useState("About")
	const [cText,putColor]= useState("white")

	const { isOpen, onToggle } = useDisclosure()

{/*Change the second part */}
const handleNewBack = () =>{
	putImage('or.jpeg')
	putText('More')
	putColor("white")


}
const handleBackbe = () =>{
	putImage('rain.jpeg')
	putText('Be')
	putColor("black")


}
const handleAbout = () =>{
	putImage(" ")
	putText("About")
	putColor("white")

}

	return(
		<>
	<Skeleton isLoaded startColor="pink.500" endColor="orange.500">
		<Box bg="black" px={4}>
			<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
				<Box color="#fff">Logo</Box>

			<Flex alignItems={'center'}>
				<Stack direction={'row'} spacing={7}>
					<Link href="/"><Text color="#FFFF">Home</Text></Link>
            		<Text color="#FFFF">About</Text>
            		<Text color="#FFFF">Everything Suck's</Text>
            	    <Text color="#FFFF">Help</Text>
            <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
             </Menu>
			</Stack>	
			</Flex>
			</Flex>
		</Box>
		<Container
			 maxW="container.xl" 
				height={'660px'}
	      bg="black"
	  		display={'flex'}
	  		flexDirection={{base:'column',md:'row',lg:'row'}}
		>
		<Box bg="black" width={{base:"100%",md:'50%',lg:'40%'}}
						display={'flex'} alignItems="center" justifyContent="ceter"

		>
			<Heading>
						
				<Text
					fontWeight={'700'}
					fontSize={'6rem'}
				>Be More Creative</Text>
			</Heading>
			<Stack  direction="column" spacing={6} mt="20px" >
				<Button
						width="20%"
						rounded={'full'}
					_hover={{color:'yellow',bg:"red"}}
				>Help</Button>
				<Button
					width="20%"
					rounded={'full'}
					_hover={{color:'yellow.300',bg:"cyan.400"}}

				>Help</Button>
			</Stack>
		</Box>
		<Box bg="pink" width={{base:"100%",md:'50%',lg:'60%'}} 
				height={'660px'}
	      bgImage={'taipei.jpeg'}
	  		bgPosition="center"
	  		bgSize="cover"
	  		bgRepeat="no-repeat"
		>
		
		</Box>
		</Container>

	{/* Container secon part*/}
		<Container
			maxW="container.xl" 
			height={'660px'}
	    bg="black"
	    display="flex"
	    bgImage={backImage}
	    backgroundPosition="center"
	    justifyContent="center"
	    alignItems="center"
	    flexDirection={{base:'column',md:'row',lg:'row'}}
			>

		<Box  width="390px" height="300px" m="30px" >
			<Text fontSize="6xl" color={cText}>{text}</Text>
		 		<Text color={cText} >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</Text>
		</Box>
		
		<Box width={{base:'190px',md:'300px',lg:'390px'}} height={{base:'190px',md:'300px',lg:'390px'}} bg="red" rounded="full" mt="40px"  display={'flex'} justifyContent="center" alignItems="center" flexDirection={{base:'column',md:'row',lg:'row'}}>
			<Text p="9px" onMouseOver={handleAbout} fontSize={{base:'1.0rem',md:'1.5rem',lg:'1.5rem'}}>About</Text>
			<Text p="9px" onMouseOver={handleNewBack} fontSize={{base:'1.0rem',md:'1.5rem',lg:'1.5rem'}}>More</Text>
			<Text p="9px" onMouseOver={handleBackbe} fontSize={{base:'1.0rem',md:'1.5rem',lg:'1.5rem'}}>Be</Text>
		</Box>
	</Container>

{/* Third part */}
		<Container
			maxW="container.xl"
			height={'660px'}
			bg="black"
			display="flex"
	    bgImage={'gray.jpeg'}
	    backgroundPosition="center"
	    justifyContent="center"
	    alignItems="center"
	    bgRepeat="no-repeat"


		>
			<Box position="absolute" left="90px">
				<Text fontSize={{base:"10rem",md:"6rem",lg:"6rem"}} color={{base:"red",md:"white",lg:"white"}}>Help</Text>
				<Button rounded="full" onClick={onToggle}>?</Button>
			</Box>
			<Box position="absolute" right="160px">
				 <ScaleFade initialScale={0.9} in={isOpen}>
        <Box
          p='40px'
          color={{base:'white',md:'white',lg:'white'}}
          mt='4'
          bg="black"
					fontWeight="600" 	
          rounded='md'
          shadow='md'
          width="190px"
          height="190px"
        >	
        	Lorem Ipsum has been the industry's s
            
        </Box>
      </ScaleFade>
			</Box>

		</Container>
	{/* FOOTER */}
		<Footer />
		</Skeleton>
		</>
	
	)

}
export default creative;




