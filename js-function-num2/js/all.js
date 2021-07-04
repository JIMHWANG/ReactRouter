document.getElementById('countId').onclick = function () {
    var hamberNum = document.getElementById('hamNumId').value;
    var cokeNum = document.getElementById('cokeNumId').value;
    alert("type of hamberNum : " + typeof (parseInt(hamberNum)));
    alert("type of cokeNum : " + typeof (parseInt(cokeNum)));
    alert("type of hamberNum : " + typeof (hamberNum));
    alert("type of cokeNum : " + typeof (cokeNum));

    var hamberPrice = 50;
    var cokePrice = 20;
    var total = hamberNum * hamberPrice + cokeNum * cokePrice;
    document.getElementById('totalId').textContent = total;
}