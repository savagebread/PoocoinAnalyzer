const Discord = require('discord.js');
const embedHandler = require('./embedHandler.js');
const request = require('request');
const cheerio = require('cheerio');
const client = new Discord.Client();
const {prefix, disctoken, poolink, txlink, walletlink} = require('./config.json');
const { link } = require('fs');
const requestHandler = require('./requestHandler.js');
client.login(disctoken)
console.log("Login Successful")

 client.on('message',async message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(' ')
    const command = args.shift();
    const txid = args.shift();

    if (command === 'help'){
        message.channel.send(embedHandler.getCommandsEmbed())
    }
    else if (command === 'tools'){
        message.channel.send(embedHandler.getLinksEmbed())
    }
    else if (command === 'txn'){
        message.channel.send(embedHandler.getTxnEmbed(txid))
        }
    else if (command === 'contract'){
        message.channel.send(embedHandler.getContractEmbed(txid))
    }
    else if (command === 'wallet'){
        message.channel.send(embedHandler.getWalletEmbed(txid))
    }
    else if (command === 'updates'){
        requestHandler.getContractUpdate()
        setTimeout(embedHandler.getUpdatesEmbed, 1000);
        //await message.channel.send(embedder)
    }
    else{
        return 0;
    }
})
//https://discord.com/oauth2/authorize?client_id=860946878005772349&scope=bot+applications.commands