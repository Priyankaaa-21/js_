//singleton
//object create
//object literals
const mySym= Symbol("key1")
const JsUser ={
    name: "Hitesh",
    "full name":"Priyanka Chourasia",
    [mySym]: "myKey1",
    age:18,
    email:"priyanka@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])
//console.log(typeof(mySym))
JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);
JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greeting();
JsUser.greetingTwo();