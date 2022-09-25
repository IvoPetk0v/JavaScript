function solve(array) {
    let intialNum = 0;
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        intialNum++;
        if (array[i] === 'add') {
            resultArray.push(intialNum);
        } else {
            resultArray.pop();
        }
    }
    if (resultArray.length > 0) {
        resultArray.forEach(element => {
            console.log(element)
        });
    } else {
        console.log('Empty');
    }
}
solve(['add',
    'add',
    'add',
    'add']
);
solve(['add',
    'add',
    'remove',
    'add',
    'add']
);
solve(['remove',
    'remove',
    'remove']
);
