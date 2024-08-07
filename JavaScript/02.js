//objet literls

const sym = Symbol("s1")

const JsUser = {
    name : "sourabh",
    age : "20",
    email:"sourabh@gmail.com",
    isLoggedIn:false,
    last: ["mom","sat"],
[sym] : "sou"
}

console.log(JsUser)

JsUser.newone = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.newone())