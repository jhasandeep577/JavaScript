function setUsername(username){
    this.username=username;
}
console.log(new setUsername("Sandeep"));         // use new Keyword for Object creating 

function user(username,email,age){
    setUsername.call(this,username);      // Very Important method that holds the reference
    this.email=email;
    this.age=age;
}
console.log(new user("Amit","amit56@mail",21));