

let password2=document.getElementById("passwordId2").value;
let password3=document.getElementById("passwordId3").value;



let passwordArray=new Array(["9#k$HtL@mP^x","g3Bp&5sM!v#T","j9Y@p6K#fz$N","9#k$HtL@mP^x","g3Bp&5sM!v#T","j9Y@p6K#fz$N","9#k$HtL@mP^x","g3Bp&5sM!v#T","j9Y@p6K#fz$N","9#k$HtL@mP^x","g3Bp&5sM!v#T","j9Y@p6K#fz$N"]);



   function strength() {

 
    
    var strength = 0;
    if(password2==password3)
    {
        if (password2.length < 6) {
            alert('Password too short');
            return;
        }
  

        if (/[A-Z]/.test(password2)) {
        strength += 1;
        }
  

    if (/[a-z]/.test(password2)) {
      strength += 1;
    }
  

    if (/[0-9]/.test(password2)) {
      strength += 1;
    }
  

    if (/[^A-Za-z0-9]/.test(password2)) {
      strength += 1;
    }
  
    // Return the strength rating
    if (strength == 1) {
      ans= "Weak";
    } else if (strength == 2) {
      ans= "Moderate";
    } else if (strength == 3) {
      ans= "Strong";
    } else if (strength == 4) {
      ans= "Very strong";
    }
    alert("password strength is "+ans);
    
    }
  else
    {
        alert("passwords don't match");
    }
}



