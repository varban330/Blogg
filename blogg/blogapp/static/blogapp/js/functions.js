function register(){
  var fname = document.getElementById("fname").value
  var lname = document.getElementById("lname").value
  var email = document.getElementById("email").value
  if(fname == ""){
    alert("Enter Valid First Name")
  }
  if(lname == ""){
    alert("Enter Valid Last Name")
  }
  if(email == ""){
    alert("Enter Valid Email ID")
  }
  else{
  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }
  var myData = {
    fname: fname,
    lname: lname,
    email: email
  }
  fetch('/register/', {
    method: "post",
    credentials: "same-origin",
    headers: {
        "X-CSRFToken": getCookie("csrftoken"),
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    body: JSON.stringify(myData)
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    document.getElementById("key").value = data.message;
    var x = document.getElementById("api_key");
    x.style.display = "block";
    document.getElementById("lname").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("email").value = "";
  }).catch(function(ex) {
    console.log("parsing failed", ex);
    console.log(url)
  });
}
}

function sentiment(){
  var method = document.getElementById("s_method").value
  var text = document.getElementById("text_s").value
  if(text == "" && method=="post"){
    alert("Enter Text")
  }
  else{
  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }
  var myData = {
    text: text
  }
  if(method == "get"){
    fetch('/sentiment')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log("Data is ok", data);
      document.getElementById("textacs").value = data.message;
      var x = document.getElementById("textarea_as_div");
      x.style.display = "block";
      document.getElementById("text_s").value = "";
    }).catch(function(ex) {
      console.log("parsing failed", ex);
    });
  }
  if(method == "post"){
    fetch('/sentiment/', {
      method: "post",
      mode: 'cors',
      credentials: "same-origin",
      headers: {
          "Ocp-Apim-Subscription-key":"sy5hykat267hzj83utqa10dpxspszr4f",
          "X-CSRFToken": getCookie("csrftoken"),
          "Accept": "application/json",
          "Content-Type": "application/json",
      },
      body: JSON.stringify(myData)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log("Data is ok", data);
      document.getElementById("senti").value = data.message;
      var x = document.getElementById("s_div");
      x.style.display = "block";
      document.getElementById("text_s").value = "";
    }).catch(function(ex) {
      console.log("parsing failed", ex);
      console.log(url)
    });
  }
}
}

function textclass(){
  var text = document.getElementById("text_t").value
  var method = document.getElementById("t_method").value
  if(text == "" && method=="post"){
    alert("Enter Text")
  }
  else{
  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }
  var myData = {
    text: text
  }
  if (method == "get"){
    fetch('/text_class')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log("Data is ok", data);
      document.getElementById("textac").value = data.message;
      var x = document.getElementById("textarea_at_div");
      x.style.display = "block";
      document.getElementById("text_t").value = "";
    }).catch(function(ex) {
      console.log("parsing failed", ex);
    });
  }
  if (method == "post"){
    fetch('/text_class/', {
      method: method,
      mode: 'cors',
      credentials: "same-origin",
      headers: {
          "Ocp-Apim-Subscription-key":"sy5hykat267hzj83utqa10dpxspszr4f",
          "X-CSRFToken": getCookie("csrftoken"),
          "Accept": "application/json",
          "Content-Type": "application/json",
      },
      body: JSON.stringify(myData)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log("Data is ok", data);
      document.getElementById("textc").value = data.message;
      var x = document.getElementById("t_div");
      x.style.display = "block";
      document.getElementById("text_t").value = "";
    }).catch(function(ex) {
      console.log("parsing failed", ex);
    });
  }

}
}

function textarea_t(){
    var method = document.getElementById("t_method").value
    var x = document.getElementById("textarea_t_div")
    var y = document.getElementById("textarea_at_div")
    var z = document.getElementById("t_div")
    if(method == "get"){
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
    }
    if(method == "post"){
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
    }
}

function textarea_s(){
    var method = document.getElementById("s_method").value
    var x = document.getElementById("textarea_s_div")
    var y = document.getElementById("textarea_as_div")
    var z = document.getElementById("s_div")
    if(method == "get"){
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
    }
    if(method == "post"){
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
    }
}
