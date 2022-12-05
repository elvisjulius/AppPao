package com.example.AppPao.Service

import com.example.AppPao.Model.Product
import com.example.AppPao.Model.RequestOrder
import com.example.AppPao.Repository.RequestOrderRepository
import java.util.Optional
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import org.springframework.stereotype.Service

@Service
@Component
class RequestOrderService(@Autowired private val repository: RequestOrderRepository) {

    fun createRequestOrder(listProducts: List <Product>):RequestOrder{
        var total: Float = 0F
        var requestOrder: RequestOrder? = null
        for(k in listProducts){
            total += k.price * k.quantity
        }
        requestOrder = RequestOrder(
            request = listProducts,
            totalPrice = total

        )
       return repository.save(requestOrder)
    }

    fun findById(id: Long): Optional<RequestOrder> {
        return repository.findById(id)
    }


}