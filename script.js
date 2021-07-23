const planets = document.querySelectorAll('.planet'); 
const planetOrbitalRadius = [25, 36, 53,73, 115,141,168, 193]; 
let planetOrbitalAngle = new Array(8).fill(0); 
const planetOrbitalVelocities = [1.593, 1.178 , 1, 0.811 , 0.439 , 0.325 , 0.229 , 0.182]; 
const planetOrbits = document.querySelectorAll( '.p-orbit'); 
const moon = document.getElementById("moon"); 
const moonOrbitalRadius = 8; 
let moonOrbitalAngle = 0; 
const moonOrbitalVelocities = 10 ;

planetOrbits.forEach((p_orbit, index)=>{
    p_orbit.style.height = `${planetOrbitalRadius[index]}vmin`; 
    p_orbit.style.width = `${planetOrbitalRadius[index]}vmin`; 
})

function earthX(){
    return Number(planets[2].style.left.split('vmin')[0]); 
}

function earthY(){
    return Number(planets[2].style.top.split('vmin')[0]); 
}


setInterval(()=>{
    planets.forEach((planet, index)=>{
        planet.style.left = `${Math.cos(planetOrbitalAngle[index])* planetOrbitalRadius[index]}vmin`; 
        planet.style.top =  `${Math.sin(planetOrbitalAngle[index])* planetOrbitalRadius[index]}vmin`;
         planetOrbitalAngle[index]+= planetOrbitalVelocities[index]* 0.02;  
       
    })
    
    moon.style.left = `${earthX()+ (Math.cos(moonOrbitalAngle)* moonOrbitalRadius)}vmin` ;
    moon.style.top = `${earthY() + (Math.sin(moonOrbitalAngle)* moonOrbitalRadius)}vmin`; 
    moonOrbitalAngle += moonOrbitalVelocities * 0.01; 
}, 15)

