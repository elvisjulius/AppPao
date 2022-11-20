package com.example.AppPao.Controller


import com.example.AppPao.Model.User
import com.example.AppPao.Service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("user")
class UserController(@Autowired private val service: UserService) {

    @PostMapping
    fun createUser(@RequestBody user: User): User {
        return service.createUser(user)

    }

   @GetMapping
   fun checkUser(@RequestBody user: User): User {
       return service.checkUser(user)
   }
}