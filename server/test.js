var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!

var yy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
}
if (mm < 10) {
  mm = '0' + mm;
}
var today = dd + '/' + mm + '/' + yy;



let day = new Date().toLocaleString(["en-US"], {
  month: "2-digit",
  year: "2-digit",

})
let value = "68/19"


let isExpired = () => {
  let splitedValue = value.split("/");
  let splitedToday = day.split("/");
  if (splitedValue[1] > splitedToday[1]) {
    console.log(splitedValue[1], splitedToday[1] + "now")
    return undefined
  } else if (splitedValue[1] === splitedToday[1]) {
    if (splitedValue[0] > splitedToday[0]) {
      return undefined
    } else {
      return "poterminie"
    }
  } else {
    return "po terminie"
  }
}


console.log(isExpired());
