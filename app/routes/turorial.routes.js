
    const tutorials = require("../controllers/tutorial.controller.js");
    var router = require("express").Router();

  
//===============PLANS======================
    router.post("/plans", tutorials.create);
    router.get("/plans", tutorials.findAll);
    router.get("/published-plans", tutorials.findAllPublished);
    router.get("/plans/:id", tutorials.findOne);
    router.put("/plans/:id", tutorials.update);
    router.delete("/plans/delete/:ids", tutorials.delete);
    router.delete("/p-delete/all", tutorials.deletePlansAll);
//==============================================


//=================GOALS==================
router.post("/goals", tutorials.createGoal);
router.post("/goals-all", tutorials.createGoals);
router.get("/goals", tutorials.findAllGoals);
router.get("/published-goals", tutorials.findAllPublishedGoals);
router.get("/goals/:id", tutorials.findOneGoal);
router.put("/goals/:id", tutorials.updateGoal);
router.delete("/goals/delete/:ids", tutorials.deleteGoal);
router.delete("/g-delete/all", tutorials.deleteGoalsAll);

//=================DREAMS==================
router.post("/dreams", tutorials.createDream);
router.post("/dreams-all", tutorials.createDreams);
router.get("/dreams", tutorials.findAllDreams);
router.get("/published-dreams", tutorials.findAllPublishedDreams);
router.get("/dreams/:id", tutorials.findOneDream);
router.put("/dreams/:id", tutorials.updateDreams);
router.delete("/dreams/delete/:ids", tutorials.deleteDream);
router.delete("/d-delete/all", tutorials.deleteDreamsAll);

    module.exports = router;