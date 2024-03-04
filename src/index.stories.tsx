import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { createTheme, ThemeProvider } from '@mui/material'
import { Meta, StoryFn } from '@storybook/react'
import { MuiDropzoneInput } from './index'

const story: Meta<typeof MuiDropzoneInput> = {
  title: 'MuiDropzoneInput',
  component: MuiDropzoneInput
}

export default story as Meta<typeof MuiDropzoneInput>

const theme = createTheme()

export const Primary: StoryFn<typeof MuiDropzoneInput> = () => {
  const [value, setValue] = React.useState<File[]>([])

  const handleDrop = (newValue: File[]) => {
    setValue(newValue)
  }

  return (
    <ThemeProvider theme={theme}>
      <form>
        <MuiDropzoneInput
          style={{ width: 300 }}
          clearIconButtonProps={{
            children: <CloseIcon fontSize="small" />
          }}
          multiple
          value={value}
          onDrop={handleDrop}
        />
        <button
          type="button"
          onClick={() => {
            return setValue([])
          }}
        >
          Clear
        </button>
        <button type="submit">Submit</button>
      </form>
    </ThemeProvider>
  )
}
