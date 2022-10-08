function generateReport() {
    let checkBoxes = document.querySelectorAll('input')

    let markedIndexes = [];

    for (let index = 0; index < checkBoxes.length; index++) {
        const element = checkBoxes[index];
        if (element.checked) {
            markedIndexes.push(index);
        }
    }
    let rows = document.getElementsByTagName('tr');
    rowsArray = Array.from(rows);
    rowsArray.shift();

    let objList = [];

    for (let row of rowsArray) {
        let obj = {};
        markedIndexes.forEach(index => {
            let name = checkBoxes[index].name;
            let rowData = row.children[index].textContent;
            obj[name] = rowData;
        });
        objList.push(obj)
    }
    report = JSON.stringify(objList);
    document.getElementById('output').textContent = report;
}