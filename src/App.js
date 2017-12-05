import React, { Component } from 'react'
import './App.css'
import './Core.css'
// import { BrowserRouter, Route } from 'react-router-dom'
// import AppStore from './Store/AppStore'
// import routes from './routes'
import Home from './Components/Home'
import * as Contentful from 'contentful'
import _ from 'lodash'
import {CONFIG} from './config'



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: [],
      sections: []
    }
  }
  componentWillMount() {
    let sections = []
    let songs = []

    const cms = Contentful.createClient({
        space: CONFIG.space_id,
        accessToken: CONFIG.ACCESS_TOKEN
    })

    cms.getEntries().then((response) => {
        console.log(response.items)
        songs = _.filter(response.items, (item) => item.sys.contentType.sys.id === 'song')
        sections = _.filter(response.items, (item) => item.sys.contentType.sys.id === 'section')
        sections = _.sortBy(sections, [(section) => section.fields.order], ['asc'])

        console.log(sections)
        console.log(songs)

        this.setState({
          songs: songs,
          sections: sections
        })
    })
  }
  componentDidMount() {

  }
  render() {
    
    return (
      <div className="App">
        <Home songs={this.state.songs} sections={this.state.sections} />
      </div>
    )
  }
}


