package com.example.AppPao.Service

import com.example.AppPao.Model.RequestOrder
import com.example.AppPao.Repository.RequestOrderRepository
import java.util.Optional
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import org.springframework.stereotype.Service

@Service
@Component
class RequestOrderService(@Autowired private val repository: RequestOrderRepository) {

    fun createRequestOrder(requestOrder: RequestOrder):RequestOrder{
       return repository.save(requestOrder)
    }

    fun findById(id: Long): Optional<RequestOrder> {
        return repository.findById(id)
    }

    fun <T : Any> Optional<out T>.toList(): List<T> =
        if (isPresent) listOf(get()) else emptyList()
}