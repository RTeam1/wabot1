const {
    WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require('@adiwajshing/baileys');
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { donasi } = require('./lib/donasi')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN: Darkness\n' 
            + 'ORG: .Rey (DCT) ;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6289677763976:+62 896-7776-3976\n' 
            + 'END:VCARD' 
prefix = '>'
blocked = []   
limitawal = 20
memberlimit = 2
tescuk = '0@s.whatsapp.net'
cr = ' *@Rey.bot02* '
hapus = ' *Deleting My message* '


/******** OWNER NUMBER**********/
const ownerNumber = ["6289677763976@s.whatsapp.net"] 
/************************************/


/******** ALL MENU **********/
const { menu1 } = require('./src/menu1')
const { menu2 } = require('./src/menu2')
const { menu3 } = require('./src/menu3')
const { menu4 } = require('./src/menu4')
const { menu5 } = require('./src/menu5')
const { menu6 } = require('./src/menu6')
const { menu7 } = require('./src/menu7')
const { menu8 } = require('./src/menu8')
const { menu9 } = require('./src/menu9')
const { menu10 } = require('./src/menu10')


           //  apikey
const barbar ='xxx'
const alpin = 'xxx'
     
       
/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/

const client = new WAConnection()
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('qr already scan.subscribe','white'),color('YOU','red'),color('TUBE','white'),color('ampibi gaming','yellow'))
})

client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./Rey.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./Rey.json') && client.loadAuthInfo('./Rey.json')
client.connect();


client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
						ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg'
				}
				teks = `[ NEW MEMBER IN GROUP _*${mdata.subject}*_ ] \n*_____________*\n@${num.split('@')[0]}\nɪɴᴛʀᴏ/ᴅɪᴋɪᴄᴋ! \nNama: \nUmur: \nAskot:\nSelamat bergabung \n *_____________*\nMoga betah Di group!`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg'
				}
				teks = `Yeee beban keluarga berkurang satu🥳\n bye beban keluarga:\n@${num.split('@')[0]}`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
