const Discord = require('discord.js');
exports.run = (client, message, params) => {
message.delete()

let pages = ['<a:serit:559815474607816718> Konya Bot Yardım Menüsü - 1 <a:solok:572409453148766218> \n\n**Komutlar Hakkında Bilgi Almak İçin**\n\`\`\`💡 Doğru Kullanım :: k!komutbilgi afk\`\`\`\n\n***:warning: \`k!\` Ön eki Kullanmayı Unutmayın!:warning:***\n\n**🧿Kullanıcı Komutları** \n\n\`afk\` : AFK olursunuz. (Birisi sizi etiketlediğinde AFK olduğunuzu söyler.)\n\`atatürk\` : Atatürk ün rastgele bir resmini atar.\n\`avatar\` : Avatarınızı gösterir.\n\`havadurumu\` : Yazılan konumun hava durumu bilgisini gösterir.\n\`hesapla\` : Belirtilen işlemi yapar.\n\`kitap-ara\` : Yazılan kitabın bilgisini gösterir.\n\`kullanıcı-bilgi\` : İstediğiniz kullanıcı veya komutu kullanan kullanıcı hakkında bilgi verir.\n\`romen\` : Yazdığınız sayının romen karşılığını yazar.\n\`söz\` : Rastgele güzel sözler atar.\n\`oyver\` : İstediğiniz kişiyi uyarır.\n\`yetkilerim\` : Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.\n\`çevir\` : İstediğiniz yazıyı istediğiniz dile çevirir.', '<a:serit:559815474607816718> Konya Bot Yardım Menüsü - 2 <a:solok:572409453148766218> \n\n**🧿Komutlar Hakkında Bilgi Almak İçin**\n\`\`\`💡 Doğru Kullanım :: k!komutbilgi afk\`\`\`\n\n***:warning: \`k!\` Ön eki Kullanmayı Unutmayın!:warning:***\n\n**Eğlence Komutları** \n\n\`ascii\` : Yazdığınız yazıyı ascii şekline çevirir.\n\`aşk-ölçer\` : İki kullanıcı arasındaki aşkı ölçer.\n\`dans\` : Yazdığınız yazıyı dans🎉 ascii şekline çevirir.\n\`düello\` : İstediğiniz bir kişi eğlenceli ve zorlu bir kapışma yaparsınız!\n\`mesaj\` : IDini verdiğiniz mesaj hakkında bilgi verir. (IDi verilen mesaj komutun kullanıldığı kanalda yok ise mesajı bulamaz.)\n\`pokemon\` : Belirtilen Pokemon hakkında bilgi verir.\n\`sor\` : Yapay zeka ile sorularınıza cevap verir.\n\`yazdır\` : İstediğiniz yazıyı bota webhook ile etiketlenen kullanıcının ağzından yazdırır.\n', '<a:serit:559815474607816718> Konya Bot Yardım Menüsü - 3 <a:solok:572409453148766218> \n\n**Komutlar Hakkında Bilgi Almak İçin**\n\`\`\`💡 Doğru Kullanım :: k!komutbilgi afk\`\`\`\n\n***:warning: \`k!\` Ön eki Kullanmayı Unutmayın!:warning:***\n\n**🧿Sunucu Komutları** \n\n\`ayarlar\` : Sunucu ayarlarını gösterir.\n\`davet-sıralaması\` : Sunucunuza en çok kullanıcı getirenleri sıralar.\n\`dil-değiştir\` : Botun dilini değiştirir.\n\`emoji\` : Bulunduğunuz sunucudaki emojiler sayfalı gösterir.\n\`emojiler\` : Bulunduğunuz sunucudaki emojileri gösterir.\n\`oylama\` : Sunucunuzda oylama yapmanızı sağlar.\n\`roller\` : Bulunduğunuz sunucudaki rolleri gösterir.\n\`sunucu-bilgi\` : Bulunduğunuz sunucu hakkında bilgi verir.\n\`yetkililer\` : Bulunduğunuz sunucudaki yetkilileri çevrimiçi, çevrımdışı/görünmez, rahatsız etmeyin ve boşta modlarında olup olmadıklarını göstererek listeler. (Yönetici yetkisine sahip kullanıcıları yetkili olarak sayar.)\n','<a:serit:559815474607816718> Konya Bot Yardım Menüsü - 4 <a:solok:572409453148766218> \n\n**🧿Komutlar Hakkında Bilgi Almak İçin**\n\`\`\`💡 Doğru Kullanım :: k!komutbilgi afk\`\`\`\n\n***:warning: \`k!\` Ön eki Kullanmayı Unutmayın!:warning:***\n\n**Profil Komutları** \n\n\`bakiye\` : Bakiyenizi gösterir.\n\`slot\` : Slot makinesi ile oynarsınız. Kazanırsanız rastgele para kazanır, kaybederseniz rastgele para kaybedersiniz.\n','<a:serit:559815474607816718> Konya Bot Yardım Menüsü - 5 <a:solok:572409453148766218> \n\n**Komutlar Hakkında Bilgi Almak İçin**\n\`\`\`💡 Doğru Kullanım :: k!komutbilgi afk\`\`\`\n\n***:warning: \`k!\` Ön eki Kullanmayı Unutmayın!:warning:***\n\n**🧿Moderasyon Komutları** \n\n\`yasakla\` : İstediğiniz kişiyi sunucudan yasaklar.\n\`at\` : İstediğiniz kişiyi sunucudan atar.\n\`konuştur\` : Susturulmuş bir kişinin susturmasını kaldırmayı sağlar.\n\`mod-log-ayarla\` : Moderasyon kayıtları kanalını ayarlar.\n\`reklam-taraması\` : Kullanıcıların oynuyor mesajlarındaki ve kullanıcı adlarındaki reklamları tarar.\n\`yavaş-mod\` : Bulunduğunuz kanala yazma sınırı (süresi) ekler.\n\`sustur-rol-ayarla\` : Birisi susturulunca verilecek rolü ayarlar.\n\`sustur\` : İstediğiniz kişiyi susturur.\n\`temizle-üye\` : Belirtilen kişinin belirtilen miktarda mesajını siler.\n\`temizle\` : Belirtilen miktarda mesaj siler.\n\`uyar\` : İstediğiniz kişiyi uyarır.\n\`uyarı-kaldır\` : İstediğiniz kişinin uyarılarını kaldırır.\n\`uyarılar\` : İstediğiniz kişinin uyarılarını gösterir.\n','<a:serit:559815474607816718> Konya Bot Yardım Menüsü - 6 <a:solok:572409453148766218> \n\n**Komutlar Hakkında Bilgi Almak İçin**\n\`\`\`💡 Doğru Kullanım :: k!komutbilgi afk\`\`\`\n\n***:warning: \`k!\` Ön eki Kullanmayı Unutmayın!:warning:***\n\n**<🧿Bot Yapımcısı Komutları** \n\n\`beyazliste\` : Belirtilen kullancıyı kara listeden çıkartır!\n\`load\` : Yeni eklenen bir komutu bot yeniden başlamaya gerek kalmadan yükler.\n\`reload\` : Belirtilen bir komutu yeniden başlatır.\n\`eval\` : Yazılan kodu çalıştırır.\n\`reboot\` : Botu yeniden başlatır.\n\`speedtest\` : Bot Sunucusunun İnternet Hızını Ölçer.\n\`karaliste\` : Belirtilen kullancıyı kara listeye alır!\n\`unload\` : Belirtilen bir komutu devre dışı bırakır.\n','<a:serit:559815474607816718> Konya Bot Yardım Menüsü - 7 <a:solok:572409453148766218> \n\n**Komutlar Hakkında Bilgi Almak İçin**\n\`\`\`💡 Doğru Kullanım :: k!komutbilgi afk\`\`\`\n\n***:warning: \`k!\` Ön eki Kullanmayı Unutmayın!:warning:***\n\n**🧿Bot Komutları** \n\n\`bilgi\` : Bot hakkında bilgi verir.\n\`istatistik\` : Botun istatistiklerini gösterir.\n\`sunucular\` : Botun bulunduğu sunucuları gösterir.\n\`davet\` : Botun davet linklerini gösterir.\n','<a:serit:559815474607816718> Konya Bot Yardım Menüsü - 8 <a:solok:572409453148766218> \n\n**Komutlar Hakkında Bilgi Almak İçin**\n\`\`\`💡 Doğru Kullanım :: k!komutbilgi afk\`\`\`\n\n***:warning: \`k!\` Ön eki Kullanmayı Unutmayın!:warning:***\n\n**🧿Çerçeve ve Efekt Komutları** \n\n\`bulanık\` : Avatarınızı bulanıklaştırıp gösterir.\n\`pixel\` : Avatarınızı pixelleştirir.\n\`wasted\` : Avatarınıza Wasted efekti verir.\n\`discord\` : Avatarınıza Discord efekti verir. (Tüm HypeSquad çeşitlerinin renklerini içerir rengarenktir.)\n\`triggered\` : Avatarınıza Triggered efekti verir.\n\`zıt-renk\` : Avatarınızın rengini tersine çevirir.\n','<a:serit:559815474607816718> Konya Bot Yardım Menüsü - 9 <a:solok:572409453148766218> \n\n**Komutlar Hakkında Bilgi Almak İçin**\n\`\`\`💡 Doğru Kullanım :: k!komutbilgi afk\`\`\`\n\n***:warning: \`k!\` Ön eki Kullanmayı Unutmayın!:warning:***\n\n**🧿Ayarlar Komutları** \n\n\`caps-engelle\` : Büyük harf engelleme sistemini açıp kapatmanızı sağlar.\n\`giriş-mesaj-ayarla\` : Giriş mesajını değiştirmenizi sağlar.\n\`oto-rol-ayarla\` : Sunucuya birisi katıldıgında verilecek rolü ayarlar.\n\`davet-kanal-ayarla\` : Davet kanalını ayarlar.\n\`giriş-çıkış-ayarla\` : Giriş çıkış kanalını ayarlar.\n\`sayaç-ayarla\` : Sayacı ayarlar.\n\`destek-kanal-ayarla\` : Gelişmiş Destek Sistemindeki destek kanalını değiştirmenizi sağlar.\n\`küfür-engelle\` : Küfür engelleme sistemini açıp kapatmanızı sağlar.\n\`sayaç-kanal-ayarla\` : Sayaç kanalını ayarlar.\n\`link-engelle\` : Lİnk engelleme sistemini açıp kapatmanızı sağlar.\n\`tag-ayarla\` : Sunucuya katılan üyeye otomatik tag verir.\n\`destek-rol-ayarla\` : Gelişmiş Destek Sistemindeki destek ekibi rolünü değiştirmenizi sağlar.\n\`log-ayarla\` : Sunucu kayıtları kanalını ayarlar.\n\`çıkış-mesaj-ayarla\` : Çıkış mesajını değiştirmenizi sağlar.\n\`ön-ek\` : Botun ön ekini sunucuya özel olarak değiştirir.\n','<a:serit:559815474607816718> Konya Bot Yardım Menüsü - 10 <a:solok:572409453148766218> \n\n**Komutlar Hakkında Bilgi Almak İçin**\n\`\`\`💡 Doğru Kullanım :: k!komutbilgi afk\`\`\`\n\n***:warning: \`k!\` Ön eki Kullanmayı Unutmayın!:warning:***\n\n**🧿Oyun Komutları** \n\n\`fortnite\` : İstediğiniz bir fortnite kullanıcısının istatistiklerini gösterir.\n\`oyun-ara\` : Verilen oyun hakkında bilgi verir.\n\`csgo\` : Girilen oyuncunun csgo istatistiklerini gösterir.\n','<a:serit:559815474607816718> Konya Bot Yardım Menüsü - 11 <a:solok:572409453148766218> \n\n**Komutlar Hakkında Bilgi Almak İçin**\n\`\`\`💡 Doğru Kullanım :: k!komutbilgi afk\`\`\`\n\n***:warning: \`k!\` Ön eki Kullanmayı Unutmayın!:warning:***\n\n**🧿Bot İletişim - Destek Komutları** \n\n\`hata-bildir\` : Bottaki bir hatayı bildirmenizi sağlar.\n\`tavsiye\` : Bot geliştiricisine hataları raporlamayı/tavsiye vermeyi/öneri iletmeyi sağlar.\n','<a:serit:559815474607816718> Konya Bot Yardım Menüsü - 12 <a:solok:572409453148766218> \n\n**Komutlar Hakkında Bilgi Almak İçin**\n\`\`\`💡 Doğru Kullanım :: k!komutbilgi afk\`\`\`\n\n***:warning: \`k!\` Ön eki Kullanmayı Unutmayın!:warning:***\n\n**🧿Özel Komut Sistemi** \n\n\`komut-ekle\` : Sunucuya özel komut ekler.\n\`komut-sil\` : Sunucuya özel komutlardan istenilen komutu siler.\n','<a:serit:559815474607816718> Konya Bot Yardım Menüsü - 13 <a:solok:572409453148766218> \n\n**Komutlar Hakkında Bilgi Almak İçin**\n\`\`\`💡 Doğru Kullanım :: k!komutbilgi afk\`\`\`\n\n***:warning: \`k!\` Ön eki Kullanmayı Unutmayın!:warning:***\n\n**🧿Genel Komutlar** \n\n\`komutbilgi\` : Tüm komutları listeler.\n\`site\` : Botun Sitesini Gösterir.\n\`yapımcım\` : Bot Yapımcısını Gösterir.\n\`ping\` : Botun gecikme süresini gösterir.\n\`top10\` : Bu komutu sadece Bot Sahibi kullanabilir!\n\`yardım\` : Tüm komutları listeler.\n\`premium\` : Premium hakkında bilgi verir. (Ücretsiz)\n','<a:serit:559815474607816718> Konya Bot Yardım Menüsü - 14 <a:solok:572409453148766218> \n\n**Komutlar Hakkında Bilgi Almak İçin**\n\`\`\`💡 Doğru Kullanım :: k!komutbilgi afk\`\`\`\n\n***:warning: \`k!\` Ön eki Kullanmayı Unutmayın!:warning:***\n\n**🧿Seviye Sistemi** \n\n\`liderlik\` : Seviye sisteminin sunucudaki liderlik tablosunu gösterir.\n\n\`seviye\` : Seviyenizi ve XP nizi gösterir.','<a:serit:559815474607816718> Konya Bot Yardım Menüsü - 15 <a:solok:572409453148766218> \n\n**Komutlar Hakkında Bilgi Almak İçin**\n\`\`\`💡 Doğru Kullanım :: k!komutbilgi afk\`\`\`\n\n***:warning: \`k!\` Ön eki Kullanmayı Unutmayın!:warning:***\n\n**🧿Premium Komutları (ÜCRETSİZ)** \n\n\`toplu-rol-al\` : İstediğiniz rolü sunucudaki herkesten alır.\n\n\`toplu-rol-ver\` : İstediğiniz rolü sunucudaki herkese verir.'];
let page = 1; 


    const embed = new Discord.RichEmbed() 
    .setColor('RANDOM') 
    .setThumbnail(message.guild.iconURL)
    .setFooter(`▶Sayfa ${page}◀ | Toplam Sayfa ${pages.length}`)
    .setDescription(pages[page-1])

    message.channel.send(embed).then(msg => {

    msg.react('⏪').then( r => {
        msg.react('⏩')

        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

        const backwards = msg.createReactionCollector(backwardsFilter, {timer: 6000});
        const forwards = msg.createReactionCollector(forwardsFilter, {timer: 6000});

        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setColor('RANDOM')
            embed.setDescription(pages[page-1]);
            embed.setFooter(`▶Sayfa ${page}◀ | Toplam Sayfa ${pages.length}`);
            msg.edit(embed)
        })

        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setColor('RANDOM')
            embed.setDescription(pages[page-1]);
            embed.setFooter(`▶Sayfa ${page}◀ | Toplam Sayfa ${pages.length}`);
            msg.edit(embed)
        })
    })
})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'help', 'y'],
 bakım: false,
  permLevel: 0,
  kategori: 'genel'
  
};

exports.help = {
  name: 'yardım',
  category: 'genel',
  description: 'Tüm komutları listeler.',
  usage: 'yardım veya yardım <komut adı>'
};