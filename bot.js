const { Telegraf } = require('telegraf')

var saludo = ['hola','ola','jola','hola que tal?','ola como estas?',' hola como estas?',' hola,como estas?'];

var Gamer = ['game','iso','juego','descargar','coh'];


var patch = ['parche','parches','patches'];


var install = ['install','installation'];
var installES = "TUTORIAL DE INSTALACIÓN \n Pasos: \n 1- Asegúrese de no tener ninguna otra versión del Company pues esto puede causar problemas \n 2- Se instala la ISO primeramente (esta nunca debe ser borrada) \n 3- El juego no se debe crackear bajo ninguna circunstancia.(Ni después ni al final de ser instalado)\n 4- Se comienzan a instalar los parches de actualización de menor a mayor (2.500_2.501 < 2.601_2.602) \n 5- El serial que pide el juego es 3333-4444-1111-2222-ce13 \n 6- Para jugarlo debe de estar la imagen montada.";
var installEN = "INSTALLATION TUTORIAL \n \n Steps: \n 1- Make sure you don't have any other version of Company as this can cause problems \n 2- The ISO is installed first (it should never be deleted) \n 3- The game should not be cracked under any circumstances. (Neither after nor at the end of being installed) \n 4- It begins to install the update patches from minor to major (2.500_2.501 < 2.601_2.602) \n 5- The serial that the game requests is 3333-4444-1111-2222-ce13 \n6- To play it, the image must be mounted."

var red1 = ['red1','net1'];

var net1 = 'nombre:cohtv1.6'+'\n '+'contrasena:12345678'




const bot = new Telegraf('5424404799:AAEfsFthcV3ZgrmyFyyD7v04XpXCzrt8ROo')//coloca el token dentro de las comillas


bot.start((ctx)=> {

   /* setInterval( ()=>{   ctx.reply('Di hola')},5000)*/
      ctx.reply('Hola ' + ctx.from.first_name)

})


bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.hears('hi', (ctx) => ctx.reply('HI HITLER'))

bot.hears('ef', (ctx) => ctx.reply('para jugar al Eastern front descargte el mod y el parche de compatiblidad aqui abajo'))
bot.hears('ef', (ctx) => ctx.reply('https://www.moddb.com/mods/coheastern-front/downloads/eastern-front-compatibility-patch-for-coh-2602'))
bot.hears('ef', (ctx) => ctx.reply('https://www.moddb.com/mods/coheastern-front/downloads/eastern-front-230-full'))


bot.hears(Gamer, (ctx) => ctx.reply('https://www.mediafire.com/folder/6gc7o2koz1b39/CoH_ToV'))

bot.hears(patch, (ctx) => ctx.reply('https://www.mediafire.com/folder/f24bvky7dsto4/Parches'))

bot.hears('radmin', (ctx) => ctx.reply('https://www.radmin-vpn.com'))

bot.hears('mixed', (ctx) => ctx.reply('para jugar el mod mixed factions descargalo aki abajo y si deseas tienes un video tutorial ademas del archivo .TXT de instalacion:','https://t.me/gamerangerss/355'))
bot.hears('mixed', (ctx) => ctx.reply('https://www.youtube.com/watch?v=FygUCxra11c&t=43s'))


bot.hears('instalar', (ctx) => ctx.reply(installES))
bot.hears(install, (ctx) => ctx.reply(installEN))




bot.hears(red1, (ctx) => ctx.reply(net1))


bot.hears('ES', (ctx) => ctx.reply('idiom castellano'))   


bot.hears(saludo, (ctx) => ctx.reply('hola '+ctx.from.first_name+' como estas?'))


bot.hears('info', (ctx) => ctx.reply('ES \n lista de palabras clave: \n + juego \n * parche \n * instalar \n * radmin \n * red \n\n\n EN keyword list: \n + game \n * patch \n * install \n * radmin \n * network'))



bot.command('set', (ctx) => ctx.setChatTitle('the chat has changed the title'))


bot.command('mycomand', (ctx)=> ctx.reply('this is the custom command'))

bot.launch()
