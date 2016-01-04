function daysInMonth(m, y) { // m is 0 indexed: 0-11
    switch (m) {
        case 1 :
            return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
        case 8 : case 3 : case 5 : case 10 :
            return 30;
        default :
            return 31
    }
}

function parseBirthDate(day,month,year){

    if (day.length == 1) {
        day = "0" + day;
    }

    month = parseInt(month);
    month = month+1;

    if (month <= 10) {
        month = "0" + month;
    }

    var birthdate = day + month + year

    return birthdate;

}