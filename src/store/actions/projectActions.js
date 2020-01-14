export const createProject=(projects)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        dispatch({type:'CREATE_PROJECT', projects});
    }
}