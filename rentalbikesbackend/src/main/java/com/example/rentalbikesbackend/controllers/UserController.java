package com.example.rentalbikesbackend.controllers;

import com.example.rentalbikesbackend.entities.User;
import com.example.rentalbikesbackend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user){
        return userService.registerUser(user);
    }
    @GetMapping("/{name}")
    public User getUserByName(@PathVariable String name){
        return userService.getUserByName(name);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user){
        User existingUser = userService.getUserByName(user.getName());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())){
            return  ResponseEntity.ok(Map.of("Message",
                    "Login Successfully!", "user", existingUser));
        }
        return
                ResponseEntity.status(HttpStatus.UNAUTHORIZED).body
                        (Map.of("error","Invalid credentials"));
    }
}
