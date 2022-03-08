const {Router}=require('express');
const router = Router();

const {systemeroutes} = require("./systemeRoutes")

Router.use(systemeroutes)

