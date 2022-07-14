import { Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    patronymic: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    created_at: {
        type: Date,
        default: new Date(),
        required: true,
    },
    token: {
        type: String,
        required: false,
    },
    token_expires: {
        type: Date,
        default: new Date(),
        required: true,
    },
});

export default UserSchema;