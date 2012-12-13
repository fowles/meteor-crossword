if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

if (Meteor.isClient) {
  Meteor.startup( function () {
    var samplePuzzle = { "row" : [
      "STUMP_TERM_LIMA",
      "TEPID_OLEO_ORAL",
      "INSTALLSFORTIME",
      "LUTZ_ITE__ESSEX",
      "TRAINEE_TYP0___",
      "SEN_INCOMEOFAGE",
      "__DOTS_PAN_FUEL",
      "PRIUS_ZEN_LUTES",
      "HUNT_EEL_LENO__",
      "INGOTBUSTED_MAS",
      "___FIBS_ADAMANT",
      "SKATE__JIG_OTTO",
      "INJURYSELECTION",
      "FEAR_DODO_ATONE",
      "TERN_STIR_TONYS"
    ] };

    var sampleClues =  { 
      "across" : [
        { no : "1",  text : "Baffle" },
        { no : "6",  text : "Section of a school year" },
        { no : "10",  text : "Latin American capital" },
        { no : "14",  text : "Not hot or cold" },
        { no : "15",  text : "Lard alternative" },
        { no : "16",  text : "Like some history" },
        { no : "17",  text : "Does some renovating at a magazine headquarters?" },
        { no : "20",  text : "Olympian's jump on the ice" },
        { no : "21",  text : "Suffix for graph or magnet" },
        { no : "22",  text : "Earl of __ ( Thomas Cromwell )" },
        { no : "23",  text : "Apprentice" },
        { no : "25",  text : "Manuscript slip-up" },
        { no : "27",  text : "U.S. treaty ratifier" },
        { no : "28",  text : "Social Security?" },
        { no : "33",  text : "Kids connect them" },
        { no : "35",  text : "Critique harshly" },
        { no : "36",  text : "Propellant" },
        { no : "37",  text : "Pioneering Toyota" },
        { no : "39",  text : "Meditative discipline" },
        { no : "40",  text : "Medieval stringed instruments" },
        { no : "41",  text : "Search high and low" },
        { no : "42",  text : "Moray, for one" },
        { no : "43",  text : "Late night jokester" },
        { no : "44",  text : "Headline about a mishap at Fort Knox?" },
        { no : "47",  text : "Advanced Degs." },
        { no : "50",  text : "Tall tales" },
        { no : "51",  text : "Unshakable" },
        { no : "53",  text : "Roll around a rink" },
        { no : "56",  text : "Lively Dance" },
        { no : "57",  text : "Film director Preminger" },
        { no : "58",  text : "Component of a con artists insurance scam?" },
        { no : "62",  text : "Trepidation" },
        { no : "63",  text : "Lamebrain" },
        { no : "64",  text : "Make amends" },
        { no : "65",  text : "Bird on a beach" },
        { no : "66",  text : "Cookbook instruction" }
      ], 
      "down" : [
        { no : "1",  text : "Clown's walking poles" },
        { no : "2",  text : "Many a faculty member's goal" },
        { no : "3",  text : "Honorable" },
        { no : "4",  text : "Gaynor from 'South Pacific'" },
        { no : "5",  text : "Mobile electronic gadget" },
        { no : "6",  text : "Ancient Mexican" },
        { no : "7",  text : "Or ___ ( bullying words )" },
        { no : "8",  text : "TD caller" },
        { no : "9",  text : "Guernsey's greeting" },
        { no : "10",  text : "A blast" },
        { no : "11",  text : "Fleur-de-lis flower" },
        { no : "12",  text : "Patrick's auntie" },
        { no : "13",  text : "Yankee slugger Rodriguez" },
        { no : "18",  text : "Property claims by creditors" },
        { no : "19",  text : "Foreclosed property, briefly" },
        { no : "24",  text : "Causes of some head scratching" },
        { no : "25",  text : "Certain U.S. agent" },
        { no : "26",  text : "Yearning" },
        { no : "29",  text : "European cars with a lightning bolt logo" },
        { no : "30",  text : "Takeover of human activity by machines" },
        { no : "31",  text : "'My Goodness!'" },
        { no : "32",  text : "Some rapid transits" },
        { no : "34",  text : "At an improper time" },
        { no : "37",  text : "__ Beta Kappa" },
        { no : "38",  text : "Take off" },
        { no : "39",  text : "Mt Olympus ruler" },
        { no : "40",  text : "'___ and the Swan' ( Yeats )" },
        { no : "42",  text : "Die down" },
        { no : "43",  text : "Mountaineer's resting place" },
        { no : "45",  text : "Stratum" },
        { no : "46",  text : "Person with a fitting career?" },
        { no : "48",  text : "Roman general in a Shakespeare title" },
        { no : "49",  text : "Jewelry gems" },
        { no : "52",  text : "'Be prepared', e.g." },
        { no : "53",  text : "Make fine, in a way" }, 
        { no : "54",  text : "Where the femur and the tibia meet" },
        { no : "55",  text : "Clearly not locked" },
        { no : "56",  text : "'Star Wars' elite" },
        { no : "59",  text : "Upholsterer's meas." },
        { no : "60",  text : "Lush" },
        { no : "61",  text : "Alley frequenter" }
      ]
    };

    $(this).crossword( { 
        'puzzle'            : samplePuzzle, //JSON puzzle structure                  
        'clues'             : sampleClues, //JSON clue structure
        'title'             : "In the Beginning by Lynn Lempel", //A title for the puzzle
        'puzzleContainer'   : "#puzzleContainer", // id of puzzle display DIV 
        'acrossContainer'   : "#acrossContainer", // id of across clues display DIV
        'downContainer'     : "#downContainer", // id of down clues display DIV
        'revealButton'      : "#revealButton", // id of reveal button
        'hideButton'        : "#hideButton", // id of hide button
        'saveButton'        : "#saveButton",  // id of save to cookie button
        'loadButton'        : "#loadButton"  // id of load from cookie  button
        } );
  });
}
