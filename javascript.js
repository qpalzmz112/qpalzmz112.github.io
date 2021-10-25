document.onselectionchange = () => {
    handleSelectionChange();
}

function handleSelectionChange() {
    if (window.getSelection().isCollapsed) {
        document.getElementById("textReverse").innerHTML = "I'm a Northwestern double majoring in computer science and mathematics"
    }
    let selectedElement = window.getSelection().focusNode.parentElement;
    switch (selectedElement.id) {
        case "textSpacing":
            changeTextSpacing();
            break;
        case "textReverse":
            reverseText();
            break;
        case "fontChange":
            changeFont();
            break;
        case "colorChange":
            changeColor();
            break;
    }
}

function changeTextSpacing() {
    let string = window.getSelection().toString();
    document.getElementById("textSpacing").style.letterSpacing = string.length/2 + "px"
}

function reverseText() {
    if (window.getSelection().isCollapsed) {
        document.getElementById("textReverse").innerHTML = "I'm a Northwestern double majoring in computer science and mathematics"
    }
    let text = document.getElementById("textReverse").innerHTML;
    let originalSelection = window.getSelection().toString();
    if (originalSelection.length == 1) {
        return;
    }
    let selectionCopy = window.getSelection().toString();
    selectionCopy = selectionCopy.split("");
    selectionCopy = selectionCopy.reverse();
    selectionCopy = selectionCopy.join();
    selectionCopy = selectionCopy.replaceAll(',', '');
    
    document.getElementById("textReverse").innerHTML = text.replace(originalSelection, selectionCopy);
}

let fonts = [];
fonts.push("'Orbitron', sans-serif");
fonts.push("'Play', sans-serif");
fonts.push("'VT323', monospace");
fonts.push("'Share Tech Mono', monospace");
fonts.push("'Major Mono Display', monospace");
fonts.push("'Nova Mono', monospace");
fonts.push("'Space Mono', monospace");
fonts.push("'Poiret One', cursive");
fonts.push("'Unica One', cursive");

function changeFont() {
    let selectionLength = window.getSelection().toString().length;
    document.getElementById("fontChange").style.fontFamily = fonts[selectionLength % 10];
}

let colors = ["coral", "cornflowerblue", "darkgoldenrod", "firebrick", "khaki", "orchid", "olivedrab", "yellowgreen", "wheat", "lilac"];

function changeColor() {
    let selectionLength = window.getSelection().toString().length;
    document.getElementById("colorChange").style.color = colors[selectionLength % 10];
}
    


