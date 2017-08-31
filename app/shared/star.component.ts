import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'pm-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;

    @Output() ratingClicked : EventEmitter<string> = 
            new EventEmitter<string>();

    ngOnChanges(): void {
        // Convert x out of 5 starts
        // to y out of 86px width
        this.starWidth = this.rating * 86 / 5;
    }

    onClick() {
        //console.log(`event clicked ${this.rating}`);
        //we will raises the event
        this.ratingClicked.emit(`event clicked ${this.rating}`);
    }
}


