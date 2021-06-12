import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Header } from './Header'
import { App } from './App'

const root = document.getElementById('root')
const hoge = document.getElementById('hoge')
ReactDOM.render(<Header />, root)
ReactDOM.render(<App />, hoge)
