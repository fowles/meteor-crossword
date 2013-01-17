Boards = new Meteor.Collection("boards")
Elements = new Meteor.Collection("elements")

function Element(i, j, val) {
  this.i = i
  this.j = j
  this.value = val
}

function setBoardDimensions(b, w, h) {
  var old = b.elems || []
  b.elems = []
  b.width = parseInt(w)
  b.height = parseInt(h)
  for(var j = 0; j < b.height; ++j) {
    var r = []
    for(var i = 0; i < b.width; ++i) {
      var e = (old[i] || [])[j]
      if (!e) {
        e = Elements.insert(new Element(i, j, i*j%10))
      }
      r.push(e)
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

  var activeBoard = function() {
    var b = Boards.findOne(Session.get('active-board-id'))
    return b || Boards.findOne()
  }

  Template.controls.boards = function() {
    return Boards.find()
  }

  Template.controls.events({
    'click .board' : function (evt) {
      updateBoard(this)
    }
  })

  Template.cell.elem = function() {
    return Elements.findOne({_id:this})
  }

  Template.board.rendered = function() {
    var b = activeBoard()
    if (!b) return
    var w = $('.grid').width()/b.width
    if (w > 40) w = 40
    $('.cell').css({ fontSize: w })
  }

  Template.board.b = function() {
    return activeBoard()
  }

  Template.board.events({
    'click .cell-listener': function (evt) {
      this.value += 1
      Elements.update(this._id, this)
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
    },
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if( Boards.find().count() == 0 ) {
      Boards.insert(new Board(3,3))
      Boards.insert(new Board(4,3))
    }
  });
}
