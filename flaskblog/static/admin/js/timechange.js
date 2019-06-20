function getDiffDate(start, end) {

    var startTime = getDate(start);

    var endTime = getDate(end);

    var dateArr = [];

    while ((endTime.getTime() - startTime.getTime()) > 0) {

        var year = startTime.getFullYear();

        var month = startTime.getMonth().toString().length === 1 ? "0" + (parseInt(startTime.getMonth().toString(),10) + 1) : (startTime.getMonth() + 1);

        var day = startTime.getDate().toString().length === 1 ? "0" + startTime.getDate() : startTime.getDate();

        dateArr.push(year + "-" + month + "-" + day);

        startTime.setDate(startTime.getDate() + 1);

    }

    return dateArr;

}



function getDate (datestr) {

    var temp = datestr.split("-");

    if (temp[1] === '01') {

        temp[0] = parseInt(temp[0],10) - 1;

        temp[1] = '12';

    } else {

        temp[1] = parseInt(temp[1],10) - 1;

    }

    //new Date()的月份入参实际都是当前值-1

    var date = new Date(temp[0], temp[1], temp[2]);

    return date;

}
function GetDateStr(AddDayCount) {
     var dd = new Date();
     dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
     var y = dd.getFullYear();
     var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0
     var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0
     return y+"-"+m+"-"+d;
}