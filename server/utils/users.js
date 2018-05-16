// Users Class.

export default class Users {
    constructor() {
        this.users = [];
    }
    addUser(id, name, room) {
        let user = { id, name, room };
        this.users.push(user);
        return user;
    }
    removeUser(id) {
        let toRemove = this.users.find(user => user.id === id);
        this.users = this.users.filter(user => user.id !== id);
        return toRemove;
    }
    getUser(id) {
        return this.users.find(user => user.id === id);
    }
    getUserList(room) {
        return this.users.filter(user => user.room === room).map(user => user.name);
    }
}