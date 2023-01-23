import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ContaInfo = () => {
    return (
        <>
            <Text
                fontSize="3xl"
                fontWeight="bold"
                color="#fff"
            >
                Informações da conta
            </Text>
            <Link
                to="/conta/1"
            >
                <Text
                    fontSize="xl"
                    color="#fffaaa"
                >
                    Conta
                </Text>
            </Link>
        </>
    );
}