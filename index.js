
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

    function updateDateTime() {
      // create a new `Date` object
      const now = new Date();

      // get the current date and time as a string
      const currentDateTime = now.toLocaleString();

      // update the `textContent` property of the `span` element with the `id` of `datetime`
      document.querySelector('#datetime').textContent = currentDateTime;
    }

    // call the `updateDateTime` function every second
    setInterval(updateDateTime, 1000);


})