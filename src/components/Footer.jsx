import React from "react";


function Footer() {
    const year = new Date().getFullYear();
    return (
<section id="footer">
    <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
      </a>
      <span class="mb-3 mb-md-0 changefont">© David Kenneth Admana, {year}</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-body-secondary" href="https://www.linkedin.com/in/admanadk/"><img src="./assets/linkedinicon.png" alt="LinkedIn logo" height="40px"/></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="https://github.com/dkcanthink"><img src="./assets/githubicon.png" alt="GitHub logo" height="40px"/></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="https://www.facebook.com/"><img src="./assets/facebookicon.png" alt="Facebook logo" height="40px"/></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="https://www.instagram.com/"><img src="./assets/instagramicon.png" alt="Instagram logo" height="40px"/></a></li>
    </ul>
  </footer>
</div>
</section>
    )
}

export default Footer;