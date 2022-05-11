import * as Portal from '@radix-ui/react-portal'
import { Enhancer, KINDS, SIZES, KIND } from '../../types'
import * as React from 'react'
import {
  Container,
  DraggableZone,
  ImagePreview,
  InputFileContainer,
  InputFileContainerPreview,
  InputFileDataContainer,
  InputFilePreview,
  StyledInputFileButton,
  StyledInputFileContent,
} from './styled'
import {
  H4,
  Paragraph3,
  Paragraph4,
  Paragraph5,
  Paragraph6,
} from '../Typography'
import { ButtonComponent } from '../Button/types'
import { Button } from '../Button'
import { PlusIcon } from '../icons'
import { red } from '@radix-ui/colors'

type Props = React.ComponentProps<'input'> & {
  kind?: KINDS
  isImage?: boolean
}
type InputFileState = {
  files: File[] | null
  isImage: boolean
  removeFile: (index: number) => void
  inputRef: React.MutableRefObject<HTMLInputElement>
  isDragging: boolean
  draggableZoneRef: React.MutableRefObject<HTMLDivElement>
}
// const initialState: InputFileState = {
//   files: null,
// }
const InputFileContext = React.createContext<InputFileState>(null)
const useInputFile = () => {
  const context = React.useContext(InputFileContext)
  if (!context) {
    throw new Error('useInputFile must be used within an InputFile')
  }
  return context
}

export const InputFile: React.FC<Props> = ({
  kind = KIND.primary,
  isImage = false,
  children,
  ...props
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const draggableZoneRef = React.useRef<HTMLDivElement>(null)
  const [files, setFiles] = React.useState<File[]>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  const handleKeyPress: React.KeyboardEventHandler<HTMLLabelElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      e.stopPropagation()
      e.currentTarget.querySelector('input')?.click()
    }
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files
    if (!files || !files.length) return
    setFiles((prev) =>
      prev ? [...prev, ...Array.from(files)] : Array.from(files)
    )
  }

  const removeFile = (index) => {
    const input = inputRef.current
    if (!input || !input.files || !files.length) return
    const filesArray = Array.from(input.files).filter((_, i) => index !== i)
    setFiles(filesArray.length ? filesArray : null)
  }

  React.useEffect(() => {
    const input = inputRef.current
    if (!input || !files) return
    const fileBuffer = new DataTransfer()
    Array.from(files).forEach((file) => {
      fileBuffer.items.add(file)
    })
    input.files = fileBuffer.files
  }, [files])

  return (
    <InputFileContext.Provider
      value={{
        files,
        isImage,
        removeFile,
        inputRef,
        draggableZoneRef,
        isDragging,
      }}
    >
      <Container>
        <InputFileContainer
          kind={kind}
          tabIndex={!!files && files.length > 0 ? -1 : 0}
          onKeyPress={handleKeyPress}
          hasFiles={!!files && files.length > 0}
          onDragOver={(e) => {
            e.preventDefault()
            setIsDragging(true)
          }}
          onDragLeave={(e) => {
            e.preventDefault()
            setIsDragging(false)
          }}
          onDrop={(e) => {
            e.preventDefault()
            setIsDragging(false)
            const files = e.dataTransfer.files
            if (!files || files.length === 0) return
            setFiles((prev) =>
              prev ? [...prev, ...Array.from(files)] : Array.from(files)
            )
          }}
          isDragging={isDragging}
        >
          <input
            {...props}
            type="file"
            hidden
            onChange={handleChange}
            ref={inputRef}
          />
          {children}
        </InputFileContainer>
        <DraggableZone
          ref={draggableZoneRef}
          css={{
            pointerEvents: 'none',
          }}
        />
      </Container>
    </InputFileContext.Provider>
  )
}

export const InputFileContent = (props) => {
  const { files } = useInputFile()
  if (files) return null
  return (
    <StyledInputFileContent
      {...props}
      multipleChildren={Array.isArray(props.children)}
    />
  )
}

export const InputFileDraggableZone = ({ children }) => {
  const { isDragging, draggableZoneRef } = useInputFile()
  if (!isDragging) return null
  return <Portal.Root containerRef={draggableZoneRef}>{children}</Portal.Root>
}

export const InputFileLoaded = (props) => {
  const { files } = useInputFile()
  if (!files) return null
  return props.children
}

export const InputFileData = (props) => {
  const { files } = useInputFile()
  if (!files) return null
  return (
    <InputFileDataContainer {...props}>
      {Array.from(files).map((file, index) => (
        <Paragraph5 key={index}>
          {file.name}, {file.size}
        </Paragraph5>
      ))}
    </InputFileDataContainer>
  )
}

export const InputFileImagePreview = ({
  children,
  removeText = 'Remove',
  ...props
}) => {
  const { files, isImage, removeFile } = useInputFile()
  if (!files) return null
  if (!isImage) return null
  return (
    <div>
      {children}
      <InputFileContainerPreview {...props}>
        {Array.from(files).map((file, index) => (
          <InputFilePreview
            key={index}
            aria-label={`Image preview ${file.name}`}
          >
            <Button
              type="button"
              size="small"
              css={{
                $colors$primary: '$colors$error',
                $colors$primary400: red.red9,
                $colors$primary300: red.red8,
              }}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                removeFile(index)
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  e.stopPropagation()
                  removeFile(index)
                }
              }}
            >
              {removeText}
            </Button>
            <ImagePreview
              title={file.name}
              src={URL.createObjectURL(file)}
              alt={file.name}
              width="100%"
            />
          </InputFilePreview>
        ))}
      </InputFileContainerPreview>
    </div>
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

export const InputFileButton: ButtonComponent = (props) => {
  const { files, inputRef } = useInputFile()
  const openSelector = () => {
    if (!inputRef.current) return
    inputRef.current.click()
  }
  return (
    <StyledInputFileButton
      {...props}
      shape="circle"
      aria-hidden="true"
      tabIndex={files ? 0 : -1}
      onClick={openSelector}
      hasFiles={!!files}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          openSelector()
        }
      }}
    />
  )
}
