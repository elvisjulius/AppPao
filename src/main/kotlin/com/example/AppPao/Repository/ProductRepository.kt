package com.example.AppPao.Repository

import com.example.AppPao.Model.Product
import java.util.UUID

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Component
import org.springframework.stereotype.Repository

@Repository
@Component
interface ProductRepository : JpaRepository<Product, UUID>