import { describe, test } from 'vitest'
import { render } from '@testing-library/react'
import { MuiDropzoneInput } from './index'
import '@testing-library/jest-dom/vitest'

describe('components/MuiDropzoneInput', () => {
  test('should not crash', () => {
    render(<MuiDropzoneInput />)
  })
})
