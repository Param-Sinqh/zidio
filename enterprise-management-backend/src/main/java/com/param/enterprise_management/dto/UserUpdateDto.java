package com.param.enterprise_management.dto;

import lombok.Data;
import jakarta.validation.constraints.NotBlank;

@Data
public class UserUpdateDto {
    @NotBlank(message = "email is mandatory")
    private String email;
    @NotBlank(message = "role is mandatory")
    private String role;
    // you can add email, role, etc.
}