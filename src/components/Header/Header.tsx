import { useContext } from "react";
import {
  Button,
  Center,
  Flex,
  Spacer,
  Text
} from "@chakra-ui/react"
import { AppContext } from "../Contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../../services/storage";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false });
    setIsLoggedIn(false);
    navigate("/");
  }
  

  return (
    <Flex 
      marginBottom="24px"
      justifyContent="center"
      alignItems="center"
    >
      <Center>
        <Text
          fontSize="3rem"
          whiteSpace="nowrap"
          color="#5157a0"
          fontWeight="700"
        >
          Dio Bank
        </Text>
      </Center>
      {isLoggedIn && (
        <>
          <Spacer />
          <Button
            onClick={() => logout()}
          >
            Sair
          </Button>
        </>
      )}
    </Flex>
  )
}