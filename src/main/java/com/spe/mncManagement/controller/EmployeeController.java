package com.spe.mncManagement.controller;

import com.spe.mncManagement.bean.Employee;
import com.spe.mncManagement.services.impl.EmployeeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:8764")
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeServiceImpl service;

    @PostMapping(path = "/registerEmployee",
            produces = {"application/json"},
            consumes = {"application/json"})
    public ResponseEntity<Employee> registerCustomer(@RequestBody Employee employee) {
        System.out.println("Sign up " + employee);
        Employee response = service.registerEmployee(employee);
        if (response == null) return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PostMapping(path = "/validateLogin",
            produces = {"application/json"},
            consumes = {"application/json"})
    public ResponseEntity<Employee> validateLogin(@RequestBody Employee employee) {
        System.out.println("Sign in " + employee);
        Employee response = service.validateAndRetrieveEmployee(employee, true);
        if (response == null) return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        else if (response.getUser_type()== "admin") return new ResponseEntity<>(response, HttpStatus.OK);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
