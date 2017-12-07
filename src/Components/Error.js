import React, {Component} from 'react'

export default class Error extends Component {
    componentDidMount() {
        
    }
    render() {
        const bg_style =  {
                backgroundColor: '#111111',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1000
              }
        const board_style = {
           
            position: 'absolute',
            top: '50%',
            left: '50%',
            height: '150px',
            width: '500px',
            margin: '-75px 0 0 -250px',
            padding: '20px',
            font: '75px/75px Monoton, cursive',
            textAlign: 'center',
            textTransform: 'uppercase',
            textShadow: '0 0 80px red, 0 0 30px FireBrick, 0 0 6px DarkRed',
            color: 'red'
        }
        const error_style = {
                color: '#fff',
                textShadow: '0 0 80px #ffffff, 0 0 30px #008000, 0 0 6px #0000ff'
              }
        return (
            <div style={bg_style}>
                <div style={board_style}>
                    <p id="error" style={error_style}>error</p>
                    <p id="code">404</p>
                </div>
            </div>
        )
    }
}