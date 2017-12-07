import * as Contentful from 'contentful'
import _ from 'lodash'
import AppStore from '../Store/AppStore'
import {CONFIG} from '../config'

export const getStore = (callback) => {

    const cms = Contentful.createClient({
        space: CONFIG.space_id,
        accessToken: CONFIG.ACCESS_TOKEN
    })

    cms.getEntries().then((response) => {
        console.log(response.items)
        const songs = _.filter(response.items, (item) => item.sys.contentType.sys.id === 'song')
        const albums = _.filter(response.items, (item) => item.sys.contentType.sys.id === 'album')

        let sections = _.filter(response.items, (item) => item.sys.contentType.sys.id === 'section')
        sections = _.sortBy(sections, [(section) => section.fields.order], ['asc'])

        AppStore.data.songs = songs
        AppStore.data.sections = sections
        AppStore.data.albums = albums

        AppStore.data.ready = true 
        AppStore.emitChange()

        if (callback) {
            callback(false, AppStore)
        }

    })
}