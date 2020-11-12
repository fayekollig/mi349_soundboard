
var blipButton = document.getElementById('blipButton')
var bloopButton = document.getElementById('bloopButton')
var blurpButton = document.getElementById('blurpButton')

var blip = document.getElementById('blipSound')
var bloop = document.getElementById('bloopSound')
var blurp = document.getElementById('blurpSound')

blipButton.addEventListener('click', function() { blip.play() })
bloopButton.addEventListener('click', function() { bloop.play() )
blurpButton.addEventListener('click', function() { blurp.play() })