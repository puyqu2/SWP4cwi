calendar();

var months = ["Jänner", "Februar", "März", "April", "Mai", "Juni","Juli", "August", "September", "Oktober", "November", "Dezember"]


function calendar(){
for (let index = 0; index < months.length; index++) {
    const element = months[index];
    document.write("MO | DI | MI | DO | FR | SA | SO" + "<br>")

}
}
