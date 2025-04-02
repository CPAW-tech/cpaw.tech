import { atom } from 'jotai'

export const formDataAtom = atom({
    name: {
        fname: '',
        lname: '',
    },
    username: '',
    email: '',
    password: '',
    isNonProfit: false,
})

export const firstnameAtom = atom(
    (get) => {
        return get(formDataAtom).name.fname
    },
    (get, set, value) => {
        let formData = get(formDataAtom)
        const updatedFormData = {
            ...formData,
            name: { ...formData.name, fname: value },
        }
        set(formDataAtom, updatedFormData)
    }
)

export const lastnameAtom = atom(
    (get) => {
        return get(formDataAtom).name.lname
    },
    (get, set, value) => {
        let formData = get(formDataAtom)
        const updatedFormData = {
            ...formData,
            name: { ...formData.name, lname: value },
        }
        set(formDataAtom, updatedFormData)
    }
)

export const usernameAtom = atom(
    (get) => {
        return get(formDataAtom).username
    },
    (get, set, value) => {
        const updatedFormData = { ...get(formDataAtom), username: value }
        set(formDataAtom, updatedFormData)
    }
)

export const emailAtom = atom(
    (get) => {
        return get(formDataAtom).email
    },
    (get, set, value) => {
        const updatedFormData = { ...get(formDataAtom), email: value }
        set(formDataAtom, updatedFormData)
    }
)

export const passwordAtom = atom(
    (get) => {
        return get(formDataAtom).password
    },
    (get, set, value) => {
        const updatedFormData = { ...get(formDataAtom), password: value }
        set(formDataAtom, updatedFormData)
    }
)

export const isNonProfitAtom = atom(
    (get) => {
        return get(formDataAtom).isNonProfit
    },
    (get, set, value) => {
        const updatedFormData = { ...get(formDataAtom), isNonProfit: value }
        set(formDataAtom, updatedFormData)
    }
)
