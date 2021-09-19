export const createSubject = (subject) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const studentId = getState().firebase.auth.uid;
      firestore.collection('subjects').add({
          ...subject,
          studentFirstName: profile.firstName,
          studentLastName: profile.lastName,
          studentId: studentId,
          createdAt: new Date()
      }).then(() => {
          dispatch({ type: 'CREATE_SUBJECT', subject})
      }).catch((err) => {
          dispatch({ type: 'CREATE_SUBJECT_ERROR', err })
      })

  }
};