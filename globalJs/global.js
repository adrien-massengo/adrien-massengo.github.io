function cardMaker(repo, target, form) {
    //get main cont div
    let main = document.getElementById("main");
    //make main card
    let card = document.createElement("a");
    card.target="_blank";
    card.classList.add("card");
    main.appendChild(card);
    if (form === "inner") {
        card.href = "https://adrien-massengo.github.io/" + target;
    }
    else if (form === "repo") {
        card.href = "https://github.com/adrien-massengo/" +target;
    }
    //anchor
    //img row
    let cImgDiv = document.createElement("div");
    cImgDiv.classList.add("img-row");
    cImgDiv.classList.add("img-p");
    cImgDiv.style.backgroundImage = "url(\"globalImg/" + repo + "-small.webp\")";
    function load(){
        cImgDiv.classList.add("loaded");
    }
    card.appendChild(cImgDiv);
    let cImg = document.createElement("img");
    cImg.loading ="lazy";
    cImg.classList.add("cardImg");
    cImg.src = "globalImg/" + repo + ".webp";
    if (cImg.complete) {
        load();
    } else {
        cImg.addEventListener("load", load);
    }
    cImgDiv.appendChild(cImg);
    //text-row
    let textRow = document.createElement("div");
    textRow.classList.add("text-row");
    textRow.innerText= repo;
    card.appendChild(textRow);
    
}