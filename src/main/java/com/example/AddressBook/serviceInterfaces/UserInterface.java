package com.example.AddressBook.serviceInterfaces;

import com.example.AddressBook.dto.UserDTO;

public interface UserInterface {
    public String registerUser(UserDTO userDTO);
    public String verifyUser(String token);
}
