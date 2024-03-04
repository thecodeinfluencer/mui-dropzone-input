import React from 'react'
import Dropzone from 'react-dropzone'
import prettyBytes from 'pretty-bytes'
import { matchIsNonEmptyArray } from '@shared/helpers/array'
import {
  getFileDetails,
  getTotalFilesSize,
  matchIsFile
} from '@shared/helpers/file'
import { Box, IconButton, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import type { MuiDropzoneInputProps } from './index.types'

export { MuiDropzoneInputProps }

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

export const MuiDropzoneInput = React.forwardRef(
  (props: MuiDropzoneInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const {
      value,
      onDrop,
      disabled,
      getInputText,
      getSizeText,
      hideSizeText,
      style,
      clearIconButtonProps = {},
      ...restProps
    } = props
    const { className: iconButtonClassName = '', ...restClearIconButtonProps } =
      clearIconButtonProps
    const inputRef = React.useRef<HTMLInputElement>(null)

    const resetInputValue = () => {
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    }

    const handleDrop = (files: File[]) => {
      onDrop?.(files)

      if (files.length === 0) {
        resetInputValue()
      }
    }

    const handleClearAll = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()

      if (disabled) {
        return
      }

      onDrop?.([])
    }

    const hasAtLeastOneFile = Array.isArray(value)
      ? matchIsNonEmptyArray(value)
      : matchIsFile(value)

    useIsomorphicLayoutEffect(() => {
      const inputElement = inputRef.current

      if (inputElement && !hasAtLeastOneFile) {
        inputElement.value = ''
      }
    }, [hasAtLeastOneFile])

    const getTheInputText = () => {
      if (value === null || (Array.isArray(value) && value.length === 0)) {
        return ''
      }

      if (typeof getInputText === 'function' && value !== undefined) {
        return getInputText(value as File & File[])
      }

      if (value && hasAtLeastOneFile) {
        if (Array.isArray(value) && value.length > 1) {
          return `${value.length} files`
        }

        return getFileDetails(value)
      }

      return ''
    }

    const getTotalSizeText = (): string => {
      if (typeof getSizeText === 'function' && value !== undefined) {
        return getSizeText(value as File & File[])
      }

      if (hasAtLeastOneFile) {
        if (Array.isArray(value)) {
          const totalSize = getTotalFilesSize(value)

          return prettyBytes(totalSize)
        }

        if (matchIsFile(value)) {
          const fileValue: File = value

          return prettyBytes(fileValue?.size)
        }
      }

      return ''
    }

    return (
      <Box ref={ref}>
        <Dropzone disabled={disabled} onDrop={handleDrop} {...restProps}>
          {({ getRootProps, getInputProps }) => {
            return (
              <Box
                style={style}
                sx={{
                  background: '#35a83920',
                  padding: 8,
                  borderRadius: 1,
                  border: '1px dashed #35a839'
                }}
                {...getRootProps()}
              >
                {hasAtLeastOneFile ? (
                  <IconButton
                    aria-label="Clear"
                    title="Clear"
                    size="small"
                    disabled={disabled}
                    className={`${iconButtonClassName} MuiDropzoneInput-ClearIconButton`}
                    onClick={handleClearAll}
                    {...restClearIconButtonProps}
                  />
                ) : null}
                <input {...getInputProps()} type="file" accept=".csv" />
                <Stack alignItems="center" spacing={1}>
                  {/* <BackupOutlined fontSize="large" /> */}
                  <Typography fontWeight="bold">
                    Drag and drop a file or{' '}
                    <b
                      style={{ color: '#35a839', textDecoration: 'underline' }}
                    >
                      Browse
                    </b>
                  </Typography>
                  <Typography color="GrayText" variant="body2">
                    Supported format: CSV
                  </Typography>
                  {!hideSizeText ? (
                    <Typography color="GrayText" variant="body2">
                      {getTotalSizeText()}
                    </Typography>
                  ) : null}
                  <Typography>
                    getTheInputText {JSON.stringify(getTheInputText())}
                  </Typography>
                </Stack>
              </Box>
            )
          }}
        </Dropzone>
      </Box>
    )
  }
)
