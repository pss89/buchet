package com.example.myapplication.Kotlin

// 16. Iterable

fun main(array: Array<String>) {
    val a = mutableListOf<Int>(1,2,3,4,5,6,7,8,9)

    // 반복하는 방법(1)
    for (item in a){
        if(item == 5){
            println("Item is Five")
        } else {
            println("Item is Not Five")
        }
    }

    println()
    // 반복하는 방법(2) - index,value 모두 출력 할 경우
    for ((Index, item) in a.withIndex()){
        println("Index : "+Index+" Value : "+item)
        // 문자열 + Int(정수) = 문자열
        // 문자열 + Other = 문자열
    }
}