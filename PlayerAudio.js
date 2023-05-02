class PlayerAudio {
    constructor(elt, { ...options }) {
        this.player = elt
        this.showDuration = options.showDuration
        this.nativePlayer = elt.querySelector('audio')
        this.volume = elt.querySelector('[data-player-volume]')
        this.track = elt.querySelector('[data-player-track]')
        this.buttonPlay = elt.querySelector('[data-player-play]')
        this.buttonPause = elt.querySelector('[data-player-pause]')
        this.buttonMute = elt.querySelector('[data-player-mute]')
        this.buttonUnmute = elt.querySelector('[data-player-unmute]')
    }

    eventHandler() {
        this.buttonPlay.addEventListener('click', () => {
            this.play()
        })
        this.buttonPause.addEventListener('click', () => {
            this.pause()
        })

        this.buttonMute.addEventListener('click', () => {
            this.mute(0)
        })

        this.buttonUnmute.addEventListener('click', () => {
            this.unmute(1)
        })

        this.track.addEventListener('input', (e) => {
            this.changeCurrentTime(e.target.value)
        })

        this.volume.addEventListener('input', (e) => {
            if (e.target.value > 0) {
                this.unmute(e.target.value)
            } else {
                this.mute(0)
            }
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
        this.buttonPause.classList.remove('is-inactive')
        this.buttonPlay.classList.add('is-inactive')
    }

    pause() {
        this.nativePlayer.pause()
        this.buttonPause.classList.add('is-inactive')
        this.buttonPlay.classList.remove('is-inactive')
    }

    changeCurrentTime(time) {
        this.nativePlayer.currentTime = time
    }

    mute(value) {
        this.nativePlayer.muted = true
        this.volume.value = value
        this.nativePlayer.volume = value
        this.buttonUnmute.classList.remove('is-inactive')
        this.buttonMute.classList.add('is-inactive')
    }

    unmute(value) {
        this.nativePlayer.muted = false
        this.volume.value = value
        console.log(this.volume.value)
        this.nativePlayer.volume = value
        this.buttonUnmute.classList.add('is-inactive')
        this.buttonMute.classList.remove('is-inactive')
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
