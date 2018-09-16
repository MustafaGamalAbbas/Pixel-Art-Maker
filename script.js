

var table = document.getElementById("pixelCanvas");

/**
 * Create gridview drawn on canvas its dimensions specify through the width and height that passed as a prams 
 * @param {*} width The widht of gridview
 * @param {*} height The height of gridview
 */
function makeGrid(width, height) {

    clearTable();

    for (var i = 0; i < height; i++) {

        var tableRow = document.createElement("TR");
        tableRow.setAttribute("id", "myTr" + i);
        table.appendChild(tableRow);
        for (var j = 0; j < width; j++) {

            var tableData = document.createElement("TD");
            var node = document.createTextNode("");
            tableData.appendChild(node);
            document.getElementById("myTr" + i).appendChild(tableData);
            table.rows[i].cells[j].onclick = function () { cellClicked(this) };
        }
    }

}
/**
 * This function care of deletion of gridview
 */
function clearTable() {

    for (var i = 0; i < table.rows.length; i++) {
        document.getElementById("pixelCanvas").deleteRow(i);
        i--;
    }
}
/**
 * This function set backgroundColor of selected cell
 * @param {*} cell The selected cell
 */
function cellClicked(cell) {

    cell.style.backgroundColor = document.getElementById("colorPicker").value;
}

/**
 * submit function that reset all view as initiated 
 */
function submitForm() {

    let color = document.getElementById("colorPicker").value;
    document.getElementById("colorPicker").value = '#ffffff';
    makeGrid(document.getElementById("width").value, document.getElementById("height").value);
    document.getElementById("colorPicker").value = color;
}



