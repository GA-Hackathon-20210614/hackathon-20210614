const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  //have teacher add students to the class
  classes: {
      type: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Class'
        },
        {
            //Possibly teacher's note for class
            type: String
        }
      ],
    default: []
    },
    //Possibly remove to have it under the class instead
    assignments: {
        type: [
          {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Assignment'
          }
        ],
      default: []
      },
    parent: {
        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Parent',
        
        required: true

    }

}, {
  timestamps: true,
  
});


module.exports = mongoose.model('Student', studentSchema);