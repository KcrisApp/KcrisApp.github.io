
document.addEventListener('DOMContentLoaded', () =>{


    var elementWatch = document.querySelectorAll('.watch')

    var callback  = (items) =>{
        items.forEach( item => {
            if(item.isIntersecting){
                item.target.classList.add('in-page')
            }
            else{
                item.target.classList.remove('in-page')
            }
        })
    }

    // Observer
    var observer = new IntersectionObserver(callback, {threshold: 0.6})
    elementWatch.forEach((element) =>{

        observer.observe(element)
    })

})