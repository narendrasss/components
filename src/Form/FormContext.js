import { createContext, useContext } from 'react'

const FormContext = createContext()

export function useFormContext() {
  const context = useContext(FormContext)
  if (!context)
    throw new Error('Form elements must be used within a form component')
  return context
}

export default FormContext
