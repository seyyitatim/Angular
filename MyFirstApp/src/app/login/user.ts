export class User {
    constructor() { }
    // constructor(userName: string, password: string) {
    //     this.userName = userName;
    //     this.password = password;
    // }
    userName!: string;
    password!: string;
}

//constructor kullanmadan propertylerin sonuna ! işareti koyarakta sorunsuz bir şekilde oluşturabiliriz.
// Örneğe product.ts den bakabilirsin