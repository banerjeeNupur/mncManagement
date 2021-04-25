package com.spe.mncManagement.services;

import com.spe.mncManagement.bean.Employee;

public interface Service {

    public Employee registerEmployee(final Employee employee);
    public Employee validateAndRetrieveEmployee(final Employee employee, boolean requiredPassword);

}
