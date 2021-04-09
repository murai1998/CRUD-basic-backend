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
    const id = req.params.id;
  
    Goals.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };

  exports.deleteAllGoals = (req, res) => {
    Goals.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
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
     const id = req.params.id;
   
     Tutorial.destroy({
       where: { id: id }
     })
       .then(num => {
         if (num == 1) {
           res.send({
             message: "Tutorial was deleted successfully!"
           });
         } else {
           res.send({
             message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
           });
         }
       })
       .catch(err => {
         res.status(500).send({
           message: "Could not delete Tutorial with id=" + id
         });
       });
   };
 
   exports.deleteAll = (req, res) => {
     Tutorial.destroy({
       where: {},
       truncate: false
     })
       .then(nums => {
         res.send({ message: `${nums} Tutorials were deleted successfully!` });
       })
       .catch(err => {
         res.status(500).send({
           message:
             err.message || "Some error occurred while removing all tutorials."
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




   //================================Dreams================================

  exports.createDreams = (req, res) => {
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
 
   exports.deleteDreams = (req, res) => {
     const id = req.params.id;
   
     Dreams.destroy({
       where: { id: id }
     })
       .then(num => {
         if (num == 1) {
           res.send({
             message: "Tutorial was deleted successfully!"
           });
         } else {
           res.send({
             message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
           });
         }
       })
       .catch(err => {
         res.status(500).send({
           message: "Could not delete Tutorial with id=" + id
         });
       });
   };
 
   exports.deleteAllDreams = (req, res) => {
     Dreams.destroy({
       where: {},
       truncate: false
     })
       .then(nums => {
         res.send({ message: `${nums} Tutorials were deleted successfully!` });
       })
       .catch(err => {
         res.status(500).send({
           message:
             err.message || "Some error occurred while removing all tutorials."
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