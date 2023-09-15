import React from "react";


function AdminSkills() {
    return (
<section id="adminskills">
  <div class="container px-4 py-5" id="icon-grid">
    <h2 class="pb-2 border-bottom fw-bold changefont">Administrative Skills</h2>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div class="col d-flex align-items-start">
        <img src="./assets/emailicon.png" class="bi text-body-secondary skillicon" height="30" alt="Email logo"/>
        <div>
          <h3 class="mb-0 fs-4 fw-bold changefont">Email Management</h3>
          <p class="changefont">Gmail, Yahoo Mail</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="./assets/calendaricon.png" class="bi text-body-secondary skillicon" height="30" alt="Calendar logo"/>
        <div>
          <h3 class="mb-0 fs-4 fw-bold changefont">Calendar Management</h3>
          <p class="changefont">Google Calendar, Calendly</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="./assets/googleicon.png" class="bi text-body-secondary skillicon" height="30" alt="Google logo"/>
        <div>
          <h3 class="mb-0 fs-4 fw-bold changefont">G Suite</h3>
          <p class="changefont">Google Calendar, Docs, Drive, Forms & Sheets</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="./assets/communicationicon.png" class="bi text-body-secondary skillicon" height="30" alt="Communication logo"/>
        <div>
          <h3 class="mb-0 fs-4 fw-bold changefont">Communication Tools</h3>
          <p class="changefont">Skype, Zoom, Google Meet, Discord, Slack</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
      <img src="./assets/mobilephoneicon.png" class="bi text-body-secondary skillicon" height="30" alt="Communication logo"/>
        <div>
          <h3 class="mb-0 fs-4 fw-bold changefont">Social Media Management</h3>
          <p class="changefont">Facebook, Twitter, Instagram, Youtube</p>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default AdminSkills;