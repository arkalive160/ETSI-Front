    var regex = /^(.+?)(\d+)$/i;
    var cloneIndexUnidad = $(".clonedInputUnidad").length;
    var cloneIndexModulo = $(".clonedInputModulo").length;
    var cloneIndexAsignatura = $(".clonedInputAsignatura").length;
    
    function cloneUnidad(){
        
        $($(this).parents().children("#unidad")).clone()
            .insertAfter($(this).parents().children("#unidad"))
            .attr("id", "clonedInputUnidad" +  cloneIndexUnidad)
            .addClass("unidad-block")
            .on('click', 'button.removeUnidad', removeUnidad)
            .show("slow");
        cloneIndexUnidad++;
    }
    function cloneModulo(){
        
        $($(this).parents().children("form").children("#modulo")).clone()
            .insertAfter($(this).parents().children("form").children("#modulo"))
            .attr("id", "clonedInputModulo" +  cloneIndexModulo)
            .addClass("modulo-block")
            .on('click', 'button.cloneUnidad', cloneUnidad)
            .on('click', 'button.removeModulo', removeModulo)
            .show("slow");
        cloneIndexModulo++;
    }
    function cloneAsignatura(){
        
        $($(this).parents().children("form").children("#asignatura")).clone()
            .insertAfter($(this).parents().children("form").children("#asignatura"))
            .attr("id", "clonedInputAsignatura" +  cloneIndexAsignatura)
            .addClass("asignatura-block")
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
    
    
    {unidads_attributes:[ ]}
    
    var unidad_counter = $(".clonedInputUnidad").length;
    
    var unidadJObj = [];
    
        
    $("#build").click(function(){
        console.log("this damn thing");
        
        
        
        var modulos_attributes = [ ];
        
        //modulos and unidads json maker
        $(".modulo-block").each(function(index) {
            
            console.log( $(this).find(".nombreModulo").val() );
            
            var unidads_attributes = [ ];
            //each unidad for modulo
            $(".unidad-block", $(this)).each( function(index) {
                
                unidads_attributes.push({
                    nombre_unidad: $(this).find(".nombreUnidad").val(),
                    competencias: $(this).find(".competenciaUnidad").val(),
                    horas_unidad: $(this).find(".horasUnidad").val()
                    
                });
                    
            });
            
            modulos_attributes.push({
                nombre: $(this).find(".nombreModulo").val(),
                descripcion: $(this).find(".descripcionModulo").val(),
                unidads_attributes: unidads_attributes
            });
            
        });
        //componente practico assing
        var componente_practico = {
            componente_practico : {
            nombre_practico : $("#nombreComponentePractico").val(),
            modulos_attributes: modulos_attributes
            }
        }
        
        console.log(JSON.stringify(componente_practico));
        
        var asignaturas_attributes = [ ];
        
         $(".asignatura-block").each( function(index) {
             
            asignaturas_attributes.push({ 
                nombre: $(this).find(".nombreAsignatura").val(),
                contenido: $(this).find(".contenidoAsignatura").val(),
                horas: $(this).find(".horaAsignatura").val()
            }); 
            
         });
         
        //console.log("asasa", JSON.stringify(asignaturas_attributes));
         
        var componente_teorico = {
            componente_teorico : {
            nombre_teorico : $("#nombreComponenteTeorico").val(),
            asignaturas_attributes: asignaturas_attributes
            
            }
        }
        console.log(JSON.stringify(componente_teorico));
        
        var programa = {
            programa:{
                componente_practico_attributes : {
                nombre_practico : $("#nombreComponentePractico").val(),
                modulos_attributes: modulos_attributes
                }, 
                componente_teorico_attributes : {
                nombre_teorico : $("#nombreComponenteTeorico").val(),
                asignaturas_attributes: asignaturas_attributes
                }
            }
        }
        
        console.log("this is a program", JSON.stringify(programa))
        
        
        $.ajax({
            url : "https://etsi-cloned-arka160.c9users.io/test",
            type: "POST",
            data : programa,
            success: function(data, textStatus, jqXHR)
            {
             console.log(data, textStatus, jqXHR);
             console.log("nice man go and fuck'em all")
            },
            error: function (jqXHR, textStatus, errorThrown)
            {
                console.log("se jodio",jqXHR, textStatus, errorThrown);
            }
        });
        
    });
    
    
   