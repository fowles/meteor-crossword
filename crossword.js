function Element(val) {
    this.value = val;
}

function Board(w, h) {
  this.elems = []
  for(var i = 0; i < w; ++i) {
    var r = []
    for(var j = 0; j < h; ++j) {
        r.push(new Element(i*j))
    }
    this.elems.push(r)
  }
}

Boards = new Meteor.Collection("boards")
Boards.insert(new Board(3,3))

if (Meteor.isClient) {
  Template.board.elems = function() {
    return Boards.findOne().elems;
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
