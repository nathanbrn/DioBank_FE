import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext({});

const userCredencials = {
    email: "brenogmail.com",
    senha: "123456"
}

export const LoginProvider = ({ children }: any) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(userCredencials);
    }, []);

    return (
        <LoginContext.Provider value={ user }>
            {children}
        </LoginContext.Provider>
    );
}