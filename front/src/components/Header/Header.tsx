import { useEffect } from 'react'
import Button from '../../kit/Button/Button'
import { useTelegram } from '../../hooks/useTelegram'

const Header = () => {
  const { tg, onClose, user, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div>
      <Button onClick={onClose}>Закрыть</Button>
      <Button onClick={onToggleButton}>Переключатель</Button>
      <span style={{color: 'white'}}>{user}</span>
    </div>
  )
}

export default Header
