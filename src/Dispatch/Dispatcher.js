import { Dispatcher } from 'flux'
import { getStore } from '../Actions/Actions'

const Dispatcher = new Dispatcher()

Dispatcher.register((payload) => {

    let action = payload.action

    switch(action) {
        case 'get-app-store':
            getStore()
            break

        default:
            return true 
    }

    return true
    
})

export default AppDispatcher

