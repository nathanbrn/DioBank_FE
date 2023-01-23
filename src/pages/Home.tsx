import { Card } from "../components/Card/Card";
import { useContext, useState } from "react";
import { Center, Text, Input } from "@chakra-ui/react";
import { MyButton } from "../components/Button/Button";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/Contexts/AppContext";
import { changeLocalStorage } from "../services/storage";

export const Home = () => {
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const { setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const validateUser = async (email: string, senha: string) => {
        const loggedIn = await login(email, senha);
        
        if(!loggedIn) {
            return alert("Dados inválidos!");
        }

        setIsLoggedIn(true);
        changeLocalStorage({ login: true});
        navigate("/conta/1");
    }

    return (
        <>
            <Card>
                <Center>
                    <Text
                        fontSize="lg"
                        fontWeight="600"
                        marginBottom="24px"
                    >
                        Faça o Login
                    </Text>
                </Center>

                <Input 
                    type="email" 
                    placeholder='email@example.com'
                    marginBottom="16px"
                    value={email}
                    onChange={(event) => {
                        const value = event.target.value;
                        setEmail(value);
                    }}
                />

                <Input 
                    type="password" 
                    placeholder='******'
                    marginBottom="24px"
                    value={senha}
                    onChange={(event) => {
                        const value = event.target.value;
                        setSenha(value);
                    }}
                />

                <Center>

                    <MyButton
                        onClick={() => validateUser(email, senha)}
                    />

                </Center>
            </Card>
        </>
    );
}