import {
  render as rtlRender,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import {AppProviders} from '../context'

async function render(ui, {route = '/'} = {}) {
  window.history.pushState({}, 'Test page', route)

  const returnValue = {
    ...rtlRender(ui, {
      wrapper: AppProviders,
    }),
  }

  // wait for react-query to settle before allowing the test to continue
  await waitForElementToBeRemoved(screen.queryAllByText(/loading/i))

  return returnValue
}

export {render}
