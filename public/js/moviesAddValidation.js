const $ = id => document.getElementById(id)

const formCreate = document.getElementById("formCreate")

window.addEventListener("load",() => {

    $("nameTitle").focus()

    $("nameTitle").addEventListener("blur", function(e){
        if($("nameTitle").value == ""){
            $("errorTitle").innerText = "Este Campo no purde estar vació"
            $("nameTitle").classList.add("error")
        }else{
            $("nameTitle").classList.remove("error")
             $("errorTitle").innerText =null
        }
    })

    $("ratingMovie").addEventListener("blur", function(e){
        if($("ratingMovie").value == ""){
            $("errorRating").innerText = "Este Campo no purde estar vació"
            $("ratingMovie").classList.add("error")
        }else if( $("ratingMovie").value < 0 || $("ratingMovie").value > 10 ){
            $("errorRating").innerText = "solo se admite valores de 0 al 10"
            $("ratingMovie").classList.add("error")
        }else{
            $("ratingMovie").classList.remove("error")
            $("errorRating").innerText = null
        }
    })

    $("awarsMovie").addEventListener("blur", function(e){
        if($("awarsMovie").value == ""){
            $("errorAwars").innerText = "Este Campo no purde estar vació"
            $("awarsMovie").classList.add("error")
        }else if( $("awarsMovie").value < 0 || $("awarsMovie").value > 10 ){
            $("errorAwars").innerText = "solo se admite valores de 0 al 10"
            $("awarsMovie").classList.add("error")
        }else{
            $("awarsMovie").classList.remove("error")
            $("errorAwars").innerText = null
        }
    })

    $("fechaMovie").addEventListener("leave", function(e){
        if($("fechaMovie").value == ""){
            $("errorFecha").innerText = "Este Campo no purde estar vació"
            $("fechaMovie").classList.add("error")
        }else if( $("fechaMovie").value < 60 || $("fechaMovie").value > 360 ){
            $("errorFecha").innerText = "solo se permite una duracion entre 60 y 360 minutos"
            $("fechaMovie").classList.add("error")
        }else{
            $("fechaMovie").classList.remove("error")
            $("errorFecha").innerText = null
        }
    })

    $("lengthMovie").addEventListener("blur", function(e){
        if($("lengthMovie").value == ""){
            $("errorLength").innerText = "Este Campo no purde estar vació"
            $("lengthMovie").classList.add("error")
        }else{
            $("lengthMovie").classList.remove("error")
            ("errorLength").innerText = null
        }
    })

    $("genreMovie").addEventListener("blur", function(e){
        if($("genreMovie").value == ""){
            $("errorGenre").innerText = "Este Campo no purde estar vació"
            $("genreMovie").classList.add("error")
        }else{
            $("genreMovie").classList.remove("error")
            $("errorGenre").innerText = null
        }
    })

    formCreate.addEventListener('submit', event => {
        event.preventDefault();
    
        let elementsForm = formCreate.elements;
        console.log(elementsForm)
        let error = false;
    
        for (let i = 0; i < elementsForm.length - 2; i++) {
    
            if (elementsForm[i].classList.contains('error')) {
                error = true
            }
        }
    
    
        if (error == false) {
            formCreate.submit()
        }
    })

})