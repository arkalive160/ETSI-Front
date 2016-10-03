    var regex = /^(.+?)(\d+)$/i;
    var cloneIndexUnidad = $(".clonedInputUnidad").length;
    var cloneIndexModulo = $(".clonedInputModulo").length;
    var cloneIndexAsignatura = $(".clonedInputAsignatura").length;
    
    function cloneUnidad(){
        
        $($(this).parents().children("#unidad")).clone()
            .insertAfter($(this).parents().children("#unidad"))
            .attr("id", "clonedInputUnidad" +  cloneIndexUnidad)
            .on('click', 'button.removeUnidad', removeUnidad)
            .show("slow");
        cloneIndexUnidad++;
    }
    function cloneModulo(){
        
        $($(this).parents().children("form").children("#modulo")).clone()
            .insertAfter($(this).parents().children("form").children("#modulo"))
            .attr("id", "clonedInputModulo" +  cloneIndexModulo)
            .on('click', 'button.cloneUnidad', cloneUnidad)
            .on('click', 'button.removeModulo', removeModulo)
            .show("slow");
        cloneIndexModulo++;
    }
    function cloneAsignatura(){
        
        $($(this).parents().children("form").children("#asignatura")).clone()
            .insertAfter($(this).parents().children("form").children("#asignatura"))
            .attr("id", "clonedInputAsignatura" +  cloneIndexAsignatura)
            .on('click', 'button.removeAsignatura', removeAsignatura)
            .show("slow");
        cloneIndexAsignatura++;
    }
    function removeUnidad(){
        $(this).parents(".clonedInputUnidad").remove();
    }
    function removeModulo(){
        $(this).parents(".clonedInputModulo").remove();
    }
    function removeAsignatura(){
        $(this).parents(".clonedInputAsignatura").remove();
    }
    $("button.cloneUnidad").on("click", cloneUnidad);
    $("button.cloneModulo").on("click", cloneModulo);
    $("button.cloneAsignatura").on("click", cloneAsignatura);
    
    $("button.removeUnidad").on("click", removeUnidad);
    $("button.removeModulo").on("click", removeModulo);
    $("button.removeAsignatura").on("click", removeAsignatura);