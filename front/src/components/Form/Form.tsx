import { useEffect, useState } from "react"
import { useTelegram } from "../../hooks/useTelegram"

const Form = () => {
  const [country, setCountry] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [subject, setSubject] = useState<string>('physical');
  const { tg } = useTelegram();

  const changeCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value)
  }

  const changeStreet = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value)
  }

  const changeSubject = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubject(e.target.value)
  }

  useEffect(() => {
    tg.MainButton.setParams({text: 'Отправить данные'})
  }, [])


  return (
    <form>
      <legend>Форма</legend>
      <fieldset>
        <input type="text" placeholder="Страна" value={country} onChange={changeCountry}/>
        <input type="text" placeholder="Улица" value={street}  onChange={changeStreet} />
        <select value={subject} onChange={changeSubject}>
          <option value={'physical'}>Физ. лицо</option>
          <option value={'legal'}>Юр. лицо</option>
        </select>
      </fieldset>
    </form>
  )
}

export default Form
