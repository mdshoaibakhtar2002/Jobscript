function toTitleCase(inputString) {
       let stringWithSpaces = inputString.replace(/_/g, ' ');
       let titleCaseString = stringWithSpaces.replace(/\b\w/g, firstLetter => firstLetter.toUpperCase());
       return titleCaseString;
}

export function formatTextWithNewlines(inputText) {
       return inputText.replace(/\\n/g, '\n');
}