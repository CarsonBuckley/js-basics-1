
let welcome = "Welcome to the password validator tool 👋"
console.log(welcome)

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Create a password - Your password must be at least 10 characters long: ", function(input){
    const tokens = input.split(' ');

    const pass = String(tokens[0]);
    
    console.log('Password:', pass);
    console.log(`Password length: ${pass.length}`);

    if (pass.length >= 10) {
        console.log("Password successfully created ✅")
    } else {
        console.log("Password needs to be at least 10 characters long ❌")
    }

    reader.close()

});

