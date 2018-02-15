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
       console.log(user)
       console.log(userID)
       if(userID==256004366127857664){user='Danchou'}
        args = args.splice(1);
        switch(cmd) {
            case 'hello':
            var RNG = Math.floor((Math.random() * 11) + 1);
            switch(RNG)
            {
                case 1:
                bot.sendMessage({
                    to: channelID,
                    message: `${user}, the melody that reside in your heart, I quite like it.`
                })
                ;
                break;
                case 2:
                bot.sendMessage({
                    to: channelID,
                    message: 'I really cannot stand the melody of that lizard, it is really noisy...'
                })
                ;
                break;
                case 3:
                bot.sendMessage({
                    to: channelID,
                    message: `The Nine Realm Harp has a very beatiful tune, it is kinda similar to your melody ${user}. I like it.`
                })
                ;
                break;
                case 4:
                bot.sendMessage({
                    to: channelID,
                    message: 'If I heard an unpleasant Melody, I wanna put a stop to it right away.'
                })
                ;
                break;
                case 5:
                bot.sendMessage({
                    to: channelID,
                    message: 'I am nio, one of the eternals. I wanna hear more of your beautiful melody.'
                })
                ;
                break;
                case 6:
                bot.sendMessage({
                    to: channelID,
                    message: `For the next song, I will match it with ${user}`
                })
                ;
                break;
                case 7:
                bot.sendMessage({
                    to: channelID,
                    message: `Let us perform together ${user}`
                })
                ;
                break;
                case 8:
                bot.sendMessage({
                    to: channelID,
                    message: 'Strahv-san melody is kinda weird, I kinda dislike it\nAh he is a schiebt.'
                })
                ;
                break;
                case 9:
                bot.sendMessage({
                    to: channelID,
                    message: `When will we performing together again ${user}?`
                })
                ;
                break;
                case 10:
                bot.sendMessage({
                    to: channelID,
                    message: 'I will put all of your enemy to sleep, so we can beat it together.'
                })
                ;
                break;
                case 11:
                bot.sendMessage({
                    to: channelID,
                    message: 'The melody of that SaintSword is very slow and lazy, it makes me sleepy.'
                })
                ;
                break;
            }
            
            break;
            //----------------------------------------
            case 'aww':
            bot.sendMessage({
                to: channelID,
                message: 'https://gbf.wiki/images/f/f3/Stamp81.png'
            })
            ;
            break;
            //----------------------------------------
            case 'kono':
            bot.sendMessage({
                to: channelID,
                message: 'https://gbf.wiki/images/6/6b/Stamp107.png'
            })
            ;
            break;
            //----------------------------------------
            case 'dogeza':
            bot.sendMessage({
                to: channelID,
                message: 'https://gbf.wiki/images/5/57/Stamp122.png'
            })
            ;
            break;
            //------------------------------------------
            case 'Hi':
                bot.sendMessage({
                    to: channelID,
                    message: 'Danchou-san melody is very soothing'
                });
            break;
            //-------------------------------------------------------
            case 'draw':
            if(channelID==293266129172824064)
            {
                bot.sendMessage({
                    to: channelID,
                    message: `${user}, you cannot do that here.`
                });
            }
            else{

            
            var RNG = Math.floor((Math.random() * 100) + 1);
            if (RNG==1||RNG==2||RNG==3)
            {
                bot.sendMessage({
                    to: channelID,
                    message: `${user}, your melody is very nice, you got SSR`
                })
            }
            else if(RNG==4||RNG==5||RNG==6||RNG==7||RNG==8||RNG==9||RNG==10||RNG==11||RNG==12||RNG==13||RNG==14||RNG==15||RNG==16||RNG==17||RNG==18)
            {
                bot.sendMessage({
                    to: channelID,
                    message: `${user}, your melody is quite good, you got SR`
                })
            }
            else
            {
                bot.sendMessage({
                    to: channelID,
                    message: `${user}, your melody is as bad as that lizard, you got R`
                })
            }
            }   
            break;
            //-----------------------------------------------------------
            case 'd10':
            var gacha= [];
            if(channelID==293266129172824064)
            {
                bot.sendMessage({
                    to: channelID,
                    message: `${user}, you cannot do that here.`
                });
            }
            else
            {

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
                message: `Your Melody giving you these ${user}\n${gacha[0]}\n${gacha[1]}\n${gacha[2]}\n${gacha[3]}\n${gacha[4]}\n${gacha[5]}\n${gacha[6]}\n${gacha[7]}\n${gacha[8]}\n${gacha[9]}`
            })
        }
            
            break;
            //----------------------------------------
            case 'ask':
            var RNG = Math.floor((Math.random() * 3) + 1);
            switch(RNG)
                {
                    case 1:
                    bot.sendMessage({
                    to: channelID,
                    message: 'Yes you should do it'
                    })
                    ;
                    break;
                    case 2:
                    bot.sendMessage({
                    to: channelID,
                    message: 'Just believe in yourself'
                    })
                    ;
                    break;
                    case 3:
                    bot.sendMessage({
                    to: channelID,
                    message: 'You better not.'
                    })
                    ;
                    break;
                }
            
            break;
            //-------------------------------------------------------
            case 'help':
            bot.sendMessage({
                to: channelID,
                message: '**these are the available command for me**\n\n!draw(simulate 1 premium draw)\n!d10(simulate 10 part premium draw)\n!Hi(praising my creator danchou!)\n!hello(I will speak)\n!ask(I will answer your hesitation)\n!dogeza(beaDogezaSticker)\n!kono(drangPoke2sticker)\n!aww(drangAwwSticker)'
            })
            ;
            break;
            
         }
     }
});
