import {
  CheckIcon,
  ChevronDownIcon,
  H3,
  H6,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from '@finetwork/ui'

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
  const [value, setValue] = useState<any>({
    id: 1,
    label: 'pepito',
  })
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
      <div style={{ zIndex: 2 }}>
        <Select defaultValue="apple">
          <SelectTrigger aria-label="Food">
            <SelectValue />
            <SelectIcon>
              <ChevronDownIcon />
            </SelectIcon>
          </SelectTrigger>
          <SelectContent>
            <SelectScrollUpButton>
              <ChevronDownIcon />
            </SelectScrollUpButton>
            <SelectViewport>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">
                  <SelectItemText>Apple</SelectItemText>
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                </SelectItem>
                <SelectItem value="banana">
                  <SelectItemText>Banana</SelectItemText>
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                </SelectItem>
                <SelectItem value="blueberry">
                  <SelectItemText>Blueberry</SelectItemText>
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                </SelectItem>
                <SelectItem value="grapes">
                  <SelectItemText>Grapes</SelectItemText>
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                </SelectItem>
                <SelectItem value="pineapple">
                  <SelectItemText>Pineapple</SelectItemText>
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                </SelectItem>
              </SelectGroup>

              <SelectSeparator />

              <SelectGroup>
                <SelectLabel>Vegetables</SelectLabel>
                <SelectItem value="aubergine">
                  <SelectItemText>Aubergine</SelectItemText>
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                </SelectItem>
                <SelectItem value="broccoli">
                  <SelectItemText>Broccoli</SelectItemText>
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                </SelectItem>
                <SelectItem value="carrot" disabled>
                  <SelectItemText>Carrot</SelectItemText>
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                </SelectItem>
                <SelectItem value="courgette">
                  <SelectItemText>Courgette</SelectItemText>
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                </SelectItem>
                <SelectItem value="leek">
                  <SelectItemText>leek</SelectItemText>
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                </SelectItem>
              </SelectGroup>

              <SelectSeparator />

              <SelectGroup>
                <SelectLabel>Meat</SelectLabel>
                <SelectItem value="beef">
                  <SelectItemText>Beef</SelectItemText>
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                </SelectItem>
                <SelectItem value="chicken">
                  <SelectItemText>Chicken</SelectItemText>
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                </SelectItem>
                <SelectItem value="lamb">
                  <SelectItemText>Lamb</SelectItemText>
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                </SelectItem>
                <SelectItem value="pork">
                  <SelectItemText>Pork</SelectItemText>
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                </SelectItem>
              </SelectGroup>
            </SelectViewport>
            <SelectScrollDownButton>
              <ChevronDownIcon />
            </SelectScrollDownButton>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
