import TelegramBot  from 'node-telegram-bot-api';

const token = '8265097774:AAEyyS4224GsDNFYMC1XXPbbQkvvzvrzCzg';

const webAppUrl = 'https://monumental-douhua-4b9af1.netlify.app'

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});



// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', async(msg: TelegramBot.Message) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Ниже появится кнопка для перехода на сайт', {
      reply_markup: {
        inline_keyboard: [
          [{text: 'Сайт', web_app: {url: webAppUrl}}]
        ],
      }
    })

    await bot.sendMessage(chatId, 'Ниже появится кнопка для заполнения формы', {
      reply_markup: {
        keyboard: [
          [{text: 'Форма', web_app: {url: webAppUrl + '/form'}}]
        ]
      }

      
    })
  }

  if(msg?.web_app_data?.data) {
    try {
      const data = JSON.parse(msg?.web_app_data?.data)

      await bot.sendMessage(chatId, 'Спасибо за обратную связь!');
      await bot.sendMessage(chatId, 'Ваша страна: ' + data?.country);
      await bot.sendMessage(chatId, 'Ваша улица: ' + data?.street);

      setTimeout(async () => {
        bot.sendMessage(chatId, 'Вся необходимая информация в этом боте!');
      }, 3000)
    } catch (e) {
      console.log(e)
    }
  }

});