// from data.js
var tableData = data;


// YOUR CODE HERE!
 var table = document.getElementById('ufo-table');
                
function renderTable(td) {
  for (var i = 0; i<td.length; i++){
      var row = table.insertRow(i+1);
                var datetime = row.insertCell(0);
                var city = row.insertCell(1);
                var state = row.insertCell(2);
                var country = row.insertCell(3);
                var shape = row.insertCell(4);
                var duration = row.insertCell(5);
                var comments = row.insertCell(6);

                datetime.innerHTML = td[i].datetime;
                city.innerHTML = td[i].city;
                state.innerHTML = td[i].state;
                country.innerHTML = td[i].country;
                shape.innerHTML = td[i].shape;
                duration.innerHTML = td[i].durationMinutes;
                comments.innerHTML = td[i].comments;

  }
}
  renderTable(tableData);


 function filterfunction() {
     var filteredData = tableData.filter(datecmp);
     var table = document.getElementById("ufo-table");
     for(var i  = table.rows.length - 1; i > 0; i--) {      // Destroys the table
        table.deleteRow(i);   
     }
     renderTable(filteredData);

     return filteredData;
 }
 
 function datecmp(el) {
     return el.datetime == document.getElementById('datetime').value;
     //return el.datetime=='1/3/2010'
    
 }
// var filtertable = tableData.filter(datecmp);
// console.log(document.getElementById("datetime").value);
// console.log(filtertable[0]);
// console.log(document.getElementById('datetime').value);

/*
for (var i = 0; i<filtertable.length; i++){
      var row = table.insertRow(i+1);
                var datetime = row.insertCell(0);
                var city = row.insertCell(1);
                var state = row.insertCell(2);
                var country = row.insertCell(3);
                var shape = row.insertCell(4);
                var duration = row.insertCell(5);
                var comments = row.insertCell(6);

                datetime.innerHTML = filtertable[i].datetime;
                city.innerHTML = filtertable[i].city;
                state.innerHTML = filtertable[i].state;
                country.innerHTML = filtertable[i].country;
                shape.innerHTML = filtertable[i].shape;
                duration.innerHTML = filtertable[i].durationMinutes;
                comments.innerHTML = filtertable[i].comments;
}


var properties = [{
    date: '1/1/2010'
},
    date: '1/11/2010'
    
                  }];

function dateestablished(month) {
  return earlydate;
    
   var dateidentify = properties.filter(dateestablished);
    console.log(dateidentify);
  */  
    

