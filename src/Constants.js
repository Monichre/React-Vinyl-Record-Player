import React, {Component} from 'react'
import AppStore from './Store/AppStore'
import Main from './Components/Sections/Main'
import Songs from './Components/Sections/Songs'
import Albums from './Components/Sections/Albums'
import Videos from './Components/Sections/Videos'
import Error from './Components/Error'

const data = AppStore.data

export const CONSTANTS = {
    renderProperComponent: (section) => {
        console.log(section)
        if(section.fields.sectionTitle.toLowerCase() === 'songs') {
            return <Songs section={section} songs={data.songs}/>
        } else if (section.fields.sectionTitle.toLowerCase() === 'videos') {
            return <Videos section={section} />
        } else if (section.fields.sectionTitle.toLowerCase() === 'albums') {
            return <Albums section={section} albums={data.albums}/>
        } 
        else if (section.fields.sectionTitle.toLowerCase() === 'home') {
            return <Main section={section} />
        } else {
            return <Error />
        }
    }
}