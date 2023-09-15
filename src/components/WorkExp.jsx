import React from "react";

function WorkExp() {
    return (
    <section id="work-experience">
        <div class="container px-4 py-5" id="featured-3">
                <h2 class="pb-2 border-bottom fw-bold changefont">Work History</h2>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div class="feature col">
                <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                    <img src="./assets/bruntwork.jpg" alt="Bruntwork logo" height="100" />
                </div>
                    <h3 class="fs-2 changefont">BruntWork</h3>
                    <p class="changefont">Marketing Scout - Muse Model Management, Inc. (December 2022 - February 2023)</p>
            </div>
        <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                <img src="./assets/magicincbluebg.png" alt="Magic Inc logo" height="100" />
            </div>
                <h3 class="fs-2 changefont">Magic, Inc.</h3>
                <p class="changefont">Creative Solutions Specialist (Virtual Assistant)<br /> (March 2021 - March 2022)</p>
        </div>
        <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <img src="./assets/nttdata.png" class="nttimage" alt="NTT Data logo" height="100"/> 
            </div>
                <h3 class="fs-2 changefont">NTT Data, Philippines</h3>
                <p class="changefont">Web Developer - Intern <br /> (May 2018 - December 2018) </p>
        </div>
            </div>
        </div>
    </section>
    )
}


export default WorkExp;