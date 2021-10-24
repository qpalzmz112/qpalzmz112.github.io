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
    document.getElementById("textReverse").innerHTML = "I'm a Northwestern double majoring in computer science and mathematics";
    let text = document.getElementById("textReverse").innerHTML;
    let originalSelection = window.getSelection().toString();
    let selectionCopy = window.getSelection().toString();
    selectionCopy = selectionCopy.split("");
    selectionCopy = selectionCopy.reverse();
    selectionCopy = selectionCopy.join();
    selectionCopy = selectionCopy.replaceAll(',', '');
    text.replace(originalSelection, selectionCopy);
    document.getElementById("textReverse").innerHTML = text.replace(originalSelection, selectionCopy);
}