import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const userAuthAtom = atomWithStorage('userAuth', null)

export const isUserAuthenticatedAtom = atomWithStorage('isAuthenticated', false)

export const setUserAuthAtom = atom(null, (get, set, auth) => {
    set(userAuthAtom, auth)
    set(isUserAuthenticatedAtom, true)
})
