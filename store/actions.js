import firebaseApp from '~/firebaseapp'
import { firebaseAction } from 'vuexfire'
import moment from 'moment'


function _uploadImage (file) {
  let ref = firebaseApp.storage().ref().child('workouts')
  return ref.child(file.name).put(file).then(snapshot => {
    return snapshot.ref.getDownloadURL()
  })
}


export default {
  uploadImages ({state}, files) {
    return Promise.all(files.map(_uploadImage))
  },
  registerPost ({commit, state}, posting) {
    if (!posting) {
      return
    }
    return firebaseApp.database().ref('posting').push(posting)
  },
  bindFirebaseReferences: firebaseAction(({state, commit, dispatch}, user) => {
    let db = firebaseApp.database()
    let postingRef = db.ref(`/posting`)

    dispatch('bindFirebaseReference', {reference: postingRef, toBind: 'posting'}).then(() => {
      commit('setPostingRef', postingRef)
    })
  }),
  /**
   * Generic binder of the firebase reference to the given key of the store's state
   * Checks if the value already exists in the database, otherwise will set it with the default store's state before binding
   * @param {object} store
   */
  bindFirebaseReference: firebaseAction(({bindFirebaseRef, state}, {reference, toBind}) => {
    return reference.once('value').then(snapshot => {
      if (!snapshot.val()) {
        reference.set(state[toBind])
      }
      bindFirebaseRef(toBind, reference)
    })
  }),
  deletePost ({state}, ev) {
    let db = firebaseApp.database()
    let postingRef = db.ref(`/posting`)
    postingRef.child(ev).remove()
  },
}
