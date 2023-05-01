window.addEventListener('load', () => {
    const player = document.querySelector('[data-player]')

    const test = new PlayerAudio(player, { showDuration: true })

    test.init()

    console.dir(document.querySelector('audio'))
})
