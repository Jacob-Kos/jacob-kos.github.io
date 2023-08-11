window.addEventListener("DOMContentLoaded", function () {
    var icon = document.getElementById("icon");
    var icon1 = document.getElementById("a");
    var icon2 = document.getElementById("b");
    var icon3 = document.getElementById("c");
    var nav = document.getElementById("nav");
    var red = document.getElementById("red");
  
    icon.addEventListener("click", function () {
      icon1.classList.toggle("a");
      icon2.classList.toggle("c");
      icon3.classList.toggle("b");
      nav.classList.toggle("show");
      red.classList.toggle("slide");
    });
  });
  
  function showContent() {
    resetbackground();
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }

  function setloadbackground() {
    document.body.style.backgroundColor = "#828282"; // New background color
  }

  function resetbackground() {
    document.body.style.backgroundColor = "#FFFFFF"; // New background color
  }
  // Call the showContent function when the page and its resources are fully loaded
  window.addEventListener("load", function() {
    setloadbackground();
    setTimeout(showContent, 200);
  });
