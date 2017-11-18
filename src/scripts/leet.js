var replacements = {
    'a': ['á', 'ă']
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function leetspeakv2(e) {    
    this.value = this.value.split('').map((x) => {
        var r = replacements[x]

        if (r !== undefined) {
            return r[getRandomInt(0, r.length)]
        }

        return x
    }).join('')
}

var inputs = document.getElementsByTagName('input')

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', leetspeakv2)
}