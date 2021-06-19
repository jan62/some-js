const body = document.body

const header = document.createElement('header')

let logo = document.createElement('div')
logo.classList.add('logo')

let img1 = document.createElement('div')
img1.classList.add('img-1')

let imgLogo = document.createElement('img')
// imgLogo.setAttribute('src', './img/60b8ee61-142c-41fe-b23f-e55fb78ec381.png')
imgLogo.src = './march/some.png'

// let slogan=document.createElement('div')
// slogan.className="slogan"

let sloganP = document.createElement('h1')
sloganP.classname="sloganP"
sloganP.innerHTML=`SLOGAN SLOGAN SLOGAN`


img1.append(imgLogo)
img1.append(sloganP)


logo.append(img1)
header.append(logo)

body.append(header)


