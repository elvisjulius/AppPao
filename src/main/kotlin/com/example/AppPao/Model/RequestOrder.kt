package com.example.AppPao.Model

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.OneToMany
import kotlin.random.Random

@Entity
data class RequestOrder (
    @field:Id
    @field:GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,
    @OneToMany
    val request: List<Product>,
    var totalPrice: Float
)