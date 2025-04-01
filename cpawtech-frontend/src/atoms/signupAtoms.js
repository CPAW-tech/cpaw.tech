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
        get(formDataAtom).name.fname
    },
    (get, set, value) => {
        let newFormData = get(formDataAtom)
        newFormData.name.fname = value
        set(formDataAtom, newFormData)
    }
)

export const lastnameAtom = atom(
    (get) => {
        get(formDataAtom).name.lname
    },
    (get, set, value) => {
        let newFormData = get(formDataAtom)
        newFormData.name.lname = value
        set(formDataAtom, newFormData)
    }
)

export const usernameAtom = atom(
    (get) => {
        get(formDataAtom).username
    },
    (get, set, value) => {
        let newFormData = get(formDataAtom)
        newFormData.username = value
        set(formDataAtom, newFormData)
    }
)

export const emailAtom = atom(
    (get) => {
        get(formDataAtom).email
    },
    (get, set, value) => {
        let newFormData = get(formDataAtom)
        newFormData.email = value
        set(formDataAtom, newFormData)
    }
)

export const passwordAtom = atom(
    (get) => {
        get(formDataAtom).password
    },
    (get, set, value) => {
        let newFormData = get(formDataAtom)
        newFormData.password = value
        set(formDataAtom, newFormData)
    }
)

export const isNonProfitAtom = atom(
    (get) => {
        get(formDataAtom).isNonProfit
    },
    (get, set, value) => {
        let newFormData = get(formDataAtom)
        newFormData.isNonProfit = value
        set(formDataAtom, newFormData)
    }
)
