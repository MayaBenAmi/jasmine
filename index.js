window.addEventListener("load",()=> {
    let btn = document.getElementById('start-btn');
    btn.style.display = 'none';
    setTimeout(()=> {
        btn.style.display = 'block';
    }, 2900);
});