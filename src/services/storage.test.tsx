import { 
    changeLocalStorage, 
    createLocalStorage, 
    getAllLocalStorage 
} from "./storage";

const dioBank = {
    login: false
}

describe('Storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
    const getItem = jest.spyOn(Storage.prototype, "getItem");

    it("Deve retornar um objeto no localStorage", () => {
        getAllLocalStorage();
        expect(getItem).toHaveBeenCalledWith("diobank");
    })

    it("Deve criar um objeto no localstorage", () => {
        createLocalStorage();
        expect(mockSetItem).toHaveBeenCalledWith("diobank", JSON.stringify(dioBank));
    })

    it("Deve alterar um objeto no localstorage", () => {
        changeLocalStorage(dioBank);
        expect(mockSetItem).toHaveBeenCalledWith("diobank", JSON.stringify(dioBank));
    });
});