//			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupOwner = isGroup ? groupMetadata.owner : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
       
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
	        /*****************END SCURITY FEATURE ********/
			
			
			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            client.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
      
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
           
            
             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) {
			
								///////////////////////
					
					
								
								///api nya naufalhoster.xyz///
					
					
								
case 'tahta':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply('Teks nya mana kak?')
if (args.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
coli = body.slice(6)
reply(ind.wait())
buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/harta_tahta?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Harta Tahta '+coli})
await costum(`btw pulsa nya belum masuk kak!!!`, text, tescuk, cr)
await limitAdd(sender)
					break

case 'avengerss':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var gh = body.slice(10)
coli1 = gh.split("|")[0];
coli2 = gh.split("|")[1];
if (args.length < 1) return reply('Teks nya mana?')
reply(ind.wait())
buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/avenger?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text1=${coli1}&text2=${coli2}`, {method: 'get'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: coli2+' avengers team'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
case 'battle': 
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var gh = body.slice(7)
coli1 = gh.split("|")[0];
coli2 = gh.split("|")[1];
if (args.length < 1) return reply('Teks nya mana?')
reply(ind.wait())
buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/battlefield?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text1=${coli1}&text2=${coli2}`, {method: 'get'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: coli1+' battle!!!'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break


case 'bpink':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply('Teks nya mana kak?')
if (args.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
coli = body.slice(6)
reply(ind.wait())
buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/blackpink?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: coli+' pink'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					

case 'darah':
case 'blood':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply('Teks nya mana kak?')
if (args.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
coli = body.slice(6)
reply(ind.wait())
buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/blood?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break

case 'bokeh':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply('Teks nya mana kak?')
coli = body.slice(6)
if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
reply(ind.wait())
buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/bokeh?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'nieh udah jadi kak!'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break

case 'cs:go':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply('Teks nya mana kak?')
if (args.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
coli = body.slice(6)
reply(ind.wait())
buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/csgo?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break

case 'csfire':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply('Teks nya mana kak?')
coli = body.slice(7)
if (args.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
reply(ind.wait())
buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/crossfire?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
client.sendMessage(from, buffer, image, {quoted: mek})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
			

case 'einstein':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply('Teks nya mana kak?')
coli = body.slice(9)
if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
reply(ind.wait())
buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/einstein?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					

case 'fbsilver':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(9)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/fb_silver_play_button?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
	
case 'fbgold':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(7)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/fb_golden_play_button?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
case 'fire':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(5)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/fire?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
case 'percikan':
					case 'firework':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(9)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/firework?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
	case 'football':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teks nya mana?')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/football?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text1=${coli1}&text2=${coli2}`, {method: 'get'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'GTA:ori':
					case 'gta:ori':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(8)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teks nya mana?')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/gta_original?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text1=${coli1}&text2=${coli2}`, {method: 'get'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'gta:wasted':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(11)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teks nya mana?')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/gta_wasted?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text1=${coli1}&text2=${coli2}`, {method: 'get'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'glitch2':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(9)
					text1 = gh.split("|")[0];
					text2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teks nya mana?')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/glitch?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text1=${text1}&text2=${text2}`, {method: 'get'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'glow':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(5)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/glow?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'google':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(7)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					coli3 = gh.split("|")[2];
					if (args.length < 1) return reply('Teks nya mana?')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/google_suggestion?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text1=${coli1}&text2=${coli2}&text3=${coli3}`, {method: 'get'})
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'hpotter':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(8)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/harrypotter?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'tahta1':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(7)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/harta_tahta?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'tahta2':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(7)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					coli3 = gh.split("|")[2];
					if (args.length < 1) return reply('Teks nya mana?')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/hartatahta_custom?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text1=${coli1}&text2=${coli2}&text3=${coli3}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'lovegif':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(8)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/lovegif?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'marvel2':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(8)
					text1 = gh.split("|")[0];
					text2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teks nya mana?')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/marvel?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text1=${text1}&text2=${text2}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'matrix':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(8)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/matrix?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'narutologo':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(11)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/naruto?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'neon':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(5)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/neon?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'pubg':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(5)
					text1 = gh.split("|")[0];
					text2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teks nya mana?')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/pubg?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text1=${text1}&text2=${text2}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'pentakill':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(10)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/pentakill?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'pig':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(4)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/pigtext?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'porno':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(6)
					text1 = gh.split("|")[0];
					text2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teks nya mana?')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/pornhub?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text1=${text1}&text2=${text2}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
/*					case 'kuotes':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(7)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/quoteslife?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break*/
					
					case 'rainbow':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(8)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/rainbow?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'pantai':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(7)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/sandwriting?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'spider':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(7)
					text1 = gh.split("|")[0];
					text2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teks nya mana?')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/spiderman?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text1=${text1}&text2=${text2}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'starwars':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(9)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/starwars?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'thunder':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(8)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/thunder?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'warface1':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(9)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/warface_avatar?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					case 'warface2':
					if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(9)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/warface?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nieh udah jadi kak!'})
await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
					
					/////anime//////
						

/*case 'pokemon':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
					*/
					case 'pussy':
					if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/anime/randompussy?apikey=ANJING.BABI.BQNGSADDDDD!!!!!`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'memekk teross'})
				await limitAdd(sender)
						break
					
					case 'hentaigif':
			if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/anime/hentaigif?apikey=ANJING.BABI.BQNGSADDDDD!!!!!`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					await limitAdd(sender)
					break
					
					case 'hentai':
					if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/anime/randomhentai?apikey=ANJING.BABI.BQNGSADDDDD!!!!!`, {method: 'get'})
					client.sendMessage(from, buffer, image, { caption: 'hentai!!', quoted: mek })
					await limitAdd(sender)
					break
					
					case 'animee':
					if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/anime/randomnsfw?apikey=ANJING.BABI.BQNGSADDDDD!!!!!`, {method: 'get'})
					client.sendMessage(from, buffer, image, { caption: 'anime!!', quoted: mek })
					await limitAdd(sender)
					break
					
					case 'neko':
					if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/anime/randomneko?apikey=ANJING.BABI.BQNGSADDDDD!!!!!`, {method: 'get'})
					client.sendMessage(from, buffer, image, { caption: 'neko!!', quoted: mek })
					await limitAdd(sender)
					break
					
					case 'quotesanime':
		if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/anime/quotesnime?apikey=ANJING.BABI.BQNGSADDDDD!!!!!`, {method: 'get'})
					client.sendMessage(from, buffer, text, image, { caption: 'quotess anime!!', quoted: mek })
					await limitAdd(sender)
					break
					
					case 'waifu':
		if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/anime/randomwaifu?apikey=ANJING.BABI.BQNGSADDDDD!!!!!`, {method: 'get'})
					client.sendMessage(from, buffer, image, { caption: 'waifuuu!!', quoted: mek })
					await limitAdd(sender)
					break
					
					/////DOWNLOAD/////
					case 'ig':
					if (args.length < 1) return reply('Link nya mana?')
					reply(ind.wait())
					URL = body.slice(3)
					buffwer = await getBuffer(`https://naufalhoster.xyz/dl/youtube?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&url=${URL}`, {method: 'get'})
					client.sendMessage(from, buffer, image, { caption: 'Nih fotonya!!', quoted: mek })
					break
	//				case 'yutub':
		 //		if (args.length < 1) return reply('Ling nya mana?')
			//		URL = body.slice(3)
//					reply(ind.wait())
  //   buffer = await getBuffer(`https://naufalhoster.xyz/dl/youtube?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&url=${URL}`, (method: 'get'})
//					client.sendMessage(from, buffer, audio, {quoted: mek})
					//break
					///https://youtu.be/xlztTjxsc-k
///					0ig https://www.instagram.com/p/CDmEhuzs8_2/?igshid=157yai8f0vant
					
					
					///tools//
					case 'sms':
					var gh = body.slice(4)
					text1 = gh.split("|")[0];
					text2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teks nya mana?')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/tools/sms?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&nomor=${text1}&pesan=${text2}`, {method: 'get'})
					client.sendMessage(from, buffer, text, {quoted: mek})
					break
					case 'lis':
					var gh = body.slice(4)
					if (args.length < 1) return reply('Teks nya mana?')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/tools/nulis?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&nomor=${text1}&pesan=${text2}`, {method: 'get'})
					client.sendMessage(from, buffer, text, {quoted: mek})
					break
				//	https://naufalhoster.xyz/tools/sms?apikey=YOUR_API_KEY&nomor=089515746253&pesan=Order+bang
					
					case 'intro':
					const nama = 'Rey'
					const usia = '15'
					const info = `hai, saya ${nama}.
					saya ${usia} tahun`+`\n`
					const bio = 'bio'
					console.log(info + bio)
					break
					
					case 'dewa':
					if (args.length < 1) return reply('Teks nya mana kak?')
					coli = body.slice(9)
					if (coli.length > 15) return reply('Teksnya kepanjangan, maksimal 15 karakter')
					reply(ind.wait())
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/dewabatch?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&text=${coli}`, {method: 'get'})
					await costum(`btw pulsa nya belum masuk kak, limit juga berkurang 1 ya sayang`, text, tescuk, cr)
await limitAdd(sender)
					break
	//				case 'yutub':
		 //		if (args.length < 1) return reply('Ling nya mana?')
			//		URL = body.slice(3)
//					reply(mess.wait)
  //   buffer = await getBuffer(`https://naufalhoster.xyz/dl/youtube?apikey=ANJING.BABI.BQNGSADDDDD!!!!!&url=${URL}`, (method: 'get'})
//					client.sendMessage(from, buffer, audio, {quoted: mek})
					//break
					///https://youtu.be/xlztTjxsc-k
///					0ig https://www.instagram.com/p/CDmEhuzs8_2/?igshid=157yai8f0vant


    /// zekz.xyz ///
    
                case 'tebakgambar':
  				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.zeks.xyz/api/tebakgambar?apikey=${alpin}`, {method: 'get'})
					buffer = await getBuffer(anu.result.soalImg)
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, buffer, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
				await limitAdd(sender)
					break
					case 'darkjokes':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				client.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                client.sendMessage(hasil, image, mek, '\`\`\`DARKJOKES\`\`\`')
				await limitAdd(sender)
					break
				
				case 'leaderboard':
				case 'lb':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
				break
				case 'mutual':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
            case 'next':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
				case 'transfer':
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6289677763976@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
/*         case 'giflimit':
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                checkLimit(sender, junblah
                addKoinUser('6289677763976@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break*/
				case 'dollar':
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case 'buylimit':
				if (!isRegistered) return reply(ind.noregis())
				payout = body.slice(10)
				const koinPerlimit = 1000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n*harga limit* : ${koinPerlimit}/limit\n*sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
                case 'moddroid':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
			case 'happymod':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
            case 'bitly':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
               client.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                reply(hasil)
                await limitAdd(sender)
                break
                case 'nangis':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'blowjob':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'cium':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'peluk':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                      case 'qrcode':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, '𝐌𝐚𝐬𝐮k𝐚𝐧 𝐓𝐞𝐤𝐬/𝐔𝐫𝐥 𝐘𝐚𝐧𝐠 𝐈𝐧𝐠𝐢𝐧 𝐃𝐢 𝐁𝐮𝐚𝐭 𝐐𝐑', text, {quoted: mek})
					const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'husbu':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`)
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai husbumu'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
                case 'ranime':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(8)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'joox':
