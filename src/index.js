module.exports = function solveEquation(equation) {
    const [a, b, c] = parseEquation(equation);

    const d = b**2 - 4*a*c;
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);

    return ([Math.round(x1), Math.round(x2)].sort((a, b) => a - b));
};

function parseEquation(equationString) {
    const myRegexp = /(-?\d+) \* x\^2 ([+-] \d+) \* x ([+-] \d+)/;
    const match = myRegexp.exec(equationString);

    const coefs = [];
    for (let i = 1; i <=3; i++) {
        coefs.push(parseInt(match[i].replace(/\s/g, ""), 10));
    }

    return coefs;
}
