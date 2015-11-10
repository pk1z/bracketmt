var db = require('../db/db.js');

module.exports = {

  allParticipants: function(req, res, next) {

    db.Participant.findAll({include: [db.Tournament, db.User]})
    .then(function(participants){
      res.send(200, participants);
    });
  },

  newParticipant: function(req, res, next) {

  //   var name = req.body.name;
  //   var shortname = req.body.shortname;

  //   // Need to convert into their foreign keys
  //   var gameId = req.body.game;
  //   var typeId = req.body.type;
  //   var emailId = req.body.email;
  //   var statusId = req.body.status;

  //   Promise.all([
  //     db.User.findOne({ where: { email: emailId }})
  //       .then(function(user){
  //         emailId = user.id; 
  //       }),

  //     db.Type.findOne({ where: { name: typeId }})
  //       .then(function(type){
  //         typeId = type.id; 
  //       }),

  //     db.Game.findOne({ where: { name: gameId }})
  //       .then(function(game){
  //         gameId = game.id; 
  //       }),

  //     db.Status.findOne({ where: { name: statusId }})
  //       .then(function(status){
  //         statusId = status.id; 
  //       })

  //   ])
  //   .then(function (){
  //     db.Tournament.findOrCreate( { where : {
  //       name: name,
  //       shortname: shortname,
  //       OwnerId: emailId,
  //       GameId: gameId,
  //       TypeId: typeId,
  //       StatusId: statusId
  //     }})
  //     .then(function (createdTournament){
  //       if (createdTournament){
  //         res.json(createdTournament);
  //       }
  //     })
  //     .catch(function (error){
  //       next(error);
  //     });

  //   });
  }

};
