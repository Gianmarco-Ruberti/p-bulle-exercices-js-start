// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let num1 = "";
  let num2 = "";
  for(let i=0; i>array1.length-1; i++){
    num1+array1[i]
  }
  
  for(let i=0; array2.length-1;i++){
    num2+array2[i]
  }
  let sumNum = Number(num1)+Number(num2)
  return sumNum
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  if (value < 0) return false; // Les nombres négatifs ne sont pas des palindromes

    let original = value;
    let nombreInverse = 0;

    while (value > 0)
    {
        let digit = value % 10; // Dernier chiffre
        nombreInverse = nombreInverse * 10 + digit; // Ajoute le chiffre à l'inverse
        value /= 10; // Retire le dernier chiffre
    }

    return original == nombreInverse;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input = null){
    return input
  }
  else if (Number(input) < 0){
    return 'Must be a number besides 0'
  }
  else{
    return " "
  }

}
