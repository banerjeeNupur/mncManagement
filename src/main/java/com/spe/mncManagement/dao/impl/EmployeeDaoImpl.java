package com.spe.mncManagement.dao.impl;

import com.spe.mncManagement.bean.Employee;
import com.spe.mncManagement.dao.Dao;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

@Repository
public class EmployeeDaoImpl implements Dao {

    @Autowired
    private SessionFactory sessionFactory;

    public EmployeeDaoImpl() {}

    @Override
    public void setSessionFactory(SessionFactory sf) {
        this.sessionFactory = sf;
    }

    @Override
    public boolean registerEmployee(Employee employee) {
        Session session = this.sessionFactory.getCurrentSession();
        Transaction transaction;
        try {
            transaction = session.beginTransaction();
            session.save(employee);
            transaction.commit();
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
            return false;
        } finally {
        }
        return true;
    }

    @Override
    public Employee validateAndRetrieveEmployee(final Employee employee, boolean requirePassword) {
        Session session = this.sessionFactory.getCurrentSession();
        try {
            CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
            CriteriaQuery<Employee> criteriaQuery = criteriaBuilder.createQuery(Employee.class);
            Root<Employee> employeeRoot = criteriaQuery.from(Employee.class);
            criteriaQuery.select(employeeRoot);
            Predicate userName = criteriaBuilder.like(employeeRoot.get("username"), employee.getUsername());
            Predicate password = criteriaBuilder.like(employeeRoot.get("password"), employee.getPassword());

            if (requirePassword)
                criteriaQuery.where(criteriaBuilder.and(userName, password));
            else
                criteriaQuery.where(userName);

            Query<Employee> query = session.createQuery(criteriaQuery);
            List<Employee> employees = query.getResultList();

            Employee response = employees.isEmpty() ? null : employees.get(0);
            System.out.println("in dao impl: "+" "+response.getUser_type());
            return response;

        } catch (Exception ex) {
            System.out.println(ex.getMessage());
            return null;
        }
    }
}
