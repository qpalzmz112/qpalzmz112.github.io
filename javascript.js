document.onselectionchange = () => {
    console.log("selection change detected");
    handleSelectionChange();
}

function handleSelectionChange() {
    let selection = window.getSelection();
    let selectedElement = selection.parentElement;
    console.log(selectedElement.id);
    console.log("a");
}




function changeTextSpacing() {
    let string = window.getSelection().toString();
    document.getElementById("textSpacing").style.letterSpacing = string.length() + "px"
}