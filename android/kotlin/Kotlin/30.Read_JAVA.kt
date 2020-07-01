package com.example.myapplication.Kotlin

// 자바소스를 복붙하면 크틀린 소스로 변경
object AddTwoNumbers {
    @JvmStatic
    fun main(args: Array<String>) {
        val num1 = 5
        val num2 = 15
        val sum: Int
        sum = num1 + num2
        println("Sum of these numbers: $sum")
    }
}