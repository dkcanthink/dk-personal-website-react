import React from "react";

function Profile() {
    return (
<section id="profile-part">
    <div class="px-4 py-5 my-5 text-center">
        <img class="d-block mx-auto mb-4 rounded-circle" src="../../../assets/profilepicture.JPG" alt="Profile Picture" width="175" height="200" />
        <h1 class="display-5 fw-bold changefont">Hello, it's David!</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4 changefont">I'm an efficient, resourceful, and proactive professional seeking a Web Developer position that utilizes extensive knowledge
            of programming, web design, database management, and client coordination to positively contribute and advance
            opportunities to the organization. Some of my basic/sample works are on <a class="gitHubLink" href="https://github.com/dkcanthink">GitHub!</a></p>
          <div class=" border-bottom gap-2 d-sm-flex justify-content-sm-center">
          </div>
        </div>
      </div>
</section>
    )
}

export default Profile;