document.addEventListener("DOMContentLoaded", function () {
    const num = document.getElementById('n');
    const i_btn = document.getElementsByClassName('inc');
    const d_btn = document.getElementsByClassName('dec')
    const rst_btn = document.getElementById('rst');
    let x = 0;
    i_btn[0].addEventListener("click", function () {
        x += 1;
        console.log(x)
        num.innerHTML = x;

    });
    d_btn[0].addEventListener("click", () => {
        x -= 1;
        // console.log(x);
        num.innerHTML = x;
    });
    rst_btn.addEventListener("click", function () {
        x = 0;
        // console.log(x);
        num.innerHTML = x;
    });
    document.getElementById('sv').addEventListener("click", function () {
        localStorage.setItem("x", x);
        // console.log(localStorage.getItem('x'));
    })
    document.getElementById('ld').addEventListener("click", function () {
        if (localStorage.getItem("x") !== null) {
            x = Number(localStorage.getItem('x'));
            n.innerHTML = x;
            // console.log(n.innerHTML);
        }
        n.innerHTML = x;
    })
})