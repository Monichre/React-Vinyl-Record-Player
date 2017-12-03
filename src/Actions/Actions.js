import * as Contentful from 'contenful'
import _ from 'lodash'
import AppStore from '../Store/AppStore'
import CONFIG from '../config'

const getStore = () => {
    let sections = []
    let songs = []

    const cms = Contentful.createClient({
        space: CONFIG.space_id,
        accessToken: CONFIG.ACCESS_TOKEN
    })

    cms.getEntries().then((response) => {
        console.log(response)
    })
}