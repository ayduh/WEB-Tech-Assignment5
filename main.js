const userProfile = { 
    name: "Aidar", 
    birthYear: 2007, 
    isDeveloper: true, 
    hobbies: ["coding", "videogames", "music"],
};
const form = document.getElementById('form');
console.log("User's current name: " + userProfile.name);

form.addEventListener("submit", (event) => {
    userProfile.name = document.getElementById('username').value;
    userProfile.birthYear = document.getElementById('birth-year').value;

    console.log("User's new name: " + userProfile.name + "\n" + "User's new birth year: " + userProfile.birthYear);
    console.log("User's new age: " + calculateAge());

    event.preventDefault();
});

function calculateAge() {
    return(2026 - userProfile.birthYear)
};
console.log("User's current age: " + calculateAge());

function hobbyCount() {
    return(userProfile.hobbies.length)
}
console.log("Number of hobbies: " + hobbyCount());

var hobbyList = document.getElementById('hobby-list');
const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');

userProfile.hobbies.forEach((hobby) => {
    const li = document.createElement('li');
    li.textContent = hobby;
    hobbyList.appendChild(li);
});

addButton.addEventListener("click", (event) => {
    var hobbyValue = document.getElementById('hobby-input').value;
    userProfile.hobbies.push(hobbyValue);
    const hobby = document.createElement('li');
    hobby.textContent = hobbyValue;
    hobbyList.appendChild(hobby);
    
    console.log(userProfile.hobbies);
});

removeButton.addEventListener("click", (event) => {
    document.getElementById('hobby-list').lastChild.remove();
    userProfile.hobbies.pop();
    console.log(userProfile.hobbies);
});