var myBill = 1250;
var VIP = false;
var andCheck = myBill > 1000 && VIP == true;
var orCheck = myBill > 1000 || VIP == true;
document.getElementById('andId').textContent = andCheck;
document.getElementById('orId').textContent = orCheck;