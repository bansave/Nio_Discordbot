var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');

    bot.setPresence ({
        game:{
            name: "Nine Realm Harp",
            type: '0', // can be '2' for 'listening to' prefix // can be '3' for 'watching' prefix
        }
    });
    
    

});

// bot.on('guildMemberAdd', member => {
//     // Send the message to a designated channel on a server:
//     const channel = member.guild.channels.find('name', 'member-log');
//     // Do nothing if the channel wasn't found on this server
//     if (!channel) return;
//     // Send the message, mentioning the member
//     channel.send(`I can hear your melody ${member} welcome to Excalion`);
//   });

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'dogeza':
            bot.sendMessage({
                to: channelID,
                message: 'https://gbf.wiki/images/5/57/Stamp122.png'
            })
            ;
            break;
            case 'Hi':
                bot.sendMessage({
                    to: channelID,
                    message: 'Danchou-san melody is very soothing'
                });
            break;
            case 'draw':
            var RNG = Math.floor((Math.random() * 100) + 1);
            if (RNG==1||RNG==2||RNG==3)
            {
                bot.sendMessage({
                    to: channelID,
                    message: 'your melody is very nice, you got SSR'
                })
            }
            else if(RNG==4||RNG==5||RNG==6||RNG==7||RNG==8||RNG==9||RNG==10||RNG==11||RNG==12||RNG==13||RNG==14||RNG==15||RNG==16||RNG==17||RNG==18)
            {
                bot.sendMessage({
                    to: channelID,
                    message: 'your melody is quite good, you got SR'
                })
            }
            else
            {
                bot.sendMessage({
                    to: channelID,
                    message: 'your melody is as bad as that lizard, you got R'
                })
            }
            break;
            case 'd10':
            var gacha= [];
            for(i=0;i<9;i++)
            {
            var RNG = Math.floor((Math.random() * 100) + 1);
            if (RNG==1||RNG==2||RNG==3)
            {
                gacha[i]='SSR'
            }
            else if(RNG==4||RNG==5||RNG==6||RNG==7||RNG==8||RNG==9||RNG==10||RNG==11||RNG==12||RNG==13||RNG==14||RNG==15||RNG==16||RNG==17||RNG==18)
            {
                gacha[i]='SR'
            }
            else
            {
                gacha[i]='R'
            }
            }
            var RNG = Math.floor((Math.random() * 100) + 1);
            if (RNG==1||RNG==2||RNG==3)
            {
                gacha[9]='SSR'
            }
            else
            {
                gacha[9]='SR'
            }
            bot.sendMessage({
                to: channelID,
                message: `Your Melody giving you these\n${gacha[0]}\n${gacha[1]}\n${gacha[2]}\n${gacha[3]}\n${gacha[4]}\n${gacha[5]}\n${gacha[6]}\n${gacha[7]}\n${gacha[8]}\n${gacha[9]}`
            })
            break;
         }
     }
});