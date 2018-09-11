// Person.find().exec(err, people => {});
// Event.findOne({name: "Lightening Party"}).exec(err, event => {});
// Car.findById(req.params.carId).exec(err, car => {});
// Company.findOne({_id: req.params.companyId})
//        .populate('employees')
//        .exec(err, company => {});

// var mongoose = require('mongoose'),
//     Schema = mongoose.Schema;
//
// var CommentSchema = new Schema({
//     user          : { type: Schema.Types.ObjectId, ref: 'User' }
//   , type          : { type: String, required: true }
//   , parent        : { type: Schema.Types.ObjectId, required: true}
//   , body          : { type: String, required: true }
// }, {
//   timestamps: true
// })
//
// var Comment = mongoose.model('Comment', CommentSchema);
//
// module.exports = Comment;

// find all users
User.find().exec()(err, user => {});

// find one article
Article.findOne({name: "Life Hacking"}).exec(err, event => {});

// find one user by their social security number
User.findById(req.params.userSSN).exec(err, user => {});

// find all dogs that go to heaven sorted alphabetically by name


// find the 10 most recent articles to be created


// find the 10 oldest users
