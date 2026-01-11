let express = require('express');
const { recordsInsert, recordsView, recordsDelete, recordsUpdate } = require('../controllers/employeeRecords');
let recordsRouter = express.Router();

recordsRouter.post('/insert', recordsInsert);
recordsRouter.get('/view',recordsView);
recordsRouter.delete('/delete/:id',recordsDelete);
recordsRouter.put('/update/:id',recordsUpdate);

module.exports={recordsRouter}