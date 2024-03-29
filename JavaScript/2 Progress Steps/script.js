const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1;

// next button
next.addEventListener('click', ()=>{
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length;       
    }
    update()
})

// prev button
prev.addEventListener('click', ()=>{
    currentActive--
    if (currentActive < 1) {
        currentActive = 1;       
    }
    update()
})

// full functionality
function update(){
    // making the circles progress
    circles.forEach((circle,idx)=>{
        if(idx < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    // progress bar meeting circles blue line
    const actives = document.querySelectorAll('.active')
    progress.style.width=((actives.length - 1) / (circles.length - 1)) * 100 + '%'

    // buttons disable and enable
    if(currentActive === 1){
        prev.disabled=true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

