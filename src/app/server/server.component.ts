import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    @Input('serverElement') server: {
        name: string;
        content: string;
        type: 'server' | 'blueprint';
    }
    @Input('serverIndex') index: number;

    @Output('indexToDelete') ToDelete =  new EventEmitter();


    deleteServer () {
        console.log(this.index);
        this.ToDelete.emit(this.index);
    }

    

}