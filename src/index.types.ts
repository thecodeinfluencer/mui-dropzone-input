import { CSSProperties } from 'react'
import { DropzoneProps as RDDropzoneProps } from 'react-dropzone'
import type { IconButtonProps } from '@mui/material/IconButton'

type DropzoneProps = Omit<RDDropzoneProps, 'onDrop'>

export type MuiDropzoneInputProps = DropzoneProps & {
  hideSizeText?: boolean
  clearIconButtonProps?: IconButtonProps
  style?: CSSProperties
} & {
  value?: File[]
  getInputText?: (files: File[]) => string
  getSizeText?: (files: File[]) => string
  onDrop?: (value: File[]) => void
}
