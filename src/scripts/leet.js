var replacements = {
	'ffi': ['ffi', 'ﬃ'],
	'ffl': ['ffl', 'ﬄ'],

	'aa': ['aa', 'ꜳ'],
	'ae': ['ae', 'æ'],
	'ao': ['ao', 'ꜵ'],
	'ff': ['ff', 'ﬀ'],
	'fi': ['fi', 'ﬁ'],
	'fl': ['fl', 'ﬂ'],
	'oe': ['oe', 'œ'],
	'oo': ['oo', 'ꝏ'],
	'st': ['st', 'ﬆ'],
	'ue': ['ue', 'ᵫ'],
	'vy': ['vy', 'ꝡ'],

	//Lowercase
    'a': ['a', 'à', 'á', 'â', 'ä', 'ã', 'å', 'ā'],
    'c': ['c', 'ç', 'ć', 'č', 'c'],
    'e': ['e', 'è', 'é', 'ê', 'ë', 'ē', 'ė'],
    'i': ['i','î', 'ï', 'í', 'ī', 'į', 'ì'],
    'l': ['l', 'ł'],
    'n': ['n', 'ñ', 'ń'],
    'o': ['o', 'ô', 'ö', 'ò', 'ó', 'ø', 'ō', 'õ', '0'], //missing 
    's': ['s', 'ś', 'š'],
    'u': ['u', 'û', 'ü', 'ù', 'ú', 'ū'],
    'y': ['y', 'ÿ'],
    'z': ['z', 'ž', 'ź', 'ż'],

    'AA': ['AA', 'Ꜳ'],
    'AE': ['AE', 'Æ'],
    'AO': ['AO', 'Ꜵ'],
    'OO': ['OO', '00', 'Ꝏ', '∞'],

    //Uppercase
    'B': ['B', 'ß'],
    'T': ['イ'],
    'V': ['V', `\\/`],
    'W': ['W', 'VV']
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