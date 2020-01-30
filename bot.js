const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const {Client, Attachment} = require('discord.js')
const config = require("./auth.json");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
	client.user.setStatus(`idle`);
	client.user.setPresence({
        game: {
            name: 'Rezzing near you. Soon.',
            type: "PLAYING",
        }
	});
});

client.login(auth.token);
client.on('message', msg => {
	if (msg.author.bot){
 return;
  }
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
	//miscellaneous
  if(msg.content.toLowerCase().includes('perfect system')) {
    msg.channel.send('*Yeah??*');
  }
  if(msg.content.toLowerCase().includes('cwu pwease')){
	  msg.channel.send('I am disgusted, I am revolted, I dedicate my entire existence to perfection, and this is the thanks I get?')
  }
  if (msg.content.toLowerCase()=== 'tron real'){
	  msg.channel.send('Days since our last \"Tron Real\" nonsense: 0')
  }
  //end miscellaneous
  
  //attachments
  if (msg.content.toLowerCase().includes('imperfect')){
    const unyeah = new Attachment('https://cdn.discordapp.com/attachments/648989392710402052/666866224810033152/image0.png');
    msg.channel.send(unyeah);
  }
  if (msg.content.toLowerCase().includes('coup time')){
    const angy = new Attachment('https://cdn.discordapp.com/attachments/666856816554016770/666927863538122752/clu_helmet_rez_tiny2.gif');
    msg.channel.send(angy);
  }
  if (msg.content.toLowerCase().includes ('you\'re epic')){
	  const epic = new Attachment('https://cdn.discordapp.com/attachments/666856816554016770/667977425615061032/grid_juice_response.png')
	  msg.channel.send(epic);
  }
  if (msg.content.toLowerCase().includes ('orange me')){
	  const disc = new Attachment('https://cdn.discordapp.com/attachments/666856816554016770/669044281352388628/yourdisc.jpg')
	  msg.channel.send(disc);
  }
  //end attachments
  
  //greetings
  if (msg.content.toLowerCase().includes('night clu')){
    msg.channel.send('Goodnight, User.');
  }
  if (msg.content.toLowerCase().includes('morning clu')){
    msg.channel.send('Good morning, User.');
  }
  if (msg.content.toLowerCase().includes('afternoon clu')){
    msg.channel.send('Good afternoon, User.');
  }
  if (msg.content.toLowerCase().includes('evening clu')){
    msg.channel.send('Good evening, User.');	
  }
  if(msg.content.toLowerCase().includes('hewwo cwu')){
	  msg.channel.send('Hello, you crime against The Grid.')
  }
  if(msg.content.toLowerCase().includes('hi clu')){
	  msg.channel.send('Hello, User. It\'s a pleasure to meet you.')
  }
   if(msg.content.toLowerCase().includes('hey clu')){
	  msg.channel.send('Hello, User. It\'s a pleasure to meet you.')
  }
  if(msg.content.toLowerCase().includes('hello clu')){
	  msg.channel.send('Hello, User. It\'s a pleasure to meet you.')
  }
  //end greetings
  
  //multiple choice
  if (msg.content.toLowerCase().includes('love you clu')){
	  var roll =(Math.floor(Math.random()*5)+1);
      if (roll === 1){
          msg.channel.send('It\’s debatable whether I love you, User.')
      }
      if(roll===2){
          msg.channel.send('I love you too, User.');
      }
	  if(roll===3){
		  msg.channel.send('Shame.')
	  }
	  if(roll===4){
		  msg.channel.send('Why?')
	  }
	  if(roll===5){
		  msg.channel.send('Okay.')
	  }
  }
  if (msg.content.toLowerCase().includes('clu i love you')){
	  var roll =(Math.floor(Math.random()*5)+1);
      if (roll === 1){
          msg.channel.send('It\’s debatable whether I love you, User.')
      }
      if(roll===2){
          msg.channel.send('I love you too, User.');
      }
	  if(roll===3){
		  msg.channel.send('Shame.')
	  }
	  if(roll===4){
		  msg.channel.send('Why?')
	  }
	  if(roll===5){
		  msg.channel.send('Okay.')
	  }
  }
  if (msg.content.toLowerCase().includes('clu sux')){
      var roll =(Math.floor(Math.random()*3)+1);
      if (roll === 1){
          msg.channel.send('Fuck you, User.');
      }
      if(roll===2){
          msg.channel.send('ok');
      }
	  if(roll===3){
		  msg.channel.send('Gee, thanks.')
	  }
	  
  }
  if (msg.content.toLowerCase().includes("balls")){
	  var roll =(Math.floor(Math.random()*2)+1);
      if (roll === 1){
          const balls = new Attachment('https://cdn.discordapp.com/attachments/666856816554016770/667138347394662430/balls_loop.gif')
	  msg.channel.send(balls)
      }
	  if(roll===2){
		  msg.channel.send('Haha, balls.');
  }
}
  //end multiple choice
  
  //the grid monologue
    if(msg.content === 'The Grid.'){
	  msg.channel.send('A digital frontier.')
  }
  if(msg.content === 'I tried to picture clusters of information as they moved through the computer.'){
	  msg.channel.send('What do they look like?')
  }
  if(msg.content === 'Ships? Motorcycles?'){
	  msg.channel.send('Were the circuits like freeways?')
  }
  if(msg.content === 'I kept dreaming of a world I\'d never see.'){
	  msg.channel.send('And then,')
  }
  if(msg.content === 'One day,'){
	  msg.channel.send('I got in.')
  }
  //end the grid monolgue
  
  //blank is dead
   if(msg.content.toLowerCase().includes('tron lives')){
	  msg.channel.send('Tron is dead.')
  }
  if(msg.content.toLowerCase().includes('flynn lives')){
	  msg.channel.send('Flynn is dead.')
  }
  //end blank is dead
  
  //emote responses
  if(msg.content.toLowerCase().includes('release rinzler')){
	  msg.channel.send('<:shoppingrinz:649306166190538793>')
  }
  if(msg.content.toLowerCase().includes('ok cluumer')){
	  msg.channel.send('<:lensflare:667574661944705034>')
  }
  if (msg.content.toLowerCase().includes('cwu hewp')){
	  msg.channel.send('<:cluthenperish:667587591264141313>')
  }
  if (msg.content.toLowerCase().includes('the renegade')){
	  msg.channel.send('<:feralbeck:653389116947562506>')
  }
  if (msg.content === 'Yeah??') {
    msg.channel.send('<:yeah:648990074624802844>');
  }
  if (msg.content.toLowerCase().includes('uprising time')){
    msg.channel.send('<:clugun:669209723517665290>');
  }
  if (msg.content.toLowerCase().includes('gunclu')){
    msg.channel.send('<:clugun:669209723517665290>');
  }
  //end emote responses
  
  //answer
  if (msg.content.toLowerCase().startsWith('bit')) {
	  var roll =(Math.floor(Math.random()*4)+1);
      if (roll === 1){
          msg.channel.send('<:bityes:652609644489080853>')
      }
      if(roll===2){
          msg.channel.send('<:bitno:655319828390871060>');
      }
	  if(roll===3){
          msg.channel.send('<:bityes:652609644489080853><:bityes:652609644489080853><:bityes:652609644489080853>');
      }
	  if(roll===4){
          msg.channel.send('<:bitno:655319828390871060><:bitno:655319828390871060><:bitno:655319828390871060>');
      }
  }
  if (msg.content.toLowerCase().startsWith('clu yes or no')){
	  var roll =(Math.floor(Math.random()*4)+1);
      if (roll === 1){
          msg.channel.send('Yes.')
      }
      if(roll===2){
          msg.channel.send('No.');
      }
	  if(roll===3){
          msg.channel.send('Definitely.');
      }
	  if(roll===4){
          msg.channel.send('Absolutely not.');
      }
}
  //end answer
  
  //penis. why did i add this.
  if (msg.content.toLowerCase().includes('penis')){
    
    msg.channel.send('Haha, penis.');
  }
  //end penis
  
  /*if(msg.content.toLowerCase().startsWith('clu say')) {
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    msg.channel.send(sayMessage);
  }*/
  if(msg.content.toLowerCase().startsWith ("clu say")) {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    msg.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    msg.channel.send(sayMessage);
  }
});

//removed commands

/*if (msg.content.toLowerCase().includes('balls')){
  if (msg.author == client.user){
        return;
  }
    if (msg.author.bot){
 return;
  }
    msg.channel.send('Haha, balls.');
  }*/
/*if (msg.content.toLowerCase().includes('clu sux')){
	  msg.channel.send('Fuck you, User.')
  }*/