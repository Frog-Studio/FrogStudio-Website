// Script pour aller chercher toutes les images du dossier photo
var folder = "Photos/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $("body").append( "<img class="image-galerie" src='"+ folder + val +"' draggable="false">" );
            } 
        });
    }
});
// Fin du script photo seeker