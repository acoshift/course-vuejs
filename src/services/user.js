import firebase from 'firebase'
// import axios from 'axios'

const get = (id) => {
  // return axios.get(`https://twitty-acoshift.firebaseio.com/user/${id}.json`)
  //   .then((res) => {
  //     return res.data
  //   })
  return firebase.database()
    .ref(`user/${id}`)
    .once('value')
    .then((snapshot) => {
      return snapshot.val()
    })
}

const set = (id, data) => {
  return firebase.database()
    .ref(`user/${id}`)
    .set(data)
}

const list = (callback) => {
  firebase.database().ref('user')
    .on('value', (snapshots) => {
      const result = []
      snapshots.forEach((snapshot) => {
        const user = snapshot.val()
        user.$id = snapshot.key
        result.push(user)
      })
      callback(result)
    })
}

const subscribe = (id, callback) => {
  firebase.database()
    .ref(`user/${id}`)
    .on('value', (snapshot) => {
      callback(snapshot.val())
    })
}

export default {
  get,
  set,
  subscribe,
  list
}
