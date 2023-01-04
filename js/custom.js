function sendDataForProcessing(){
       let clientname = $("#clientnameinput").val();
       let email = $("#clientemailinput").val();
       let formGoodToGo = true;

         if(clientname == ""){
          alert("Name field is required");
          formGoodToGo = false;
       }

       if(email == ""){
          alert("Email field is required");
          formGoodToGo = false;
       }

       

       if(formGoodToGo){
          
		   
           $.ajax({
               url: "./php/sendmails.php",
               type: "post",
               data: $("#emailForm").serialize(),
               success: function(data){
				   let jsonData = JSON.parse(data);
                   document.getElementById("emailResponse").innerHTML = jsonData.message;
				   setTimeout(function(){document.getElementById("emailResponse").innerHTML = "";}, 5000);
               }
           });
       }
    }

function sendContactDataForProcessing(){
	let clientname = $("#emailContactForm #clientnameinput").val();
       let email = $("#emailContactForm #clientemailinput").val();
	let phone = $("#emailContactForm #clientphoneinput").val();
	let message = $("#emailContactForm #clientmessageinput").val();
       let formGoodToGo = true;

         if(clientname == ""){
          alert("Name field is required");
          formGoodToGo = false;
       }

       if(email == ""){
          alert("Email field is required");
          formGoodToGo = false;
       }
	if(phone == ""){
          alert("Phone field is required");
          formGoodToGo = false;
       }
	if(message == ""){
          alert("Message field is required");
          formGoodToGo = false;
       }

       

       if(formGoodToGo){
 
		   
           $.ajax({
               url: "./php/sendmails.php",
               type: "post",
               data: $("#emailContactForm").serialize(),
               success: function(data){
				   let jsonData = JSON.parse(data);
                   document.getElementById("contactEmailResponse").innerHTML = jsonData.message;
				   setTimeout(function(){document.getElementById("contactEmailResponse").innerHTML = "";}, 5000);
               }
           });
       }
}

    $("#clientnameinput").on("keypress", function(){
       $(this).css("border", "2px solid #9e9e9e");
    });

    $("#clientemailinput").on("keypress", function(){
       $(this).css("border", "2px solid #9e9e9e");
    });