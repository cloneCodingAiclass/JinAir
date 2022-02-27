var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var thisDay = new Date(year, month, 1); //이번달 1일이 무슨 요일인지 확인
var thisWeek = thisDay.getDay();
var lastDate = [31,28,31,30,31,30,31,31,30,31,30,31]; //각 달의 마지막 날짜 정보
if(year % 4 == 0 && year % 100 !=0 || year % 400 ==0){ // 윤달 구하기
    lastDate[1] = 29;
}
let str = '';
for(let i = 1 ; i <= lastDate[today.getMonth()] ; i++){
    str = str +"'"+ i+"일',";
}
console.log(str);

var target = $('#line-chart');
const labels = [
    '1일','2일','3일','4일','5일','6일','7일','8일','9일','10일',
    '11일','12일','13일','14일','15일','16일','17일','18일','19일','20일',
    '21일','22일','23일','24일','25일','26일','27일','28일',
];
const data = {
    labels: labels,
    datasets: [
        {
            label: '이용객 수',
            pointRadius:5,
            pointHoverRadius:10,
            backgroundColor: 'rgb(102, 30, 67, 0.5)',
            hoverBackgroundColor:'rgb(102, 30, 67, 0.5)',
            borderColor: 'rgb(102, 30, 67, 0.5)',
            borderDash:[0,0],
            lineTension : 0.3,
            fill: true,
            data: [6, 10, 2, 14, 2, 3, 15, 10, 23, 15, 22, 30, 27, 35, 24, 20, 35, 42, 40, 50, 60, 49, 50, 56, 62, 55, 40, 30],
        }
    ]
};
const config = {
    type: 'line',
    data: data,
    options: {
        maintainAspectRatio:false
    }
};
var myChart = new Chart(
    target,
    config
);