///////////////////////////////////////////////////////////////////////////////////////////////// footer block expand

let footerBlocks = document.querySelectorAll(".footer-block");

footerBlocks.forEach(element => {
    element.setAttribute("onclick", "expandBlock(this)");
});

let anyFooterBlockOpen = false;

let expandBlock = function (x) {
    
    let content = x.children;

    if (anyFooterBlockOpen === false && window.innerWidth < 1024) {
        for (let index = 1; index < content.length; index++) {
            
            content[index].style.display = 'block';
            content[index].style.display = 'center';
        }

        anyFooterBlockOpen = true;
    }
    else if (anyFooterBlockOpen === true && window.innerWidth < 1024) {
        for (let index = 1; index < content.length; index++) {
            content[index].style.display = 'none';
        }
        anyFooterBlockOpen = false;
    }
}

////////take things back to normal display when resizing to desktop

let oldWidth = window.innerWidth; // used later to check if window resized to smaller or larger

window.addEventListener('resize', function(event){
    let newWidth = window.innerWidth;
    // get all the footer blocks and make their contents displayed
    footerBlocks = document.querySelectorAll('.footer-block');

    footerBlocks.forEach(element => {
        footerBlockChildren = element.children;
        if (newWidth > 1024) {
            for (let index = 1; index < footerBlockChildren.length; index++) {
                const element = footerBlockChildren[index];
                
                element.style.display = 'block';
                
            }
        }
        else if (newWidth < 1024 && oldWidth > 1024) {
            for (let index = 1; index < footerBlockChildren.length; index++) {
                const element = footerBlockChildren[index];
                
                element.style.display = 'none';
                
            }
        }    
    });

    oldWidth = newWidth; //update the size of oldWidth for the next resize event
});






