var Customer = require('../models/customer');
module.exports = function(router) {
   
    router.post('/customers', function(req, res){
        console.log(req.body);        
        
        var customer = new Customer();
        customer.firstname = req.body.firstname;
        customer.lastname = req.body.lastname;
        customer.phone = req.body.phone;
        customer.address.street = req.body.address.street;
        customer.address.city = req.body.address.city;
        customer.address.state = req.body.address.state;
        customer.address.zip = req.body.address.zip;
        
        customer.save(function(err,data){
            if(err){
                throw err;
            }
            res.json(data);
        }); 
        
    });
    
    
    /*
    router.get('/customer', function(req, res){
        var customer = new Customer();
        customer.firstname = "lebowski";
        
        customer.save(function(err,data){
            if(err){
                throw err;
            }
            res.json(data);
        }); 
        
    });
    */
    
    
    router.get('/customers', function(req, res){
        //console.log("HERE");
        Customer.find({}, function(err,data){
            /*if(err){
                throw err;
            }*/
            res.json(data);
        });
    });
    
    router.get('/customers/:id', function(req, res){
        Customer.findOne({_id: req.params.id}, function(err, data) {
            /*if(err){
                throw err;
            }*/            
            res.json(data);
        });
    });    
    
    
    router.delete('/customers', function(req, res){
        Customer.remove({}, function(err){
            res.json({
                result: err ? 'err' : 'delete.all'
            });
        });
    });
    
    
    router.delete('/customers/:id', function(req, res){
       Customer.remove({_id: req.params.id}, function(err){
            res.json({
                result: err ? 'err' : 'delete.one'
            });           
           
       });
    });
    

    router.post('/customers/:id', function(req, res){
        Customer.findOne({_id: req.params.id}, function(err, data) {
           var customer = data; 
           
           customer.firstname = req.body.firstname;
           customer.lastname = req.body.lastname;
           customer.phone = req.body.phone;
           customer.address.street = req.body.address.street;
           customer.address.city = req.body.address.city;
           customer.address.state = req.body.address.state;
           customer.address.zip = req.body.address.zip;
            
           customer.save(function(err,data){
               if(err){
                   throw err;
               }
               res.json(data);
           }); 


           
        });
    });
}