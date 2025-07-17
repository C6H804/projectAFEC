
export function getDate(date) {
    //(Year Code + Month Code + Century Code + Date Number - Leap Year Code) mod 7
    let CenturyCode = 6;
    let YY = parseInt(date.substring(0,4));
    let MM = parseInt(date.substring(5,7));
    let DD = parseInt(date.substring(8,10));
    let IndexMonth = ["Décembre","Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre"];
    let IndexDay = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    let Time = date.substring(11,13) + "h " + date.substring(14,16);
    // 4444-22-22 22:22:22

    let YearCode = Math.floor((YY + Math.floor(YY/4))%7);
    const indexMonthCode = [0,3,3,6,1,4,6,2,5,0,3,5];
    let MonthCode = indexMonthCode[MM-1];
    let LeapYearCode = ((YY + 2000) % 400 === 0 || ((YY + 2000) % 4 === 0 && (YY + 2000) % 100 !== 0)) ? 1 : 0;

    let Day = (YearCode + MonthCode + CenturyCode + DD - LeapYearCode)%7;
    // console.log(YearCode + " " + MonthCode + " " + CenturyCode + " " + DD + " " + " " + LeapYearCode);

    let result = IndexDay[Day-1%7] + " " + DD + " " + IndexMonth[MM%12] + " à " + Time;
    // let result = IndexDay[Day%7];
    return result;
}