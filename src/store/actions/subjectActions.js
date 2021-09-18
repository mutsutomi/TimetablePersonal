export const createSubject = (subject) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      firestore.collection('subjects').add({
          ...subject,
          studentFirstName: 'Net',
          studentLastName: 'Ninja',
          studentId: 12345,
          createdAt: new Date()
      }).then(() => {
          dispatch({ type: 'CREATE_SUBJECT', subject})
      }).catch((err) => {
          dispatch({ type: 'CREATE_SUBJECT_ERROR', err })
      })

  }
};