if (!isRegistered) return reply(ind.noregis())
if (args.length < 1) return reply('Nama Lagu nya Tytyd Ya?')
reply(ind.wait())
if (isLimit(sender)) return reply(ind.limitend(pusname))
data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
if (data.error) return reply(data.error)
infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}\nSabar ya sayang, Audio sedang dikirim, mohon jangan spam ya sayaaannnkkk`
buffer = await getBuffer(data.result.thumb)
    lagu = await getBuffer(data.result.mp3)
 client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
await limitAdd(sender)
break
     

case 'play':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply('Nama Lagu nya Tytyd Ya?')
reply(ind.wait())
                data = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
                if (data.error) return reply(data.error)
                infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.title}\nUkuran : ${data.result.size}\nSumber : ${data.result.source}\n\nsedang mengirim file mp3`
                buffer = await getBuffer(data.result.thumbnail)
                lagu = await getBuffer(data.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                await limitAdd(sender)
break

  
                //https://api.zeks.xyz/api/ytplaymp3?q=${body.slice(6)}&apikey=administrator`, {method: 'get'})

                 if (data.error) return reply(data.error)
                
                case 'ytmp3':
                    if (!isRegistered) return reply(ind.noregis())
                   	if (args.length < 1) return reply('Nama lagu nya mana um?')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.wrogf())
					anu = await fetchJson(`https://ohto-ai.herokuapp.com/ytmus?URL=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.getVideo)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
					await limitAdd(sender)
					break
				case 'limit':
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break
                 case 'avengers':
                 if (!isRegistered) return reply(ind.noregis())
                 if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					if (!q.includes('|')) return  reply(ind.wrongf())
                   const aruga1 = q.substring(0, q.indexOf('|') - 0)
                    const aruga2 = q.substring(q.lastIndexOf('|') + 1)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/avengers?text1=${aruga1}&text2=${aruga2}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'summer':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(8)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummer?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'sandwrite':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandwrite?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'metaldark':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/metaldark?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'dropwater':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/dropwater?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'grenneon':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/greenneon?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'neontext':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/neontext?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'toxic':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(7)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/toxictext?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'sumery':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(8)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummery?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'blood':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(7)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/bloodtext?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'firework':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					arugazzz = body.slice(10)
					reply(ind.wait())
					arugazzz = await getBuffer(`https://arugaz.my.id/api/textpro/firework?text=${arugazzz}`)
					client.sendMessage(from, arugazzz, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'lava':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(6)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/lavatext?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
                case '1cak':
				    try {
					    if (!isRegistered) return reply(ind.noregis())
					    if (isLimit(sender)) return reply(ind.limitend(pusname))
					    if (!isGroup) return reply(ind.groupo())
					    if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://st4rz.herokuapp.com/api/1cak`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(ind.wrongf())
					}
					await limitAdd(sender)
					break
                case 'quotes':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.quotes)
					await limitAdd(sender)
					break		
					case 'infonomor':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                await limitAdd(sender)
					break 
                case 'slap':
                    kapankah = body.slice(1)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					client.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break
					case 'tampar':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'beritahoax':
                     if (!isRegistered) return reply(ind.noregis())
                     if (isLimit(sender)) return reply(ind.limitend(pusname))
                    client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
					case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
					case 'brainly':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break 
				case 'bcgc':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break 
					case 'pinterest':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓*`})
					await limitAdd(sender)
					break 
					case 'resepmasakan':
					if (!isRegistered) return reply(ind.noregis())
                   anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(14)}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.thumb_item)
                   hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
                   client.sendMessage(from, buff, image, {quoted: mek, caption: hasil})
                   await limitAdd(sender)
					break 
                   case 'igstalk':
                   if (!isRegistered) return reply(ind.noregis())
                   if (isLimit(sender)) return reply(ind.limitend(pusname))
                     hmm = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/igs?u=${body.slice(9)}`)
                     buffer = await getBuffer(hmm.data.profilehd)
                     hasil = `Fullname : ${hmm.data.fullname}\npengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.verified}\nbio : ${hmm.data.bio}`
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender)
					break 
       /*             case 'kickall':
                    if (!isOwner) return reply(ind.ownerb())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break */
					case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
                    client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
					case 'ownergrup':
				  case 'ownergroup':
				  case 'ownergc':
               client.updatePresence(from, Presence.composing)  
               options = {
          text: `Owner Group ini adalah : @${groupOwner.split("@")[0]}`,
          contextInfo: { mentionedJid: [groupOwner] }
           }
           client.sendMessage(from, options, text, { quoted: mek } )
				break					
					case 'grouplist':
					if (!isRegistered) return reply(ind.noregis())
					client.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group *DARKNESS* :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
				case 'daftar':
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                if (umurUser.length >= 3, umurUser.length <= 1) return reply(`your age is too young / old minimum age 10 years and maximum 40 years`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break
            	case 'mining':
                      if (!isRegistered) return reply(ind.noregis())
             //         if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                    /* if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)
                      }else*/
                      {
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }
           //         await limitAdd(sender)
					break
				case 'bisakah':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'kapankah':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'apakah':
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'rate':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
          case 'speed':
          case 'ping':
          if (!isRegistered) return reply(ind.noregis())
            await client.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
					break
              case 'help': 
				case 'menu':
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					await costum(ind.menu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku), text, tescuk, cr)
					break
					
