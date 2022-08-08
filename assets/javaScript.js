class Clock25 extends React.Component {
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.renderTime = this.renderTime.bind(this);
    }
    handleClick (e) {
        let currTime = Date.now();

        if (e.target.id == "session-decrement") {
            if (document.getElementById("session-length").innerText > 1) {
                document.getElementById("session-length").innerText -= 1;
                if (document.getElementById("session-length").innerText < 10) {
                    document.getElementById("session-length").innerText = "0" + document.getElementById("session-length").innerText;
                    document.getElementById("time-left").innerText = document.getElementById("session-length").innerText + ":00";
                } else {
                    document.getElementById("time-left").innerText = document.getElementById("session-length").innerText + ":00";
                }
            }
        } else if (e.target.id == "session-increment") {
            if (document.getElementById("session-length").innerText < 60) {
                document.getElementById("session-length").innerText = parseInt(document.getElementById("session-length").innerText) + 1;
                if (document.getElementById("session-length").innerText < 10) {
                    document.getElementById("session-length").innerText = "0" + document.getElementById("session-length").innerText;
                    document.getElementById("time-left").innerText = document.getElementById("session-length").innerText + ":00";
                } else {
                    document.getElementById("time-left").innerText = document.getElementById("session-length").innerText + ":00";
                }
            }
        } else if (e.target.id == "break-decrement") {
            if (document.getElementById("break-length").innerText > 1) {
                document.getElementById("break-length").innerText -= 1;
                if (document.getElementById("break-length").innerText < 10) {
                    document.getElementById("break-length").innerText = "0" + document.getElementById("break-length").innerText;
                }
            }
        } else if (e.target.id == "break-increment") {
            if (document.getElementById("break-length").innerText < 60) {
                document.getElementById("break-length").innerText = parseInt(document.getElementById("break-length").innerText) + 1;
                if (document.getElementById("break-length").innerText < 10) {
                    document.getElementById("break-length").innerText = "0" + document.getElementById("break-length").innerText;
                }
            }
        } else if (e.target.id == "start_stop" || e.target.id == "play-button") {
            if (document.getElementById("play-button").classList.contains("fa-play")) {
                document.getElementById("play-button").classList.replace("fa-play", "fa-pause");
                setTimeout(this.renderTime(currTime), 1000);
                
            } else {
                document.getElementById("play-button").classList.replace("fa-pause", "fa-play");
            }
        } else if (e.target.id == "reset") {

        }
    }
    renderTime (currTime) {
        const timeLabel = document.getElementById("time-left");
        const sessionTime = document.getElementById("session-length").innerText;
        let intervalId = setInterval(() => {
            if (Date.now() <= currTime + (sessionTime * 60 * 1000)) {
                timeLabel.innerText = Math.floor((sessionTime) - ((Date.now() - currTime) / 60000.)) + ":" + Math.round((sessionTime * 60 * 1000) - (Date.now() - currTime) / 1000.) % 60;
            } else {
                clearInterval(intervalId);
            }
        }, 1000);
    }
    render () {
        return(
            <div>
                <div className="controls">
                    <div id="session-label" className="controls">LENGTH:&nbsp;
                        <button id="session-decrement" onClick={this.handleClick}>&darr;</button>
                        &nbsp;<div id="session-length">25</div>&nbsp;
                        <button id="session-increment" onClick={this.handleClick}>&uarr;</button>
                        &nbsp;min
                    </div>
                    <div id="break-label" className="controls">BREAK:&nbsp;
                        <button id="break-decrement" onClick={this.handleClick}>&darr;</button>
                        &nbsp;<div id="break-length">05</div>&nbsp;
                        <button id="break-increment" onClick={this.handleClick}>&uarr;</button>
                        &nbsp;min
                    </div>
                </div>
                
                <div id="timer-label">
                    <div className="controls">
                        <button id="start_stop" onClick={this.handleClick}><i id="play-button" className="fa fa-play" onClick={this.handleClick}></i></button>
                        <button id="reset" onClick={this.handleClick}><i className="fa fa-stop"></i></button>
                    </div>
                    <div id="time-left">25:00<audio id="break-sound" src="https://actions.google.com/sounds/v1/alarms/spaceship_alarm.ogg"></audio></div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Clock25 />, document.getElementById('root'));