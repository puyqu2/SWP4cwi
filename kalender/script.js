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
let offset = 4;
let currentDay = 1;
let newUnit = 0;
function printMonth() {
  document.write(month[currentMonth].name + "<br>");
  document.write("|MO| DI |MI|DO | FR|SA| SO |" + "<br>");
  for (let index = 0; index < 35; index++) {
    if (newUnit == 7) {
      document.write("|");
      document.write("<br>");
      newUnit = 0;
    }
    if (offset == 0) {
      if (currentDay < 10) {
        document.write("| &nbsp;" + currentDay + "    &nbsp;");
      }else{
        document.write("|  " + currentDay + "  ");
      }

      newUnit++;
      if (currentDay < month[currentMonth].length) {
        currentDay++;
      }else{document.write("|")}
    
    } else if (offset > 0) {
      document.write(" |&nbsp; &nbsp; &nbsp;  ");
      newUnit++;
      offset = offset - 1;
    }
  }
}
printMonth();
