var month = [
  { name: "Jänner", length: 31 },
  { name: "Februar", length: 28 },
  { name: "März", length: 31 },
  { name: "April", length: 30 },
  { name: "Mai", length: 31 },
  { name: "Juni", length: 30 },
  { name: "Juli", length: 31 },
  { name: "August", length: 31 },
  { name: "September", length: 30 },
  { name: "Oktober", length: 31 },
  { name: "November", length: 30 },
  { name: "Dezember", length: 31 },
];

let currentMonth = 0;
let offsetStart = 4;
let offsetEnd = 0;
let currentDay = 1;
let newUnit = 0;
function printMonth() {
  document.write(month[currentMonth].name + "<br>");
  document.write("|MO| DI |MI|DO | FR|SA| SO |" + "<br>");
  offsetEnd = 35 - (month[currentMonth].length + offsetStart);
  for (let index = 0; index < 35; index++) {
    if (newUnit == 7) {
      document.write("|");
      document.write("<br>");
      newUnit = 0;
    }

    if (offsetStart == 0) {
      
      if (currentDay < month[currentMonth].length + 1) {
        if (currentDay < 10) {
          document.write("| &nbsp;" + currentDay + "    &nbsp;");
        } else {
          document.write("|  " + currentDay + "  ");
        }
        currentDay++;
        newUnit++;
      } else {
        
        document.write(" |&nbsp; &nbsp; &nbsp;  ");
        offsetEnd = offsetEnd -1;
      }
    } else if (offsetStart > 0) {
      document.write(" |&nbsp; &nbsp; &nbsp;  ");
      newUnit++;
      offsetStart = offsetStart - 1;
    }
  }
  console.log("a" + offsetEnd)
  console.log("b" + offsetStart)
  document.write("|");
  offsetStart = 7 - offsetEnd;
  currentDay = 1;
  document.write("<br>")
  document.write("<br>")
  newUnit = 0;
}

function printYear() {
  for (currentMonth = 0; currentMonth < month[currentMonth].length; currentMonth++) {
    printMonth();
  }
}
printYear();
