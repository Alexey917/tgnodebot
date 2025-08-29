
import { useEffect } from 'react'
import './App.css'
import Button from './kit/Button/Button'

const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close();
  }

  return (
    <div>
      <Button onClick={onClose}>Закрыть</Button>
    </div>
  )
}

export default App
