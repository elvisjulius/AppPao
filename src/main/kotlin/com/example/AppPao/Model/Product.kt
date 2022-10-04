package com.example.AppPao.Model

import java.util.UUID

data class Product(
    val productId: UUID,
    val name: String,
    val quantity: Int,
    val price: Long,
)
