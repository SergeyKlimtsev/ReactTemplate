export function searchInLines(subline, ...lines) {
    const regExp = new RegExp(subline, 'i');
    return lines.find(line => regExp.test(line));
}