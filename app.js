console.log('Hello')

const player = document.querySelector('[data-player]')

const test = new PlayerAudio(player)

test.init()

console.dir(document.querySelector('audio'))
