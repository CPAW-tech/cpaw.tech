// import { createContext, useContext, useReducer } from 'react'

// const UserContext = createContext(null)

// const UserDispatchContext = createContext(null)

// export function UserProvider({ children }) {
//     const [user, dispatch] = useReducer(userReducer, defaultUser)

//     return (
//         <>
//             <UserContext.Provider value={user}>
//                 <UserDispatchContext.Provider value={dispatch}>
//                     {children}
//                 </UserDispatchContext.Provider>
//             </UserContext.Provider>
//         </>
//     )
// }

// export function useUser() {
//     return useContext(UserContext)
// }

// export function useUserDispatch() {
//     return useContext(UserDispatchContext)
// }

// export function isValidUserContext(user) {
//     return user.exp > Date.now()
// }

// // building this in case the user gets more context to change
// // first and last name included?
// function userReducer(user, action) {
//     switch (action.type) {
//         case 'refresh': // assume potential change of all values
//             return {
//                 username: action.username,
//                 isNonProfit: action.isNonProfit,
//                 exp: action.exp,
//             }
//         default:
//             throw Error('Unknown action: ' + action.type)
//     }
// }

// const defaultUser = {
//     username: null,
//     isNonProfit: false,
//     exp: 0,
// }
