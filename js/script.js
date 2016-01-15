$(document).ready(function() {
  $("#questions").submit(function(event) {
    var age = parseInt($("input#age").val());
    var hobbies = $("select#hobbies").val();
    var temp = $("select#temp").val();
    var politics = $("select#politics").val();
    var teacher = $("select#teacher").val();

    // debugger;
    if (age) {

      if (age < 21 && hobbies === 'coffee' && temp ==='hot' && politics ==='trump' && teacher ==='Money'){
       $("#result1").show();
    }
  }
    if (age) {
      if (age < 21 && hobbies === 'coffee' && temp ==='hot' && politics ==='trump' && teacher ==='power'){
        alert("Hey I'm here");
          $("#result2").show();
    }
  }
    if (age) {
      if (age < 21 && hobbies === 'tea' && temp ==='hot' && politics ==='other' && teacher ==='Money'){
          $("#result3").show();
    }
  }
    if (age) {
      if (age < 21 && hobbies === 'tea' && temp ==='hot' && politics ==='other' && teacher ==='power'){
          $("#result4").show();
    }
  }
    if (age) {
      if (age < 21 && hobbies === 'coffee' && temp ==='cold' && politics ==='trump' && teacher ==='Money'){
          $("#result1").show();
    }
  }
    if (age) {
      if (age < 21 && hobbies === 'coffee' && temp ==='cold' && politics ==='trump' && teacher ==='power'){
          $("#result2").show();
    }
  }
    if (age) {
      if (age < 21 && hobbies === 'coffee' && temp ==='cold' && politics ==='other' && teacher ==='Money'){
          $("#result3").show();
    }
  }
    if (age) {
      if (age < 21 && hobbies === 'coffee' && temp ==='cold' && politics ==='other' && teacher ==='power'){
          $("#result4").show();
    }
  }
    if (age) {
      if (age < 21 && hobbies === 'tea' && temp ==='hot' && politics ==='trump' && teacher ==='Money'){
          $("#result1").show();
    }
  }
    if (age) {
      if (age < 21 && hobbies === 'tea' && temp ==='hot' && politics ==='trump' && teacher ==='power'){
          $("#result2").show();
    }
  }
    if (age) {
      if (age < 21 && hobbies === 'tea' && temp ==='hot' && politics ==='other' && teacher ==='Money'){
          $("#result3").show();
    }
  }
    if (age) {
      if (age < 21 && hobbies === 'tea' && temp ==='hot' && politics ==='tother' && teacher ==='power'){
          $("#result4").show();
    }
  }
    if (age) {
      if (age < 21 && hobbies === 'tea' && temp ==='cold' && politics ==='trump' && teacher ==='Money'){
          $("#result1").show();
    }
  }
    if (age) {
      if (age < 21 && hobbies === 'tea' && temp ==='cold' && politics ==='trump' && teacher ==='power'){
          $("#result2").show();
    }
  }
    if (age) {
      if (age < 21 && hobbies === 'tea' && temp ==='cold' && politics ==='other' && teacher ==='Money'){
          $("#result3").show();
    }
  }
    if (age) {
      if (age < 21 && hobbies === 'tea' && temp ==='cold' && politics ==='other' && teacher ==='power'){
          $("#result4").show();
    }
  }
    if (age) {
      if (age >= 21 && hobbies === 'coffee' && temp ==='hot' && politics ==='trump' && teacher ==='Money'){
          $("#result1").show();
    }
  }
    if (age) {
      if (age >= 21 && hobbies === 'coffee' && temp ==='hot' && politics ==='trump' && teacher ==='power'){
          $("#result2").show();
    }
  }
    if (age) {
      if (age >= 21 && hobbies === 'coffee' && temp ==='hot' && politics ==='other' && teacher ==='Money'){
          $("#result3").show();
    }
  }
    if (age) {
      if (age >= 21 && hobbies === 'coffee' && temp ==='hot' && politics ==='other' && teacher ==='power'){
          $("#result4").show();
    }
  }
    if (age) {
      if (age >= 21 && hobbies === 'coffee' && temp ==='cold' && politics ==='trump' && teacher ==='Money'){
          $("#result1").show();
    }
  }
    if (age) {
      if (age >= 21 && hobbies === 'coffee' && temp ==='cold' && politics ==='trump' && teacher ==='power'){
          $("#result2").show();
    }
  }
    if (age) {
      if (age >= 21 && hobbies === 'coffee' && temp ==='cold' && politics ==='other' && teacher ==='Money'){
          $("#result3").show();
    }
  }
    if (age) {
      if (age >= 21 && hobbies === 'coffee' && temp ==='cold' && politics ==='other' && teacher ==='power'){
          $("#result4").show();
    }
  }

    if (age) {
      if (age >= 21 && hobbies === 'tea' && temp ==='hot' && politics ==='trump' && teacher ==='Money'){
          $("#result1").show();
    }
  }
    if (age) {
      if (age >= 21 && hobbies === 'tea' && temp ==='hot' && politics ==='trump' && teacher ==='power'){
          $("#result5").show();
    }
  }
    if (age) {
      if (age >= 21 && hobbies === 'tea' && temp ==='hot' && politics ==='other' && teacher ==='Money'){
          $("#result5").show();
    }
  }
    if (age) {
      if (age >= 21 && hobbies === 'tea' && temp ==='hot' && politics ==='other' && teacher ==='power'){
          $("#result5").show();
    }
  }
    if (age) {
      if (age >= 21 && hobbies === 'tea' && temp ==='cold' && politics ==='trump' && teacher ==='Money'){
          $("#result5").show();
    }
  }
    if (age) {
      if (age >= 21 && hobbies === 'tea' && temp ==='cold' && politics ==='trump' && teacher ==='power'){
          $("#result5").show();
    }
  }
  if (age) {
    if (age >= 21 && hobbies === 'tea' && temp ==='cold' && politics ==='other' && teacher ==='Money'){
        $("#result5").show();
    }
  }
  if (age) {
    if (age >= 21 && hobbies === 'tea' && temp ==='cold' && politics ==='other' && teacher ==='power'){
        $("#result5").show();
    }
  }



     else{
      alert('Please fill in the details.');
    }


    event.preventDefault();
   })
  });
