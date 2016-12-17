import User from './user'
import Auth from './auth'

const getId = () => Auth.getCurrentUser().uid

const get = () => {
  return User.get(getId())
}

const set = (data) => {
  return User.set(getId(), data)
}

export default {
  get,
  set
}
