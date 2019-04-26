module.exports = {
    createHouse(req,res) {
        const db = req.app.get('db')
        const {name,address,city,states,zip,img, mortgage,rent } = req.body
        db.add_house([name,address, city,states,zip,img, mortgage,rent]).then(result => {
            res.status(200).send(result)
        }).catch(err=>console.log('err on adding',err))
    },
    getHouses: (req,res)=> {
        const db = req.app.get('db')
        db.get_houses().then(result=>{
            res.status(200).send(result)
        }).catch(err=>console.log('err on GET',err))
    },
    deleteHouse: (req,res)=> {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_house(id).then(result=>{
            res.status(200).send(result)
        }).catch(err=>console.log('err on delete',err))
    }
}