const router = require('express').Router();

const {
  getAllEmployees,
  getEmployee,
  updateEmployee,
} = require('../controllers/employee');

router.get('/employees', getAllEmployees);
router.get('/employee/:employeeId', getEmployee);
router.put('/employee/:employeeId', updateEmployee);

module.exports = router;
