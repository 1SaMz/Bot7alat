const Discord = require('discord.js');
const partly = new Discord.Client();
const adminprefix = "-";
const developers = ['434445470946033665'];

console.log("3thhhhhhhhhhh2b.");


partly.on('message', message => {
    var argresult = message.content.split( ).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    partly.user.setGame(argresult);
      message.channel.send(تم تغيير البلاينق الى   ${argresult})
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  partly.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(تَم تغيير الواتشينق الى   ${argresult})
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  partly.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(تَم تغيير الليسينينق الى   ${argresult})
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    partly.user.setGame(argresult, "https://www.twitch.tv/paaaaaartly");
      message.channel.send(تم تغييرك حالتك بالتويتش الى   ${argresult})
  }
  if (message.content.startsWith(adminprefix + 'sn')) {
  partly.user.setUsername(argresult).then
      message.channel.send(جاري تغيير الأسم لـ ..${argresult} )
} else
if (message.content.startsWith(adminprefix + 'sa')) {
  partly.user.setAvatar(argresult);
    message.channel.send(جاري تغيير الأفتار... : );
}
});


client.login(process.env.BOT_TOKEN);//



