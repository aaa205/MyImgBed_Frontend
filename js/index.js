window.onload = function () {
    // dom操作
    let login = document.getElementsByClassName('nav')[0]
        .getElementsByTagName('ul')[0]
        .getElementsByTagName('li')[2]
    let dropMenu = document.getElementsByClassName('drop-menu')[0]
    let upload = document.getElementsByClassName('nav')[0]
        .getElementsByTagName('ul')[0]
        .getElementsByTagName('li')[0]


    let showDropMenu = function () {
        dropMenu.style.visibility = 'visible'
    }
    let hideDropMenu = function(){
        dropMenu.style.visibility = 'hidden'
    }
    let uploadFile = function(){
        let reader = new File('d:/',)
    }

    login.addEventListener('mouseover',showDropMenu)
    dropMenu.addEventListener('mouseover',showDropMenu)
    dropMenu.addEventListener('mouseout',hideDropMenu)
    upload.addEventListener('click',uploadFile)
}