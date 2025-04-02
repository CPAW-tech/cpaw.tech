import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const userAuthAtom = atomWithStorage('userAuth', null)

export const isUserAuthenticatedAtom = atom((get) => {
    return get(userAuthAtom) != null
})
