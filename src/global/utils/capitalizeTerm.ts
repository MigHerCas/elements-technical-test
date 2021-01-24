export default function capitalizeTerm(term: string): string {
  // To avoid side-effects, we clone the term passed as param (pure function)
  const clonedTerm = term + '';
  const termsArray = clonedTerm.split(' ');
  const capitalizedTermArray: Array<string> = [];

  termsArray.map((termItem) => {
    capitalizedTermArray.push(termItem.charAt(0).toUpperCase() + termItem.slice(1));
  });

  return capitalizedTermArray.join(' ');
}
