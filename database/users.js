const db = require("./index")


const CreateUser = async (user) => {
    const client = await db.connect()
    try{
        const txt_create_user = "INSERT INTO ERI_APP_ADM.USERS(name, birth, phone, email, password) VALUES ($1, $2, $3, $4, $5);"
        const values_create_user = [user.name, user.birth, user.phone, user.email, user.password]
        await client.query(txt_create_user, values_create_user)
        return true
    }catch(error){
        throw error
    }finally{
        client.release()
    }
}



module.exports = {
    CreateUser
}
