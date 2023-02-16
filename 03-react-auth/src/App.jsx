import './App.css'
import Header from '@/components/Header'
import { BrowserRouter } from 'react-router-dom'
import RouterIndex from '@/routes'
import { AuthProvider } from '@/context/AuthContext'

function App () {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <RouterIndex />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
