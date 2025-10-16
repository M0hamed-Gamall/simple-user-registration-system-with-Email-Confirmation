import { Schema, model, Document, Model} from "mongoose";

interface IUser extends Document {
    username: string,
    password: string,
    email: string,
    isVerified: boolean
}


const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },

})

const User: Model<IUser> = model<IUser>('User', userSchema)

export default User