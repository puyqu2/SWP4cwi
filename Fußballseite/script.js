loadTable();
loadMatches();

function loadTable() {
  fetch("https://www.openligadb.de/api/getbltable/bl1/2021")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let html = "";
      data.forEach((table) => {
        html +=
          "<tr>" +
          "<td>" +
          table.TeamName +
          "</td>" +
          "<td>" +
          table.Points +
          "</td>" +
          "</tr>";
      });
      document.getElementById("table").innerHTML = html;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function loadMatches() {
  fetch("https://www.openligadb.de/api/getmatchdata/bl1")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let html = "";
      let html2 = "";
      let html3 = "";
      data.forEach((matches) => {
        html +=
          "<li>" +
          matches.MatchDateTime +
          "<br>" +
          "<br>" +
          matches.Team1.TeamName +
          "</li>" +
          "<br>";
        html2 +=
          "<li>" + "<br>" + "<br>" + matches.Team2.TeamName + "</li>" + "<br>";
        html3 += "<li>" + "<br>" + "<br>" + "VS" + "</li>" + "<br>";
      });
      document.getElementById("team1").innerHTML = html;
      document.getElementById("VS").innerHTML = html3;
      document.getElementById("team2").innerHTML = html2;
    })
    .catch(function (err) {
      console.log(err);
    });
}
