export  enum Gender{
    male,
    female,
    other
}
export  class Cadres{
    name:string;
    age: number;
    gender: Gender;
    address:string;


    constructor(name: string, age: number, gender: Gender, address: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
}