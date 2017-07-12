import { EventEmitter } from 'events'
import dispatcher from '../dispatcher.js'


class AppStore extends EventEmitter {
    constructor() {
        super();
        this.count = 0;
    }

    getInitialCount() {
        return this.count
    }

    countClicks() {
        this.count++;
      } 
    ResetFunc(){
        this.count = 0;
    }

    handleActions(action) {
        
        switch (action.type) {
            case "START": { 
                this.emit('countStart')
                break; 
            } 
            case "STOP": { 
                this.emit('countStop')
                break; 
            }
            case "RESET": { 
                this.emit('countReset')
                break; 
            }
        }
    } 
}

const appStore = new AppStore();

dispatcher.register(appStore.handleActions.bind(appStore));

module.exports = appStore;