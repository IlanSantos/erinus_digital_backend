const bcrypt = require("bcrypt")

const HashEncryptGenerator = async data => {
    const hash = await bcrypt.hash(data, 14)
    return hash
}


module.exports = {
    HashEncryptGenerator
}