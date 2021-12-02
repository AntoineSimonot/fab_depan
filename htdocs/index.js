//DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
   
    function changeLocation(params) {
        loc = `https://maps.google.com/maps?width=700&amp&height=440&amp&hl=en&amp&q=${params}%2C%20france+(test)&amp&ie=UTF8&amp&t=&amp&z=10&amp&iwloc=B&amp&output=embed`
        document.querySelector('iframe').src = loc;
    }

    document.querySelectorAll(".location").forEach(function(element) {
        element.addEventListener('click', function() {
            changeLocation(element.id)
        })
    })

    //display none class burger when class close clicked
    document.querySelector('.close').addEventListener('click', function() {
        document.querySelector('.burger').style.display = 'none'
    })

    document.querySelector('.close').addEventListener('click', function() {
        document.querySelector('.burger').style.display = 'none'
    })

    //display block class burger when class open clicked
    document.querySelector('.open').addEventListener('click', function() {
        document.querySelector('.burger').style.display = 'block'
    })
})

