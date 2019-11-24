const wSizeFactor = 6
const hSizeFactor = 15

export default class DimensionContainer {

    constructor() {
        this.w = window.innerWidth
        this.h = window.innerHeight
        this.setBtnSize()
    }

    setBtnSize() {
        this.btnW = this.w / wSizeFactor
        this.btnH = this.h / hSizeFactor
    }

    handleResize() {
        this.w = window.innerWidth
        this.h = window.innerHeight
        this.setBtnSize()
    }
}
