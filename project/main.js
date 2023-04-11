let car1 = document.getElementById("photos")
let S1 = document.getElementById("elipse1")
let S2 = document.getElementById("elipse2")
let S3 = document.getElementById("elipse3")
let S4 = document.getElementById("elipse4")
let S5 = document.getElementById("elipse5")
let allElipse = document.querySelectorAll(".elipse")
console.log(allElipse)
S1.setAttribute("width","15")

let photo = "1"
function right(){
    if(photo == "1"){
        car1.style.backgroundImage = "url(images/car2.png)"
        photo = "2"
        S1.setAttribute("width","10")
        S2.setAttribute("width","15")
        return
    }
    if(photo == "2"){
        car1.style.backgroundImage = "url(images/car3.png)"
        photo = "3"
        S2.setAttribute("width","10")
        S3.setAttribute("width","15")
        return
    }
    if(photo == "3"){
        car1.style.backgroundImage = "url(images/car4.png)"
        photo = "4"
        S3.setAttribute("width","10")
        S4.setAttribute("width","15")
        return
    }
    if(photo == "4"){
        car1.style.backgroundImage = "url(images/car5.png)"
        photo = "5"
        S4.setAttribute("width","10")
        S5.setAttribute("width","15")
        return
    }
    if(photo == "5"){
        car1.style.backgroundImage = "url(images/car1.png)"
        photo = "1"
        S5.setAttribute("width","10")
        S1.setAttribute("width","15")
        return
    }
}
function left(){
    if(photo == "5"){
        car1.style.backgroundImage = "url(images/car4.png)"
        S5.setAttribute("width","10")
        S4.setAttribute("width","15")
        photo = "4"
        return
    }
    if(photo == "4"){
        car1.style.backgroundImage = "url(images/car3.png)"
        photo = "3"
        S4.setAttribute("width","10")
        S3.setAttribute("width","15")
        return
    }
    if(photo == "3"){
        car1.style.backgroundImage = "url(images/car2.png)"
        photo = "2"
        S3.setAttribute("width","10")
        S2.setAttribute("width","15")
        return
    }
    if(photo == "2"){
        car1.style.backgroundImage = "url(images/car1.png)"
        photo = "1"
        S2.setAttribute("width","10")
        S1.setAttribute("width","15")
        return
    }
    if(photo == "1"){
        car1.style.backgroundImage = "url(images/car5.png)"
        photo = "5"
        S1.setAttribute("width","10")
        S5.setAttribute("width","15")
        return
    }
}

let intervalId = setInterval(right, 4000);

document.addEventListener('click', function() {
  clearInterval(intervalId);
  intervalId = setInterval(right, 4000);
});