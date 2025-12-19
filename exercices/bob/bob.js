//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  // supprime les espace
  const trimmed = message.trim();
  // verifie si se termine par ?
  const isQuestion = trimmed.endsWith('?');
  // verifie si tout est en majuscules avec trimmed et contient au moins une lettre majuscule dans le texte avec le .test
  const isYelling = trimmed.toUpperCase() === trimmed && /[A-Z]/.test(trimmed);

  if (trimmed === '') {
    return 'Fine. Be that way!';
  }

  if (isQuestion && isYelling) {
    return "Calm down, I know what I'm doing!";
  }

  if (isYelling) {
    return 'Whoa, chill out!';
  }

  if (isQuestion) {
    return 'Sure.';
  }

  return 'Whatever.';
};

