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
}


if (Meteor.isClient) {
  Template.controls.boards = function() {
    return Boards.find()
  }
  Template.controls.events({
    'click .board' : function (evt) {
      Session.set('active-board', this)
    }
  })

  Template.board.b = function() {
    return Session.get("active-board") || Boards.findOne()
  }

  Template.board.events({
    'click .cell': function (evt) {
      this.value += 1
      return true
    },
    'click .board': function (evt) {
      Boards.update(this._id, this)
      Session.set("active-board", this)
      return true
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if( Boards.find().count() == 0 ) {
      Boards.insert(new Board(3,3))
    }
  });
}
