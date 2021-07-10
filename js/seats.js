selected_seats = [];

function desSelEle(id){
    const index = selected_seats.indexOf(id);
    if (index > -1) {
      selected_seats.splice(index, 1);
    }
}

function selSeat(id){
    ele = document.getElementById(id);
    if(ele.className == 'seat-but'){
        ele.className = 'seat-but selected';
        // selected_seats.push(id);
        tnos = selected_seats.push(id);
        selected_seats.sort();
    }
    else if (ele.className == 'seat-but selected'){
        ele.className = 'seat-but';
        desSelEle(id);
        tnos--;
    }
}

function confirm(){
    // document.getElementById("demo1").innerHTML = tnos;
    // document.getElementById("demo2").innerHTML = selected_seats;
    alert("You have selected "+tnos+ " seats: "+selected_seats )
}

// var tables = document.getElementsByTagName('table');
//     var table = tables[tables.length - 1];
//     var rows = table.rows;
//     for(var i = 0, td; i < rows.length; i++){
//         td = document.createElement('td');
//         td.appendChild(document.createTextNode(i + 1));
//         rows[i].insertBefore(td, rows[i].firstChild);
//     }

// var rows = document.querySelector('.r2');
// for(var i=0,input;i<10;i++){
//     input = document.createElement('INPUT');
//     input.type = "button"
//     input.className = 'seat-but';
//     rows.insertBefore(td,rows[i].firstChild);
// }
