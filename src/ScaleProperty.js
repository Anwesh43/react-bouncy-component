const scGap = 0.02
export default class ScaleProperty {

    constructor() {
        this.scale = 0
        this.prevScale = 0
        this.dir = 0
        this.sf = 0
    }

    updateSf() {
        this.sf = Math.sin(this.scale * Math.PI)
    }

    update(cb) {
        this.scale += scGap * this.dir
        this.updateSf()
        if (Math.abs(this.scale - this.prevScale) > 1) {
            this.scale = this.prevScale + this.dir
            this.dir = 0
            this.prevScale = this.scale
            this.updateSf()
            cb()
        }
    }

    startUpdating(cb) {
        if (this.dir == 0) {
            this.dir = 1 - 2 * this.prevScale
            cb()
        }
    }
}
