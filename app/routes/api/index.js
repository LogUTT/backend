const router = require('express').Router();

const authentification = require('../../controllers/authentification.controller');
const object = require('../../controllers/object.controller');
const objectInstance = require('../../controllers/objectInstance.controller');
const category = require('../../controllers/category.controller');
const storage = require('../../controllers/storage.controller');
const association = require('../../controllers/association.controller');
const user = require('../../controllers/user.controller');
const role = require('../../controllers/role.controller');

router.get('/', (req, res) => res.json({ message: 'Welcome to LogUTT' }));

router.post('/login', authentification.login);

// Objets routes
router.post('/objects', object.create);
router.get('/objects', object.findAll);
router.get('/objects/:objectId', object.findOne);
router.put('/objects/:objectId', object.update);
router.delete('/objects/:objectId', object.delete);

// Objet Instance routes
router.post('/objects/:objectId/instances', objectInstance.create);
router.get('/objects/:objectId/instances', objectInstance.findAll);
router.get(
  '/objects/:objectId/instances/:objectInstanceId',
  objectInstance.findOne
);
router.put(
  '/objects/:objectId/instances/:objectInstanceId',
  objectInstance.update
);
router.delete(
  '/objects/:objectId/instances/:objectInstanceId',
  objectInstance.delete
);

// Categories routes
router.post('/categories', category.create);
router.get('/categories', category.findAll);
router.get('/categories/:categoryId', category.findOne);
router.get('/categories/:parentId/sub', category.findAllSubCategories);
router.put('/categories/:categoryId', category.update);
router.delete('/categories/:categoryId', category.delete);

// Storages routes
router.post('/storages', storage.create);
router.get('/storages', storage.findAll);
router.get('/storages/:storageId', storage.findOne);
router.put('/storages/:storageId', storage.update);
router.delete('/storages/:storageId', storage.delete);

// Associations routes
router.post('/associations', association.create);
router.get('/associations', association.findAll);
router.get('/associations/:associationId', association.findOne);
router.put('/associations/:associationId', association.update);
router.delete('/associations/:associationId', association.delete);

// Users routes
router.post('/users', user.create);
router.get('/users', user.findAll);
router.get('/users/:userId', user.findOne);
router.put('/users/:userId', user.update);
router.delete('/users/:userId', user.delete);

// Roles routes
router.post('/roles', role.create);
router.get('/roles', role.findAll);
router.get('/roles/:roleId', role.findOne);
router.put('/roles/:roleId', role.update);
router.delete('/roles/:roleId', role.delete);

module.exports = router;
