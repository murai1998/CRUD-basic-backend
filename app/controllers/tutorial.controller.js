const db = require("../models");
const Tutorial = db.tutorials;
const Goals = db.goals;
const Dreams = db.dreams;
const Op = db.Sequelize.Op;

//===========================Goals=========================
exports.createGoal = (req, res) => {
   console.log(req.body)
    if (!req.body.description) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const tutorial = {
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
  
    // Save Tutorial in the database
    Goals.create(tutorial)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

  exports.createGoals = (req, res) => {
    console.log(req.body)
     if (!req.body.length > 0) {
       res.status(400).send({
         message: "Content can not be empty!"
       });
       return;
     }
   let arr = []
    req.body.forEach(x =>{
      arr.push({description: x.description,
        published: x.published ? x.published : false})
    })
  
   
     // Save Tutorial in the database
     Goals.bulkCreate(arr)
       .then(data => {
         res.send(data);
       })
       .catch(err => {
         res.status(500).send({
           message:
             err.message || "Some error occurred while creating the Tutorial."
         });
       });
   };
  exports.findAllGoals = (req, res) => {
    const description = req.query.description;
    var condition = description ? { title: { [Op.like]: `%${description}%` } } : null;
  
    Goals.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

  exports.findOneGoal = (req, res) => {
    const id = req.params.id;
  
    Goals.findByPk(id)
      .then(data => {
        
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };

  exports.updateGoal = (req, res) => {
    const id = req.params.id;
  
    Goals.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };

  exports.deleteGoal = (req, res) => {
    const ids = req.params.ids;
let ids_arr = ids.split(',')
  console.log("IDSSSS", req.params)
  Goals.destroy({
      where: { id: ids_arr }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: ids
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${ids}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + ids
        });
      });
  };
  exports.deleteGoalsAll = (req, res) => {
    console.log("here")
  Goals.destroy({
      where: { }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: 'Deleted!'
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial" 
        });
      });
  };


  exports.findAllPublishedGoals = (req, res) => {
    Goals.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
  //====================================================================



  //================================Plans================================

  exports.create = (req, res) => {
    console.log(req.body)
     if (!req.body.description) {
       res.status(400).send({
         message: "Content can not be empty!"
       });
       return;
     }
   
     // Create a Tutorial
     const tutorial = {
       description: req.body.description,
       published: req.body.published ? req.body.published : false
     };
   
     // Save Tutorial in the database
     Tutorial.create(tutorial)
       .then(data => {
         res.send(data);
       })
       .catch(err => {
         res.status(500).send({
           message:
             err.message || "Some error occurred while creating the Tutorial."
         });
       });
   };
 
   exports.findAll = (req, res) => {
     const description = req.query.description;
     var condition = description ? { title: { [Op.like]: `%${description}%` } } : null;
   
     Tutorial.findAll({ where: condition })
       .then(data => {
         res.send(data);
       })
       .catch(err => {
         res.status(500).send({
           message:
             err.message || "Some error occurred while retrieving tutorials."
         });
       });
   };
 
   exports.findOne = (req, res) => {
     const id = req.params.id;
   
     Tutorial.findByPk(id)
       .then(data => {
         
         res.send(data);
       })
       .catch(err => {
         res.status(500).send({
           message: "Error retrieving Tutorial with id=" + id
         });
       });
   };
 
   exports.update = (req, res) => {
     const id = req.params.id;
   
     Tutorial.update(req.body, {
       where: { id: id }
     })
       .then(num => {
         if (num == 1) {
           res.send({
             message: "Tutorial was updated successfully."
           });
         } else {
           res.send({
             message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
           });
         }
       })
       .catch(err => {
         res.status(500).send({
           message: "Error updating Tutorial with id=" + id
         });
       });
   };
 
   exports.delete = (req, res) => {
     const ids = req.params.ids;
let ids_arr = ids.split(',')
   console.log("IDSSSS2", req.params)
     Tutorial.destroy({
       where: { id: ids_arr }
     })
       .then(num => {
         if (num == 1) {
           res.send({
             message: ids
           });
         } else {
           res.send({
             message: `Cannot delete Tutorial with id=${ids}. Maybe Tutorial was not found!`
           });
         }
       })
       .catch(err => {
         res.status(500).send({
           message: "Could not delete Tutorial with id=" + ids
         });
       });
   };
 
 
 
   exports.findAllPublished = (req, res) => {
     Tutorial.findAll({ where: { published: true } })
       .then(data => {
         res.send(data);
       })
       .catch(err => {
         res.status(500).send({
           message:
             err.message || "Some error occurred while retrieving tutorials."
         });
       });
   };

   exports.deletePlansAll = (req, res) => {
    console.log("here")
    Tutorial.destroy({
      where: { }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: 'Deleted!'
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial" 
        });
      });
  };

  exports.createPlans = (req, res) => {
    console.log(req.body)
     if (!req.body.length > 0) {
       res.status(400).send({
         message: "Content can not be empty!"
       });
       return;
     }
   let arr = []
    req.body.forEach(x =>{
      arr.push({description: x.description,
        published: x.published ? x.published : false})
    })
  
   
     // Save Tutorial in the database
     Plans.bulkCreate(arr)
       .then(data => {
         res.send(data);
       })
       .catch(err => {
         res.status(500).send({
           message:
             err.message || "Some error occurred while creating the Tutorial."
         });
       });
   };

   //================================Dreams================================

  exports.createDream = (req, res) => {
    console.log(req.body)
     if (!req.body.description) {
       res.status(400).send({
         message: "Content can not be empty!"
       });
       return;
     }
   
     // Create a Tutorial
     const tutorial = {
       description: req.body.description,
       published: req.body.published ? req.body.published : false
     };
   
     // Save Tutorial in the database
     Dreams.create(tutorial)
       .then(data => {
         res.send(data);
       })
       .catch(err => {
         res.status(500).send({
           message:
             err.message || "Some error occurred while creating the Tutorial."
         });
       });
   };


   exports.createDreams = (req, res) => {
    console.log(req.body)
     if (!req.body.length > 0) {
       res.status(400).send({
         message: "Content can not be empty!"
       });
       return;
     }
   let arr = []
    req.body.forEach(x =>{
      arr.push({description: x.description,
        published: x.published ? x.published : false})
    })
  
   
     // Save Tutorial in the database
     Dreams.bulkCreate(arr)
       .then(data => {
         res.send(data);
       })
       .catch(err => {
         res.status(500).send({
           message:
             err.message || "Some error occurred while creating the Tutorial."
         });
       });
   };

 
   exports.findAllDreams = (req, res) => {
     const description = req.query.description;
     var condition = description ? { title: { [Op.like]: `%${description}%` } } : null;
   
     Dreams.findAll({ where: condition })
       .then(data => {
         res.send(data);
       })
       .catch(err => {
         res.status(500).send({
           message:
             err.message || "Some error occurred while retrieving tutorials."
         });
       });
   };
 
   exports.findOneDream = (req, res) => {
     const id = req.params.id;
   
     Dreams.findByPk(id)
       .then(data => {
         
         res.send(data);
       })
       .catch(err => {
         res.status(500).send({
           message: "Error retrieving Tutorial with id=" + id
         });
       });
   };
 
   exports.updateDreams = (req, res) => {
     const id = req.params.id;
   
     Dreams.update(req.body, {
       where: { id: id }
     })
       .then(num => {
         if (num == 1) {
           res.send({
             message: "Tutorial was updated successfully."
           });
         } else {
           res.send({
             message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
           });
         }
       })
       .catch(err => {
         res.status(500).send({
           message: "Error updating Tutorial with id=" + id
         });
       });
   };
 
   exports.deleteDream = (req, res) => {
    const ids = req.params.ids;
let ids_arr = ids.split(',')
  console.log("IDSSSS3", req.params)
    Dreams.destroy({
      where: { id: ids_arr }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: ids
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${ids}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + ids
        });
      });
  };

 
   exports.findAllPublishedDreams = (req, res) => {
     Dreams.findAll({ where: { published: true } })
       .then(data => {
         res.send(data);
       })
       .catch(err => {
         res.status(500).send({
           message:
             err.message || "Some error occurred while retrieving tutorials."
         });
       });
   };

   exports.deleteDreamsAll = (req, res) => {
    console.log("here")
  Dreams.destroy({
      where: { }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: 'Deleted!'
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial" 
        });
      });
  };