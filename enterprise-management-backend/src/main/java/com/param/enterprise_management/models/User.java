package com.param.enterprise_management.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String role; // e.g., ROLE_EMPLOYEE, ROLE_MANAGER, ROLE_ADMIN
    private String email;

    // additional fields such as email, etc.
}
