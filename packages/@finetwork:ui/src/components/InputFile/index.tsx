import { Enhancer, KINDS, SIZES, KIND } from '../../types'
import * as React from 'react'
import { InputFileContainer } from './styled'
import { Paragraph3, Paragraph4, Paragraph6 } from '../Typography'
import { ButtonComponent } from '../Button/types'
import { Button } from '../Button'
import { PlusIcon } from '../icons'

type Props = {
  kind?: KINDS
}

type InputFileState = {
  files: FileList | null
}
const initialState: InputFileState = {
  files: null,
}
const InputFileContext = React.createContext<InputFileState>(null)
const useInputFile = () => {
  const context = React.useContext(InputFileContext)
  console.log(context)
  if (!context) {
    throw new Error('useInputFile must be used within an InputFile')
  }
  return context
}

export const InputFile: React.FC<Props> = ({
  kind = KIND.primary,
  children,
}) => {
  const [files, setFiles] = React.useState<FileList>(null)

  const handleKeyPress: React.KeyboardEventHandler<HTMLLabelElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      e.stopPropagation()
      e.currentTarget.querySelector('input')?.click()
    }
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files
    if (!files) return
    setFiles(e.currentTarget.files)
  }

  return (
    <InputFileContext.Provider value={{ files }}>
      <InputFileContainer kind={kind} tabIndex={0} onKeyPress={handleKeyPress}>
        <input type="file" hidden onChange={handleChange} />
        {children}
      </InputFileContainer>
    </InputFileContext.Provider>
  )
}

export const InputFileTitle = (props) => {
  const { files } = useInputFile()
  if (files) return null
  return <Paragraph3 {...props} />
}
export const InputFileDescription = (props) => {
  const { files } = useInputFile()
  if (files) return null
  return <Paragraph6 {...props} />
}
export const InputFileLoaded = (props) => {
  const { files } = useInputFile()
  if (!files) return null
  return <Paragraph4 {...props} css={{ color: '$success' }} />
}
export const InputFileButton: ButtonComponent = (props) => {
  const { files } = useInputFile()
  if (files) return null
  return (
    <Button
      {...props}
      shape="circle"
      aria-hidden="true"
      tabIndex={-1}
      css={{ pointerEvents: 'none' }}
    >
      <PlusIcon />
    </Button>
  )
}
