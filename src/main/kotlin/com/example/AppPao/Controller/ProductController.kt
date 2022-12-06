package com.example.AppPao.Controller

import com.example.AppPao.Model.Product
import com.example.AppPao.Service.ProductService
import java.util.Optional
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
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
    @CrossOrigin(origins = arrayOf("http://127.0.0.1:5173"))
    fun createProduct(@RequestBody product: Product): ResponseEntity<Product> {
        return service.createProduct(product)
    }

    @GetMapping
    @CrossOrigin(origins = arrayOf("http://127.0.0.1:5173"))
    fun getAllProduct(): MutableList<Product> {
        return service.getAllProduct()
    }

    @PutMapping("{id}")
    @CrossOrigin( origins = arrayOf("http://127.0.0.1:5173"))
    fun updateProduct (@PathVariable id: Long, @RequestBody product: Product): ResponseEntity<Product>{
        val updatedProduct =  service.updateProduct(
            id = id,
            product = Product(
                id = id,
                name = product.name,
                quantity = product.quantity,
                price = product.price
            )
        )

        return updatedProduct
   }

    @GetMapping("/find/{id}")
    @CrossOrigin( origins = arrayOf("http://127.0.0.1:5173"))
    fun findById(@PathVariable("id") id: Long): Optional<Product> {
       return service.findById(id)
    }


}