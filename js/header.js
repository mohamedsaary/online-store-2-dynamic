//////////////////////////////////////////////////////////////////////////////////// Toggle menu button

let toggleNavStatus = false;
let getSideBar = document.querySelector(".nav-sidebar");

let toggleNav = function() { 
    if (toggleNavStatus === false) {
        getSideBar.style.display = "block";
        toggleNavStatus = true;
    } 
    else if (toggleNavStatus === true) {
        getSideBar.style.display = "none";
        toggleNavStatus = false;
    }
}

// to close sidebar menu when the window width 
// increases to more than 1025 (i.e in desktop version)

window.addEventListener('resize', function(event){
    let newWidth = window.innerWidth;

    if (toggleNavStatus === true && newWidth > 1024) {
        getSideBar.style.display = "none";
    }
    else if (toggleNavStatus === true && newWidth < 1024) {
        getSideBar.style.display = "block";
    }
});


//////////////////////////////////////////////////////////////////////////////////////// Search Bar

let searchBarStatus = false; 

let expandSearchBar = function () {
    
    if (searchBarStatus === false) {

        // close all open boxes in the area
        // close loginBox
        if (loginBoxStatus === true) {
            loginBox.remove();
            loginBoxStatus = false;
        }

        //Input box
        searchInput = createSearchInput();

        //Search Button
        searchButton = createSearchButton()

        // div to contain input box and search button
        searchBarBox = createSearchBarBox();
        
        //putting the input box and search button into the search box/div
        searchBarBox.appendChild(searchInput);
        searchBarBox.appendChild(searchButton);
        
        document.body.appendChild(searchBarBox);
        searchBarStatus = true;
    }
    else if (searchBarStatus === true) {
        searchBarBox.remove();
        searchBarStatus = false;
    }   
}

let createSearchInput = function () {
    searchInput = document.createElement('input');
    searchInput.setAttribute("type", "search");
    searchInput.setAttribute("class", "search-input");
    return searchInput;
}

let createSearchButton = function () {
    searchButton = document.createElement('button'); 
    searchButton.style.backgroundImage = "url(icons/search.png)";
    searchButton.style.backgroundPosition = "center";
    searchButton.style.backgroundSize = "15% 70%";
    searchButton.style.backgroundRepeat = "no-repeat";
    searchButton.style.cursor = "pointer";
    return searchButton;
}

let createSearchBarBox = function () {
    searchBarBox = document.createElement('div');
    searchBarBox.setAttribute("class", "search-box")
    searchBarBox.style.position = "fixed";    
    searchBarBox.style.top = "50px";
    searchBarBox.style.right = "0";
    searchBarBox.style.width = "50%";
    searchBarBox.style.height = "30px";
    searchBarBox.style.display = "grid";
    searchBarBox.style.gridTemplateColumns = "85% 15%";
    return searchBarBox;
}

/////////////////////////////////////////////////////////////////////////////////////////////// loginBox
let loginBoxStatus = false;

let openLoginBox = function() {
    if (loginBoxStatus === false) {
        //--------------------- close all open boxes(search, basket) in the area
        if (searchBarStatus === true) {
            searchBarBox.remove();
            searchBarStatus = false;
        }
        
        // create login div box
        loginBoxCreate();

        //---------add Login and Register buttons
        btnLogin();
        btnRegister();
               
        loginBoxStatus = true;
    }
    else if (loginBoxStatus === true) {
        loginBox.remove();
        loginBoxStatus = false;
    }
}

let loginBoxCreate = function () {

    //create the loginBox div
    loginBox = document.createElement('div');
    loginBox.setAttribute("class", "loginBox");
    document.body.appendChild(loginBox);

    //style
    loginBox.style.position = "fixed";
    loginBox.style.top = "50px";
    loginBox.style.right = "20px";
    loginBox.style.border = "1px solid #111";
    loginBox.style.backgroundColor = "#fff";
    loginBox.style.width = "200px";
    loginBox.style.height = "120px";
    loginBox.style.padding = "5px";
    loginBox.style.display = "grid";
    loginBox.style.gridTemplateColumns = "1fr";
    loginBox.style.gridGap = "5px";
}

let btnLogin = function () {
    // login
    btnGoToLogin = document.createElement('button');
    btnGoToLogin.setAttribute("class", "login-or-register-selector");
    btnGoToLogin.innerHTML = "LOGIN";
    btnGoToLogin.style.backgroundColor = "#111";
    btnGoToLogin.style.color = "#fff";
    btnGoToLogin.style.height = "50px";
    btnGoToLogin.style.cursor = "pointer";
    // add hover effect
    btnGoToLogin.setAttribute("onmouseover", "btnGoToLoginHover(this)");
    btnGoToLogin.setAttribute("onmouseout", "btnGoToLoginNormal(this)");
    
    loginBox.appendChild(btnGoToLogin);
}

let btnRegister = function () {
    // register
    btnGoToRegister = document.createElement('button');
    btnGoToRegister.setAttribute("class", "login-or-register-selector");
    btnGoToRegister.innerHTML = "REGISTER";
    btnGoToRegister.style.backgroundColor = "#fff";
    btnGoToRegister.style.height = "50px";
    btnGoToRegister.style.cursor = "pointer";
    // add hover effect
    btnGoToRegister.setAttribute("onmouseover", "btnGoToLoginHover(this)");
    btnGoToRegister.setAttribute("onmouseout", "btnGoToLoginNormal(this)");

    loginBox.appendChild(btnGoToRegister);
}

let btnGoToLoginHover = function (x) {
    x.style.textDecoration = "underline";
}

let btnGoToLoginNormal = function (x) {
    x.style.textDecoration = "none";
}