case 'menu1':
if (!isRegistered) return reply(ind.noregis())
client.sendMessage(from, 'Ini menu1 Nya Todd',MessageType.text, { quoted: mek} )
costum(menu1(prefix), text, tescuk, cr)
break

case 'menu2':
if (!isRegistered) return reply(ind.noregis())
client.sendMessage(from, 'Ini menu2 Nya Todd',MessageType.text, { quoted: mek} )
costum(menu2(prefix), text, tescuk, cr)
break

case 'menu3':
if (!isRegistered) return reply(ind.noregis())
client.sendMessage(from, 'Ini menu3 Nya Todd',MessageType.text, { quoted: mek} )
costum(menu3(prefix), text, tescuk, cr)
break

case 'menu4':
if (!isRegistered) return reply(ind.noregis())
client.sendMessage(from, 'Ini menu4 Nya Todd',MessageType.text, { quoted: mek} )
costum(menu4(prefix), text, tescuk, cr)
break

case 'menu5':
if (!isRegistered) return reply(ind.noregis())
client.sendMessage(from, 'Ini menu5 Nya Todd',MessageType.text, { quoted: mek} )
costum(menu5(prefix), text, tescuk, cr)
break

case 'menu6':
if (!isRegistered) return reply(ind.noregis())
client.sendMessage(from, 'Ini menu6 Nya Todd',MessageType.text, { quoted: mek} )
costum(menu6(prefix), text, tescuk, cr)
break

