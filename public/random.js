 'use strict'
  
document.getElementById("direct-link").addEventListener("click", function() {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
        const firstName = user.name.first;
        const lastName = user.name.last;
        const phone = user.phone;
        const email = user.email;
        const resultNode = document.createElement("div");
        resultNode.innerHTML = `<p>First Name: ${firstName}</p><p>Last Name: ${lastName}</p><p>Phone: ${phone}</p><p>Email: ${email}</p>`;
        document.body.appendChild(resultNode);
      });
  });

  document.getElementById("express-link").addEventListener("click", function() {
    fetch("/random-person")
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
        const firstName = user.name.first;
        const lastName = user.name.last;
        const phone = user.phone;
        const email = user.email;
        const resultNode = document.createElement("div");
        resultNode.innerHTML = `<p>First Name: ${firstName}</p><p>Last Name: ${lastName}</p><p>Phone: ${phone}</p><p>Email: ${email}</p>`;
        document.body.appendChild(resultNode);
      });
  });



  