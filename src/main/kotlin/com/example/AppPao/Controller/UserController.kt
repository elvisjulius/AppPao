package com.example.AppPao.Controller


import com.example.AppPao.Model.User
import com.example.AppPao.Service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("user")
class UserController(@Autowired private val service: UserService) {

    @PostMapping
    @CrossOrigin( origins = arrayOf("http://127.0.0.1:5173"))
    fun createUser(@RequestBody user: User): User {
        return service.createUser(user)

    }

   @GetMapping
   @CrossOrigin( origins = arrayOf("http://127.0.0.1:5173"))
   fun checkUser(@RequestBody user: User): User {
       return service.checkUser(user)
   }
}