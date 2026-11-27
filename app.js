// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function () {
//     let item = inp.value;
//     item.innerText = inp.value;
//     ul.appendChild(item);
//     inp.value = "";

//     let btndel = document.querySelector("button");
//     btndel.innerText = "Delete";
//     btndel.classList.add("delete");

//     item.appendChild(btndel);
//     ul.appendChild(item);
//     inp.value = "";

// });

// ul.addEventListener("click", function (event) {
//     if (event.target.nodeName == "BUTTON") {
//         let listitem = event.target.parentElement;
//         listitem.remove();
//         console.log("Deleted");
//     }
// })


let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is Started");
        started = true;

        levelup();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");

    }, 250);

}

function levelup() {
    level += 1;
    h2.innerText = `Level ${level}`;

    let randomidx = Math.floor(Math.random() * 3);
    let randomcolor = btns[randomidx];
    let randbtn = document.querySelector(`.${randomcolor}`);
    console.log(randomidx);
    console.log(randomcolor);
    console.log(randbtn);
    btnflash(randbtn);

}

function checkAns(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }

    } else {
        h2.innerHTML = `Game Over! Your score was<b>${level}</b> <br Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.color = "white";
        }, 150);
        reset();

    }

}
function btnpress() {
    let btn = this;
}

let allbtns = document.querySelector(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);

}


let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getsfacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;

});

let url = "https://catfact.ninja/fact";
async function getsfacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch (e) {
        console.log("error", e);
        return "Not Found";

    }
}

let btn2 = document.querySelector("button");

btn.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
    console.log(link);

});

let url2 = "https://dogimage.ninja/message";
async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    }
    catch (e) {
        console.log("error", e);
        return "Not Found";

    }
}