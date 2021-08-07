function store(){
	var fname = document.getElementById("first");
	localStorage.setItem("first", JSON.stringify(fname.value));
	var lname =  document.getElementById("last");
	localStorage.setItem("last", lname.value);
	var email = document.getElementById("email");
	localStorage.setItem("email",email.value);
    alert("Hello there");

 
 var name = localStorage.getItem('first');
 document.getElementById('welcomeMessage').innerHTML = "Hello " + "<b>"+name+"</b>" + "!, Your Account has been successfully created";
}

//


  