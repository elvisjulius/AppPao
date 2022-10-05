package com.example.AppPao.Model

import java.util.UUID
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id

@Entity
data class Product(
    @Id
    val productId: UUID,
    @Column(nullable = false, length = 100)
    val name: String,
    val quantity: Int,
    val price: Long,
)