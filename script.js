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
  },
  {
    name: "Monkey D Luffy",
    username: "monkey@luffy",
    phone: "555-992-0909",
    promoCode: "Summer",
  },
  {
    name: "Roronoa Zoro",
    username: "ro_zorooftheonepiecegang",
    phone: "349-ok4-1234",
    promocode: ""
  },
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
    }
       return phone.replace(phoneRegex, "($1) $2-$3");
}

//intake function that integrates all individual validation and formatting routines 
function processRegistration(user){

    //input santization to trim whitespace accidentally typed by users
    const cleanName = typeof user.name === "string" ? user.name.trim() : "";
    const cleanUsername = typeof user.username === "string" ? user.username.trim() : "";

     const errors = [];


    //validates required fields and push specific error messages 
  if (!validateName(user.name)) {
        errors.push("Invalid name.");
    }
    
   if (!validateUsername(user.username)) {
        errors.push("Invalid username.");
    }

    //validates and reformats phone number
    const formattedPhone = formatPhoneNumber(user.phone);
    if(formattedPhone === null){
        errors.push("Invalid phone");
    }

    //checks if promoCode was provided 
    const hasPromo = Boolean(user.promoCode);
    const isPromoValid = hasPromo ? validatePromoCode(user.promoCode) : false;

    if (hasPromo && !isPromoValid){
        errors.push("Invalid promo code.");
    }

    //check if required fields are valid - return error or success data 
    if (errors.length > 0){
        return {
            success: false,
            errors: errors
        };
    }

    return {
        success: true,
        data: {
            name: user.name,
            username: user.username,
            phone: formattedPhone,
            discountApplied: isPromoValid,
        }
    };
    }



//testing program with sample data 
sampleUsers.forEach((user, index) => {
    const result = processRegistration(user);
    
    console.log(`User ${index + 1} (${user.name}):`);
    console.log(`  Success: ${result.success}`);
    
    if (result.success) {
        console.log(`  Phone: ${result.data.phone}`);
        console.log(`  Discount Applied: ${result.data.discountApplied}`);
    } else {
        console.log(`  Errors: ${result.errors.join(", ")}`);
    }

});