case 'menu7':
if (!isRegistered) return reply(ind.noregis())
client.sendMessage(from, 'Ini menu7 Nya Todd',MessageType.text, { quoted: mek} )
costum(menu7(prefix), text, tescuk, cr)
break

case 'menu8':
if (!isRegistered) return reply(ind.noregis())
client.sendMessage(from, 'Ini menu8 Nya Todd',MessageType.text, { quoted: mek} )
costum(menu8(prefix), text, tescuk, cr)
break

case 'menu9':
if (!isRegistered) return reply(ind.noregis())
client.sendMessage(from, 'Ini menu9 Nya Todd',MessageType.text, { quoted: mek} )
costum(menu9(prefix), text, tescuk, cr)
break

case 'menu10':
if (!isRegistered) return reply(ind.noregis())
client.sendMessage(from, 'Ini menu10 Nya Todd',MessageType.text, { quoted: mek} )
costum(menu10(prefix), text, tescuk, cr)
break


				case 'donasi':
				case 'donate':
				if (!isRegistered) return reply(ind.noregis())
					client.sendMessage(from, donasi(), text)
					break
                case 'level':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `
╔══✪〘 *LEVEL* 〙✪══
║
╠➥ *Nama* : ${pushname}
╠➥ *Nomer* : wa.me/${sender.split("@")[0]}
╠➥ *User XP* :  ${userXp}/${requiredXp}
╠➥ *User Level* : ${userLevel}
║
╠➥✪══ *DARKNESS* ══✪
║
╠➥   ✪══ *CYBER* ══✪
║
╠➥    ✪══ *TEAM* ══✪
║
╚═✪〘 *DARKNESS* 〙✪═
`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
					case 'ingfo':
				case 'info':
				if (!isOwner) return reply(ind.ownerb())
					me = client.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*OWNER* : *DARKNESS*\n*TEAM : DARKNESS*\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
					
					
										
				case 'blocklist': 
					teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                case 'hide':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isOwner) return reply(ind.ownerb())
					var value = body.slice(5)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break
					
					case 'hidetag':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break
                case 'quotemaker':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'Nih anjim', quoted: mek})
					await limitAdd(sender)
					break
                    case 'truth':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
				case 'dare':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break				
				case 'ssweb':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
					if (args.length < 1) return reply('Urlnya mana om')
					teks = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buff = await getBuffer(anu.gambar)
					client.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'pokemon':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'ytmp4':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)
					break
                case 'text3d':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	await limitAdd(sender)
					break
			    case 'fototiktok':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                    gatauda = body.slice(12)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
			        buff = await getBuffer(anu.result)
                    reply(buff)
			        await limitAdd(sender)
					break
			    case 'map':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
					break
                case 'kbbi':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break
                case 'artinama':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
					break
				case 'ocr': 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 ${prefix}𝗼𝗰𝗿')
					}
					await limitAdd(sender)
					break
				case 'stiker': 
				case 'sticker':
				case 's':
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
					break
				case 'tts':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return client.sendMessage(from, 'Diperlukan kode bahasa!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`𝗣𝗿𝗲𝗳𝗶𝘅 𝗯𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗱𝗶 𝘂𝗯𝗮𝗵 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 : ${prefix}`)
					break 
				case 'tiktokstalk':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				try {
						if (args.length < 1) return client.sendMessage(from, '𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝗺𝗮𝗻𝗮 ?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('[𝗘𝗥𝗥𝗢𝗥] 𝗸𝗲𝗺𝘂𝗻𝗴𝗸𝗶𝗻𝗮𝗻 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝘁𝗶𝗱𝗮𝗸 𝘃𝗮𝗹𝗶𝗱')
					}
					await limitAdd(sender)
					break
                 case 'linkgc':
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'tagall2':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `┣➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					
			    case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					sew = body.slice(7)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`${sew}\n\nTagall by~~ *${pushname}*\n\n╔══✪〘 Mention All 〙✪══\n╠➥ *Pesan:* `+teks+`╚═〘 R BOT 〙`, members_id, true)
					break
case 'delete':
					case 'del':
					case 'd':
			/*		if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin()) */
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					costum(`*pesan berhasil dihapus*`, text, tescuk, hapus)
                 break
                 			
				case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
			       case 'block':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝗗𝗶𝘁𝗲𝗿𝗶𝗺𝗮, 𝗺𝗲𝗺𝗯𝘂𝗸𝗮 ${body.slice(9)}@c.us`, text)
					break
					
					case 'ban':
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return reply(`tag member Todd`)
					if (!isOwner) return reply(ind.ownerb())
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					break
				case 'unban':
					if (!isOwner)return reply(ind.ownerb())
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./src/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
					
				case 'leave': 
				if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				await reply(from, 'bye').then(() => client.groupLeave(groupId))
					break
				case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼N 𝘽R𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`)
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					}
					break
			   	case 'setpp': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('??𝘂𝗸𝘀𝗲𝘀 𝗺𝗲𝗻𝗴𝗴𝗮𝗻𝘁𝗶 𝗶𝗰𝗼𝗻 𝗚𝗿𝘂𝗽')
					break						
				case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					case 'grup':
					case 'group':
					case 'gc':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'admin':
            case 'owner':
            case 'creator':
                //  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  client.sendMessage(from, 'Ngapain Nyariin Owner?\ninstagram.com/rey.bot02\nitu ig owner ku!',MessageType.text, { quoted: mek} )
					break    
           case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
           case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`𝘆𝗮𝗵𝗵 @${mentioned[0].split('@')[0]} 𝗷𝗮𝗯𝗮t𝗮𝗻 𝗮𝗱𝗺𝗶𝗻 𝗸𝗮𝗺𝘂 𝘀𝘂𝗱𝗮𝗵 𝗱𝗶 𝗰𝗼𝗽𝗼𝘁🏃`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 𝗮𝗻𝗱𝗮 𝗻𝗮𝗶𝗸 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗮𝗱𝗺𝗶𝗻 𝗴𝗿𝗼𝘂𝗽 (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* (+_+)`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
			     	case 'kick':
			     	case 'k':
	if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗔𝘀𝗲𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗮𝗸𝗮𝗻𝗮𝗻,𝗼𝘁𝘄 𝗸𝗶𝗰𝗸 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`𝗔𝘀𝗲𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗮𝗸𝗮𝗻𝗮𝗻,𝗼𝘁𝘄 𝗸𝗶𝗰𝗸 @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `𝗟𝗶𝘀𝘁 𝗮𝗱𝗺𝗶𝗻 𝗼𝗳 𝗴𝗿𝗼𝘂𝗽 *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'toimg':
				if (!isRegistered) return reply(ind.noregis())
				if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '𝗱𝗮?? 𝗷𝗮𝗱𝗶 '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
                 case 'simi':
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳 !!!')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘀𝗶𝗺𝗶 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘀𝗶𝗺𝗶 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️️')
					} else {
						reply(ind.satukos())
					}
					break
				case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗻𝘀𝗳𝘄 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗻𝘀𝗳𝘄 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else {
						reply(ind.satukos())
					}
					break
                case 'leveling':
          /*      if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())*/
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
                 case 'block':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir wa.me${body.slice(8)}@c.us`, text)
					break
				case 'unblock':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.group())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(10)}@c.us`, "remove")
					client.sendMessage(from, `perintah Diterima, membuka blokir wa.me/${body.slice(10)}`, text)
					break
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*SUDAH AKTIF* !!!')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘄𝗲𝗹𝗰𝗼𝗺𝗲/𝗹𝗲𝗳𝘁 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘄𝗲𝗹𝗰𝗼𝗺𝗲/𝗹𝗲𝗳𝘁 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else {
						reply(ind.satukos())
					}
					break
					
