interface DioBankProps {
    login: boolean;
}

export const getAllLocalStorage = ():string | null => {
    return localStorage.getItem("diobank");
}

const dioBank = {
    login: false
}

export const createLocalStorage = (): void => {
    localStorage.setItem("diobank", JSON.stringify(dioBank)); 
}

export const changeLocalStorage = (dioBank: DioBankProps): void => {
    localStorage.setItem("diobank", JSON.stringify(dioBank));
}