import { useEffect } from "react"
import { useTelegram } from "../../hooks/useTelegram"

const Form = () => {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({text: 'Отправить данные', color: 'aqua'})
  }, [])


  return (
    <form>
      <legend>Форма</legend>
      <fieldset>
        <input type="text" />
        <input type="text" />
        <select name="" id=""></select>
      </fieldset>
    </form>
  )
}

export default Form
