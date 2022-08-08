class Clock25 extends React.Component {
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (e) {

        if (e.target.id == "session-decrement") {
            if (document.getElementById("session-length").innerText > 1) {
                document.getElementById("session-length").innerText -= 1;
            }
        } else if (e.target.id == "session-increment") {
            if (document.getElementById("session-length").innerText < 60) {
                document.getElementById("session-length").innerText = parseInt(document.getElementById("session-length").innerText) + 1;
            }
        } else if (e.target.id == "break-decrement") {
            if (document.getElementById("break-length").innerText > 1) {
                document.getElementById("break-length").innerText -= 1;
            }
        } else if (e.target.id == "break-increment") {
            if (document.getElementById("break-length").innerText < 60) {
                document.getElementById("break-length").innerText = parseInt(document.getElementById("break-length").innerText) + 1;
            }
        } else if (e.target.id == "start_stop") {

        } else if (e.target.id == "reset") {

        }
    }
    render () {
        return(
            <div>
                <div class="controls">
                    <div id="session-label" class="controls">LENGTH:&nbsp;
                        <button id="session-decrement" onClick={this.handleClick}>&darr;</button>
                        &nbsp;<div id="session-length">25</div>&nbsp;
                        <button id="session-increment" onClick={this.handleClick}>&uarr;</button>
                        &nbsp;min
                    </div>
                    <div id="break-label" class="controls">BREAK:&nbsp;
                        <button id="break-decrement" onClick={this.handleClick}>&darr;</button>
                        &nbsp;<div id="break-length">5</div>&nbsp;
                        <button id="break-increment" onClick={this.handleClick}>&uarr;</button>
                        &nbsp;min
                    </div>
                </div>
                
                <div id="timer-label">
                    <div class="controls">
                        <div id="start_stop" onClick={this.handleClick}><i class="fa fa-pause"></i></div>
                        <div id="reset" onClick={this.handleClick}><i class="fa fa-stop"></i></div>
                    </div>
                    <div id="time-left">24:59</div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Clock25 />, document.getElementById('root'));