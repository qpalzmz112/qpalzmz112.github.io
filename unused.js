//at start of file: let alreadyCalled = false;

//in reverseText():
    //let originalSelections = [];
    //let reversedSelections = [];
    //originalSelections.unshift(originalSelection);
    //reversedSelections.unshift(selectionCopy);
    //if (!alreadyCalled) {
        //undoReverseText();

function undoReverseText() {
    const element = document.getElementById("textReverse");
    alreadyCalled = true;
    if (window.getSelection().isCollapsed) {
        while (originalSelections.length > 0) {
            sleep(500).then(() => {
                element.innerHTML = element.innerHTML.replace(originalSelections.shift(), reversedSelections.shift());
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