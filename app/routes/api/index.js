const router = require('express').Router();

const object = require('../../controllers/object.controller')
const objectInstance = require('../../controllers/objectInstance.controller')
const category = require('../../controllers/category.controller')
const storage = require('../../controllers/storage.controller')


router.get('/', function(req, res, next){
    return res.json({message : "Welcome to LogUTT"});
});

// Objets routes
router.post("/objects", object.create);
router.get("/objects", object.findAll);
router.get("/objects/:objectId", object.findOne);
router.put("/objects/:objectId", object.update);
router.delete("/objects/:objectId", object.delete);

// Objet Instance routes
router.post("/objects/:objectId/instances", objectInstance.create);
router.get("/objects/:objectId/instances", objectInstance.findAll);
router.get("/objects/:objectId/instances/:objectInstanceId", objectInstance.findOne);
router.put("/objects/:objectId/instances/:objectInstanceId", objectInstance.update);
router.delete("/objects/:objectId/instances/:objectInstanceId", objectInstance.delete);

// Categories routes
router.post("/categories", category.create);
router.get("/categories", category.findAll);
router.get("/categories/:categoryId", category.findOne);
router.put("/categories/:categoryId", category.update);
router.delete("/categories/:categoryId", category.delete);

// Storages routes
router.post("/storages", storage.create);
router.get("/storages", storage.findAll);
router.get("/storages/:storageId", storage.findOne);
router.put("/storages/:storageId", storage.update);
router.delete("/storages/:storageId", storage.delete);

module.exports = router;