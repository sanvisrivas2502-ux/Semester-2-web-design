package com.example.studentapi;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
public class StudentController {

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to Student Management REST API";
    }

    @GetMapping("/details")
    public Student getStudent() {
        return new Student(101, "Rahul", "Computer Science");
    }

    @PostMapping("/add")
    public Student addStudent(@RequestBody Student student) {
        return student;
    }
}