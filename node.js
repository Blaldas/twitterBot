    var Twit = require('twit');
    const prompt = require('prompt-sync')();

    //ler file:
    const readline = require('readline');
    const fs = require('fs');

    var myInterface = readline.createInterface({
        input: fs.createReadStream('constants.txt')
    });


    var T;
    var linecount = 0;
    var ck;
    var cs;
    var at;
    var ats;
    myInterface.on('line', function (line) {

        linecount++;
        if(linecount == 1){
            ck = line;
        }
        else if(linecount == 2){
            cs = line;
        }
        if(linecount == 3){
            at = line;
        }   
        if(linecount == 4){
            ats = line;
        }

        if(linecount == 4)
        {
            console.log(typeof(ck));
            
            var T = new Twit({
                consumer_key:         ck,
                consumer_secret:      cs,
                access_token:         at,
                access_token_secret:  ats,

            });

            console.log("bot online");
        
            var cont;

            while(1){
                var body;

                console.log("corpo do twitt:\n")
                    body = prompt('');                   
                
                if(body.toString() === 'exit' || body.toString() === 'sair'|| body.toString() === 'quit'){
                    console.log("\na sair");
                    return;
                }

                T.post('statuses/update', { status: body }, function(err, data, response) {
                //console.log(data)
                    if(err){
                        console.log("\nErro a enviar tweet");
                    }
                    else{
                        console.log("\nTweet enviado com sucesso");
                       // console.log(data)
                        cont = data.media_id_string;
                    }

                });    
            }
        }
    }); 
    