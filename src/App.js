import React, { Component } from 'react'
import './App.css'
import './Core.css'
import { BrowserRouter, Route } from 'react-router-dom'
import AppStore from './Store/AppStore'
import AppDispatcher from './Dispatch/Dispatcher'
import routes from './routes'




export default class App extends Component {

  constructor(props) {
		super(props);

		this.state = {
			
		}

	}
	// Add change listeners to stores
	componentDidMount() {
		AppStore.addChangeListener(this._onChange.bind(this))		
	}

	// Remove change listeners from stores
	componentWillUnmount() {
		AppStore.removeChangeListener(this._onChange.bind(this))
	}

	getStore() {
		AppDispatcher.dispatch({
			action: 'get-app-store'
		})
	}
	componentWillMount() {
		this.getStore()
	}

	_onChange() {
		this.setState(AppStore)
	}
  render() {

    const data = AppStore.data
    
      if(!data.ready) {
        this.getStore()
        return <div>LOading</div>
      } else {
        return (
          <BrowserRouter>
            {routes}
          </BrowserRouter>
        )
      }
    
  }
}


