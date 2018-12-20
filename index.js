document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('textarea[name="text"]').onkeyup=changeEventHandler;
},false);

function isAlpha(ch) {
    return typeof ch === "string" && ch.length === 1
         && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
}

function getCharValue(ch) {
    var asc = ch.toUpperCase().charCodeAt(0);
    var ascA = "A".charCodeAt(0);
    return Math.pow(2, asc - ascA);
}

function changeEventHandler(event) {
    var valElement = document.getElementById("val");
    var textValue = new String(event.target.value);
    var sum = 0;

    for (var i=0; i < textValue.length; i++) {
        var c = textValue.charAt(i);

        if (isAlpha(c)) {
            sum = sum + getCharValue(c);
        }
    }

    valElement.value = new String(sum);
    console.log(sum);
}
