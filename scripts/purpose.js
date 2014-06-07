function setUnhidden(position) {
    "use strict"; 
    var positions = ["who","what","mission"];
    var i = 0;
    for (; i < positions.length; i++){ 
        var currentPosition = document.getElementById("descrip" + positions[i]);
        var currentElement = document.getElementById(positions[i]);
        if (positions[i] == position){
            currentPosition.className = "unhidden";
        } else{
            currentPosition.className = "hidden";
        }
    }
} 