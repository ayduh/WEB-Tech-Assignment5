const userProfile = { 
    name: "Aidar", 
    birthYear: 2007, 
    isDeveloper: true, 
    hobbies: ["coding", "videogames", "music"],
};
const form = document.getElementById('form');
console.log(userProfile.name);

form.addEventListener("submit", (event) => {
    event.preventDefault;
    userProfile.name = document.getElementById('username').value;
    console.log(userProfile.name);
});

function calculateAge() {
    return(2026 - userProfile.birthYear)
};
console.log("User's current age: " + calculateAge());

function hobbyCount() {
    return(userProfile.hobbies.length)
}
console.log("Number of hobbies: " + hobbyCount());
