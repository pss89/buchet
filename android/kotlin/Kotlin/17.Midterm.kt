package com.example.myapplication.Kotlin

fun main(array: Array<String>) {
    first()
    println(second(85))
    println(third(56))
    gugudan()
}

fun first() {
    val list1 = MutableList(9, { 0 })
    val list2 = MutableList(9, { true })

    for (i in 0..8) {
        list1[i] = i + 1
    }

    list1.forEachIndexed { index, value ->
        if (value % 2 == 0) {
            // 짝수
            list2[index] = true
        } else {
            // 홀수
            list2[index] = false
        }
    }

    println(list1)
    println(list2)
}

fun second(score: Int): String {
    when (score) {
        in 90..100 -> {
            return "A"
        }
        in 80..89 -> {
            return "B"
        }
        in 70..79 -> {
            return "C"
        }
        else -> {
            return "F"
        }
    }
}

fun third(number:Int):Int{
    // 89 -> 8 + 9
    val a: Int = number / 10
    val b: Int = number % 10

    return a + b
}

fun gugudan(){
    for (x in 1..9){
        for (y in 1..9){
            println("$x x $y = ${x * y}")
        }
    }
}