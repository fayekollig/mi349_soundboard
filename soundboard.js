
blipButton = document.getElementById('blipButton')
bloopButton = document.getElementById('bloopButton')
blurpButton = document.getElementById('blurpButton')

blip = document.getElementById('blipSound')
bloop = document.getElementById('bloopSound')
blurp = document.getElementById('blurpSound')

blipButton.addEventListener('click', blip.play())
bloopButton.addEventListener('click', bloop.play())
blurpButton.addEventListener('click', blurp.play())