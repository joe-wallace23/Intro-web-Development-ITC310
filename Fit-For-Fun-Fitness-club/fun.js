 //get the multiple parameters from the query string
 const params = new URLSearchParams(window.location.search)

 //check if the form has passed in a First Name value
 if(params.has('firstname')){
     let firstname = params.get('firstname');
     //Put the value into the field
     document.getElementById("firstname").innerHTML = firstname;
 } 

 //check if the form has passed in a Last Name value
 if(params.has('lastname')){
     let lastname = params.get('lastname');
     //Put the value into the field
     document.getElementById("lastname").innerHTML = lastname;
 }

 //check if the form has passed in an email value
 if(params.has('email')){
     let email = params.get('email');
     //Put the value into the field
     document.getElementById("email").innerHTML = email;
 }

 //check if the form has passed in an phone value
 if(params.has('phone')){
     let phone = params.get('phone');
     //Put the value into the field
     document.getElementById("phone").innerHTML = phone;
 }

 //check if the form has passed in a contact value (best way to reach me)
 if(params.has('contact')){
     let contact = params.get('contact');
     //Put the value into the field
     document.getElementById("contact").innerHTML = contact;
 }

 //check if the form has passed in a prefered class time value
 if(params.has('time')){
     let time = params.get('time');
     //Put the value into the field
     document.getElementById("time").innerHTML = time;
 }

 //check if the form has passed in a value for classes offered
 //this field assumes the following types of classes are used in the form checkbox values:
 //class1=aerobics, class2=cycling, class3=boxing, class4=zumba

 let classes = "";
 //if the class has been checked then append it to the variable so we can create a list.
 if(params.has('class1')){
     classes += params.get('class1') + ", "; 
 }
 if(params.has('class2')){
     classes += params.get('class2') + ", "; 
 }
 if(params.has('class3')){
     classes += params.get('class3') + ", "; 
 }
 if(params.has('class4')){
     classes += params.get('class4'); 
 }

 //Put the appended value into the field
 document.getElementById("classes").innerHTML = classes;



