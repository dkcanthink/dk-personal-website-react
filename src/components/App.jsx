import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Hobbies from "./Hobbies";
import Education from "./Education";
import WorkExp from "./WorkExp";
import TechSkills from "./TechSkills";
import AdminSkills from "./AdminSkills";
import Certifications from "./Certifications";
import Footer from "./Footer";



function App() {
    return (
        <div>
            <Header />
            <Profile />
            <Hobbies />
            <Education />
            <WorkExp />
            <TechSkills />
            <AdminSkills />
            <Certifications />
            <Footer />
        </div>
    )
}

export default App;