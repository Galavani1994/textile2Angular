import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';



@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {


    constructor(private renderer: Renderer2) {
    }

    setFocus() {
        this.renderer.selectRootElement('#firstname').focus();
    }


    ngOnInit() {
        this.renderer.selectRootElement('#inp').focus();
    }



}
