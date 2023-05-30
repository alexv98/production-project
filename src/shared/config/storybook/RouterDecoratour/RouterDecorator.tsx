import { type Decorator, type Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator: Decorator = (StoryComponent: Story) => {
  return (
    <BrowserRouter>
      <StoryComponent />
    </BrowserRouter>
  )
}
