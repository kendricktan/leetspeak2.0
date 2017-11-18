var replacements = {
	//Lowercase
    'a': ['a', 'à', 'á', 'â', 'ä', 'ã', 'å', 'ā'], //missing æ
    'c': ['c', 'ç', 'ć', 'č', 'c'],
    'e': ['e', 'è', 'é', 'ê', 'ë', 'ē', 'ė'],
    'i': ['i','î', 'ï', 'í', 'ī', 'į', 'ì'],
    'l': ['l', 'ł'],
    'n': ['n', 'ñ', 'ń'],
    'o': ['o', 'ô', 'ö', 'ò', 'ó', 'ø', 'ō', 'õ', '0'], //missing œ
    's': ['s', 'ś', 'š'],
    'u': ['u', 'û', 'ü', 'ù', 'ú', 'ū'],
    'y': ['y', 'ÿ'],
    'z': ['z', 'ž', 'ź', 'ż'],

    //Uppercase
    'B': ['B', 'ß']
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