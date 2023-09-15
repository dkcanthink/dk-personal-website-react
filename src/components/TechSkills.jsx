import React from "react";


function TechSkills() {
    return (
<section id="techskills">
  <div class="container px-4 py-5" id="icon-grid">
    <h2 class="pb-2 border-bottom fw-bold changefont">Technical Skills</h2>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div class="col d-flex align-items-start">
        <img src="./assets/html5icon.png" class="bi text-body-secondary skillicon" height="30" alt="HTML5 logo"/>
        <div>
          <h3 class="mb-0 fs-4 fw-bold changefont">HTML 5</h3>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="./assets/cssicon.png" class="bi text-body-secondary skillicon" height="30" alt="CSS logo"/>
        <div>
          <h3 class="mb-0 fs-4 fw-bold changefont">CSS 3</h3>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="./assets/bootstrapicon.png" class="bi text-body-secondary skillicon" height="30" alt="Bootstrap logo"/>
        <div>
          <h3 class="mb-0 fs-4 fw-bold changefont">Bootstrap 5</h3>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="./assets/javascripticon.png" class="bi text-body-secondary skillicon" height="30" alt="JavaScript logo"/>
        <div>
          <h3 class="mb-0 fs-4 fw-bold changefont">JavaScript</h3>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="./assets/ejsicon.png" class="bi text-body-secondary skillicon" height="30" alt="EJS logo"/>
        <div>
          <h3 class="mb-0 fs-4 fw-bold changefont">Embedded JavaScript</h3>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="./assets/nodejsicon.png" class="bi text-body-secondary skillicon" height="30" alt="Node JS logo"/>
        <div>
          <h3 class="mb-0 fs-4 fw-bold changefont">Node JS - Express JS</h3>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="./assets/reacticon.png" class="bi text-body-secondary skillicon" height="30" alt="React JS logo"/>
        <div>
          <h3 class="mb-0 fs-4 fw-bold changefont">React JS</h3>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="./assets/restapiicon.png" class="bi text-body-secondary skillicon" height="30" alt="REST API logo"/>
        <div>
          <h3 class="mb-0 fs-4 fw-bold changefont">REST API</h3>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="./assets/databaseicon.png" class="bi text-body-secondary skillicon" height="30" alt="Database logo"/>
        <div>
          <h3 class="mb-0 fs-4 fw-bold changefont">SQL & NoSQL</h3>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default TechSkills;