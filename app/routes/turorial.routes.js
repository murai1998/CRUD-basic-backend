
    const tutorials = require("../controllers/tutorial.controller.js");
    var router = require("express").Router();

  
//===============PLANS======================
    router.post("/plans", tutorials.create);
    router.get("/plans", tutorials.findAll);
    router.get("/published-plans", tutorials.findAllPublished);
    router.get("/plans/:id", tutorials.findOne);
    router.put("/plans/:id", tutorials.update);
    router.delete("/plans/:id", tutorials.delete);
    router.delete("/plans", tutorials.deleteAll);
//==============================================


//=================GOALS==================
router.post("/goals", tutorials.createGoal);
router.get("/goals", tutorials.findAllGoals);
router.get("/published-goals", tutorials.findAllPublishedGoals);
router.get("/goals/:id", tutorials.findOneGoal);
router.put("/goals/:id", tutorials.updateGoal);
router.delete("/goals/:id", tutorials.deleteGoal);
router.delete("/goals", tutorials.deleteAllGoals);

    module.exports = router;