case 'welkom':
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*SUDAH AKTIF* !!!')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘄𝗲𝗹𝗰𝗼𝗺𝗲/𝗹𝗲𝗳𝘁 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘄𝗲𝗹𝗰𝗼𝗺𝗲/𝗹𝗲𝗳𝘁 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else {
						reply(ind.satukos())
					}
					break
										
                 case 'event':
					if (!isGroup) return reply(ind.groupo())
	//				if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 EVENT 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 EVENT 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️*')
					} else {
						reply(ind.satukos())
					}
					break
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
				default:
                  if (budy.includes(`kontol`)) {
                  reply(`*APA ANJING*`)
                  }
                  if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam, ketik ${prefix}help untuk memunculkan menu bot`)
                  }
                  if (budy == 'Assalamualaikum') {
                  costum(`*Waalaikum salam, ketik ${prefix}help untuk memunculkan menu bot*`, text, tescuk, cr)
                  }
                  if (budy == `Assalamu'alaikum`) {
                  costum(`*Waalaikum Salam, ketik ${prefix}help untuk memunculkan menu bot*`, text, tescuk, cr)
                  }
                  if (budy == `Assalamu'alaikum`) {
                  costum(`Terdeteksi link grup lain\n Wahai admin, ada yang ngirim link gc lain tuh! kick diaaaa`, text, tescuk, cr)
			             		}
			             		if (budy == `Halo`) {
                  costum(`Halo juga, ketik ${prefix}help untuk memunculkan menu bot`, text, tescuk, cr)
			             		}
					             if (budy == `Hai`) {
                  costum(`*Hai juga, ketik ${prefix}help untuk memunculkan menu bot*`, text, tescuk, cr)
                  }
                  if (budy == 'cekprefix') {
                  costum(`*R BOT MENGGUNAKAN PREFIX [ ${prefix} ]*`, text, tescuk, cr)
                  }
                  if (budy == 'Cekprefix') {
                  costum(`*R BOT MENGGUNAKAN PREFIX [ ${prefix} ]*`, text, tescuk, cr)
                  }
                  if (budy == 'Prefix') {
                  costum(`*R BOT MENGGUNAKAN PREFIX [ ${prefix} ]*`, text, tescuk, cr)
                  }
                  if (budy == 'prefix') {
                  costum(`*R BOT MENGGUNAKAN PREFIX [ ${prefix} ]*`, text, tescuk, cr)
                  }
                  if (budy == 'ajg') {
                  costum(`*terdeteksi toxic*`, text, tescuk, cr)
                  }
                  if (budy == 'anjing') {
                  costum(`*terdeteksi toxic*`, text, tescuk, cr)
                  }
                  if (budy == 'Anjing') {
                  costum(`*terdeteksi toxic*`, text, tescuk, cr)
                  }
                  if (budy == 'Bangsad') {
                  costum(`*terdeteksi toxic*`, text, tescuk, cr)
                  }
                  if (budy == 'bangsad') {
                  costum(`*terdeteksi toxic*`, text, tescuk, cr)
                  }
                  if (budy == 'Bangsat') {
                  costum(`*terdeteksi toxic*`, text, tescuk, cr)
                  }
                  if (budy == 'Bangsad') {
                  costum(`*terdeteksi toxic*`, text, tescuk, cr)
                  }
                  if (budy == 'Bgsd') {
                  costum(`*terdeteksi toxic*`, text, tescuk, cr)
                  }
                  if (budy == 'bgsd') {
                  costum(`*terdeteksi toxic*`, text, tescuk, cr)
                  }
                  if (budy == 'Babi') {
                  costum(`*terdeteksi toxic*`, text, tescuk, cr)
                  }
                  if (budy == 'babi') {
                  costum(`*terdeteksi toxic*`, text, tescuk, cr)
                  }
      /*            case 'welot':
              case 'kangcopet':
              case 'bangkadada':
                    let elot = fs.readFileSync('./lindy/welot.mp3')
                    client.sendMessage(from, elot, MessageType.audio, { ptt: true, quoted: mek })
                    break*/
                  if (budy == 'welot') {
                  let elot = fs.readFileSync('./musik/welot.mp3')
                  client.sendMessage(from, elot, MessageType.audio, { ptt: true, quoted: mek })
         //         costum(`*Haiiyyuuuuuuuuukkkkkkkk papalee papepa hyuhyuhyu ooooooooooooooooo awokawokawok*`, text, tescuk, cr)
                  }
                  if (budy == 'Yahaha') {
                  if (!isOwner) return reply(ind.ownerb())
                  let elot = fs.readFileSync('./musik/yahaha.m4a')
                  client.sendMessage(from, elot, MessageType.audio, { ptt: true, quoted: mek })
                  costum(`*Haiiyyuuuuuuuuukkkkkkkk papalee papepa hyuhyuhyu ooooooooooooooooo awokawokawok*`, text, tescuk, cr)
                  }
                  if (budy == 'Tobat') {
                  if (!isOwner) return reply(ind.ownerb())
                  let elot = fs.readFileSync('./musik/tobat.m4a')
                  client.sendMessage(from, elot, MessageType.audio, { ptt: true, quoted: mek })
                  costum(`*Haiiyyuuuuuuuuukkkkkkkk papalee papepa hyuhyuhyu ooooooooooooooooo awokawokawok*`, text, tescuk, cr)
                  }
                  if (budy == 'yahaha') {
                  costum(`*Haiiyyuuuuuuuuukkkkkkkk papalee papepa hyuhyuhyu ooooooooooooooooo awokawokawok*`, text, tescuk, cr)
                  }
                  if (budy == 'Yahahaha') {
                  costum(`*Haiiyyuuuuuuuuukkkkkkkk papalee papepa hyuhyuhyu ooooooooooooooooo awokawokawok*`, text, tescuk, cr)
                  }
                  if (budy == 'yahahaha') {
                  costum(`*Haiiyyuuuuuuuuukkkkkkkk papalee papepa hyuhyuhyu ooooooooooooooooo awokawokawok*`, text, tescuk, cr)
                  }
			if (body.startsWith(`${prefix}${command}`)) {

                  reply(`Maaf *${pushname}*, Command *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu*!`)

                  }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
