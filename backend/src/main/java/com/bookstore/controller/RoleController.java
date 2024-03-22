package com.bookstore.controller;

import com.bookstore.model.Role;
import com.bookstore.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
@CrossOrigin
public class RoleController {

    @Autowired
    private RoleService roleService;

    @PostMapping("/add")
    public String addRole(@RequestBody Role role) {
        roleService.saveRole(role);
        return "New role added successfully";
    }

    @GetMapping("/getAll")
    public List<Role> getAllRoles() {
        return roleService.getAllRoles();
    }
}
