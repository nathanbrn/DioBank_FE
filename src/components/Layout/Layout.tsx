import { Box } from "@chakra-ui/react"
import { Header } from "../Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <Box 
        minHeight="100vh"
        backgroundColor="#0a0a0a" 
        padding="25px"
    >
      <Header />
      { children }
    </Box>
  )
}