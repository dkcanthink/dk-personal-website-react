import React from "react";

function Certifications() {
    return (
<section id="certificate">
  <div class="container">
    <h2 class="pb-2 border-bottom fw-bold changefont">Certifications</h2>
    <div id="carouselExampleDark" class="carousel carousel-dark slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="8" aria-label="Slide 9"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="9" aria-label="Slide 10"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="10" aria-label="Slide 11"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="./assets/webdev2023.jpg" class="d-block w-100" alt="webdev2023"/>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="./assets/mosword2013.jpg" class="d-block w-100" alt="mosword2013"/>
        </div>
        <div class="carousel-item">
          <img src="./assets/mosword2016.jpg" class="d-block w-100" alt="mosword2016"/>
        </div>
        <div class="carousel-item">
          <img src="./assets/mosppt2013.jpg" class="d-block w-100" alt="mosppt2013"/>
        </div>
        <div class="carousel-item">
          <img src="./assets/mtadb.jpg" class="d-block w-100" alt="mtadb"/>
        </div>
        <div class="carousel-item">
          <img src="./assets/mtahtml5.jpg" class="d-block w-100" alt="mtahtml5"/>
        </div>
        <div class="carousel-item">
          <img src="./assets/mtaintrohtml.jpg" class="d-block w-100" alt="mtaintrohtml"/>
        </div>
        <div class="carousel-item">
          <img src="./assets/mtamobility.jpg" class="d-block w-100" alt="mtamobility"/>
        </div>
        <div class="carousel-item">
          <img src="./assets/mtaos.jpg" class="d-block w-100" alt="mtaos"/>
        </div>
        <div class="carousel-item">
          <img src="./assets/mtapython.jpg" class="d-block w-100" alt="mtapython"/>
        </div>
        <div class="carousel-item">
          <img src="./assets/mtasoftware.jpg" class="d-block w-100" alt="mtasoftware"/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>

    )
}

export default Certifications;