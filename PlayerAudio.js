class PlayerAudio {
    constructor(elt, { ...options }) {
        this.player = elt
        this.showDuration = options.showDuration
        this.nativePlayer = elt.querySelector('audio')
        this.volume = elt.querySelector('[data-player-volume]')
        this.track = elt.querySelector('[data-player-track]')
        this.buttonPlay = elt.querySelector('[data-player-play]')
        this.buttonPause = elt.querySelector('[data-player-pause]')
    }

    eventHandler() {
        this.buttonPlay.addEventListener('click', () => {
            this.play()
        })
        this.buttonPause.addEventListener('click', () => {
            this.pause()
        })

        this.track.addEventListener('input', (e) => {
            this.changeCurrentTime(e.target.value)
        })

        this.volume.addEventListener('input', (e) => {
            this.nativePlayer.volume = e.target.value
        })

        this.nativePlayer.addEventListener('timeupdate', () => {
            this.track.value = this.nativePlayer.currentTime

            if (this.showDuration) {
                this.player.querySelector(
                    '[data-player-currentTime]'
                ).innerText = this.convertTime(this.nativePlayer.currentTime)
            }
        })

        this.nativePlayer.addEventListener('durationchange', () => {
            const duration = this.nativePlayer.duration
            this.track.setAttribute('max', duration)

            if (this.showDuration) {
                this.player.querySelector('[data-player-duration]').innerText =
                    this.convertTime(duration)
            }
        })
    }

    play() {
        this.nativePlayer.play()
    }

    pause() {
        this.nativePlayer.pause()
    }

    changeCurrentTime(time) {
        this.nativePlayer.currentTime = time
    }

    convertTime(time) {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
            .toString()
            .padStart(2, '0')

        return `${minutes}:${seconds}`
    }

    init() {
        this.eventHandler()
    }
}
