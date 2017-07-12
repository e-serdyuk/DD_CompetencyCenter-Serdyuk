import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.result = 0;
    }
    getResult(){
        return this.result
    }
    plusFunc(num1, num2){
        this.result =  Number(num1) + Number(num2)
    }
    minusFunc(num1, num2){
        this.result = Number(num1) - Number(num2)
    }
    multiFunc(num1, num2) {
        this.result = Number(num1) * Number(num2)
    }
    divideFunc(num1, num2){
        this.result = Number(num1) / Number(num2)
    }

    handleActions(action) {
        switch (action.type) {
            case "PLUS": {
                this.emit('plus');
                break;
            }
            case "MINUS": {
                this.emit('minus');
                break;
            }
            case "MULTIPLICATION": {
                this.emit('multi');
                break;
            }
            case "DIVIDE": {
                this.emit('divide');
                break;
            }
        }
    }
}

const appStore = new AppStore();

dispatcher.register(appStore.handleActions.bind(appStore));

module.exports = appStore;