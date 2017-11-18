/*
Just draw a border round the document.body.
*/

function printKey(e) {
    console.log(this.value)
}

var inputs = document.getElementsByTagName('input')

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', printKey)
}