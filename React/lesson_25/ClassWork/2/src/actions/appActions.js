import dispatcher from '../dispatcher.js'


export function Start() {
    dispatcher.dispatch({ type: 'START'})
}
export function Stop() {
    dispatcher.dispatch({ type: 'STOP'})
}
export function Reset() {
    dispatcher.dispatch({ type: 'RESET'})
}