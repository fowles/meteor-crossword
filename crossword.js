if (Meteor.isClient) {
  Template.board.elems = function() {
    return [
        [{'value':1}, {'value':2}],
        [{'value':3}, {'value':4}]
    ];
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
