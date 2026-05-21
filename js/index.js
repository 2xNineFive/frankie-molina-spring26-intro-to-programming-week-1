



// Add footer
const footer = document.createElement('footer');
// footer.innerText = "This is the footer"; just testing to make sure it works. 

document.body.append(footer);


// -----------------------------------------------------------------

// Creating copyright text
const today = new Date();
console.log(today)

const thisYear = today.getFullYear();
console.log(thisYear);


// -----------------------------------------------------------------

// Select footer element from DOM using querySelector
const selectFooter = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.innerHTML = `&#169; Frankie Molina ${thisYear}`;

selectFooter.append(copyright);


// build skills array via DOM 
const skills = ["JavaScript", "DOM", "HTML", "CSS"];
const skillsSection = document.querySelector('#Skills');
// console.log(skillsSection);

const skillsList = skillsSection.querySelector('ul');
// console.log(skillsList);

for (let i = 0; i <= skills.length - 1; i++) {
    const list = document.createElement('li');
    list.innerText = skills[i];
    skillsList.append(list);
}





// -----------------------------------------------------------------