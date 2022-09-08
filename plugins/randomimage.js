let handler = async (m, { conn, command }) => {
let nyenye = `https://api-reysekha.herokuapp.com/api/wallpaper/${command}?apikey=APIKEY`
    conn.sendFile(m.chat, nyenye, 'Nih', `.${command}`) 
}
handler.help = ['wallhp', 'kartun', 'katakata', 'hekel', 'anime', 'jeni']
handler.tags = ['internet']
handler.command = /^(wallhp|kartun|katakata|hekel|anime|jeni)$/i

module.exports = handler
