
import { useEffect } from 'react'
import './App.css'
import Button from './kit/Button/Button'
import { useTelegram } from './hooks/useTelegram'



function App() {
  const { tg, onClose } = useTelegram();

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div>
      <Button onClick={onClose}>Закрыть</Button>
      <span style={{color: 'white'}}>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  )
}

export default App
