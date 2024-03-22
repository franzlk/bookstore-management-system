package com.bookstore.service;

import com.bookstore.model.Role;

import java.util.List;

public interface RoleService {
    Role saveRole(Role role);

    List<Role> getAllRoles();
}
