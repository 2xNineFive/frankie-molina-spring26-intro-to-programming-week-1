



// Add footer
const footer = document.createElement('footer');
// footer.innerText = "This is the footer"; just testing to make sure it works. 

document.body.append(footer);


// -----------------------------------------------------------------

// Creating copyright text
const today = new Date();
// console.log(today)

const thisYear = today.getFullYear();
// console.log(thisYear);


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


    // This line resets the form to empty
    e.target.reset();

    // This code saves the users info and adds the form info to the Messages section
    const messageSection = document.querySelector('#messages');

    // adding hide messages feature by default
    messageSection.style.display = "block";

    const messageList = messageSection.querySelector('ul');

    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
    <a href="mailto:${email}">${name}</a>
    <span>${message}</span>
    `;


    // This code adds the remove button feature to a messages in the messages section. Done via DOM. 
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', e => {
        const entry = removeButton.parentNode
        entry.remove();

        // adding hide feature if ul is empty
        if (messageList.children.length === 0) {
            messageSection.style.display = "none";
        }
    })

    // This code adds the remove button for the message to be deleted and it also adds a message
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

});




// Fetch call that makes GET request to GitHub
// This code uses the Fetch API to retreive the repos from my GitHub account. 

fetch('https://api.github.com/users/2xNineFive/repos')
    .then(response => {
        if (!response.ok) {
        throw new Error('Request failed');
        }
        return response.json();
    })

    .then(data => {
        const repositories = data;
        // console.log(repositories);

        // Adding Repos to Projects section

        // selecting the projects section
        const projectSection = document.querySelector('#Projects');

        // selecting the projects section ul
        const projectList = projectSection.querySelector('ul');

        // using forLoop to iterate over GitHub repositories
        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement('li');
            project.innerText = repositories[i].name;
            projectList.append(project);
        }

    })

    .catch(error => {
        console.error('An error occurred:', error);
    })
