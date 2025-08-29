import TelegramBot  from 'node-telegram-bot-api';

const token = '8265097774:AAEyyS4224GsDNFYMC1XXPbbQkvvzvrzCzg';

const webAppUrl = 'https://ya.ru'

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});



// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', async(msg: TelegramBot.Message) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Ниже появится кнопка для заполнения формы', {
      reply_markup: {
        inline_keyboard: [
          [{text: 'Заполнить форму', web_app: {url: webAppUrl}}]
        ]
      }
    })
  }

});