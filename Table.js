
var employee = [
  {
    ename: "ravi",
    num: "1",
    salary: "5000"
  },
  {
    ename: "siva",
    num: "2",
    salary: "6000"
  },
  {
    ename: "aravind",
    num: "3",
    salary: "8000"
  },
  {
    ename: "balu",
    num: "4",
    salary: "9000"
  },
  {
    ename: "charan",
    num: "5",
    salary: "4000"
  },
  {
    ename: "delhi",
    num: "6",
    salary: "1000"
  }
];
var employeeSection1 = [
  {
    ename: "omkar",
    num: "7",
    salary: "5000"
  },
  {
    ename: "nagrjuna",
    num: "8",
    salary: "4000"
  },
  {
    ename: "james",
    num: "9",
    salary: "50000"
  },
  {
    ename: "arnold",
    num: "10",
    salary: "10000"
  },
  {
    ename: "stonecold",
    num: "11",
    salary: "40000"
  },
  {
    ename: "rock",
    num: "12",
    salary: "50000"
  }
];
var employeeSection2 = [
  {
    ename: "BigShow",
    num: "13",
    salary: "50000"
  },
  {
    ename: "JohnSeena",
    num: "14",
    salary: "8000"
  },
  {
    ename: "Batista",
    num: "15",
    salary: "70000"
  },
  {
    ename: "Dam",
    num: "16",
    salary: "30000"
  },
  {
    ename: "Blue",
    num: "17",
    salary: "10000"
  },
  {
    ename: "One",
    num: "18",
    salary: "20000"
  }
];
var str;
str += "<table><tr><td>search:- <input type='text' id='text'></td>"
str += "<td><button = 'button' id= 'button' onclick='filter()'>clikHere  </button></td></tr></table><br><br>";

str += "<table border = '1' id='table' ><tr>"
str += "<th id = 'th1' class='th' onclick='sorting(0)' >Emp_name </th>"
str += "<th id = 'th2' class='th' onclick='sorting(1)' >Emp_Id</th>"
str += "<th id = 'th3' class='th' onclick='sorting(2)' >Emp_Sal</th></tr>";

for( var i = 0; i < employee.length; i++){
  var a=  Object.keys(employee[i]);
  str += "<tr>";
  for(var j = 0; j < a.length; j++)
  {
    str += "<td>"+ employee[i][a[j]]+ "</td>";
  }
  str += "</tr>";
}

str += "</table>";
str += "<br>";
str += "<div id='pagenation1'><ul>";
str += "<li><a href = '#' onclick='pagenation(employee)'>1</a></li>";
str += "<li><a href = '#' onclick='pagenation(employeeSection1)'> 2 </a></li>";
str += "<li><a href = '#' onclick='pagenation(employeeSection2)'> 3 </a></li>";
str += "<li><a href = '#' onclick='pagenation()'> 4 </a></li>";
str += "<li><a href = '#' onclick='pagenation()'> 5 </a></li>";
str += "</ul><div>";
document.getElementById("body").innerHTML = str;



function sorting(col){
  var tab = document.getElementById("table");
  var len=tab.rows.length;
  for(var i = 1; i < len-1; i++){
   for(var j = i + 1; j < len; j++){
      if(table.rows[i].cells[col].innerHTML > table.rows[j].cells[col].innerHTML){
         var temp = table.rows[i].innerHTML;
         table.rows[i].innerHTML = table.rows[j].innerHTML;
         table.rows[j].innerHTML = temp;
      }
    }
  }
}
function filter() {

  var name = document.getElementById("text").value;
  var tbody = document.getElementById("table");
  var rows = tbody.rows,
      rlen = rows.length,
      arr = new Array(),
      i, j, cells, clen,r;

  for (i = 1; i < rlen; i++) {
      cells = rows[i].cells;
      clen = cells.length;
      arr[i] = new Array();
      for (j = 0; j < clen; j++) {
          arr[i][j] = cells[j].innerHTML;

           if(arr[i][j]==name){
               r = i;
          }
       }
     }
     for(i = 1; i <= rlen; i++){
       if(i === r){
         continue;
       }
       else{
         tbody.rows[i].style.display = "none";
    }
  }
}

 function pagenation(e){
  var tab=document.getElementById("table");
  var rows = tab.rows;
  var i,j;
  for(i = 0; i < e.length; i++){
      var a=  Object.keys(e[i]);
      for(var j = 0; j < a.length; j++){
   tab.rows[i+1].cells[j].innerHTML = e[i][a[j]];
  }
 }
}
