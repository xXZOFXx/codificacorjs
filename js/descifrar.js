var btn = document.getElementById("buttondes");
btn.addEventListener("click", getText);

var array;

function getText() {
    var textarea = document.getElementById('text');
    array = textarea.value.replace(/\s+/g, ' ').split(' ').filter((e) => e.length > 0);

    console.log(array);


    for (var i = 0; i < array.length; i++) {

        array[i] = array[i].replace(/enter/gi, 'e');
        array[i] = array[i].replace(/imes/gi, 'i');
        array[i] = array[i].replace(/ai/gi, 'a');
        array[i] = array[i].replace(/ober/gi, 'o');
        array[i] = array[i].replace(/ufat/gi, 'u');



    }



    console.log(array);


    let textotraducido = document.getElementById('txttraducido');
    textotraducido.innerHTML = array.join(' ');





}


