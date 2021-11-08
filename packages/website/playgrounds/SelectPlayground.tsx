import { H6, Select } from '@finetwork/ui'

import { useState } from 'react'

const newOptions = [
  {
    id: 4,
    label: 'menganito',
  },
  {
    id: 6,
    label: 'miguelito',
  },
  {
    id: 7,
    label: 'agapito',
  },
]
const classicOptions = [
  { id: 1, label: 'pepito' },
  { id: 2, label: 'manolito' },
]
const allOptions = [...newOptions, ...classicOptions]

function debounce(fn: any, delay: number) {
  let timeoutId: any
  function debounced(...args: any) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      fn(...args)
    }, delay)
  }
  return debounced
}

export const SelectPlayground = () => {
  const [value, setValue] = useState<any>()
  const [options, setOptions] = useState<any>([])
  const [isLoading, setIsLoading] = useState(false)
  const handleChange = async (inputValue: string) => {
    if (!inputValue || inputValue === '') {
      return setOptions([])
    }
    setIsLoading(true)
    const newOptions: any = await new Promise((resolve) =>
      setTimeout(() => {
        resolve(filterOptions(inputValue))
      }, 1000)
    )
    setOptions(newOptions)
    setIsLoading(false)
  }

  const filterOptions = (inputValue: string) => {
    return allOptions.filter(
      (option: any) =>
        String(option.id)
          .toLowerCase()
          .includes(inputValue.trim().toLowerCase()) ||
        option.label.toLowerCase().includes(inputValue.trim().toLowerCase())
    )
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      Value: {JSON.stringify(value)}
      <div style={{ zIndex: 2 }}>
        <Select
          options={allOptions}
          value={value}
          onSelect={(option: any) => setValue(option)}
          // onInputChange={debounce(handleChange, 1000)}
          kind="secondary"
          isLoading={isLoading}
          placeholder="Names"
          searchable={false}
        />
      </div>
      <div style={{ zIndex: 1 }}>
        Names
        <Select
          id="names"
          options={options}
          value={value}
          onSelect={(option: any) => setValue(option)}
          onInputChange={debounce(handleChange, 1000)}
          kind="secondary"
          isLoading={isLoading}
          placeholder="Type to search... (Menganito, Miguelito, Agapito, Pepito, Manolito)"
        />
      </div>
    </div>
  )
}
