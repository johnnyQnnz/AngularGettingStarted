import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number = 4.5;
    starWidth: number;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
    onClick() {
        this.notify.emit('clicked');
    }
}