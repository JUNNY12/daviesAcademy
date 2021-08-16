let containerAchievement = document.getElementById("achievementCont");
let showAchievement = document.querySelector(".achievement");

let containerExtracuricular = document.getElementById("extracuricularCont");
let showExtracuricular = document.querySelector(".extracurricular")

let containerBuildings = document.getElementById("buildingsCont");
let showBuildings = document.querySelector(".buildings")

let containerAlumni = document.getElementById("alumniCont");
let showAlumni = document.querySelector(".alumni")



function showGallery (){  
containerExtracuricular.addEventListener("click", function(e){
    e.preventDefault()
    showExtracuricular.style.display="block"
    showAchievement.style.display="none"
    showBuildings.style.display="none";
    showAlumni.style.display="none"
       
})

containerAchievement.addEventListener("click", function(e){
    e.preventDefault()
   showAchievement.style.display="block";
   showExtracuricular.style.display="none";
   showBuildings.style.display="none";
   showAlumni.style.display="none";
  
})

containerBuildings.addEventListener("click", function(e){
    e.preventDefault()
   showAchievement.style.display="none";
   showExtracuricular.style.display="none";
   showBuildings.style.display="block";
   showAlumni.style.display="none"
    
})


containerAlumni.addEventListener("click", function(e){
    e.preventDefault()
   showAchievement.style.display="none";
   showExtracuricular.style.display="none";
   showBuildings.style.display="none";
   showAlumni.style.display="block"
    
})









}

showGallery();
