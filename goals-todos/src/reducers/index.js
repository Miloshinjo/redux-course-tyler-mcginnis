// this file's purpose is to export all of our reducers after we've used combineReducers()

import { combineReducers } from 'redux'

import todos from './todos'
import loading from './loading'
import goals from './goals'

export default combineReducers({
  todos,
  goals,
  loading
})