import './styles.css';

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
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
    const timerBlock = document.querySelector(`${this.selector}`);
    const plugin = {
      day: timerBlock.children[0].firstElementChild,
      hour: timerBlock.children[1].firstElementChild,
      minute: timerBlock.children[2].firstElementChild,
      second: timerBlock.children[3].firstElementChild,
};

            if (this.targetDate <= new Date()) {
            plugin.day.textContent =    "00";
            plugin.hour.textContent =   "00";
            plugin.minute.textContent = "00";
            plugin.second.textContent = "00";
            return;
        }
        
            let remainingTime = this.convertTime(this.targetDate - new Date());
            plugin.day.textContent = remainingTime.days;
            plugin.hour.textContent = remainingTime.hours;
            plugin.minute.textContent = remainingTime.mins;
            plugin.second.textContent = remainingTime.secs;
        

    }

    startCount() {
        const timerActivity = setInterval(() => {
            const timerBlock = document.querySelector(`${this.selector}`);
  const plugin = {
      day: timerBlock.children[0].firstElementChild,
      hour: timerBlock.children[1].firstElementChild,
      minute: timerBlock.children[2].firstElementChild,
      second: timerBlock.children[3].firstElementChild,
};

            if (this.targetDate <= new Date()) {
                clearInterval(timerActivity);
                return;
     }
            let remainingTime = this.convertTime(this.targetDate - new Date());
            plugin.day.textContent = remainingTime.days;
            plugin.hour.textContent = remainingTime.hours;
            plugin.minute.textContent = remainingTime.mins;
            plugin.second.textContent = remainingTime.secs;
            
        }, 1000);
    }
};


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 1, 2021'),
});


