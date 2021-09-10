"strict mode"
// Gallery section
const containerAchievement = document.getElementById("achievementCont");
const showAchievement = document.querySelector(".achievement");

const containerExtracuricular = document.getElementById("extracuricularCont");
const showExtracuricular = document.querySelector(".extracurricular");

const containerBuildings = document.getElementById("buildingsCont");
const showBuildings = document.querySelector(".buildings");

const containerAlumni = document.getElementById("alumniCont");
const showAlumni = document.querySelector(".alumni");


function achievementShow(){
        showAchievement.style.display="block";
        showAlumni.style.display=showBuildings.style.display=showExtracuricular.style.display="none"
}

function extracurricularShow(){
      showExtracuricular.style.display="block";
      showAlumni.style.display=showBuildings.style.display=showAchievement.style.display="none";
}

function buildingShow(){
        showBuildings.style.display="block"
        showAlumni.style.display=showAchievement.style.display=showExtracuricular.style.display="none"
}



function alumniShow(){
        showAlumni.style.display="block";
        showBuildings.style.display=showAchievement.style.display=showExtracuricular.style.display="none"
}

// scroll top Section
function scrolling(){
    const topscroll= document.getElementById("scrollTop")
    window.scrollTo({
        top:0
    });

}

if( location.pathname === "/home"){
        
        
}


if( location.pathname === "/Gallerypage"){
        
}

