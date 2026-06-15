const users=require('../models/user.models');
const getAllUsers=()=>users;
const createUser=(id,name,email)=>{
    const user={
        id,
        name, email
    };
    users.push(user);
    return user;
};
const getUserById=(id)=>{
    const user=users.find(user=>user.id===Number(id));
    return user;
}
const updateUser = (id, updatedData) => {

    const user = users.find(
        user => user.id === Number(id)
    );

    if (!user) {
        return null;
    }

    Object.assign(user, updatedData);

    return user;
};

const deleteUser = (id) => {

    const index = users.findIndex(
        user => user.id === Number(id)
    );

    if (index === -1) {
        return false;
    }

    users.splice(index, 1);

    return true;
};
module.exports={
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};