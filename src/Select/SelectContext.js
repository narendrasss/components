import { createContext, useContext } from 'react'

const SelectContext = createContext()

export function useSelectContext() {
  const context = useContext(SelectContext)
  if (!context)
    throw new Error('Option elements must be used within a select component')
  return context
}

export default SelectContext
