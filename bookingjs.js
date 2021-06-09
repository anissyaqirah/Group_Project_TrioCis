function validateForm() {
  var x = document.forms["form"]["name"].value;
  var x = document.forms["form"]["email"].value;
  var x = document.forms["form"]["phonenum"].value;
  var x = document.forms["form"]["location"].value;
  var x = document.forms["form"]["date"].value;
  var x = document.forms["form"]["time"].value;
  var x = document.forms["form"]["number"].value;
  if (x == "") {
    alert("ALL THE DETAILS MUST BE FILLED OUT!");
    return false;
  }

}
