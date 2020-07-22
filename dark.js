var input = prompt('Enter your name',);
document.write(`Welcome ${input}`)

const dmode = document.getElementById('dark');
dmode.onclick = function changecolor(){
    setTimeout(() =>{
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.body.style.fontFamily = 'Helvetica'
    },500);
}

const ctime = document.getElementById('time');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
setInterval(clock, 1000);