import { atom } from 'jotai'

export const createFieldAtom = (formDataAtom, field) => {
    return atom(
        (get) => {
            return get(formDataAtom)[field]
        },
        (get, set, newValue) => {
            const formData = get(formDataAtom)
            set(formDataAtom, { ...formData, [field]: newValue })
        }
    )
}
