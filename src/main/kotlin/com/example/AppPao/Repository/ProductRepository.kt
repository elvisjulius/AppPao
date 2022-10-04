package com.example.AppPao.Repository

import com.example.AppPao.Model.Product
import java.util.UUID

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ProductRepository : JpaRepository<Product, UUID>