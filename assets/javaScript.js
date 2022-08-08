class Clock25 extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return(
            <div>
                <div id="session-label">
                    <button id="session-decrement">&darr;</button>
                    <div id="session-length">25</div>
                    <button id="session-increment">&uarr;</button>
                </div>
                <div id="break-label">
                    <button id="break-decrement">&darr;</button>
                    <div id="break-length">5</div>
                    <button id="break-increment">&uarr;</button>
                </div>
                <div id="timer-label">
                    <div>Session</div>
                    <div id="time-left">24:59</div>
                    <div id="controls">
                        <div id="start_stop"></div>
                        <div id="reset"></div>
                    </div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Clock25 />, document.getElementById('root'));