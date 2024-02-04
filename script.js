let oldClass = "top"

function changeOrientation(newClass) {
    const nav = document.querySelector('#nav');
    nav.classList.replace(oldClass, newClass);
    oldClass = newClass;
}