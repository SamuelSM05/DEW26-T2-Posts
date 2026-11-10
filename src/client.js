import User from "./user.js";

class Client {
    billing;
    name;
    constructor(name){
        this.billing = 0;
        this.name = name;
    }

    read(text){
        return `${this.name} is reading ${text}`;
    }
}

export { Client };
export default Client;
