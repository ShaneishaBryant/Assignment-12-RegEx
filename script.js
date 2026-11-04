"use strict";

const sampleUsers = [
  {
    name: "Alex Johnson",
    username: "alex_j",
    phone: "555-234-5678",
    promoCode: "SUMMER"
  },
  {
    name: "B", // Invalid name (too short)
    username: "cool_user_123",
    phone: "555.345.6789",
    promoCode: "summer"
  },
  {
    name: "Charlie Brown",
    username: "charlie!brown", // Invalid username (illegal character '!')
    phone: "5554567890",
    promoCode: "SUMMER2026" // Invalid promo code
  },
  {
    name: "Dana Scully",
    username: "da", // Invalid username (too short, min 3)
    phone: "555-567-8901",
    promoCode: "SuMmEr"
  },
  {
    name: "Edward Nygma",
    username: "the_riddler_super_fan", // Invalid username (too long, max 12)
    phone: "555-678-901", // Invalid phone (missing a digit)
    promoCode: null
  },
  {
    name: "Fiona Gallagher",
    username: "fiona_g",
    phone: "555-789-0123",
    promoCode: "" // No promo code provided
  }
];


//Validation Functions - Name & Username 
//use regular expresions with literal notation and test method 
function validateName(name){
    return /^[a-zA-Z ]{2,}$/.test(name);
}

function validateUsername(username){
    return /^\w{3,12}$/.test(username);
}


//Validation Functions for Phone Number & Promo Code 

/*function validatePhone(phone){
    return /^\d{3}[-.]?\d{3}[-.]?\d{4}$/.test(phone)
}*/

function validatePromoCode(promo){
    if (!promo) return false;
    return /^summer$/i.test(promo);
}


//formatted validation for phone numbers
function formatPhoneNumber(phone){
    //regex with three capturing groups 
    const phoneRegex = /(^\d{3})[-.]?(\d{3})[-.]?(\d{4})$/;

    //check if phone string is valid using replace() method with backreferences 
    if (!phoneRegex.test(phone)){
        return null; //if not a valid phone number 

        return phone.replace(phoneRegex, "($1) $2-$3");
    }
}


//testing program with sample data 
sampleUsers.forEach((user, index) => {
    const isPhoneValid = formatPhoneNumber(user.phone);
    const isPromoValid = validatePromoCode(user.promoCode);

    console.log(`User ${index + 1} (${user.name}):`);
    //console.log(`Name: "${user.name}" -> Valid? ${validateName(user.name)}`);
    console.log(`Username: "${user.username}" -> Valid? ${validateUsername(user.username)}`);
    console.log(`Phone: "${user.phone}" -> Valid? ${isPhoneValid}`);
    console.log(`Promo: "${user.promoCode}" -> Valid? ${isPromoValid}`);
    console.log("-----------------------------------------");
});

