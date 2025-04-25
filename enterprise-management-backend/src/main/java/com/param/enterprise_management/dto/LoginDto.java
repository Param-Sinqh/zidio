package com.param.enterprise_management.dto;

import lombok.Data;
import jakarta.validation.constraints.NotBlank;

@Data
public class LoginDto {
    @NotBlank
    private String username;
    @NotBlank
    private String password;
}