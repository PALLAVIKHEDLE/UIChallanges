/*function which can convert the time input given in 12 hours format to 24 hours format
##Example
convertTo24HrsFormat("12:10AM"); // 00:10
convertTo24HrsFormat("5:00AM"); // 05:00
convertTo24HrsFormat("12:33PM"); // 12:33
convertTo24HrsFormat("01:59PM"); // 13:59
convertTo24HrsFormat("11:8PM"); // 23:08
convertTo24HrsFormat("10:02PM"); // 22:02
*/

/*
The check for 'AM' and 'PM' can be verified using endsWith String method
An extra 0 would be needed if the hours have single digit
*/

let timeText = '12:10AM';

function convertTo24HrsFormat(timeText) {
    var timeTextLower = timeText.toLowerCase();
    let [hours, mins] = timeTextLower.split(":");

    // 12 o'clock is a special case to be handled both for AM and PM
    if (timeTextLower.endsWith("am")) hours = hours == 12 ? "00" : hours.padStart(2, '0');
    else if (timeTextLower.endsWith("pm")) hours = hours == 12 ? hours : String(+hours + 12).padStart(2, '0');

    console.log('Time', hours + ":" + mins.slice(0, -2));
    return hours + ":" + mins.slice(0, -2);
}

convertTo24HrsFormat(timeText);
  