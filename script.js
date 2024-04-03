const continer = document.getElementById('spreadSheet-Container');






for(let row = 1; row <= 26; row ++) {
    let rowElement = document.createElement('div');

    for( let col=1; col <= 26; col++) {
        let cell = document.createElement('div');
        cell.className=('cell')
        rowElement.append(cell)
    }
    continer.append(rowElement);
}