var HTTPS = require('https');
var cool = require('cool-ascii-faces');
var arrBrettFacts = new Array(39);
  arrBrettFacts[0] = "Brett Gladden is one handsome motherfucker.";
  arrBrettFacts[1] = "Brett Gladden is the master of the BBQ Smoker.";
  arrBrettFacts[2] = "Brett Gladden holds the record for being awesome at things.";
  arrBrettFacts[3] = "Brett Gladden is the keeper of rabbits.";
  arrBrettFacts[4] = "Brett Gladden only lets Benny win because he feels bad.";
  arrBrettFacts[5] = "Brett Gladden was once mistaken for fat Haley Joel Osment.";
  arrBrettFacts[6] = "Brett Gladden owns several televisions.";
  arrBrettFacts[7] = "Brett Gladden can smoke a cigarette in one drag.";
  arrBrettFacts[8] = "Brett Gladden owns a lock of Zach Mettenberger's hair.";
  arrBrettFacts[9] = "Brett Gladden has made the playoffs only once in PTSL.";
  arrBrettFacts[10] = "Brett Gladden fucks.";
  arrBrettFacts[11] = "Brett Gladden loves Mondays.";
  arrBrettFacts[12] = "Brett Gladdens middle name is a mystery, even to him.";
  arrBrettFacts[13] = "Brett Gladden's middle name is a mystery, even to him.";
  arrBrettFacts[13] = "Brett Gladden never remembers the Titans.";
  arrBrettFacts[14] = "Brett Gladden can like, totally delete the league. So like, don't upset him";
  arrBrettFacts[15] = "Brett Gladden is a friend of the mexicans.";
  arrBrettFacts[16] = "Brett Gladden's only fear is fear itself. And spiders.";
  arrBrettFacts[17] = "Brett Gladden is a fan of the ladies.";
  arrBrettFacts[18] = "Brett Gladden was named after George Brett. Thank god his name isn't George Gladden";
  arrBrettFacts[19] = "Brett Gladden tries to see the best in everybody. Except for you.";
  arrBrettFacts[20] = "Brett Gladden watches you poop.";
  arrBrettFacts[21] = "Brett Gladden owns the actual Tecmo Super Bowl.";
  arrBrettFacts[22] = "Brett Gladden loves you.";
  arrBrettFacts[23] = "Brett Gladden is an excellent dancer.";
  arrBrettFacts[24] = "Brett Gladden is a happy camper.";
  arrBrettFacts[25] = "Brett Gladden was once bitten by a radioactive chipmunk. Now he has superpowers.";
  arrBrettFacts[26] = "Brett Gladden can grow an awesome beard..";
  arrBrettFacts[27] = "Brett Gladden plays a mean bass guitar";
  arrBrettFacts[28] = "Brett Gladden is a fan of the banjo.";
  arrBrettFacts[29] = "Brett Gladden once flushed a whole funnel cake down a toilet";
  arrBrettFacts[30] = "Brett Gladden won't eat horse. But he will eat horsey sauce";
  arrBrettFacts[31] = "Brett Gladden turned down a role as a disney princess";
  arrBrettFacts[32] = "Brett Gladden eats spicy wings. Regrets it later.";
  arrBrettFacts[33] = "Brett Gladden is probably pooping right now.";
  arrBrettFacts[34] = "Brett Gladden just says no.";
  arrBrettFacts[35] = "Brett Gladden's favorite musical group is Hall and Oates.";
  arrBrettFacts[36] = "Brett Gladden makes your dreams come true.";
  arrBrettFacts[37] = "Brett Gladden is not a fan of baseball.";
  arrBrettFacts[38] = "Brett Gladden thinks hockey is just ice soccer.";

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/; botRegexRoll = /^\/roll/;
      botRegexAd=/^\/advance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
      botRegexSiege = /^\/siege/; botRegexOW = /^\/ratings/; botRegexCat = /^\/catfish/; botRegexCool = /^\/cool/; botRegexBouncy = /^\/bouncy/;
      botRegexSlut = /^\/slut/; botRegexStop = /^\/stop/; botRegexUMadBro = /^\/umadbro/; botRegexBoo = /^\/boo/; botRegexOzzy = /^\/ozzy/;
      botRegexProp = /^\/prop/;botRegexKys = /^\/kys/; botRegexSlam = /^\/slam/; botRegexBrye = /^\/brye/; botRegexbg=/^\/bg/;
      botRegexGian = /^\/gian/; botRegexScrotes = /^\/scrotes/; botRegexShaki = /^\/shaki/; botRegexGolf = /^\/golf/; 
      botRegexDaf = /^\/dafuq/; botRegexAyy = /^\/ayy/; botRegexSchedule = /^\/schedule/; botRegexEat = /^\/eat/; botRegexpush = /^\/push/; 
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
      boo1 = 'https://media.giphy.com/media/iSxPmDWr97248/giphy.gif'; boo2 = 'https://media.giphy.com/media/l0MYwwrc7uYibZVn2/giphy.gif';
      boo3 = 'https://media.giphy.com/media/3otPoK3GsKT4ZtvRqE/giphy.gif';
  
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && /\/canada/.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Canada is spelled with a capital you dumb fucks.");
    this.res.end();
  }
  else if(request.text && /\/help/.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/bFqUob1sn7g9q/giphy.gif");
    this.res.end();
  }
  else if(request.text && /\/conrad/.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Conrad is one mad Canadian (notice the capital 'C')");
    this.res.end();
  }
  else if(request.text && /\bet/.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Don't be a retard: 'bet' isn't a thing.");
    this.res.end();
  }
  else if(request.text && /\/dawks/.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Correction: Dawks has one a playoff game. He still sucks.");
    this.res.end();
  }
  else if(request.text && /\/redskins/.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Hail To The Redskins. P.S. Kirk Cousins for MVP!");
    this.res.end();
  }
  else if(request.text && /\/batman/.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Send Batman back to Mehico");
    this.res.end();
  }
  else if(request.text && /\/jeff/i.test(request.text)) {
    this.res.writeHead(200);
    postMessage("I see you mentioned that legend that is Jeff. You could only be so lucky to suck his dick.");
    this.res.end();
  }
   else if(request.text && /\/Trill/.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Trill is Eddie Winslow's younger brother");
    this.res.end();
  }
  else if(request.text && /\/colby/.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Colby's sister is one fine ass lady");
    this.res.end();
  }
  else if(request.text && botRegexSlut.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/640x364.jpeg.f8a0e216bf7e42ed9a86b3ae23cc2ff1.large");
    this.res.end();
  } 
   else if(request.text && botRegexOzzy.test(request.text)) {
   this.res.writeHead(200);
   postMessage("Ozzy beat JP.");
   this.res.end();
  } 
  else if(request.text && botRegexpush.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/xkfjkha.png");
    this.res.end();
  } 
  else if(request.text && botRegexGolf.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media0.giphy.com/media/21ut9WYriQtuE/giphy.gif");
    this.res.end();
  } 
    else if(request.text && botRegexEat.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://imgur.com/JokjDsD.gif");
    this.res.end();
  } 
  else if(request.text && botRegexStop.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://1.bp.blogspot.com/-RkEOTwZPruo/T60n3kxQZJI/AAAAAAAABI8/ijsyFBrowi4/s1600/stop-girl.gif");
    this.res.end();
  } 
  else if(request.text && botRegexProp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/409x327.jpeg.08b5d95c51bb4897835cfe6b514f2f52.large");
    this.res.end();
  }
  else if(request.text && botRegexCat.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/SfDfrXn.png");
    this.res.end();
  } 
  else if(request.text && botRegexKys.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.wikihow.com/Tie-a-Noose");
    this.res.end();
  } 
    else if(request.text && botRegexbg.test(request.text)) {
    this.res.writeHead(200);
    var BrettRandomNumber = (Math.round((Math.random()*39)+1))
    postMessage(arrBrettFacts[BrettRandomNumber]);
    this.res.end();
  } 
  else if(request.text && botRegexSlam.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://pbs.twimg.com/profile_images/587294731471757313/ZpI5PfKq.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexDaf.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i3.kym-cdn.com/photos/images/facebook/000/787/356/d6f.jpg");
    this.res.end();
  }  
  else if(request.text && botRegexBrye.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/600x490.jpeg.b31d5153fb474d9bb18dd51b3d650afe.large");
    this.res.end();
  } 
  else if(request.text && botRegexGian.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/9V6ZnvD.png");
    this.res.end();
  } 
  else if(request.text && botRegexScrotes.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1006x1340.jpeg.730381e4280e4028b8375432af14f39f.large");
    this.res.end();
  } 
  else if(request.text && botRegexShaki.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/305x375.jpeg.a8dd3aa18c7a4963a553e6dc16bcb100.large");
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    //postMessage("http://www.daddyleagues.com/maddenrating?name=&position=all&team="+request.text.substring(5,8));
    postMessage("http://daddyleagues.com/ptsl/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  
  else if(request.text && botRegexOW.test(request.text)) {
    this.res.writeHead(200);
    postMessage("www.daddyleagues.com/maddenrating/");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }

  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/ptsl/rules");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    
    postMessage("http://daddyleagues.com/ptsl/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/ptsl/players?name="+rep+"&position=all&team=all");
    
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Season 1: Truckfarm, Season 2: JP");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/ptsl/schedules");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("(☞ﾟヮﾟ)☞");
    this.res.end();
  }
  else if(request.text && botRegexSchedule.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/ptsl/schedules");
    this.res.end();
  }
  else if(request.text && botRegexRoll.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/RQMkfKODe8Okw/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCool.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/3o7TKvEFDGnY1Gzw6A/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexBouncy.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/On6vJ7VxrTHMs/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexUMadBro.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/3o7TKnJqw7xvZWjSXS/source.gif");
    this.res.end();
  }
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  else if(request.text && botRegexBoo.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(boo1);
    else if(Math.random() >0.6)
      postMessage(boo3)
    else
      postMessage(boo2);
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
