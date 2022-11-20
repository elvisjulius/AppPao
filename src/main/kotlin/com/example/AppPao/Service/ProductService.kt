package com.example.AppPao.Service

import com.example.AppPao.Model.Product
import com.example.AppPao.Repository.ProductRepository
import java.util.Optional
import java.util.UUID
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Component
import org.springframework.stereotype.Service

@Service
@Component
class ProductService(@Autowired private val respository: ProductRepository) {

    fun createProduct(product: Product): ResponseEntity<Product>{
        return ResponseEntity.ok(respository.save(product))
    }

    fun getAllProduct(): MutableList<Product>{
        val listProduct = respository.findAll()
        return listProduct
    }

    fun updateProduct(id: Long, product: Product): ResponseEntity<Product>{
        val productDBOptional = respository.findById(id)
        val productDB =  productDBOptional.orElseThrow { RuntimeException("Product id: $id not found!") }
        val saved = respository.save(productDB.copy(
            name = product.name,
            quantity = product.quantity,
            price = product.price
        )
        )
        return ResponseEntity.ok(saved)
    }

    fun findById(id: Long): Optional<Product> {
        return respository.findById(id)
    }

    fun <T : Any> Optional<out T>.toList(): List<T> =
        if (isPresent) listOf(get()) else emptyList()
}