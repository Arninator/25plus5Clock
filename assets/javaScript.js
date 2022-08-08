class Clock25 extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return(
            <div>
                <div class="controls">
                    <div id="session-label" class="controls">LENGTH: 
                        <button id="session-decrement">&darr;</button>
                        <div id="session-length">25</div>
                        <button id="session-increment">&uarr;</button>
                        min
                    </div>
                    <div id="break-label" class="controls">BREAK: 
                        <button id="break-decrement">&darr;</button>
                        <div id="break-length">5</div>
                        <button id="break-increment">&uarr;</button>
                        min
                    </div>
                </div>
                
                <div id="timer-label">
                    <div class="controls">
                        <div id="start_stop"><i class="fa fa-pause"></i></div>
                        <div id="reset"><i class="fa fa-stop"></i></div>
                    </div>
                    <div id="time-left">24:59</div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Clock25 />, document.getElementById('root'));