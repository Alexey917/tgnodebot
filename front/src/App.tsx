
import { useEffect } from 'react'
import './App.css'
import Button from './kit/Button/Button'
import { useTelegram } from './hooks/useTelegram'



function App() {
  const { tg, onClose, user, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div>
      <Button onClick={onClose}>Закрыть</Button>
      <Button onClick={onToggleButton}>Закрыть</Button>
      <span style={{color: 'white'}}>{user}</span>
    </div>
  )
}

export default App
