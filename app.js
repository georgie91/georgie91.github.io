let projects = [
    {
        name: 'Memorial eOpen House',
        thumbnail: './images/html-css-js.jpeg',
        url: 'noneyet',
        highlight: true,
    },
    {
        name: 'Quality Metrics for OSF ECIEMS',
        thumbnail: './images/html-js.png',
        url: 'noneyet',
        highlight: true,
    },
    {
        name: 'Undetermined Project',
        thumbnail: 'images/work-in-progress.png',
        url: 'noneyet',
        highlight: true,
    },
    {
        name: 'Undetermined Project',
        thumbnail: 'images/500x300.jpg',
        url: 'noneyet',
        highlight: false,
    },
    {
        name: 'Undetermined Project',
        thumbnail: 'images/500x300.jpg',
        url: 'noneyet',
        highlight: false,
    }
]
// Places projects marked as highlight on the main page. 
const projectsDiv = document.getElementById('projects')

const projectRead = () => {
    projectsDiv.innerHTML = ''

    for (let i = 0; i < projects.length; i++) {
        if ( projects[i].highlight == false){
            continue
        }
        else { 
            let projectContainer = document.createElement('div')
            let projectItem = document.createElement('div')
            projectItem.setAttribute('class', 'project')
            let link = document.createElement('a')
            link.setAttribute('href', projects[i].url)
            let image = document.createElement('img')
            image.setAttribute('class', 'projectImage')
            image.setAttribute('src', projects[i].thumbnail)
            link.append(image)
            projectItem.appendChild(link)
            projectContainer.appendChild(projectItem)
            
            let title = document.createElement('h4')
            title.innerText = projects[i].name
            projectContainer.appendChild(title) 
            projectsDiv.appendChild(projectContainer)
        }
    }
}

projectRead ()

//Modal for projects, inclides carosel 
const projectURL = document.querySelector('#projectURL')
const mainProject = document.querySelector('#mainProject')
const projectDescription = document.querySelector('#description')
const next = document.querySelector('.next')
const previous =document.querySelector('.prev')
let currentProjectIndex = 0

projectURL.setAttribute('href', projects[currentProjectIndex].url)
mainProject.setAttribute('src', projects[currentProjectIndex].thumbnail)
projectDescription.innertext = projects[currentProjectIndex].name

next.addEventListener('click', () => {
    
    if (currentProjectIndex >= projects.length - 1) {
        currentProjectIndex = 0
    } else (
        currentProjectIndex += 1
    )

    mainProject.setAttribute('src', projects[currentProjectIndex].thumbnail)

})

previous.addEventListener('click', () => {
    
    if (currentProjectIndex <= 0) {
        currentProjectIndex = projects.length - 1
    } else (
        currentProjectIndex -= 1
    )
    projectURL.setAttribute('src', projects[currentProjectIndex].url)
    mainProject.setAttribute('src', projects[currentProjectIndex].thumbnail)
})

//Modal for contact box

const contactModal = document.querySelector('.modal-contact')
const contactBtn = document.querySelector('#contactBtn')
const projectsModal = document.querySelector('.modal-projects')
const projectsBtn = document.querySelector('#projectsBtn')
const close = document.querySelector(".close")
const close2 = document.querySelector(".project-close")

contactBtn.onclick = () => {
    contactModal.style.display = 'block'
}

projectsBtn.onclick = () => {
    projectsModal.style.display = 'block'
}

close.onclick = () => {
    contactModal.style.display = 'none'
    
}
close2.onclick = () => {
    projectsModal.style.display = 'none'    
}
window.onclick = (event) => {
    if (event.target == contactModal){
        contactModal.style.display = 'none'
        projectsModal.style.display = 'none'
    }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwQ1jUaAvCJD1MRf8HvOwaCIipjB5ObEW4mhO5yZfVezIbVM8M/exec'
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .then(() => {
            thanks.style.display = "block"
            
        })
        .catch(error => console.error('Error!', error.message))
})

//Clickable social links

const twitter = document.getElementById('tw')
const github = document.getElementById('gh')
const discord = document.getElementById('dc')

twitter.onclick = () => {window.open('https://twitter.com/NateGorm91','_blank','resizable=yes')}
