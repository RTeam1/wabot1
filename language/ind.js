exports.wait = () => {
	return`*〘  WAIT 〙 SEDANG PROSES*`
}

exports.succes = () => {
	return`*〘 *SUKSES* 〙*`
}

exports.lvlon = () => {
	return`*〘 *FITUR LEVEL TELAH DIAKTIFKAN* 〙`
}

exports.lvloff = () => {
	return`*〘  *FITUR LEVEL TELAH DINONAKTIFKAN* 〙`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`〘  *FITUR  LEVEL BELUM DI AKTIFKAN* 〙`
}

/*exports.benned = () => {
return `Lu keban ngentod makanya jangan Comli mulu🗿🤌🏻`
}*/

exports.noregis = () => {
	return`*〘  BELUM DAFTAR 〙*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar ${pushname}|17*`
}

exports.rediregis = () => {
	return`*〘  SUDAH DAFTAR 〙*\n\n*kamu sudah terdaftar di database bot\nSilahkan ketik ${prefix}help untuk menggunakan bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*〘 GROUP ONLY 〙*`
}

exports.ownerb = () => {
	return`*〘 OWNER BOT ONLY 〙*`
}

exports.ownerg = () => {
	return`*〘 OWNER GROUP ONLY 〙*`
}

exports.admin = () => {
	return`*〘 ADMIN GROUP ONLY 〙*`
}

exports.badmin = () => {
	return`*〘 BOT HARUS JADI ADMIN UNTUK MENGGUNAKAN FITUR INI 〙*`
}

exports.nsfwoff = () => {
	return`*NSFW BELUM DIAKTIFKAN*  `
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*〘  REGISTRASI 〙*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return `
	
	〘 *PENDAFTARAN* 〙
	
	*PENDAFTARAN BERHASIL DENGAN DATA* :
	
	┏━⊱nama
	┗⊱${namaUser}
	┏━⊱nomer
	┗⊱wa.me/${sender.split("@")[0]}
	┏━⊱umur
	┗⊱${umurUser}
	┏━⊱waktu pendaftaran
	┗⊱${time}
	
	┏━❉ *NS* ❉━
	┗⊱${serialUser}
	`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `

╔══✪〘 *INFO PENGGUNA* 〙✪══
║
║
╠⊱➥ *Nama* : ${pushname}*
╠⊱➥ *Nomer* : wa.me/${sender.split("@")[0]}*
╠⊱➥ *Dollar* : Rp${uangku}*
╠⊱➥ *XP* : ${getLevelingXp(sender)}/${reqXp}*
╠⊱➥ *Level* : ${getLevelingLevel(sender)}*
╠⊱➥ *Total pengguna* : ${_registered.length}*
╠⊱ 
╠⊱➥
╠➥ 
╠⊱ 
╠⊱ A S
║ 
║
╚══✪〘 *DARKNESS* 〙✪══

╔══✪〘 *DARKNESS* 〙✪══
║
║
╠➥ *${prefix}menu1*
╠➥ *${prefix}menu2*
╠➥ *${prefix}menu3*
╠➥ *${prefix}menu4*
╠➥ *${prefix}menu5*
╠➥ *${prefix}menu6*
╠➥ *${prefix}menu7*
╠➥ *${prefix}menu8*
╠➥ *${prefix}menu9*
╠➥ *${prefix}menu10*
║ 
║
╚══✪〘 *DARKNESS* 〙✪══


`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`

╔══✪〘 *SELAMAT* 〙✪══
║
╠➥ *Nama* : ${pushname}
║
╠➥ *Nomer* : wa.me/${sender.split("@")[0]}
║
╠➥ *Xp* : ${getLevelingXp(sender)}
║
╠➥ *Limit* = +3
║
╠➥ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
║
║Kamu telah naik level
║
╚══✪〘 *DARKNESS* 〙✪══
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
〘 *LIMIT COUNT* 〙
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`
╔══✪〘 *BANK* 〙✪══
║
╠➥ *Nama* : ${pushname}
║
╠➥ *Nomer* : wa.me/${sender.split("@")[0]}
║
╠➥ *Dollar* : ${uangkau}
║
║
╠➥✪══ *DARKNESS* ══✪
║
╠➥   ✪══ *CYBER* ══✪
║
╠➥    ✪══ *TEAM* ══✪
║
╚══✪〘 *DARKNESS* 〙✪══`
}