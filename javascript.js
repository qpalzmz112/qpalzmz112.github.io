document.onselectionchange = () => {
    handleSelectionChange();
}

function handleSelectionChange() {
    let selection = window.getSelection();
    let selectedElement = selection.focusNode.parentElement;
    switch (selectedElement.id) {
        case "textSpacing":
            changeTextSpacing();
            break;
        case "textReverse":
            reverseText();
            break;
    }
}


function changeTextSpacing() {
    let string = window.getSelection().toString();
    document.getElementById("textSpacing").style.letterSpacing = string.length/2 + "px"
}

function reverseText() {
    let string = document.getElementById("textReverse");
    let selection = window.getSelection().toString();
    selection = selection.split("");
    selection = selection.reverse();
    selection = selection.join();
    console.log(selection);
    console.log("a");
}