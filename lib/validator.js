/**
 * This regular expression validates strings that adhere to the format of an email address, ensuring that it contains the required components such as an "@" symbol and a domain name with a period.
 */
function email(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
/**
 * This regular expression matches strings with multiple sequences of 3 to 15 alphabetic characters and/or apostrophes, separated by whitespace or the end of a line.
 */
function name(name) {
    const nameRegex = /^((([a-zA-Z']){3,15})+(\s|$)){2,}/;
    return nameRegex.test(name);
}
/**
 * This regular expression validates strings that must contain at least two lowercase letters, two uppercase letters, two digits, and two special characters (`,` `.` `-` `_` `<` `>` or any alphanumeric character). The length of the string should be between 10 and 30 characters.
 */
function password(password) {
    const passwordRegex = /^(?=.*[a-z].*[a-z])(?=.*[A-Z].*[A-Z])(?=.*\d.*\d)(?=.*[,.\-_<>\w].*[,.\-_<>\w])[,\-_<>\w]{10,30}$/;
    return passwordRegex.test(password);
}
/**
 * Checks if the input is a valid number.
 * @param input - The input value to be checked.
 * @param allowDescendants - Optional. Specifies whether descendant types of string are allowed. Defaults to false, meaning only direct string types are considered.
 * @returns A boolean value indicating whether the input is a valid number.
 */
function number(input, allowDescendants = false) {
    const regex = allowDescendants
        ? /^-?\d+(\.\d+)?$/
        : /^[1-9]\d*$/;
    // In most cases, input will be a string.
    const testableInput = input;
    return regex.test(testableInput);
}
export { email, name, password, number };
