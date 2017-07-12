import dispatcher from '../dispatcher'

export function plus() {
    dispatcher.dispatch({ type: 'PLUS'})
}
export function minus() {
    dispatcher.dispatch({ type: 'MINUS'})
}
export function multi() {
    dispatcher.dispatch({ type: 'MULTIPLICATION'})
}
export function divide() {
    dispatcher.dispatch({ type: 'DIVIDE'})
}