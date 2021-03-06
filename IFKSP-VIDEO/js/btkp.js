/*<{tr>
<td>1</td>
<td>Kiss</td>
<td>Zoltán</td>
<td>36 </td>
<td>
    <div class=" btn-group">
        <button class=" btn-info btn">
            <i class="fas fa-sync-alt"></i>
        </button>
        <button class=" btn-danger btn">
            <i class=" far fa-trash-alt"></i>
        </button>
    </div>
</td>
</tr> }*/

let users =[
 {surname:"Kiss", firstname:"Zoltán", age:36},
 {surname:"Nagy", firstname:"István", age:46},
 {surname:"Tóth", firstname:"János", age:62},
 {surname:"Balla", firstname:"Patri", age:3},
 {surname:"Szabó", firstname:"Ági", age:56},
 {surname:"Kéry", firstname:"Zalán", age:36},
 {surname:"Váry", firstname:"Hanna", age:30},
 {surname:"Váry", firstname:"Kinga", age:30},
 {surname:"Vajda", firstname:"Árpád", age:54},
 {surname:"Nagy", firstname:"Edit", age:57},
 {surname:"Dér", firstname:"László", age:39},
];

/* // tbody- egy elemének létrehozása
let tableBody= document.querySelector("#userTable tbody");
for (let k in users) {
    let tr= document.createElement("tr");
    let td= document.createElement("td");
    tr.innerHTML =parseInt(k)+1;
    tr.appendChild(td);
    tableBody.appendChild(tr);
} */

// tbody  létrehozása
let tableBody= document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td= document.createElement("td");
    td.innerHTML =html;
    parent.appendChild(td);
};

// fg a gomb csoportokra
let createButtonGroup= parent => {
    let group=document.createElement("div");
    group.className=" btn-group";

    let btnInfo=document.createElement("button");
    btnInfo.className="btn-info btn";
    btnInfo.innerHTML='<i class="fas fa-sync-alt"></i>';

    let btnDanger=document.createElement("button");
    btnDanger.className=" btn-danger btn";
    btnDanger.innerHTML=' <i class=" far fa-trash-alt"></i>';

     group.appendChild(btnInfo);
     group.appendChild(btnDanger);

     let td=document.createElement("td");
     td.appendChild(group);
     parent.appendChild(td);

}
for (let k in users) {
    let tr= document.createElement("tr");
    createTD( parseInt(k)+1, tr);
for (let value of Object.values(users[k])) {
    createTD (value,tr);
    }
   createButtonGroup(tr);
    tableBody.appendChild(tr);
};