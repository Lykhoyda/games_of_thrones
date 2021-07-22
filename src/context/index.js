import * as React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'
import {createTheme, ThemeProvider} from '@material-ui/core'

const queryConfig = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
  },
}

const queryClient = new QueryClient({defaultOptions: queryConfig})

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
})

function AppProviders({children}) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <Router>{children}</Router>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export {AppProviders}
