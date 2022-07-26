const cont = document.querySelector('.container')
console.log(cont);


for(let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.style.border = "1px solid #000"
    cont.appendChild(div);

}