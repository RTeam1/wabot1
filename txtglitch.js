const { MessageType } = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const fs = require("fs")
const { fetchJson, getBuffer } = require('../lib/fetcher');
exports.run = (bot, message, args, from, id, mess, reply, getBuffer, await) => {

        }

exports.help = {
    name: "txtglitch",
    description: "Create logo/text with glitch",
    usage: "txtglitch teks1 | teks2",
    cooldown: 5,
};
