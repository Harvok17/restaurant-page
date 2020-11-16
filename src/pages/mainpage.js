
export function initPage() {
  const container = document.createElement("DIV");
  container.className = "container";
  const logo = new Image();
  logo.src = "assets/Logo.png";
  logo.alt = "Logo";
  const html = `
    <ul class="navbar">
        <li class="link" id="home">Home</li>      
        <li class="link" id="about">About</li>     
        <li class="link" id="menu">Menu</li>
        <li class="link" id="contact">Contact</li>    
    </ul>
    
    <div class="main-content"></div>
    `;

  container.append(logo);
  container.insertAdjacentHTML("beforeend", html);



  return container;
}
