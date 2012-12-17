Boards = new Meteor.Collection("boards")

function Element(val, board) {
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

  this.toString = function() {
    var r = ""
    this.elems.forEach( function(row) {
      row.forEach( function(e) {
        r += e.value + " "
      })
      r += "\n"
    })
    return r
  }
}


if (Meteor.isClient) {
  Template.board.b = function() {
    return Boards.findOne();
  }

  Template.board.events({
    'click .cell': function (evt) {
      this.value += 1
      return true;
    },
    'click .board': function (evt) {
      Boards.update(this._id, this)
      return true;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if( Boards.find().count() == 0 ) {
      Boards.insert(new Board(3,3))
    }
  });
}
