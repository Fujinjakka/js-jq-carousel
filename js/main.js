// Descrizione:
// Creare uno slider di immagini.
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider.
// Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera.
// Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider.
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider.
// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente.
// Generiamo i pallini con JS.


$(document).ready(

  function() {

    $("div.next").click(
      function() {
        nextImage();
      }
    );
    $("div.prev").click(
      function() {
        prevImage();
      }
    );


  }
);

$(document).keydown(
  function() {
    if (event.which == 39) {
      nextImage();
    } else if (event.which == 37) {
      prevImage();
    }
  }
);




//-----------------------------------------------------------------------------

function nextImage() {
  var activeImage = $("img.active");
  var activeCircle = $("i.active");
  var firstImage = $("img.first");
  var firstCircle = $("i.first");

  activeImage.removeClass("active");
  activeCircle.removeClass("active");
  activeImage.next().addClass("active");
  activeCircle.next().addClass("active");

  if (activeImage.hasClass("last")) {
    firstImage.addClass("active");
    firstCircle.addClass("active");
  }

}

function prevImage() {
  var activeImage = $("img.active");
  var activeCircle = $("i.active");
  var lastImage = $("img.last");
  var lastCircle = $("i.last")

  activeImage.removeClass("active");
  activeCircle.removeClass("active");
  activeImage.prev().addClass("active");
  activeCircle.prev().addClass("active");

  if (activeImage.hasClass("first")) {
    lastImage.addClass("active");
    lastCircle.addClass("active");
  }

}
