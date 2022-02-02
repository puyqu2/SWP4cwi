loadTable()




function loadTable() {
    fetch("https://www.openligadb.de/api/getbltable/bl1/2021")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let html = "";
        data.forEach((table) => {
          html += "<li>" + table.TeamName +  "&nbsp | "  + ""  + "Points: " + table.Points + "</li>" + "<br>";
        });
        document.getElementById("table").innerHTML = html;
      })
      .catch(function (err) {
        console.log(err);
      });
    }