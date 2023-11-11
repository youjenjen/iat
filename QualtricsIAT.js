define(['pipAPI','https://youjenjen.github.io/iat/iatsoundextension.js'], function(APIConstructor, iatExtension){
	var API = new APIConstructor();
	var soundUrl = 'https://youjenjen.github.io/iat/images/';
  
  //Randomly choose the attribute words from a larger list of attribute words.
  //Internal studies in Project Implicit found no difference in performance between the words.
  var posWords = API.shuffle([
	'loose','open','airy','spacious','uncrowded','roomy','sparse','scattered']);
  var negWords = API.shuffle([
	'crowded','thick','packed','tight','compact','crammed','condensed','close-knit']);
  
    return iatExtension({
        category1 : {
            name : 'low pitch', //Will appear in the data.
            title : {
                media : {word : 'low pitch'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: '...',sound: soundUrl + 'sound1.mp3'},
                {word: '...',sound: soundUrl + 'sound2.mp3'},
                {word: '...',sound: soundUrl + 'sound3.mp3'},
				{image: 'bf1_nc.jpg'},
                {image: 'bf2_nc.jpg'},                 
				{image: 'bf3_nc.jpg'}     
    	    ],
    		//Stimulus css (style)
    		stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 :    {
            name : 'high pitch', //Will appear in the data.
            title : {
                media : {word : 'high pitch'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'wm1_nc.jpg'},
                {image: 'wm2_nc.jpg'},
                {image: 'wm3_nc.jpg'},
				{image: 'wf1_nc.jpg'},
            	{image: 'wf2_nc.jpg'},
            	{image: 'wf3_nc.jpg'}
            ],
    		//Stimulus css (style)
    		stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
		attribute1 :
		{
			name : 'dense',
			title : {
				media : {word : 'high density'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: negWords[0]},
				{word: negWords[1]},
				{word: negWords[2]},
				{word: negWords[3]},
				{word: negWords[4]},
				{word: negWords[5]},
				{word: negWords[6]},
				{word: negWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'not dense',
			title : {
				media : {word : 'low density'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: posWords[0]},
				{word: posWords[1]},
				{word: posWords[2]},
				{word: posWords[3]},
				{word: posWords[4]},
				{word: posWords[5]},
				{word: posWords[6]},
				{word: posWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
        base_url : {//Where are your images at? You might want to copy the photos to your own server
            image : 'https://youjenjen.github.io/iat/images/'
        }
    });
});