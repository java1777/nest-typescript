import { User } from "../models/user.model.js";
import log from "consola";

class UserService {
  async createUser(userData) {
    try {
      const createdUser = await User.create({
        telegram_id: userData.id,
        username: userData.username,
        first_name: userData.first_name,
      });
      console.log("createdUser =>", createdUser);
    } catch (error) {
      log.error(error.message);
    }
  }

  async findOneUser(id) {
    try {
      return await User.findByPk(id);
    } catch (error) {
      log.error(error.message);
    }
  }

  async updateUser(userData) {
    try {
      await User.update(userData);
    } catch (error) {
      log.error(error.message);
    }
  }
}

export default new UserService();
