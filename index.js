const axios = require('axios');
const _ = require('lodash')
class API {
    constructor({ cbGetUserFromDb } = {}){
        this.cbGetUserFromDb = cbGetUserFromDb
        this.axios = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com',
            timeout: 5000
        })
    }
    async getUserCompanyName(id){
        const {data} = await this.axios.get('/users/' + id)
        return _.get(data, 'company.name', null) + (await this.cbGetUserFromDb()).userName
    }
}
module.exports = API