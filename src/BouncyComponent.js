import React, {Component} from 'react'
import ScaleProperty from './ScaleProperty'
import Animator from './Animator'
import DimensionContainer from './DimensionContainer'

const Block = ({width, backgroundColor, height, left, top}) => {
    console.log(`${width}, ${height}, ${backgroundColor}, ${left}, ${top}`)
    return <div className = "block" style = {{width, backgroundColor, height, left, top}}></div>
}

export default class BouncyComponent extends Component {

    handleClick() {
        this.sp.startUpdating(() => {
            this.animator.start(() => {
                var {change} = this.state
                change++
                this.setState({change})
                this.sp.update(() => {
                    this.animator.stop()
                    this.setState({change : this.state.change + 1})
                })
            })
        })
    }

    constructor(props) {
        super(props)
        this.sp = new ScaleProperty()
        this.animator = new Animator()
        this.dc = new DimensionContainer()
        this.state = {change : 0}
    }

    render() {

        const {w, h, btnW, btnH} = this.dc
        const x = w / 2 - btnW / 2
        const y = h / 2 - btnH / 2
        const btW = btnW * this.sp.sf
        const btX = w / 2 - btW / 2
        return (<div onClick = {() => {this.handleClick()}}>
            <Block left = {x} top = {y} backgroundColor = "#9E9E9E" width = {btnW} height = {btnH}/>
            <Block left = {btX} top = {y} backgroundColor = "#1A237E" width = {btW} height = {btnH}/>
        </div>)
    }
}
