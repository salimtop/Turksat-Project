package com.turksat.tournament.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.security.Signature;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {
    private static final String SECRET_KEY = "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAgS7g6UK6z9gLQ++IiKPWaGsYDYDTRdRXmQIG6F6EOC4y3pK/Aat/RDiJR5HsSrwp/WnnNsSRDgxsJ0nJ8jlVJ8r2R3v1K6qUh7Hk8DE5RbOC+yxD3kPggH7IEe7ONz/QxyTZb157LzERIhY0AkTJ9jXvKb+FdN4r/TOtIrFHkjkh//68azxJ/PsNwxUcXELnK76ds+q5Oj2scZREa4WDzZq6+T98t2b7dczRteq3QqvjkosIfuYllU5bzx/cUEr6wFjQTF3LHxhw/zicXAEDWlqeaZjqXMkZPqXG1z++H7RO1HATCV1ihzt+PqzrxTh9zD9SLnx8SeVUncVi7ta5jvnlaz+1IEnvXhf8VZw/pJtaihGlOcIzzaTgLgQVc3d9ZZXgYOruMySZo0iDhkLVs2uYnAstexgz6VLRkD0LP+n1sPerWlbwURA7SQ/ed1dQNxGyKL5KChFkcBPNg0Rvslhetj/KLmXPb8BnyNNyO9Ph3l2UaMQpaN7SI74xSQcWRMULPuGBSp6M3wHGWUiJrf/mf81+65iFLUh9Mob6SY6lwGp5MMelIC+HXeEyfIcOLBGhqw3LcbXS5fJn8Dv3jMgLXCGKufU0dlC/0gFGw235NydV4eG5wkLZgP3/9azUOOgKrC0rO3OeojnlGW3xzzBsd14/xrO650uFC+gHSz0CAwEAAQ==";
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public String generateToken(UserDetails userDetails){
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(
            Map<String, Object> extractClaims,
            UserDetails userDetails
    ){
        return Jwts
                .builder()
                .setClaims(extractClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24 ))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails){
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private Claims extractAllClaims(String token){
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
