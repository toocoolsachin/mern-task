const Employee = require('../models/employee');

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({
      status: 'success',
      length: employees.length,
      data: employees,
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      data: err,
    });
  }
};

exports.getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.employeeId);
    res.status(200).json({
      status: 'success',
      data: employee,
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      data: err,
    });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.employeeId,
      req.body,
      { new: true }
    );
    res.status(200).json({
      status: 'success',
      data: employee,
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      data: err,
    });
  }
};
