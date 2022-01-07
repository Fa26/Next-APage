import{Box,Flex,Text,Link} from '@chakra-ui/react';
import { Stack, HStack, VStack ,AspectRatio} from '@chakra-ui/react'

const Footer = () =>{
	return(
			
		<Box 
			color="white" 
			bgImage="cat.gif" 
	  		bgSize="cover"
	  		bgRepeat="no-repeat"
			display={'flex'} 
			justifyContent="flex-end" 
			h="400px">
				
				<Stack spacing={{base:'10px',md:'20px',lg:'24px'}} direction={{base:'column',md:'row',lg:'row'}}>
					<Box w="140px" h={{base:'100px',md:'200px',lg:"120px"}} display="flex" flexDirection="column" bg="rgba(0,0,0,0.3)" fontWeight="700" >
						<Text fontSize={{base:"20px",md:"20px",lg:"29px"}}>Contact</Text>
						<Link>Github</Link>
						<Link>Telegram</Link>
					</Box>
				 <Box w='260px' h={{base:'100px',md:'200px',lg:"120px"}} display="flex" flexDirection="column" bg="rgba(0,0,0,0.3)" fontWeight="700">
   						<Text fontSize={{base:"20px",md:"20px",lg:"26px"}}>Everything Suck's</Text>
						<Link>Lorem Ipsum</Link>
						<Link>Lorem Ipsum</Link>
 					 </Box>
 				 <Box w='190px' h={{base:'100px',md:'200px',lg:"120px"}} display="flex" flexDirection="column" bg="rgba(0,0,0,0.3)" fontWeight="700">
    					<Text fontSize={{base:"20px",md:"20px",lg:"26px"}}>More w/Next</Text>
						<Link>Fullstack</Link>
						<Link>Jamstack</Link>
  				</Box>
				</Stack>
				
		</Box>
		)
}

export default Footer;