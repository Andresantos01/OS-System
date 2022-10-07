export const isAuthenticated =  () => {
    //search infos in localStorage for validation user
    const token = localStorage.getItem('token')
    return token ?  true : false
   
}