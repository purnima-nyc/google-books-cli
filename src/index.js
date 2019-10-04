#!/usr/bin/env node

const program = require('commander');
const { fetchNow } = require('./commands');

console.log("Welcome to Google Books Cli!")

program
    .command("now <query>")
    .action(query => fetchNow(query));

program.parse(process.argv)

