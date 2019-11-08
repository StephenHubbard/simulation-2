module.exports = {
    getHouses: ( req, res ) => {
        const db = req.app.get('db');
        db.get_houses()
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log({err});   
        })
    }, 
    newHouse: (req, res) => {
        const db = req.app.get('db');
        const { name, address, city, st, zipcode, image, mortgage, rent } = req.body;
    
        db.new_house([name, address, city, st, zipcode, image, mortgage, rent])
        .then(() => {
            res.sendStatus(200);
        })
        .catch(err => {
            res.status(500).send('oops.')
            console.log(err)
        })
    },
    deleteHouse: (req, res) => {
        const db = req.app.get('db');
        db.delete_house(req.params.id)
        .then(result => {
            res.status(200).send(result)
        }).catch(err => console.log(err))
    },
}