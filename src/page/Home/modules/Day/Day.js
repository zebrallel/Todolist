import './Day.scss'
import { h, Component } from 'preact'
import IScroll from 'iscroll/build/iscroll-lite'

const days = 31

class Day extends Component {
    domDays
    componentDidMount() {
        new IScroll(this.domDays)
    }
    renderDays = () => {
        const doms = []

        for (let i = 1; i <= days; i++) {
            doms.push(
                <li key={i} className="item">
                    {i}
                </li>
            )
        }

        return doms
    }
    render() {
        return (
            <div
                className="m-day"
                ref={dom => {
                    this.domDays = dom
                }}
            >
                <ul>{this.renderDays()}</ul>
            </div>
        )
    }
}

export default Day
