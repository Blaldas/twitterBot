var Twit = require('twit');
const prompt = require('prompt-sync')();

var T = new Twit({
    consumer_key:         'wWwNyjNeBUk7vHSRs4Qbb247m',
    consumer_secret:      'Jwrw5zbizmvYbZp30d2SbLtDoytIm3cLxHp8r9cyh7IlrdpbdH',
    access_token:         '3979879330-3PZR6ZIvlsAUxfmLXJZERVW8vEvvOCoRBvyYOKV',
    access_token_secret:  'NqsiGgtA9nt35hyPna40Go28EuhaQtCnXA7UKq3ukS6Rm',
    //timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
   // strictSSL:            true,     // optional - requires SSL certificates to be valid.
  });

    console.log("bot online");
   
    var cont;

    while(1){
        console.log("corpo do twitt:\n")
        const body = prompt('');
        //console.log(`Hey there ${name}`);
        //console.log("corpo do twitt:\n");
        //var body = readline();

        if(body.toString() === 'exit'){
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
                console.log(data)
                cont = data.media_id_string;
            }
            

        });
    }