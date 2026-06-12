



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
const skillsSection = document.querySelector('#skills');
// console.log(skillsSection);

const skillsList = skillsSection.querySelector('ul');
// console.log(skillsList);

for (let i = 0; i <= skills.length - 1; i++) {
    const list = document.createElement('li');
    list.innerText = skills[i];
    skillsList.append(list);
}





// -----------------------------------------------------------------

// Handle Message Submit Form

const messageForm = document.querySelector("[name=leave_message]");

messageForm.addEventListener('submit', e => {


    // All this code captures the data in the form when the user taps submit
    
    // prevents website from refreshing
    e.preventDefault();

    const name = e.target.usersName.value;
    console.log(name);

    const email = e.target.usersEmail.value;
    console.log(email);

    const message = e.target.usersMessage.value;
    console.log(message);

    e.target.reset();


    // This code adds the form information to the Messages section
    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');

    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
    <a href="mailto:${email}">${name}</a>
    <span>${message}</span>
    `;


    // This code adds the remove button feature
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', e => {
        const entry =removeButton.parentNode
        entry.remove();
    })
    
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

});