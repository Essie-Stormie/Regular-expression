function validateCreditCardNumber(cardNumber, cardType) {
    // Define regex patterns for different card types
    const cardPatterns = {
        Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        Mastercard: /^5[1-5][0-9]{14}$/,
        AmericanExpress: /^3[47][0-9]{13}$/,
        Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    };

    // Check if the card type is supported
    if (!cardPatterns[cardType]) {
        return { valid: false, message: "Unsupported card type" };
    }

    // Test the card number against the regex pattern
    if (!cardPatterns[cardType].test(cardNumber)) {
        return { valid: false, message: "Invalid card number format" };
    }

    // Validate the card number using the Luhn algorithm
    if (!luhnCheck(cardNumber)) {
        return { valid: false, message: "Invalid card number" };
    }

    return { valid: true, message: "Valid card number" };
}

function luhnCheck(cardNumber) {
    let sum = 0;
    let shouldDouble = false;

    // Loop through the card number from the end to the beginning
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i), 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit = (digit % 10) + 1;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    // If the sum is a multiple of 10, the card number is valid
    return sum % 10 === 0;
}

// Example usage:
const cardNumber = "4111111111111111"; // Example Visa card number
const cardType = "Visa"; // Card type

const validationResult = validateCreditCardNumber(cardNumber, cardType);
console.log(validationResult.message);