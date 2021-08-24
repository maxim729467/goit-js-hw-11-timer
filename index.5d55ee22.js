// import "./styles.css";
class $2ff1f906cd8af8d3$var$CountdownTimer {
    constructor({ selector: selector , targetDate: targetDate  }){
        this._elements = this._getElements(selector);
        this._targetDate = targetDate;
        this._init();
        this._startCount();
    }
    _getElements(timerId) {
        const refs = {
            dayCell: document.querySelector(`${timerId} [data-value="days"]`),
            hourCell: document.querySelector(`${timerId} [data-value="hours"]`),
            minCell: document.querySelector(`${timerId} [data-value="mins"]`),
            secCell: document.querySelector(`${timerId} [data-value="secs"]`)
        };
        return refs;
    }
    _convertTime(time) {
        const pad = function(value) {
            return String(value).padStart(2, "0");
        };
        const calculatedTime = function(time) {
            const days = pad(Math.floor(time / 86400000));
            const hours = pad(Math.floor(time % 86400000 / 3600000));
            const mins = pad(Math.floor(time % 3600000 / 60000));
            const secs = pad(Math.floor(time % 60000 / 1000));
            return {
                days: days,
                hours: hours,
                mins: mins,
                secs: secs
            };
        };
        return calculatedTime(time);
    }
    _initVals() {
        let remainingTime = this._convertTime(this._targetDate - new Date());
        this._elements.dayCell.textContent = remainingTime.days;
        this._elements.hourCell.textContent = remainingTime.hours;
        this._elements.minCell.textContent = remainingTime.mins;
        this._elements.secCell.textContent = remainingTime.secs;
    }
    _init() {
        const passedDateVal = "00";
        if (this._targetDate <= new Date()) {
            this._elements.dayCell.textContent = passedDateVal;
            this._elements.hourCell.textContent = passedDateVal;
            this._elements.minCell.textContent = passedDateVal;
            this._elements.secCell.textContent = passedDateVal;
            return;
        }
        this._initVals();
    }
    _startCount() {
        const timerActivity = setInterval(()=>{
            if (this._targetDate <= new Date()) {
                clearInterval(timerActivity);
                return;
            }
            this._initVals();
        }, 1000);
    }
}
const $2ff1f906cd8af8d3$var$timer = new $2ff1f906cd8af8d3$var$CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Jun 1, 2022")
});


//# sourceMappingURL=index.5d55ee22.js.map
