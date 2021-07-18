const request = require('request-promise');
const ObjectsToCsv = require('objects-to-csv')
const fs = require('fs');
const cheerio = require('cheerio');
const Discord = require('discord.js');
const { filter } = require('bluebird');
var coin = []
let contractName = []
var coinBody = [
    {
    "Address":"", 
    "Token":"",
    "Compiler":"",
    "Version":"",
    "Balance":"",
    "Txns":"",
    "Setting":"",
    "Verified":"",
    "Audited":"",
    "License":""
    }
];

async function filterArrays(coinData){
    let compFile = fs.readFileSync('./contractHistory.json', 'utf-8')
    console.log(coinData)
    let filteredCSV = new ObjectsToCsv(coinData)
    //await filteredCSV.toDisk('./contracts.csv')
    //await filteredCSV.toDisk('./contractHistory.csv', {append: true},{allColumns: true})
    console.log(filteredCSV)
}

const requestHandler = {
  
    getContractUpdate(){
        contractLen = (contractName.length);
        
        var getbscScan = {
            method: 'GET',
            uri: 'https://bscscan.com/contractsVerified'
        }

        request(getbscScan) 
            .then(function (body) {
                let $ = cheerio.load(body);
                $('td').each(function (i) {
                    contractName[i] = $(this).text();
                    if (i % 10 <= 9){
                        coin[i] = contractName[i];
                        }
                    else{
                        return
                    }
                    coinBody.push(coin[i]) 
                    //filterArrays(coinBody)
                    
                    
                }); 
                console.log(coinBody)       
                
                
            })
            .catch(function(error){
                console.log(error);
            }) 
        return coin
    },

}


    module.exports = requestHandler