// getElementById
// querySelector
// querySelectorAll to select all Panel elements with class .panels
// querySelectorAll keeps all its items in a node list
const panels = document.querySelectorAll('.panel')

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}