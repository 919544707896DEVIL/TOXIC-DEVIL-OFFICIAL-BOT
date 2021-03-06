let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw '*Invaild Link, Must Enter a Vaild Link*'
    let res = await conn.acceptInvite(code)
    m.reply(`SucessFully Joined To ${res.gid} ✅️`)
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['premium']

handler.command = /^join$/i

handler.premium = true

module.exports = handler
