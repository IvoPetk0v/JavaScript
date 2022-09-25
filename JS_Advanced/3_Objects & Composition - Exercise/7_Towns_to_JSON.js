function solve(input) {
    let firstRow = input[0].split('|').map(a=>a.trim());
    let town = firstRow[1];
    let latitude = firstRow[2];
    let longitude = firstRow[3];
    let result = [];
    for (let i = 1; i < input.length; i++) {
        let currRow = input[i].split('|').map(a=>a.trim());
        let townValue = currRow[1];
        let latitudeValue = Number(Number(currRow[2]).toFixed(2));
        let longitudeValue = Number(Number(currRow[3]).toFixed(2));
        let obj = {};
        obj[town] = townValue;
        obj[latitude] = latitudeValue;
        obj[longitude] = longitudeValue;
        result.push(obj);
    }
    return JSON.stringify(result);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));  
// [{"Town":"Sofia","Latitude":42.7,"Longitude":23.33},{"Town":"Beijing","Latitude":39.91,"Longitude":116.36}]
console.log(solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
));