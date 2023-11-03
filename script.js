fetch("https://whatyearisit-backend-rho-roan.vercel.app")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("#year").textContent = data.date;
  });
