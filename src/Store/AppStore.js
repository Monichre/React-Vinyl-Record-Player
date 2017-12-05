import { EventEmitter } from 'events'
import _ from 'lodash'

export default _.extend({}, EventEmitter.prototype, {
    data: {

    },
    emitChange: () => {
        this.emitChange()
    },
    addEventListener: (callback) => {
        this.on('change', callback)
    },
    removeChangeListener: (callback) => {
        this.removeListener('change', callback)
    }

})