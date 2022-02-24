const {addsysteme,getsystemeById,getAllsystem,deletesysteme,updatesysteme} = require("../controllers/SystemeController")
const {Router}=require('express');
const router = Router();


router.post('/addsysteme',async(req,res)=>{
    let result = await addsysteme(req.body)
    res.json(result)
})
router.get('/getsystemebyId/:id',async(req,res)=>{
    let {id} = req.params
    let result = await getsystemeById(id)
    res.json(result)
})

router.get('/getallsystem',async(req,res)=>{
    let result = await getAllsystem();
    res.json(result)
})

router.post("/deletesysteme/:id", async (req, res) => {
    let { id } = req.params
    let result = await deletesysteme(id)
    res.json(true)
})


router.post("/updatesysteme", async (req, res) => {
    let result= await updatesysteme(req.body)
    res.json(true)
})


module.exports={
    systemeroutes:router
}