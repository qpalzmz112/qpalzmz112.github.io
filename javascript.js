document.onselectionchange = () => {
    handleSelectionChange();
}

let openDropDowns = 0;

let backgroundClick = document.getElementById("backgroundClick");
backgroundClick.addEventListener("click", () => {
    let dropDowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropDowns.length; i++) {
        if (dropDowns[i].classList.contains('show')) {
            dropDowns[i].classList.remove('show');
        }
    }
    if (backgroundClick.classList.contains('show')) {
        backgroundClick.classList.remove('show');
    }
})

function dropDown(id) {
    elem = document.getElementById(id);
    if (elem.classList.contains("show")) {
        openDropDowns -= 1;
    } else {
        openDropDowns += 1;
    }
    document.getElementById(id).classList.toggle("show");

    if (openDropDowns > 0) {
        backgroundClick.classList.add("show");
    }
    else {
        backgroundClick.classList.remove("show");
    }
}

function handleSelectionChange() {
    if (window.getSelection().isCollapsed) {
        let anchor = window.getSelection().anchorNode.parentElement;
        switch (anchor.id.split(' ')[0]) {
            case "textSpacing":
                document.getElementById(anchor.id).style.letterSpacing = "0px";
                break;
            case "textReverse":
                document.getElementById(anchor.id).innerHTML = "I'm a Northwestern student double majoring in computer science and mathematics.";
                break;
            case "fontChange":
                document.getElementById(anchor.id).style.fontFamily = "'Space Mono', monospace";
                break;
            case "colorChange":
                document.getElementById(anchor.id).style.color = "darkslateblue";
                break;
            case "fontSizeChange":
                document.getElementById(anchor.id).style.fontSize = "22px";
                break;
            case "backgroundChange":
                document.getElementById(anchor.id).style.backgroundColor = "white";
                break;
        }
        return;
    }
    let selectedElement = window.getSelection().focusNode.parentElement;
    switch (selectedElement.id.split(' ')[0]) {
        case "textSpacing":
            changeTextSpacing(selectedElement.id);
            break;
        case "textReverse":
            reverseText(selectedElement.id);
            break;
        case "fontChange":
            changeFont(selectedElement.id);
            break;
        case "colorChange":
            changeColor(selectedElement.id);
            break;
        case "fontSizeChange":
            changeFontSize(selectedElement.id);
            break;
        case "backgroundChange":
            changeBackground(selectedElement.id);
            break;
    }
}

function changeTextSpacing(id) {
    let string = window.getSelection().toString();
    document.getElementById(id).style.letterSpacing = string.length/2 + "px"
}

function reverseText(id) {
    if (window.getSelection().isCollapsed) {
        document.getElementById(id).innerHTML = "I'm a Northwestern student double majoring in computer science and mathematics."
        return;
    }
    let text = "I'm a Northwestern student double majoring in computer science and mathematics.";
    let selection = window.getSelection().toString();
    if (selection.length == 1) {
        return;
    }
    let fromText = text.slice(0, selection.length);
    let copy = fromText.slice() 
    copy = copy.split("");
    copy = copy.reverse();
    copy = copy.join();
    copy = copy.replaceAll(',', '');
    document.getElementById(id).innerHTML = text.replace(fromText, copy);
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

function changeFont(id) {
    let selectionLength = window.getSelection().toString().length;
    document.getElementById(id).style.fontFamily = fonts[selectionLength % 10];
}

let colors = ["coral", "cornflowerblue", "darkgoldenrod", "firebrick", "khaki", "orchid", "olivedrab", "yellowgreen", "wheat", "lilac"];

function changeColor(id) {
    let selectionLength = window.getSelection().toString().length;
    document.getElementById(id).style.color = colors[selectionLength % 10];
}

function changeBackground() {
    let selectionLength = window.getSelection().toString().length;
    document.getElementById("backgroundChange").style.backgroundColor = colors[selectionLength % 10];
}                

function changeFontSize(id) {
    let selectionLength = window.getSelection().toString().length;
    document.getElementById(id).style.fontSize = 36 + selectionLength/4 + "px";
}
    


