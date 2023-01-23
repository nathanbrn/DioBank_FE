import { login } from "./login";

describe("login", () => { 
    
    const mockEmail = "breno@gmail.com";
    const mockSenha = "123456";

    it("Este teste deve mostrar uma mensagem de boas vindas", async () => {
        const response = await login(mockEmail, mockSenha);
        expect(response).toBeTruthy();
    })

    it("Deve exibir um erro caso o email seja inválido", async () => {
        const response = await login("email@invalido.com", "123456");
        expect(response).toBeFalsy();
    })
})