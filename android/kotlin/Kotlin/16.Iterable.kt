package com.example.myapplication.Kotlin

// 16. Iterable

fun main(array: Array<String>) {
    val a = mutableListOf<Int>(1, 2, 3, 4, 5, 6, 7, 8, 9)

    // 반복하는 방법(1)
    for (item in a) {
        if (item == 5) {
            println("Item is Five")
        } else {
            println("Item is Not Five")
        }
    }

    println()
    // 반복하는 방법(2) - index,value 모두 출력 할 경우
    for ((Index, item) in a.withIndex()) {
        println("Index : " + Index + " Value : " + item)
        // 문자열 + Int(정수) = 문자열
        // 문자열 + Other = 문자열
    }

    println()
    // 반복하는 방법(3)
    a.forEach {
        println(it)
    }

    println()
    // 반복하는 방법(4)
    a.forEach { item ->
        println(item)
    }

    println()
    // 반복하는 방법(5)
    a.forEachIndexed { index, item ->
        println("Index : " + index + " value : " + item)
    }

    println()
    // 반복하는 방법(6)
    println(a.size)
    for (i in 0 until a.size) {
        // until은 마지막을 포함 하지 않는다
        // 0 부터 8까지 이다
        println(a.get(i))
    }

    println()
    // 반복하는 방법(7)
    // 2칸씩 건너띄어서 반복
    for (i in 0 until a.size step (2)) {
        println(a.get(i))
    }

    println()
    // 반복하는 방법(8)
    for (i in a.size - 1 downTo (0)) {
        // 8부터 0까지 반복
        println(a.get(i))
    }

    println()
    // 반복하는 방법(9)
    for (i in a.size -1 downTo (0) step (2)){
        println(a.get(i))
    }

    // until : 마지막을 포함하지 않는다.
    // .. : 마지막을 포함한다.

    println()
    // 반복하는 방법(10)
//    for(i in 0..10){
    for(i in 0 until 10){
        println(i)
    }

    println()
    // 반복하는 방법(11)
    var b: Int = 0
    var c: Int = 4

    // while문 안의 조건에 해당 될 떄 까지 반복함
    while(b < c){
        b++ // while문을 정지 시키기위한 코드
        println("b")
    }

    println()
    // 반복하는 방법(12)

    var d:Int = 0
    var e:Int = 4
    do{
        println("hello")
    } while(d < e) //처음부터 조건을 만족하지 못하더라도 무조건 한번은 실행 된다
}