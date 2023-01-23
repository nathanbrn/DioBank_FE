import {
    Button, 
    Center,
} from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface MyButtonProps {
    onClick: MouseEventHandler
}

export const MyButton = ({ onClick }: MyButtonProps) => {
    return (
        <Center>
            <Button
                onClick={onClick}
                colorScheme="teal"
                size="sm"
                width="100%"
                marginTop="12px"
            >
                Entrar
            </Button>
        </Center>
    );
}