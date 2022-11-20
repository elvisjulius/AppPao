package com.example.AppPao.Repository

import com.example.AppPao.Model.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Component
import org.springframework.stereotype.Repository

@Repository
@Component
interface UserRepository : JpaRepository<User, Long> {
    fun findByEmailAndPassword(email: String, senha: String): User
}
