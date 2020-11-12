
blipButton = document.getElementById('blipButton')
bloopButton = document.getElementById('bloopButton')
blurpButton = document.getElementById('blurpButton')

var blip = new Audio("blip.wav")
var bloop = new Audio("bloop.wav")
var blurp = new Audio("blurp.wav")

blipButton.addEventListener('click', blip.play())
bloopButton.addEventListener('click', bloop.play())
blurpButton.addEventListener('click', blurp.play())