const Discord = require('discord.js');
const requestHandler = require('./requestHandler.js')
const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');
const { poolink, txlink, walletlink, tokenlink, bitquerylink } = require('./config.json');

const embedHandler = {
    getCommandsEmbed() {
        let embed = new Discord.MessageEmbed()
            .setAuthor('PooCoinBot!', 'https://assets.coingecko.com/coins/images/14855/small/w4_9ayk3_400x400.png?1618802191')
            .setFooter('Author - Bread')
            .setColor('#9F0707')
            .setTitle('Commands List')
            .addFields(
                { name: '?tools', value: 'Useful Links' },
                { name: '?wallet [wallet id]', value: 'Scans for Wallet' },
                { name: '?contract [contract id]', value: 'Scans for contract ID' },
                { name: '?txn [tranxaction id]', value: 'Scans for Transaction' },
                { name: '?updates', value: 'Get updates on the latest verified contracts' }
            )
        return embed
    },
    getLinksEmbed() {
        let embed = new Discord.MessageEmbed()
            .setAuthor('PooCoinBot!', 'https://assets.coingecko.com/coins/images/14855/small/w4_9ayk3_400x400.png?1618802191')
            .setFooter('Author - Bread')
            .setColor('#9F0707')
            .setTitle('Useful Links')
            .addFields(
                { name: 'TokenFomo', value: 'https://tokenfomo.io/' },
                { name: 'BSC Scan', value: 'https://bscscan.com/' },
                { name: 'PancakeSwap', value: 'https://exchange.pancakeswap.com/#/swap' },
                { name: 'PooCoin', value: 'https://poocoin.app/' },
                { name: 'SniperWatcher', value: 'https://poocoin.app/sniper-watcher' },
                { name: 'TokenSniffer', value: 'https://tokensniffer.com/' },
                { name: 'TokenSniffer Scam List', value: 'https://tokensniffer.com/scams' },
                { name: 'BitQuery', value: 'https://explorer.bitquery.io/bsc/' }
            )
        return embed
    },
    getWalletEmbed(txid) {
        let embed = new Discord.MessageEmbed()
            .setAuthor('PooCoinBot!', 'https://assets.coingecko.com/coins/images/14855/small/w4_9ayk3_400x400.png?1618802191')
            .setFooter('Author - Bread')
            .setColor('#9F0707')
            .setTitle('Wallet Info')
            .addFields(
                { name: 'BSC Scan', value: (walletlink + txid) },
                { name: 'Bitquery', value: (bitquerylink + 'address/' + txid) }
            )
        return embed
    },
    getTxnEmbed(txid) {
        let embed = new Discord.MessageEmbed()
            .setAuthor('PooCoinBot!', 'https://assets.coingecko.com/coins/images/14855/small/w4_9ayk3_400x400.png?1618802191')
            .setFooter('Author - Bread')
            .setColor('#9F0707')
            .setTitle('Transaction Info')
            .addFields(
                { name: 'Transaction ID', value: txlink + txid },
                { name: 'Bitquery', value: (bitquerylink + 'tx/' + txid) }
            )
        return embed
    },
    getContractEmbed(txid) {
        let embed = new Discord.MessageEmbed()
            .setAuthor('PooCoinBot!', 'https://assets.coingecko.com/coins/images/14855/small/w4_9ayk3_400x400.png?1618802191')
            .setFooter('Author - Bread')
            .setColor('#9F0707')
            .setTitle('Contract Info')
            .setThumbnail('https://r.poocoin.app/smartchain/assets/' + txid + '/logo.png')
            //.addField()
            .addFields(
                { name: 'Poocoin Chart:', value: (poolink + txid) },
                { name: 'BSC Contract', value: (walletlink + txid) },
                { name: 'BSC Token', value: (tokenlink + txid) },
                { name: 'Bitquery', value: (bitquerylink + 'token/' + txid) },
            )
        return embed
    },
    async getUpdatesEmbed() {
        let contract = requestHandler.getContractUpdate()
        console.log(contract)
        let embed = new Discord.MessageEmbed()
            .setAuthor('PooCoinBot!', 'https://assets.coingecko.com/coins/images/14855/small/w4_9ayk3_400x400.png?1618802191')
            .setFooter('Author - Bread')
            .setColor('#9F0707')
            .setTitle('New Coins')
            .addFields(
                { name: (contract[1]), value: (contract[0]), inline: true },
                { name: (contract[3]), value: (contract[2]), inline: true },
                { name: (contract[5]), value: (contract[4]), inline: true },
                { name: (contract[7]), value: (contract[6]), inline: true },
                { name: (contract[9]), value: (contract[8]), inline: true },
                { name: (contract[11]), value: (contract[10]), inline: true },
                { name: (contract[13]), value: (contract[12]), inline: true },
                { name: (contract[15]), value: (contract[14]), inline: true },
                { name: (contract[17]), value: (contract[16]), inline: true },
                { name: (contract[19]), value: (contract[18]), inline: true },
                { name: (contract[21]), value: (contract[20]), inline: true },
                { name: (contract[23]), value: (contract[22]), inline: true },
                { name: (contract[25]), value: (contract[24]), inline: true },
                { name: (contract[27]), value: (contract[26]), inline: true },
                { name: (contract[29]), value: (contract[28]), inline: true },
                { name: (contract[31]), value: (contract[30]), inline: true },
                { name: (contract[33]), value: (contract[32]), inline: true },
                { name: (contract[35]), value: (contract[34]), inline: true },
                { name: (contract[37]), value: (contract[36]), inline: true },
                { name: (contract[39]), value: (contract[38]), inline: true },
                { name: (contract[41]), value: (contract[40]), inline: true },
                { name: (contract[43]), value: (contract[42]), inline: true },
                { name: (contract[45]), value: (contract[44]), inline: true },
                { name: (contract[47]), value: (contract[46]), inline: true },
            )

        //return embed
    }
}
module.exports = embedHandler
