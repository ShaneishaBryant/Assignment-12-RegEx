Phase 1 Question

What did you accomplish in this phase? What is the practical difference between a regular expression with start/end anchors (^...$) and one without them when checking the length of a username?

In this phase, I created and tested two validation functions using regular expression literal notation and the .test() method: validateName - which ensures names consist only of English letters and spaces with a minimum length of 2 and validateUsername - which enforces strict character and length constraints for usernames using sample data.

With the start (^) and end ($) anchors force the regular expression to evaluate the entire string from start to finish. Without anchors, a pattern simply searches for a matching substring anywhere within the input text, meaning an invalid or oversized string would still return true as long as a portion of it happens to fit the criteria. Anchors lock both boundaries to ensure that the entire input strictly adheres to your rules rather than just a hidden piece of it.



Phase 2 Question

What did you accomplish in this phase? Why is the case-insensitive flag i cleaner than converting strings with .toLowerCase() or writing alternate variations in an if statement?

In this phase, I create two additional validation functions that use regular expression literal notation: validatePhone - which checkes for phone numbers formatted with hypens, dots, or without separators and validatePromoCode - which checks for the promotional discount code case-insenstive. 

The case-insensitive flag (/i) is cleaner because it eliminates boilerplate if statements and guarantees that all casing variations are caught automatically which is a better alternative to converting strings with .toLowerCase(). 



