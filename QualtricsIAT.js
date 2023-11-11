define(['pipAPI','https://youjenjen.github.io/iat/iatsoundextension.js'], function(APIConstructor, iatExtension){
	var API = new APIConstructor();
	var soundUrl = 'https://youjenjen.github.io/iat/images/';
  
  //Randomly choose the attribute words from a larger list of attribute words.
  //Internal studies in Project Implicit found no difference in performance between the words.
  var posWords = API.shuffle([
	'spacious','uncrowded','roomy','sparse','scattered']);
  var negWords = API.shuffle([
	'packed','tight','compact','crammed','condensed']);
  
    return iatExtension({
        category1 : {
            name : 'dense', //Will appear in the data.
            title : {
                media : {word : 'dense'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: negWords[0]},
				{word: negWords[1]},
				{word: negWords[2]},
				{word: negWords[3]},
				{word: negWords[4]},  
    	    ],
    		//Stimulus css (style)
    		stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 :    {
            name : 'not dense', //Will appear in the data.
            title : {
                media : {word : 'not dense'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: posWords[0]},
				{word: posWords[1]},
				{word: posWords[2]},
				{word: posWords[3]},
				{word: posWords[4]},
            ],
    		//Stimulus css (style)
    		stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
		attribute1 :
		{
			name : 'low pitch',
			title : {
				media : {word : 'low pitch'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: '...',sound: soundUrl + 'adj_Bass.arco.ff.sulE.D2.stereo.wav'},
				{word: '...',sound: soundUrl + 'adj_Bassoon.ff.D2.stereo.wav'},
				{word: '...',sound: soundUrl + 'adj_Horn.ff.D2.stereo.wav'},
				{word: '...',sound: soundUrl + 'adj_Piano.ff.D2.wav'},
				{word: '...',sound: soundUrl + 'adj_Tuba.ff.D2.stereo.wav'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'high pitch',
			title : {
				media : {word : 'high pitch'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: '...',sound: soundUrl + 'adj_BbClarinet.ff.C6.stereo.wav'},
				{word: '...',sound: soundUrl + 'adj_Flute.nonvib.ff.C6.stereo.wav'},
				{word: '...',sound: soundUrl + 'adj_Piano.ff.C6.wav'},
				{word: '...',sound: soundUrl + 'adj_Trumpet.novib.ff.C6.stereo.wav'},
				{word: '...',sound: soundUrl + 'adj_Viola.arco.ff.sulA.C6.stereo.wav'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
        base_url : {//Where are your images at? You might want to copy the photos to your own server
            image : 'https://youjenjen.github.io/iat/images/'
        }
    });
});