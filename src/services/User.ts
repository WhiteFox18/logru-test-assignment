import { UserModel } from "../db/models/users";
import { CreateUser } from "./types";
import Errors from "../modules/errors";

class UserService {
    listUsers = async () => {

    };

    private checkUsernameExists = async (username: string) => {
        const user = await UserModel.findOne({ username });

        if (user)
            Errors.alreadyExists(["username"]);
    };

    createUser = async (data: CreateUser) => {
        await this.checkUsernameExists(data.username);

        return await UserModel.create({
            username: data.username,
            password: data.password,
        });
    };

    updateUser = async () => {

    };

    deleteUser = async () => {

    };
}

export default UserService;