const { Telegraf } = require('telegraf')

var carro=['auto','carro','camion','vehiculo'];
var saludo = ['hola','ola','jola','hola que tal?','ola como estas?',' hola como estas?',' hola,como estas?']

const bot = new Telegraf('token')//coloca el token dentro de las comillas


bot.start((ctx)=> {

   /* setInterval( ()=>{   ctx.reply('Di hola')},5000)*/
      ctx.reply('Hola ' + ctx.from.first_name)

})


bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.hears(carro, (ctx) => ctx.reply('son rapidos no?'))


bot.hears(saludo, (ctx) => ctx.reply('hola '+ctx.from.first_name+' como estas?'))

bot.command('set', (ctx) => ctx.setChatTitle('the chat has changed the title'))
bot.command('mycomand', (ctx)=> ctx.reply('this is the custom command'))
bot.launch()
