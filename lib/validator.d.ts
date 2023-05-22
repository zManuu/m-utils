/**
 * This regular expression validates strings that adhere to the format of an email address, ensuring that it contains the required components such as an "@" symbol and a domain name with a period.
 */
declare function email(email: string): boolean;
/**
 * This regular expression matches strings with multiple sequences of 3 to 15 alphabetic characters and/or apostrophes, separated by whitespace or the end of a line.
 */
declare function name(name: string): boolean;
/**
 * This regular expression validates strings that must contain at least two lowercase letters, two uppercase letters, two digits, and two special characters (`,` `.` `-` `_` `<` `>` or any alphanumeric character). The length of the string should be between 10 and 30 characters.
 */
declare function password(password: string): boolean;
/**
 * Checks if the input is a valid number.
 * @param input - The input value to be checked.
 * @param allowDescendants - Optional. Specifies whether descendant types of string are allowed. Defaults to false, meaning only direct string types are considered.
 * @returns A boolean value indicating whether the input is a valid number.
 */
declare function number(input: unknown, allowDescendants?: boolean): input is number;
export { email, name, password, number };
