package com.spe.mncManagement.services.impl;

import com.spe.mncManagement.bean.Employee;
import com.spe.mncManagement.dao.impl.EmployeeDaoImpl;
import com.spe.mncManagement.services.Service;
import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class EmployeeServiceImpl implements Service {

    @Autowired
    EmployeeDaoImpl dao;

    @Override
    public Employee registerEmployee(Employee employee) {

        if (!dao.registerEmployee(employee)) {
            return null;
        }
        return employee;

    }

    @Override
    public Employee validateAndRetrieveEmployee(Employee employee, boolean requiredPassword) {
        if (employee.getUsername().isEmpty() || employee.getPassword().isEmpty()) return null;

        return dao.validateAndRetrieveEmployee(employee, requiredPassword);
    }
}
