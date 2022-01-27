
function openNav() {
    let x = document.getElementById("vertical-menu")
    
    if (x.style.width === "170px"){
        x.style.width = "0px"
    }
    else {
        x.style.width = "170px"
    }

  }
  
  var flkty = new Flickity( '.main-gallery', {
    // options
    cellAlign: 'left',
    contain: true
  });

  