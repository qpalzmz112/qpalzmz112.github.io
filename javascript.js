document.getElementById("textSpacing").addEventListener('selectionchange', changeTextSpacing)

function changeTextSpacing() {
    let string = window.getSelection().toString();
    document.getElementById("textSpacing").style.letterSpacing = string.length() + "px"
}