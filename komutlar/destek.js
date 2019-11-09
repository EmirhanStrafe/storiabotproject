client.on('message', msg => {
  const reason = msg.content.split(" ").slice(1).join(" ");
  if (msg.channel.name== 'destek') { //kanalın adı
    const hatay = new Discord.RichEmbed()
    .addField(" Hata ", `Bu Sunucuda \`Destek\` Adında Bir Rol Yok!`)
    .setColor("RANDOM")

    if (!msg.guild.roles.exists("name", "Destek")) return msg.author.send(hatay) + msg.guild.owner.send(`${msg.guild.name} Adlı Sunucunda, \`Destek\` Adlı Bir Rol Olmadığı İçin, Hiçkimse Destek Talebi Açamıyor!`);
    if(msg.guild.channels.find('name', 'Talepler')) {
      msg.guild.createChannel(`destek-${msg.author.id}`, "text").then(c => {
      const category = msg.guild.channels.find('name', 'Talepler')
      c.setParent(category.id)