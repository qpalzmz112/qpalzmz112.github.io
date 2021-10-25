//at start of file: let alreadyCalled = false;

//in reverseText():
    //let originalSelections = [];
    //let reversedSelections = [];
    //originalSelections.unshift(originalSelection);
    //reversedSelections.unshift(selectionCopy);
    //if (!alreadyCalled) {
        //undoReverseText();

/* HTML and CSS for background image
* {
    z- index: 1;
}
#backgroundImage {
    z - index: 0;
    opacity: 60 %;
    position: relative;
    width: 100 %;
    height: 100 %;
}
.imageSource {
    position: absolute;
    bottom: 0;
    ri
        < div id = "backgroundImage" >
            <img src="/aerial cityscape(1440p).jpeg" />
            <a class="imageSource" href="https://www.pexels.com/photo/bird-s-eye-view-of-city-during-dawn-2093323/" >Image Source</a>
        </div >
*/

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