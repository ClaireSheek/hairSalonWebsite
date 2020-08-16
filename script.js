/* For my attempted Hamburger menu... the  rest of the code is in the sandbox file. 
My links were no longer clickable once I got the hamburger working so I took it down. */ 
function myFunction() { 
  const x = document.getElementById("main-nav"); 
  if (x.style.display === "grid") { 
    x.style.display = "none"; } 
    else { x.style.display = "grid"; } 
  }