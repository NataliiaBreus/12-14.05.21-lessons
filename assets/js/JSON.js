


const user = {
    firstname: "Ivan",
    lastname: "Ivanov",
    isAgree: undefined,
    isMale: true,
    phone: ['+380983371453', '+0509456995'],
    [Symbol('test')]: 'value',
    funcsArr: [()=>5, (a)=>a*2],
    getName(){
        return this.firstname;
    },
    get surname(){
        return this.lastname;
    },
    set testAge(v){

        this.age = v;
    }
};

const serializedObj = JSON.stringify(user);
console.log(serializedObj);

const recoveredObj = JSON.parse(serializedObj);
console.log(recoveredObj);
