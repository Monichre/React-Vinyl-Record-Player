import { Dispatcher } from 'flux'
import { getStore } from '../Actions/Actions'

const Dispatcher = new Dispatcher()

Dispatcher.register((payload) => {
    let action = payload.action
})