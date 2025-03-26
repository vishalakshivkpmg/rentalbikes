package com.example.rentalbikesbackend.configurations;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import java.io.IOException;
import java.util.List;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class SimpleCorsFilter implements Filter {

    private final List<String> allowedOrigins = List.of("http://localhost:4200"); // Add allowed origins here

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) res;
        HttpServletRequest request = (HttpServletRequest) req;
        String originHeader = request.getHeader("Origin");

        // Validate the origin header and allow only trusted origins
        if (originHeader != null && allowedOrigins.contains(originHeader)) {
            response.setHeader("Access-Control-Allow-Origin", originHeader);
            response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
            response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
            response.setHeader("Access-Control-Max-Age", "3600");

            // Allow credentials if necessary
            response.setHeader("Access-Control-Allow-Credentials", "true");
        } else {
            // Optional: You can log an error or a warning if the origin is not allowed
            response.setStatus(HttpServletResponse.SC_FORBIDDEN); // Forbidden if origin is not allowed
        }

        // Handle preflight request (OPTIONS)
        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
        } else {
            chain.doFilter(req, res);
        }
    }

    @Override
    public void init(FilterConfig filterConfig) {
        // You can initialize any required configurations here
    }

    @Override
    public void destroy() {
        // Cleanup if necessary
    }
}
