define(['pipAPI', 'https://youjenjen.github.io/iat/stiatFramework1.js'], function(APIConstructor, stiatExtension){
	
  
	var API = new APIConstructor();
			var soundUrl = 'https://youjenjen.github.io/iat/images/';
		  return stiatExtension({

		  category : { 
		    name : 'dense', //Will appear in the data.
		    title : {
		      media : {word : 'dense'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
				{word: 'crowded'},	
				{word: 'packed'},
				{word: 'tight'},
				{word: 'compact'},
				{word: 'compressed'},
				{word: 'crammed'},
				{word: 'condensed'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'low pitch', //Attribute label
			title : {
				media : {word : 'low pitch'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: '...',sound: soundUrl + 'adj_Bass.arco.ff.sulE.D2.stereo.wav'},
				{word: '...',sound: soundUrl + 'adj_Bassoon.ff.D2.stereo.wav'},
				{word: '...',sound: soundUrl + 'adj_Horn.ff.D2.stereo.wav'},
				{word: '...',sound: soundUrl + 'adj_Piano.ff.D2.wav'},
				{word: '...',sound: soundUrl + 'adj_Tuba.ff.D2.stereo.wav'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'high pitch', //Attribute label
			title : {
				media : {word : 'high pitch'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: '...',sound: soundUrl + 'adj_BbClarinet.ff.C6.stereo.wav'},
				{word: '...',sound: soundUrl + 'adj_Flute.nonvib.ff.C6.stereo.wav'},
				{word: '...',sound: soundUrl + 'adj_Piano.ff.C6.wav'},
				{word: '...',sound: soundUrl + 'adj_Trumpet.novib.ff.C6.stereo.wav'},
				{word: '...',sound: soundUrl + 'adj_Viola.arco.ff.sulA.C6.stereo.wav'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });
