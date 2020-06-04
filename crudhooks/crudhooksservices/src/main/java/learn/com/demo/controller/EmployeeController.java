package learn.com.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import learn.com.demo.model.Employee;
import learn.com.demo.service.EmployeeServices;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeServices employeeServices;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/employees")
    public List<Employee> findAllEmployee() {
        return employeeServices.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/employee/{id}")
    @ResponseBody
    public Optional<Employee> findEmployeeById(@PathVariable("id") Integer id) {
        return employeeServices.getEmployee(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/employee")
    public Employee saveEmployee(@RequestBody Employee employee) {
        return employeeServices.save(employee);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/employee/{id}")
    @ResponseBody
    public void deleteEmployeeById(@PathVariable("id") Integer id) {
        employeeServices.deleteEmployee(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/employee")
    public void deleteEmployee(@RequestBody Employee employee) {
        employeeServices.deleteEmployee(employee);
    }
}