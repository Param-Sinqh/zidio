package com.param.enterprise_management.dto;


import lombok.Data;
import jakarta.validation.constraints.NotBlank;

@Data
public class UserDto {
    @NotBlank(message = "Username is mandatory")
    private String username;
    @NotBlank(message = "Password is mandatory")
    private String password;
    // you can add email, role, etc.
}