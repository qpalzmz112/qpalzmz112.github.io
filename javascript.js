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
    


