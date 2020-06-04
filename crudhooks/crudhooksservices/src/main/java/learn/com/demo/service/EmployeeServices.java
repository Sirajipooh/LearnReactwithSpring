package learn.com.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import learn.com.demo.model.Employee;
import learn.com.demo.repo.EmployeeRepo;

@Service
@Transactional
public class EmployeeServices {
    @Autowired
    private EmployeeRepo employeeRepo;

    public List<Employee> findAll() {

        return employeeRepo.findAll();
    }

    public Employee save(Employee employee) {

        return employeeRepo.save(employee);
    }

    public Optional<Employee> getEmployee(Integer id) {
        return employeeRepo.findById(id);
    }

    public void deleteEmployee(Employee employee) {
        employeeRepo.delete(employee);
    }

    public void deleteEmployee(Integer id) {
        employeeRepo.deleteById(id);
    }

}