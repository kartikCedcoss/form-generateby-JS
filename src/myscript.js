function myForm()
{
    var html = "<h2>Register New Account<h2><br><br>"
    
     html+="<input  type='text' style='padding:1em ' placeholder='Name' ></t> <input type ='text' style='padding:1em '  placeholder ='Last name'><br><br>";
     html+= "<input type='text'  placeholder=' Name'><br><br>";
     html+= "<input type='text' placeholder=' City'><br><br>";
     html+= "<input type='text'  placeholder=' Phone Number'><br><br>";
     html+= "<input type='text' placeholder=' Email'><br><br>";
     html+= "<input type='submit' id='btnSubmit' value='Create Account'>";


     
    document.getElementById('usertbl').innerHTML=html;
}