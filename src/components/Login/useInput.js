import { useCallback, useState } from 'react'

const useInput = (initialForm) => {
    const [form, setInput] = useState(initialForm)

    //onChange
    const onChange = useCallback((e) => {
        const { name, value } = e.target
        setInput((form) => ({
            ...form,
            [name]: value,
        }))
    }, [])
    //reset
    const reset = useCallback(() => setInput(initialForm), [initialForm])
    return [form, onChange, reset]
}
export default useInput
