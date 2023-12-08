import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const passwordRegulation =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true, match:[passwordRegulation]}
});

export default mongoose.model('User', UserSchema);