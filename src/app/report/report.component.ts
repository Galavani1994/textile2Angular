import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';


@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {


    timeLeft = 60;
    interval;

    startTimer() {
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
            } else {
                this.timeLeft = 60;
            }
        }, 1000);
    }

    pauseTimer() {
        clearInterval(this.interval);
    }

    constructor() {
    }


    ngOnInit() {

    }


}
