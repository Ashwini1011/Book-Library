import './App.css'
import BookLibrary from './assets/components/bookLibrary'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <BookLibrary />
      <ToastContainer />
    </>
  )
}

export default App
