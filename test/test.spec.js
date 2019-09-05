const assert = require("assert");
const _ = require('lodash')
const API = require('./../index.js')

//Получить всех юзеров с todo и posts причем иногда юзер должен быть только с posts а иногда только с todos а иногда и с тем и сдругим, но это все все должно быть обернуто в одну функцию и быть управляемо через аргументы функции

describe("Получение юзера", async () => {
    const api = new API({
        cbGetUserFromDb: async () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({ userName: 'Vasya' })
                }, 1000)
            })
        }
    })
    // const wer = _.filter(sdfsdf, i => )
    it("User company - positive", async () => {
        const companyName = await api.getUserCompanyName(3)
        console.log(companyName)
        assert.equal(companyName, 'Romaguera-Jacobson')
    }).timeout(0)
    it("User company - negative", async () => {
        assert.rejects(async () => {
            await api.getUserCompanyName(4000)
        }, { name: 'Error'})
    })

    //TZ
    it("User all", async () => {
        await api.getUserWith({id: 4, with: ['posts', 'todos']})
    })
    it("Users all", async () => {
        await api.getUsersWith({with: ['posts', 'todos']})
    })
});