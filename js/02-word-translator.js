// Create translator variable
let translate01;

// Create translator function 
function translation(){
    // Get input from user
    translate01 = prompt('Choose a language code between "es", "de", "en", and "fr"').toLowerCase();

    // Carry out translation based on user choice
    if (translate01 === 'es'){
        console.log("Hello World translated in Spanish is: Hola Mundo. ")
    }
    else if (translate01 === 'de'){
        console.log("Hello World translated in German is: Hallo Welt")
    }
    else if (translate01 === 'fr'){
        console.log("Hello World translated into French is: Bonjour le Monde")
    }
    else {
        console.log("Hello World")
    }
}
translation();