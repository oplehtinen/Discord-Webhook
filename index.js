const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
// const auth = require('./authtoken.js');
const auth = process.env.AUTH_TOKEN;