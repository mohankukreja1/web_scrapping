const rp= require('request-promise');
const cherio = require('cheerio');
const Table=require('cli-table');

const users=[];

var options ={
    url: `https://forum.freecodecamp.org/directory_items?period=weekly&order=likes_received&_=1522761677966`,
    json: true,


}

rp(options) .then((data)=>{

    let userdata=[];
    for( let user of data.directory_items){
        userdata.push({name: user.user.username , likes_recieved: user.likes_received})
    }
    console.log(userdata);
})