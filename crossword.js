Boards = new Meteor.Collection("boards")

function Element(val, board) {
  this.value = val;
}

function setBoardDimensions(b, w, h) {
  var old = b.elems || []
  b.elems = []
  b.width = parseInt(w)
  b.height = parseInt(h)
  for(var i = 0; i < b.width; ++i) {
    var r = []
    for(var j = 0; j < b.height; ++j) {
      r.push((old[i] || [])[j] || new Element(i*j))
    }
    b.elems.push(r)
  }
}


function Board(w, h) {
  this.name = undefined
  setBoardDimensions(this, w, h)
}


if (Meteor.isClient) {
  Handlebars.registerHelper("name", function() {
    return this.name || this._id
  })

  var updateBoard = function (b) {
    Boards.update(b._id, b)
    Session.set("active-board-id", b._id)
  }

  Template.controls.boards = function() {
    return Boards.find()
  }

  Template.controls.events({
    'click .board' : function (evt) {
      updateBoard(this)
    }
  })

  Template.board.b = function() {
    var b = Boards.findOne(Session.get('active-board-id'))
    return b || Boards.findOne()
  }

  Template.board.events({
    'click .cell': function (evt) {
      this.value += 1
    },
    'click .board': function (evt) {
      updateBoard(this)
    },
    'keyup #name': function(evt) {
      this.name = evt.target.value
      updateBoard(this)
    },
    'change #width': function(evt) {
      setBoardDimensions(this, evt.target.value, this.height)
      updateBoard(this)
    },
    'change #height': function(evt) {
      setBoardDimensions(this, this.width, evt.target.value)
      updateBoard(this)
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
