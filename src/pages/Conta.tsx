import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { api } from "../api";
import { CardInfo } from "../components/Card/CardInfo";
import { AppContext } from "../components/Contexts/AppContext";

interface UserDataProps {
    email: string,
    senha: string,
    name: string,
    balance: number,
    id: string
}

export const Conta = () => {
    const [userData, setUserData] = useState<null | UserDataProps>();
    const { id } = useParams();
    const navigate = useNavigate();

    const { isLoggedIn } = useContext(AppContext);

    !isLoggedIn && navigate("/");
    

    useEffect(() => {
        const getData = async () => {
            const data: any | UserDataProps = await api;
            setUserData(data);
        }

        getData();
    }, []);

    const dateAndHours = new Date();
    const dateFormated = `${adicionaZero(dateAndHours.getDay()+1)}/${adicionaZero(dateAndHours.getMonth()+1)}/${adicionaZero(dateAndHours.getFullYear())}`;
    const hoursFormated = `${adicionaZero(dateAndHours.getHours())}:${adicionaZero(dateAndHours.getMinutes())}`;



    if(userData && id !== userData.id) {
        navigate("/")
    }
    
    function adicionaZero(numero:number){
        if (numero <= 9) 
            return "0" + numero;
        else
            return numero; 
    }

    return (
        <Center>
            <SimpleGrid
                columns={2}
                spacing={8}
                paddingTop={12}
            >

                {userData === undefined || userData === null 
                ? (
                    <Center>
                        <Spinner 
                            size="xl"
                            color="#fff"
                        />
                    </Center>
                )
                : (
                    <>
                        <CardInfo
                            mainContent={`Bem vindo(a), ${userData?.name}`}
                            content={`Último acesso: ${dateFormated}    ${hoursFormated}`}
                        />

                        <CardInfo
                        mainContent="Saldo"
                        content={`R$ ${userData.balance}`}
                        />
                        <CardInfo
                        mainContent="Email"
                        content={`R$ ${userData.email}`}
                        />
                    </>
                    )
                }

            </SimpleGrid>
        </Center>
    );
}