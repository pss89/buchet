package com.example.myapplication.Kotlin

// 14. Collection
// -> List, set, map

fun main(array:Array<String>){
    // List - 중복 허용 , 변경할 수 없는 리스트(Immutable Collections)
    val numberList = listOf<Int>(1,2,3,3,3)
    println(numberList)
    println(numberList.get(0))
    println(numberList[0])

    println()
    // Set (집합) - 중복 허용 하지 않는다 , 순서가 없다
    val numberSet = setOf<Int>(1,2,3,3,3)
    println(numberSet)
    numberSet.forEach{
        println(it)
    }

    println()
    // Map -> Key, Value 방식으로 관리한다
    var numberMap = mapOf<String,Int>("one" to 1, "two" to 2)
    println(numberMap)
    println(numberMap.get("one"))

    println()
    // Mutable Collection (변경 할 수 있는 List, Set, Map)
    val mNumberList = mutableListOf<Int>(1,2,3)
    mNumberList.add(3,4)
    println(mNumberList)

    println()
    val mNumberSet = mutableSetOf<Int>(1,2,3,4,4,4)
    mNumberSet.add(10)
    println(mNumberSet)

    println()
    val mNumberMap = mutableMapOf<String, Int>("one" to 1)
    mNumberMap.put("two",2)
    println(mNumberMap)
}