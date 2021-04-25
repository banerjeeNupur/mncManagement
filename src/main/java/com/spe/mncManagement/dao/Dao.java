package com.spe.mncManagement.dao;

import com.spe.mncManagement.bean.Employee;
import org.hibernate.SessionFactory;

public interface Dao {

    public void setSessionFactory(SessionFactory sf);

    public boolean registerEmployee(final Employee employee);

    public Employee validateAndRetrieveEmployee(final Employee employee, boolean requirePassword);


}
