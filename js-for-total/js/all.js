var farms = [
  {
    farmer: '卡斯伯',
    field: 6,
    chick: 200,
    banana: 5000
  },
  {
    farmer: '查理',
    field: 10,
    chick: 50,
    banana: 1000
  },
  {
    farmer: '約翰',
    field: 6,
    chick: 120,
    banana: 3215
  }
]

var bananaTotal = 0;

for (var i = 0; i < farms.length; i++) {
  bananaTotal = bananaTotal + farms[i].banana;
}

console.log(bananaTotal);






