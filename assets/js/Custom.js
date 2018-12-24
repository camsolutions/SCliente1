var C;
var D;
var a;
var b;
var c;
var d;
	db.collection("Lista")
    .onSnapshot(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
             // doc.data() is never undefined for query doc snapshots.


      	
            var Table = document.getElementById("tabla");

            console.log(doc.id, " => ", doc.data());
            var A = doc.data();
            var B = doc.id;
            if (!(document.getElementById(B))) {
            var tr2 = document.createElement("tr");
            tr2.setAttribute("id",B);
          	
            Table.appendChild(tr2);	
            }
            
            a = B+"a";
            b = B+"b";
            c = B+"c";
            d = B+"d";

            e = B+"e";
            f = B+"f";
            g = B+"g";
            h = B+"h";


         	if (!(document.getElementById(a))) {
         	var td1 = document.createElement("td");
            td1.setAttribute("id",e);
            var p1 = document.createElement("p");
            p1.setAttribute("id",a);
           
            var td2 = document.createElement("td");
            td2.setAttribute("id",f);
            var p2 = document.createElement("p");
            p2.setAttribute("id",b);
           

            var td3 = document.createElement("td");
            td3.setAttribute("id",g);
            var p3 = document.createElement("p");
            p3.setAttribute("id",c)
          
            var td4 = document.createElement("td");
            td4.setAttribute("id",h);
            var p4 = document.createElement("p");
            p4.setAttribute("id",d);
            

            
             td1.appendChild(p1);
             td2.appendChild(p2);
             td3.appendChild(p3);
             td4.appendChild(p4);

             document.getElementById(B).appendChild(td1);
            document.getElementById(B).appendChild(td2);
            document.getElementById(B).appendChild(td3);
            document.getElementById(B).appendChild(td4);
         	}
            


            
         	
         	document.getElementById(a).innerHTML = A.ID;
            document.getElementById(b).innerHTML = A.Name;
            document.getElementById(c).innerHTML = A.Price;
            document.getElementById(d).innerHTML = A.Availability;


      
       
           
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
           
    });
	