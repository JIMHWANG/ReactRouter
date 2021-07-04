var myMonth = 5;
var thisMonth = 12;
var birthdayCheck = myMonth == thisMonth;
document.getElementById('birthdayId').textContent = birthdayCheck;

var orderPeople = 2;
var arrivePeople = 2;
var arriveCheck = orderPeople != arrivePeople;
document.getElementById('peopleId').textContent = arriveCheck;