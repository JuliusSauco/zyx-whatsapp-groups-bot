let handler = async (m, { conn, usedPrefix }) => {
  var doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  var document = doc[Math.floor(Math.random() * doc.length)];
  let text = `
*—◉ 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙴𝚂 wa.me/51955715506*
`.trim();
  let buttonMessage = {
    document: {
      url: `https://github.com/JuliusSauco/zyx-whatsapp-groups-bot.git`,
    },
    mimetype: `application/${document}`,
    fileName: `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://github.com/JuliusSauco/zyx-whatsapp-groups-bot.git",
        mediaType: 2,
        previewType: "pdf",
        title: "ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩",
        body: wm,
        thumbnail: imagen1,
        sourceUrl: "https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA",
      },
    },
    caption: text,
    footer: wm,
    buttons: [
      {
        buttonId: `${usedPrefix}menu`,
        buttonText: { displayText: "👾 𝙼𝙴𝙽𝚄 👾" },
        type: 1,
      },
      {
        buttonId: `${usedPrefix}donar`,
        buttonText: { displayText: "📮 𝙳𝙾𝙽𝙰𝚁 📮" },
        type: 1,
      },
    ],
    headerType: 6,
  };
  conn.sendMessage(m.chat, buttonMessage, { quoted: m });
};
handler.help = ["owner", "creator"];
handler.tags = ["info"];
handler.command = /^(owner|creator|creador|propietario)$/i;
export default handler;
