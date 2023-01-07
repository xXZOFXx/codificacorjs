var btn = document.getElementById("button");
btn.addEventListener("click", getText);

var array;

function getText() {
    var textarea = document.getElementById('text');
    array = textarea.value.replace(/\s+/g, ' ').split(' ').filter((e) => e.length > 0);

    console.log(array);


    for (var i = 0; i < array.length; i++) {

        array[i] = array[i].replace(/e/gi, 'enter');
        array[i] = array[i].replace(/i/gi, 'imes');
        array[i] = array[i].replace(/a/gi, 'ai');
        array[i] = array[i].replace(/o/gi, 'ober');
        array[i] = array[i].replace(/u/gi, 'ufat');






    }



    for (let i = 0; i < array.length; i++) {

        if (array.contains) {

        }

        if (array[i] === 'a') {
            array[i] = 'z';
            break;
        }
    }



    console.log(array);


    let textotraducido = document.getElementById('txttraducido');
    textotraducido.innerHTML = array.join(' ');





}