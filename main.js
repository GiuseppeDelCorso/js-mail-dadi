const mail = ["booleanError@gmail.com", "boolean@gmail.com", "booleanError@gmail.com"]
console.log (mail)


const verifica = prompt("Inserisci la mail")

console.log( mail[verifica] );

for (let i = 0; i < mail.length; i++) {
    
    const verifica = mail[i];
    console.log( verifica )
    
    if (verifica == "boolean@gmail.com") {
        
        console.log("yes")
    }
}