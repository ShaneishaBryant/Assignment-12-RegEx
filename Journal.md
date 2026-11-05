Phase 1 Question

What did you accomplish in this phase? What is the practical difference between a regular expression with start/end anchors (^...$) and one without them when checking the length of a username?

In this phase, I created and tested two validation functions using regular expression literal notation and the .test() method: validateName - which ensures names consist only of English letters and spaces with a minimum length of 2 and validateUsername - which enforces strict character and length constraints for usernames using sample data.

With the start (^) and end ($) anchors force the regular expression to evaluate the entire string from start to finish. Without anchors, a pattern simply searches for a matching substring anywhere within the input text, meaning an invalid or oversized string would still return true as long as a portion of it happens to fit the criteria. Anchors lock both boundaries to ensure that the entire input strictly adheres to your rules rather than just a hidden piece of it.






Phase 2 Question

What did you accomplish in this phase? Why is the case-insensitive flag i cleaner than converting strings with .toLowerCase() or writing alternate variations in an if statement?

In this phase, I create two additional validation functions that use regular expression literal notation: validatePhone - which checkes for phone numbers formatted with hypens, dots, or without separators and validatePromoCode - which checks for the promotional discount code case-insenstive. 

The case-insensitive flag (/i) is cleaner because it eliminates boilerplate if statements and guarantees that all casing variations are caught automatically which is a better alternative to converting strings with .toLowerCase(). 





Phase 3 Question

What did you accomplish in this phase? What is the conceptual difference between testing a string with .test() and extracting/reformatting data using capturing groups and backreferences?

In this phase, I created the formatPhoneNumber function to standardize phone numbers into a uniform presentation. The function accepts a string input, validates it using a regular expression with three capturing groups, and applies the .replace() method to reformat valid numbers.
 
While .test() simply checks whether a string is valid, capturing groups and backreferences allow you to extract and manipulate individual components. Using these groups with the .replace() method lets you transform raw data into a new format. Ultimately, the conceptual difference comes down to validation versus transformation.


Phase 4 Question

How did you design your processRegistration() function? Looking back across Phases 1 through 4, how did building and verifying individual regular expressions first make assembling the final pipeline easier?

The processRegistration function acted as our blueprint, leveraging previously built validation and formatting helpers to verify input data, sanitize valid entries, and return either structured success data or a detailed list of error messages. Breaking down the individual regular expressions first made it much easier to understand the underlying logic and seamlessly integrate everything into a final processing pipeline.



Phase 5 Question

What bugs or unexpected results did you identify while running the full test suite? If you consulted an AI tutor for review, what advice did it provide, and what did you learn about regular expressions from this exercise?

The only unexpected behavior surfaced when testing an edge case with a period in the name (such as 'Dr.' or a middle initial)—the validation incorrectly flagged it as an error until the punctuation was removed. 

Among the AI's recommendations (which included defensive guard clauses and configuration objects), I chose to implement input sanitization to trim accidental whitespace, as it provided the most practical solution for cleaning up user input.

