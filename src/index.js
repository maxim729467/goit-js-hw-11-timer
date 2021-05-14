import './styles.css';

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.targetDate = targetDate;

        this.dayCell = document.querySelector(`${selector} [data-value="days"]`);
        this.hourCell = document.querySelector(`${selector} [data-value="hours"]`);
        this.minCell = document.querySelector(`${selector} [data-value="mins"]`);
        this.secCell = document.querySelector(`${selector} [data-value="secs"]`);

        this.init();
        this.startCount();
    }

    convertTime(time) {
const pad = function (value) {
                return String(value).padStart(2, '0');
        };
        
         const calculatedTime = function (time) {
        const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

        return {days, hours, mins, secs };
        };
        
        return calculatedTime(time);

    }

    init() {
        const passedDateVal = '00';
            if (this.targetDate <= new Date()) {
            this.dayCell.textContent = passedDateVal;
            this.hourCell.textContent = passedDateVal;
            this.minCell.textContent = passedDateVal;
            this.secCell.textContent = passedDateVal;
            return;
        }
        
            let remainingTime = this.convertTime(this.targetDate - new Date());
            this.dayCell.textContent = remainingTime.days;
            this.hourCell.textContent = remainingTime.hours;
            this.minCell.textContent = remainingTime.mins;
            this.secCell.textContent = remainingTime.secs;
        

    }

    startCount() {
        const timerActivity = setInterval(() => {

            if (this.targetDate <= new Date()) {
                clearInterval(timerActivity);
                return;
     }
            let remainingTime = this.convertTime(this.targetDate - new Date());
            this.dayCell.textContent = remainingTime.days;
            this.hourCell.textContent = remainingTime.hours;
            this.minCell.textContent = remainingTime.mins;
            this.secCell.textContent = remainingTime.secs;
            
        }, 1000);
    }
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 1, 2021'),
});


