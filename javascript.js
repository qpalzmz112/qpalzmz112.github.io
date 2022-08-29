document.onselectionchange = () => {
    handleSelectionChange();
}

function handleSelectionChange() {
    if (window.getSelection().isCollapsed) {
        let anchor = window.getSelection().anchorNode.parentElement;
        switch (anchor.id) {
            case "textSpacing":
                document.getElementById("textSpacing").style.letterSpacing = "0px";
                break;
            case "textReverse":
                document.getElementById("textReverse").innerHTML = "I'm a Northwestern student double majoring in computer science and mathematics.";
                break;
            case "fontChange":
                document.getElementById("fontChange").style.fontFamily = "'Space Mono', monospace";
                break;
            case "colorChange":
                document.getElementById("colorChange").style.color = "darkslateblue";
                break;
            case "fontSizeChange":
                document.getElementById("fontSizeChange").style.fontSize = "28px";
                break;
        }
        return;
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
        case "fontSizeChange":
            changeFontSize();
            break;
    }
}

function changeTextSpacing() {
    let string = window.getSelection().toString();
    document.getElementById("textSpacing").style.letterSpacing = string.length/2 + "px"
}

function reverseText() {
    if (window.getSelection().isCollapsed) {
        document.getElementById("textReverse").innerHTML = "I'm a Northwestern double majoring in computer science and mathematics."
        return;
    }
    let text = "I'm a Northwestern double majoring in computer science and mathematics.";
    let selection = window.getSelection().toString();
    if (selection.length == 1) {
        return;
    }
    let fromText = text.slice(0, selection.length);
    let copy = fromText.slice() // make a copy of fromText
    copy = copy.split("");
    copy = copy.reverse();
    copy = copy.join();
    copy = copy.replaceAll(',', '');
    document.getElementById("textReverse").innerHTML = text.replace(fromText, copy);
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

function changeFontSize() {
    let selectionLength = window.getSelection().toString().length;
    document.getElementById("fontSizeChange").style.fontSize = 36 + selectionLength/4 + "px";
}
    


