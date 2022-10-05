package com.example.AppPao.Controller

import com.example.AppPao.Model.Product
import com.example.AppPao.Service.ProductService
import java.util.Optional
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("product")
class ProductController(@Autowired private val service: ProductService) {

    @PostMapping
    fun createProduct(@RequestBody product: Product): ResponseEntity<Product> {
        val productSave = service.createProduct(product)
        return productSave
    }
    @GetMapping
    fun getAllProduct(): MutableList<Product> {
        val listProduct = service.getAllProduct()
        return listProduct
    }

    @PutMapping("{id}")
    fun updateProduct (@PathVariable id: String, @RequestBody product: Product): ResponseEntity<Product>{
        val updatedProduct =  service.updateProduct(
            id = id,
            product = product
        )

        return updatedProduct
    }

    @GetMapping("/{id}")
    fun findById(@PathVariable id: String): ResponseEntity<Optional<Product>> {
        val product = service.findById(id)
        return product
    }


}