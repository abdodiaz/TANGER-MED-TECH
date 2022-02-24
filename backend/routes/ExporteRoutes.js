const routerex = require("express").Router()

const {systemeroutes} = require("./systemeRoutes")

routerex.use(systemeroutes)

module.exports={
    routerex
}