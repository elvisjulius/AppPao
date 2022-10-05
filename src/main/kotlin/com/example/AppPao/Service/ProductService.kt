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
        val productSave = respository.save(product)
        return ResponseEntity.ok(productSave)
    }

    fun getAllProduct(): MutableList<Product>{
        val listProduct = respository.findAll()
        return listProduct
    }

    fun updateProduct(id: String, product: Product): ResponseEntity<Product>{
        val productDBOptional = respository.findById(UUID.fromString(id))
        val productDB =  productDBOptional.orElseThrow { RuntimeException("Product id: $id not found!") }
        val saved = respository.save(productDB.copy(
            name = product.name,
            quantity = product.quantity,
            price = product.price
        )
        )
        return ResponseEntity.ok(saved)
    }

    fun findById(id: String): ResponseEntity<Optional<Product>> {
        val product = respository.findById(UUID.fromString(id))
        return ResponseEntity.ok(product)
    }
}