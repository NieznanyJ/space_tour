
const navList = document.querySelector(".nav-list");
const navItem = document.querySelectorAll('.nav-item');




const navToggler = document.querySelectorAll(".nav-toggle");

const planets = document.querySelectorAll('.planet');
const planetImg = document.querySelector('.planet-img');
const planteDescription = document.querySelector('.planet-description');
const currentDestination = document.querySelector('.current-destination');
const distance = document.querySelector('.distance');
const time = document.querySelector('.time');

const dots = document.querySelectorAll('.dot');

const crewImg = document.querySelector('.crew-img');
const crewTitle = document.querySelector('.crew-title');
const crewName = document.querySelector('.crew-name');
const crewDescription = document.querySelector('.crew-description');

const circles = document.querySelectorAll('.circle');

const techImg = document.querySelector('.tech-img');
const techDescription = document.querySelector('.technology-description');
const techTitle = document.querySelector('.technology-title');



navToggler.forEach(toggle => {
    toggle.addEventListener("click", () =>{
        if (navList.dataset.visible === "false"){
            navList.style.right = "0";
            navToggler[0].classList.add("hidden");
            navToggler[1].classList.remove("hidden");
            navList.dataset.visible = "true"
        }
        else{
            navList.style.right = "-15em";
            navToggler[0].classList.remove("hidden");
            navToggler[1].classList.add("hidden");
            navList.dataset.visible = "false";
        }
    });
});

const activate = (e) => {
    e.target.classList.add('active-planet');   
}

const changePlanet = (planet) =>{
    fetch('data.json')
      .then(response => response.json())
      .then(dataObject => {
        dataObject.destinations.forEach(destination =>{
            if (planet === destination.name.toLowerCase()){
                planetImg.src = destination.images.png;
                console.log(destination.images.png)
                currentDestination.textContent = destination.name.toLowerCase();
                planteDescription.textContent = destination.description;
                distance.textContent = destination.distance;
                time.textContent = destination.travel;
            }
        });
        
      })
      .catch(error => console.error('Error:', error));
}

const changeCrew = (title) =>{
    fetch('data.json')
        .then(response => response.json())
        .then(dataObject => {
            dataObject.crew.forEach(member => {
                if (member.role.toLowerCase() === title){
                    crewImg.src = member.images.png;
                    crewTitle.textContent = member.role;
                    crewName.textContent = member.name;
                    crewDescription.textContent = member.bio;
                }
            });
        })
        .catch(error => console.log('Error:', error));
}

const changeTech = (tech) =>{

    fetch('data.json')
        .then(response => response.json())
        .then(dataObject => {
            dataObject.technology.forEach(techno => {
                var media = window.matchMedia("(max-width: 768px)")
        
                if (techno.name.toLowerCase() === tech.toLowerCase()){
                    media.matches ? techImg.src = techno.images.portrait : techImg.src = techno.images.landscape; 
                    techDescription.textContent = techno.description;
                    techTitle.textContent = techno.name;
                }
            });
        })
        .catch(error => console.log('Error:', error));

   
   
   
   
}

planets.forEach(planet=>{
    planet.addEventListener("click", (e)=>{
        planets.forEach(planet=>{
            if(planet.classList.contains('active-planet')){
                planet.classList.remove('active-planet');
            }
        });

        if(e.target.classList.contains('moon')){
            changePlanet('moon');   
            e.target.classList.add('active-planet');
        }
        else if(e.target.classList.contains('mars')){
            changePlanet('mars');
            e.target.classList.add('active-planet');           
        }
        else if(e.target.classList.contains('europa')){
            changePlanet('europa');
            e.target.classList.add('active-planet');               
        }
        else if(e.target.classList.contains('titan')){
            changePlanet('titan');
            e.target.classList.add('active-planet');          
        }
    });

    
});



dots.forEach(dot=>{
    dot.addEventListener('click', (e) =>{
        dots.forEach(dot=>{
            if(dot.classList.contains('dot-active')){
                dot.classList.remove('dot-active');
            }
            if(e.target.classList.contains('dot1')){
                changeCrew('commander');   
                e.target.classList.add('dot-active');
            }
            else if(e.target.classList.contains('dot2')){
                changeCrew('mission specialist');               
                e.target.classList.add('dot-active');           
            }
            else if(e.target.classList.contains('dot3')){
                changeCrew('pilot');              
                e.target.classList.add('dot-active');                 
            }
            else if(e.target.classList.contains('dot4')){
                changeCrew('flight engineer');             
                e.target.classList.add('dot-active');    
            }
        });
    });
});

circles.forEach(circle=>{
    circle.addEventListener('click', (e) =>{
        circles.forEach(circle=>{
            if(circle.classList.contains('circle-active')){
                circle.classList.remove('circle-active');
            }

            if(e.target.classList.contains('circle1')){    
                changeTech('launch vehicle');            
                e.target.classList.add('circle-active');
            }
            else if(e.target.classList.contains('circle2')){
                changeTech('spaceport');
                e.target.classList.add('circle-active');           
            }
            else if(e.target.classList.contains('circle3')){
                changeTech('space capsule');
                e.target.classList.add('circle-active');                 
            }
        });
    });
});


