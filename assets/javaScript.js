let currTime = 0;
let runTime = 0;

class Clock25 extends React.Component {

    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.renderTime = this.renderTime.bind(this);
    }
    handleClick (e) {

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
                
                currTime = Date.now();
                runTime = (document.getElementById("time-left").innerText.split(":")[0] * 60000) + (document.getElementById("time-left").innerText.split(":")[1] * 1000);
                
                this.renderTime();

                const buttons = document.getElementsByClassName("btn");
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].disabled = true;
                }
            } else {
                document.getElementById("play-button").classList.replace("fa-pause", "fa-play");
                currTime = 0;
            }
        } else if (e.target.id == "reset" || e.target == "reset-button") {
            const buttons = document.getElementsByClassName("btn");
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].disabled = false;
                }
                currTime = 0;

                document.getElementById("session-length").innerText = 25;
                document.getElementById("break-length").innerText = "05";
                document.getElementById("time-left").innerText ="25:00";
        }
    }
    renderTime () {
        const timeLabel = document.getElementById("time-left");

        const sound = document.getElementById("beep");
        sound.currentTime = 0;

        let intervalId = setInterval(() => {
            if (Date.now() <= currTime + runTime) {
                timeLabel.innerText = Math.floor((runTime - (Date.now() - currTime)) / 60000.) < 10 ?  "0" + Math.floor((runTime - (Date.now() - currTime)) / 60000.) : Math.floor((runTime - (Date.now() - currTime)) / 60000.)
                timeLabel.innerText += ":" ;
                timeLabel.innerText += Math.round((runTime - (Date.now() - currTime)) / 1000.) % 60 < 10 ? "0" + Math.round((runTime - (Date.now() - currTime)) / 1000.) % 60 : Math.round((runTime - (Date.now() - currTime)) / 1000.) % 60;

            } else if (currTime == 0) {
                clearInterval(intervalId);
            } else {
                sound.play();

                if (document.getElementById("string-div").innerText == "SESSION") {
                    
                    document.getElementById("string-div").innerText = "BREAK";
                    currTime = Date.now()
                    runTime = document.getElementById("break-length").innerText * 60000;

                    timeLabel.innerText = document.getElementById("break-length").innerText + ":00";
                } else {

                    document.getElementById("string-div").innerText = "SESSION";
                    currTime = Date.now()
                    runTime = document.getElementById("session-length").innerText * 60000;

                    timeLabel.innerText = document.getElementById("session-length").innerText + ":00";
                }
                this.renderTime();
            }
        }, 1000);
        return intervalId;
    }
    render () {
        return(
            <div>
                <div className="controls">
                    <div id="session-label" className="controls">LENGTH:&nbsp;
                        <button id="session-decrement" className="btn" onClick={this.handleClick}>&darr;</button>
                        &nbsp;<div id="session-length">25</div>&nbsp;
                        <button id="session-increment" className="btn" onClick={this.handleClick}>&uarr;</button>
                        &nbsp;min
                    </div>
                    <div id="break-label" className="controls">BREAK:&nbsp;
                        <button id="break-decrement" className="btn" onClick={this.handleClick}>&darr;</button>
                        &nbsp;<div id="break-length">05</div>&nbsp;
                        <button id="break-increment" className="btn" onClick={this.handleClick}>&uarr;</button>
                        &nbsp;min
                    </div>
                </div>
                
                <div id="timer-label">
                    <div className="controls">
                        <button id="start_stop" onClick={this.handleClick}><i id="play-button" className="fa fa-play" onClick={this.handleClick}></i></button>
                        <div id="string-div">SESSION</div>
                        <button id="reset" onClick={this.handleClick}><i id="reset-button" className="fa fa-repeat" onClick={this.handleClick}></i></button>
                    </div>
                    <div id="time-left">
                        25:00
                    </div>
                    <audio id="beep"><source src="sounds/CROWD(LD.WAV" type="audio/mpeg"></source></audio>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Clock25 />, document.getElementById('root'));