const $button = document.getElementById("addition");


$button.addEventListener("click", function(){
    // table要素を取得
    let tableElem = document.getElementById('writeHere');

    // tbody要素にtr要素（行）を最後に追加
    let trElem = tableElem.tBodies[0].insertRow(-1);

    // td要素を追加
    let cellElem = trElem.insertCell(0);

    // td要素にテキストを追加
    cellElem.appendChild(document.createTextNode('セル'));

});
