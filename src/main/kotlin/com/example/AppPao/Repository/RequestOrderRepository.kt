package com.example.AppPao.Repository

import com.example.AppPao.Model.RequestOrder
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Component
import org.springframework.stereotype.Repository



@Repository
@Component
interface RequestOrderRepository : JpaRepository<RequestOrder, Long>