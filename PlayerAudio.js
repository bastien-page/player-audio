class PlayerAudio {
    constructor(elt, options) {
        this.player = elt
        this.nativePlayer = this.player.querySelector('audio')
        this.volume = elt.querySelector('[data-player-volume]')
        this.track = elt.querySelector('[data-player-track]')
        this.buttonPlay = elt.querySelector('[data-player-play]')
        this.buttonPause = elt.querySelector('[data-player-pause]')
        this.buttonStop = elt.querySelector('[data-player-stop]')
    }

    eventHandler() {}

    play() {
        this.nativePlayer.play()
    }

    pause() {
        this.nativePlayer.pause()
    }

    stop() {
        this.nativePlayer.stop()
    }

    volume() {
        this.nativePlayer.volume
    }

    getDuration() {
        const duration = this.nativePlayer.durartion
    }

    setCurrentTime() {}

    init() {
        console.log(this.player)
    }
}
