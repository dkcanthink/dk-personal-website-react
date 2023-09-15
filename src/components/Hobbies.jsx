import React from "react";

function Hobbies() {
    return (
<section id="hobbies">
  <div class="container px-4 py-5" id="icon-grid">
    <h2 class="pb-2 border-bottom fw-bold changefont">Hobbies and Interests</h2>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div class="col d-flex align-items-start">
        <img src="../../../assets/movieicon.png" class="bi text-body-secondary skillicon" height="30" alt="Film logo"/>
        <div>
          <h3 class="mb-0 fs-4 changefont">Movies</h3>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="../../../assets/videogameicon.png" class="bi text-body-secondary skillicon" height="30" alt="Video Game Controller logo" />
        <div>
          <h3 class="mb-0 fs-4 changefont">Video Games</h3>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="../../../assets/bicycleicon.png" class="bi text-body-secondary skillicon" height="30" alt="Bicycle logo" />
        <div>
          <h3 class="mb-0 fs-4 changefont">Cycling</h3>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <img src="../../../assets/gymicon.png" class="bi text-body-secondary skillicon" height="30" alt="Working out logo" />
        <div>
          <h3 class="mb-0 fs-4 changefont">Working Out</h3>
        </div>
      </div>
  </div>
  </div>
</section>
    )
}

export default Hobbies;