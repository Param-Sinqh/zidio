package com.param.enterprise_management.controllers;

import com.param.enterprise_management.dto.LoginDto;
import com.param.enterprise_management.dto.UserDto;
import com.param.enterprise_management.models.User;
import com.param.enterprise_management.payload.JwtResponse;
import com.param.enterprise_management.repositories.UserRepository;
import com.param.enterprise_management.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;

    @Autowired
    public AuthController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody UserDto dto) {
        if (userRepo.existsByUsername(dto.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body("Username is already taken");
        }

        User user = new User();
        user.setUsername(dto.getUsername());
        // **BCrypt** hashes the password + salt internally
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setRole("ROLE_EMPLOYEE");  // or from dto

        userRepo.save(user);
        return ResponseEntity.ok("User registered successfully");
    }




    @Autowired
    private AuthenticationManager authManager;
    @Autowired
    private JwtTokenProvider jwtProvider;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginDto dto) {
        Authentication auth = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        dto.getUsername(),
                        dto.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(auth);
        String jwt = jwtProvider.generateToken(auth);
        return ResponseEntity.ok(new JwtResponse(jwt, "Bearer"));
    }
}
