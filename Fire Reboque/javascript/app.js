const configCarouselOne = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 3000,
    hoverpause:true,
    animationDuration: 1000,
    breakpoints: {
        1200: {
            perView: 2
        },
        800: {
            perView: 1
        }
    }
}


new Glide('.glideOne', configCarouselOne).mount()

$("#iconOpen").click(() => {
    $("nav").slideToggle("slow")
    $("#iconOpen").hide()
    $("#iconClose").show()
})
$("#iconClose").click(() => {
    $("nav").slideToggle("slow")
    $("#iconOpen").show()
    $("#iconClose").hide()
})
