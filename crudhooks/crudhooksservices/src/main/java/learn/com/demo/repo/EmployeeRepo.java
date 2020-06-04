package learn.com.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import learn.com.demo.model.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Integer> {

}