let currentClass = "top"

function changeOrientation(newClass) {
    const nav = document.querySelector('#nav');
    nav.classList.replace(currentClass, newClass);
    currentClass = newClass;
    // if (currentClass === 'disappear') {
    //     nav.classList.replace(currentClass, "top")
    //     newClass = ""
    //     currentClass = newClass
    // }
}