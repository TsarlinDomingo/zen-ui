import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { PlaygroundBox as Box } from './Box.stories'

describe('Box', () => {
  it('should render the box without crashing', () => {
    const { container } = render(
      <Box elevation="large" type="action">
        Hello world
      </Box>,
    )
    expect(container).toBeInTheDocument()
  })
})
