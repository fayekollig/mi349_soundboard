
var sound1 = new Audio("blip.wav")
var sound2 = new Audio("bloop.wav")
var sound3 = new Audio("blurp.wav")

sound1Button = document.getElementById('sound1')
sound1Button.addEventListener(click, sound1.play())

sound2Button = document.getElementById('sound2')
sound2Button.addEventListener(click, sound2.play())

sound3Button = document.getElementById('sound3')
sound3Button.addEventListener(click, sound3.play())