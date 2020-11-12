
var blip = new Audio("blip.wav")
var bloop = new Audio("bloop.wav")
var blurp = new Audio("blurp.wav")

sound1Button = document.getElementById('sound1')
sound1Button.addEventListener('click', blip.play())

sound2Button = document.getElementById('sound2')
sound2Button.addEventListener('click', bloop.play())

sound3Button = document.getElementById('sound3')
sound3Button.addEventListener('click', blurp.play())