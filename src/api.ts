const conta = {
    email: "breno@gmail.com",
    senha: "123456",
    name: "Breno Nathanael",
    balance: 2000.00,
    id: '1'
}

export const api = new Promise(res => {
    setTimeout(() => {
        res(conta);
    }, 3000);
})