package com.example.AppPao.Service

import com.example.AppPao.Model.User
import com.example.AppPao.Repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import org.springframework.stereotype.Service

@Service
@Component
class UserService(@Autowired private val repository: UserRepository) {

    fun createUser(user: User): User {
        return repository.save(user)
    }

    fun checkUser(user: User): User{
        return repository.findByEmailAndPassword(user.email,user.password)
    }
}