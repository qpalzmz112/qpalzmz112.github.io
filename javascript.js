let alreadyCalled = false;

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

let originalSelections = [];
let reversedSelections = [];
function reverseText() {
    let text = document.getElementById("textReverse").innerHTML;
    let originalSelection = window.getSelection().toString();
    originalSelections.unshift(originalSelection);
    if (originalSelection.length == 1) {
        return;
    }
    let selectionCopy = window.getSelection().toString();
    selectionCopy = selectionCopy.split("");
    selectionCopy = selectionCopy.reverse();
    selectionCopy = selectionCopy.join();
    selectionCopy = selectionCopy.replaceAll(',', '');
    reversedSelections.unshift(selectionCopy);
    document.getElementById("textReverse").innerHTML = text.replace(originalSelection, selectionCopy);
    if (!alreadyCalled) {
        undoReverseText();
    }
    
}

function undoReverseText() {
    const element = document.getElementById("textReverse");
    alreadyCalled = true;
    if (window.getSelection().isCollapsed) {
        while (originalSelections.length > 0) {
            sleep(500).then(() => {
                element.innerHTML = text.replace(originalSelections.shift(), reversedSelections.shift());
            })
        }
        
    }
    else {
        setTimeout(undoReverseText, 1000);
    }
    alreadyCalled = false;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}