
var blipButton = document.getElementById('blipButton')
var bloopButton = document.getElementById('bloopButton')
var blurpButton = document.getElementById('blurpButton')

var blip = document.getElementById('blipSound')
var bloop = document.getElementById('bloopSound')
var blurp = document.getElementById('blurpSound')

blipButton.addEventListener('click', blip.play())
bloopButton.addEventListener('click', bloop.play())
blurpButton.addEventListener('click', blurp.play())