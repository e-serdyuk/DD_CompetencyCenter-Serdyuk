var React = require('react');
var ReactDOM = require('react-dom');

var Dispatcher = require('flux').Dispatcher;
var EventEmitter = require('events').EventEmitter;

// Компоненты flux архитектуры:

//Dispatcher / Диспетчер — принимает Действия и рассылает нагрузку зарегистрированным обработчикам
var dispatcher = new Dispatcher;

//Actions / Действия — хелперы, упрощающие передачу данных Диспетчеру
function emitClick() {
    dispatcher.dispatch({
        type: 'STYLE'
    })
}

//Stores / Хранилища — контейнеры для состояния приложения и бизнес-логики в обработчиках, зарегистрированных в Диспетчере
class AppStore extends EventEmitter {

    handleActions(action) {
        switch (action.type) {
            case 'STYLE': {
                this.emit('changeStyle');
                break;
            }
        }
    }
}

const appStore = new AppStore;
// привязка handleActions к классу appStore позволяет ссылаться на него с помощью this
dispatcher.register(appStore.handleActions.bind(appStore));

// Controller Views / Представления — React-компоненты, которые собирают состояние хранилищ и передают его дочерним компонентам
// через свойства

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            changeStyle: false
        }
    }

    clickHandler() {
        emitClick();
    }

    componentDidMount() {

        var self = this;
        appStore.on('changeStyle', function () {
            self.setState({ changeStyle: !self.state.changeStyle });
        })
    }
    render() {
        return (
                <div>
                      <button onClick={this.clickHandler} >Click me</button>
                      <div className={this.state.changeStyle ? 'div_style' : ''}></div>
                </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));