export const sampleAction = (msg) => {
    return (dispatch, getState) => {
         // async stuff 
         setTimeout(()=>{
            console.log('from set time out')
            console.log(getState())
            dispatch({
                type: 'SAMPLE_ACTION',
                msg
            })
         },2000)
         
    }
}

// export const createProject = (project) => {
//     return (dispatch, getState, { getFirebase, getFirestore }) => {
//         // make async call to db 
//         const fireStore = getFirestore();
//         const profile = getState().firebase.profile; // access to profile 
//         const authorId = getState().firebase.auth.uid; // get user id 

//         fireStore.collection('projects').add({
//             ...project,
//             authorFirstName: profile.firstName,
//             authorLastName: profile.lastName,
//             aurhorId: authorId,
//             createdAt: new Date()
//         }).then(() => {
//             dispatch({
//                 type: 'CREATE_PROJECT',
//                 project: project
//             })
//         }).catch((err) => {
//             dispatch({
//                 type: 'CREATE_PROJECT_ERROR',
//                 err: err
//             })
//         })
//     }
// }