var moment = require('moment-timezone')
var qrcode = require('qrcode-terminal')
var colors = require('colors/safe')
var fs = require('fs')
var _  = require('lodash')

const
{
   ChatModification,
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
   GroupSettingChange
} = require("@adiwajshing/baileys")
const { connect } = require('http2')

prefix = require("./config.json").prefix

const client = new WAConnection()

const { wait, getBuffer } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { json } = require('mathjs')
const availableCommands = new Set();

fs.readdir("./commands", (e, files) => {
    if (e) return console.error(e);
    files.forEach((commandFile) => {
        availableCommands.add(commandFile.replace(".js", ""));
    });
});

const starts = async zef => {
    zef.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(`[ ! ] Scan kode qr dengan whatsapp!`)
    })

    zef.on('credentials-updated', () => {
        const authInfo = client.base64EncodedAuthInfo()
        console.log(`credentials updated!`)

        fs.writeFileSync('./session-zefian.json', JSON.stringify(authInfo, null, '\t'))
    })

    fs.existsSync('./session-zefian.json') && client.loadAuthInfo('./session-zefian.json')

    zef.connect()

    zef.on('message-new', async message => {
        try {
            global.prefix;

            const from = message.key.remoteJid
            const ttext = message.message.conversation
            const isGroup = from.endsWith('@g.us')
            const type = Object.keys(message.message)[0]
            const id = isGroup ? message.participant : message.key.remoteJid
            const mess = {
				wait: '⌛ Sedang di Prosess ⌛',
                success: '✔️ Berhasil ✔️',
                gagal: '❌ Gagal ❌',
                stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
                Iv: '❌ Link tidak valid ❌',
				only: {
					group: '❌ Perintah ini hanya bisa di gunakan dalam group! ❌',
					ownerG: '❌ Perintah ini hanya bisa di gunakan oleh owner group! ❌',
					ownerB: '❌ Perintah ini hanya bisa di gunakan oleh owner bot! ❌',
					admin: '❌ Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: '❌ Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌'
				}
            }
            const reply = (teks) => {
				zef.sendMessage(from, teks, text, {quoted: message})
            }
            const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

            body = (type === 'conversation' && message.message.conversation.startsWith(prefix)) ? message.message.conversation : (type == 'imageMessage') && message.message.imageMessage.caption.startsWith(prefix) ? message.message.imageMessage.caption : (type == 'videoMessage') && message.message.videoMessage.caption.startsWith(prefix) ? message.message.videoMessage.caption : (type == 'extendedTextMessage') && message.message.extendedTextMessage.text.startsWith(prefix) ? message.message.extendedTextMessage.text : ''
            budy = (type === 'conversation') ? message.message.conversation : (type === 'extendedTextMessage') ? message.message.extendedTextMessage.text : ''

            const argv = body.slice(1).trim().split(/ +/).shift().toLowerCase()
            const args = body.trim().split(/ +/).slice(1)
            const isCmd = body.startsWith(prefix)
            
            const isBot = client.user.jid
            const owner = '6289630171792@s.whatsapp.net'  // replace owner number
            const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
            const groupName = isGroup ? groupMetadata.subject : ''
            const groupId   = isGroup ? groupMetadata.jid : ''
            const isMedia   = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')

            const content = JSON.stringify(message.message)

            const isQuotedImage     = type === 'extendedTextMessage' && content.includes('imageMessage')
            const isQuotedVideo     = type === 'extendedTextMessage' && content.includes('videoMessage')
            const isQuotedAudio     = type === 'extendedTextMessage' && content.includes('audioMessage')
            const isQuotedSticker   = type === 'extendedTextMessage' && content.includes('stickerMessage')
            const isQuotedMessage   = type === 'extendedTextMessage' && content.includes('conversation')

//            if (isGroup && !isMedia) return console.log(`[${colors.bgYellow('GROUP CHAT')}] FROM ${colors.bgMagenta(from)} : ${colors.bgCyan(args.join(' '))}`)

            console.log(availableCommands)
            if (ttext.includes('#help')){
                zef.sendMessage(from, "Use /help", text, {quoted: message})
            }
            if (ttext.includes('/txtblackpink')){
                if (args.length < 1) return reply('Where the text?')
					teks = body.slice(13)
					reply(mess.wait)
                    anu = (`https://docs-jojo.herokuapp.com/api/blackpink?text=${teks}`)
                    buff = await getBuffer(anu)
					zef.sendMessage(from, buff, image, {quoted: message, caption: mess.success})
            }
            if (ttext.includes('/txtglitch')){
                var ganteng = body.slice(10)
                teks1 = ganteng.split("|")[0];
                teks2 = ganteng.split("|")[1];
                if (args.length < 1) return reply('Where the text?')
                reply(mess.wait)
                eka = (`https://docs-jojo.herokuapp.com/api/ttlogo?text1=${teks1}&text2=${teks2}`)
                buff = await getBuffer(eka)
                zef.sendMessage(from, buff, image, {quoted: message, caption: mess.success})
            }
            if (ttext.includes('/txtporn')){
                var zefian = body.slice(9)
                kita = zefian.split("|")[0];
                putus = zefian.split("|")[1];
                if (args.length < 1) return reply('Where the text?')
                reply(mess.wait)
                zefgantengbanget = (`https://docs-jojo.herokuapp.com/api/phblogo?text1=${kita}&text2=${putus}`)
                buff = await getBuffer(zefgantengbanget)
                zef.sendMessage(from, buff, image, {quoted: message, caption: mess.success})
            }
            if (availableCommands.has(argv))
                require(`./commands/${argv}`).run(zef, message, args, from, id, mess, reply, getBuffer)
        } catch (err) {
            throw err
        }
    })
}

( async () => {
    await starts(client)
})()
