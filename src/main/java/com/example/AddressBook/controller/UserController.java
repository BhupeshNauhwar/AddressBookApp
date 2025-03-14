package com.example.AddressBook.controller;

import com.example.AddressBook.dto.UserDTO;
import com.example.AddressBook.services.UserServices;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    UserServices userServices;

    public UserController(UserServices userServices) {
        this.userServices = userServices;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserDTO userDTO) {
        logger.info("Received Registration Request: {}", userDTO);
        try {
            String response = userServices.registerUser(userDTO);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Error during registration", e);
            return ResponseEntity.internalServerError().body("Registration failed");
        }
    }

    @GetMapping("/verify")
    public ResponseEntity<String> verify(@RequestParam String token) {
        try {
            String response = userServices.verifyUser(token);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Error during verification", e);
            return ResponseEntity.internalServerError().body("Verification failed");
        }
    }

}
