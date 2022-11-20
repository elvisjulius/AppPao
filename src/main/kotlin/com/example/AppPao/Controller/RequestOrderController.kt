package com.example.AppPao.Controller

import com.example.AppPao.Model.RequestOrder
import com.example.AppPao.Model.User
import com.example.AppPao.Service.RequestOrderService
import com.example.AppPao.Service.UserService
import java.util.Optional
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("request")
class RequestOrderController(@Autowired private val service: RequestOrderService) {

@PostMapping
fun createRequestOrder(@RequestBody requestOrder: RequestOrder): RequestOrder{
    return service.createRequestOrder(requestOrder)
}

    @GetMapping
    fun findByIdOrder(@PathVariable("id") id: Long): Optional<RequestOrder>{
        return service.findById(id)
    }
}