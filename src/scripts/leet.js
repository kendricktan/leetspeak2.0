var storage = require("./utils/storage")

var replacements = {
    'ffi': ['ffi', 'ﬃ'],
    'ffl': ['ffl', 'ﬄ'],

	'aa': ['aa', 'ꜳ'],
	'ae': ['ae', 'æ'],
	'ao': ['ao', 'ꜵ'],
	'ff': ['ff', 'ﬀ'],
	'fi': ['fi', 'ﬁ'],
	'fl': ['fl', 'ﬂ'],
	'ij': ['ĳ'],
	'oe': ['oe', 'œ'],
	'oo': ['oo', 'ꝏ'],
	'st': ['st', 'ﬆ'],
	'ue': ['ue', 'ᵫ'],
	'vy': ['vy', 'ꝡ'],

	//Lowercase
    'a': ['a', 'à', 'á', 'â', 'ä', 'ã', 'å', 'ā', 'α'],
    'b': ['b', 'Ь'],
    'c': ['c', 'ç', 'ć', 'č', 'c'],
    'd': ['d', 'đ', 'ď', 'ȡ'],
    'e': ['e', 'è', 'é', 'ê', 'ë', 'ē', 'ė', 'ε'],
    'f': ['f', 'ƒ'],
    'g': ['g', 'ġ', 'ģ', 'ğ', 'ĝ'],
    'h': ['h', 'ん', 'ĥ', 'ħ'],
    'i': ['i', 'î', 'ï', 'í', 'ī', 'į', 'ì'],
    'j': ['j', 'ĵ'],
    'k': ['k', 'ƙ', 'ķ'],
    'l': ['l', 'ł', 'ļ'],
    'm': ['m', 'ɱ'],
    'n': ['n', 'ñ', 'ń', '⩃'],
    'o': ['o', 'ô', 'ö', 'ò', 'ó', 'ø', 'ō', 'õ', '0', '☉', '⚬', 'ο'],
    'p': ['p', 'ƥ', 'ρ'],
    'q': ['q', 'ԛ'],
    'r': ['r', 'ȓ'],
    's': ['s', 'ś', 'š', 'ș'],
    't': ['t', 'ț'],
    'u': ['u', 'û', 'ü', 'ù', 'ú', 'ū', '⨆', 'υ'],
    'v': ['v', '⩒', '⩡', 'ν'],
    'w': ['w', '⧢', 'ω'],
    'x': ['x', '✕', '✖', '✗', '✘'], 
    'y': ['y', 'ÿ', 'ȳ'],
    'z': ['z', 'ž', 'ź', 'ż'],

    '1': ['1', '➀', '➊'],
	'2': ['2', '➁', '➋'],
    '3': ['3', '➂', '➌'],
    '4': ['4', '➃', '➍'],
    '5': ['5', '➄', '➎'],
    '6': ['6', '➅', '➏'],
    '7': ['7', '➆', '➐'],
    '8': ['8', '➇', '➑'],
    '9': ['9', '➈', '➒'],

    'AA': ['AA', 'Ꜳ'],
    'AE': ['AE', 'Æ'],
    'AO': ['AO', 'Ꜵ'],
    'IJ': ['IJ', 'Ĳ'],
    'OO': ['OO', '00', 'Ꝏ', '∞'],

    //Uppercase
    'B': ['B', 'ß'],
    'E': ['E', 'Ε'],
    'H': ['H', 'Η', 'Ĥ'],
    'K': ['K', 'Ƙ'],
    'L': ['L', 'Ľ', 'Ļ'],
    'M': ['M', 'Μ'],
    'N': ['N', 'Ν'],
    'O': ['O', 'Ο'],
    'P': ['P', 'Ƥ'],
    'T': ['T', 'イ', '⟙', 'τ'],
    'V': ['V', `\\/`],
    'W': ['W', 'VV'],
    'X': ['X', '☓', 'ㄨ', 'χ', 'Χ'],
    'Y': ['Y', 'Υ', 'γ'],
    'Z': ['Z', 'Ζ'],
    '=': ['=', '⚌', 'ニ']
}

// Reverse replacements
var originals = Object.keys(replacements).reduce((memo, k) => {replacements[k].forEach((v) => memo[v] = k); return memo}, {})

function leetspeakParser(s, mappings) {
    return Object.keys(mappings).reduce((s, k) => {         
        var r = getRandomArrayElem(mappings[k])        
        return s.replace(k, r)
    }, s)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomArrayElem(a) {
    if (typeof(a) === 'string') {
        a = [a]
    }
    return a[getRandomInt(0, a.length)]
}

function leetspeakv2(e) {
    storage.get('enabled')
        .then((data) => {            

            if (data.enabled) {
                var o = leetspeakParser(this.value, originals)
                this.value = leetspeakParser(o, replacements)
            }

        })
}

var inputs = document.getElementsByTagName('input')

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', leetspeakv2)
}