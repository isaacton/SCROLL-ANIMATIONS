window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal')
    for(var i=0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowHeight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
function countRemaining(){
    const windowScrollUp = window.scrollY
    const windowHeight = window.innerHeight
    const doc = document.body
    const docuTotalScrollHeight = doc.scrollHeight
    const scrollValue = Math.round(((windowScrollUp + windowHeight) / docuTotalScrollHeight) * 100)
    const scrollPercent = Math.round(((windowScrollUp + windowHeight) / docuTotalScrollHeight) * 100)
    const progress =  document.querySelector('.progress')
    const progressC =  document.querySelector('.progressC')

    if (scrollPercent <= 100) {
       progress.innerText = scrollPercent + '%'
       progressC.style.background = `conic-gradient(blue ${scrollValue * 3.6}deg, #fff 0deg)`
    }
    else{
        progress.innerText = 100 + '%'
        progressC.style.background = `conic-gradient(blue ${100 * 3.6}deg, #fff 0deg)`
    }
}