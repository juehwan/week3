document.getElementById("btnSave").onclick=function(){
   
    lastName=document.getElementById("ln").value;
    firstName=document.getElementById("fn").value;
    phoneNumber=document.getElementById("phone").value;

    table = document.getElementById("mytable");
    tr=document.createElement("tr");
    td1=document.createElement("td");
    td2=document.createElement("td");
    td3=document.createElement("td");
    td1.innerText = lastName;
    td2.innerText = firstName;
    td3.innerText = phoneNumber;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    table.appendChild(tr);
}