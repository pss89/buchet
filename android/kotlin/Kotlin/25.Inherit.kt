package com.example.myapplication.Kotlin

// 두번까지는 봐준다
// 두번이상이 넘어가면 리펙토링 해라

// 25. 상속
// 부모로부터 설명서를 물려받는다!

fun main(array: Array<String>) {
    val superCar100 : SuperCar100 = SuperCar100()
    println(superCar100.drive())
//    superCar100.stop()
//
//    // 상송을 받아야 사용 가능
//    val bus100: Bus100 = Bus100()
//    bus100.drive()
}

// 클래스 선언 시 기본 접근제어자는 private
// open => php의 public 임
open class Car100() {
    open fun drive():String {
        return "달린다"
//        println("달린다")
    }

    fun stop() {

    }
}

class SuperCar100() : Car100() {
    // 상속받은 Car100 클래스의 drive 함수를 재정의 하기 위한 코드
    override fun drive():String {
        // super = 부모 클래스
        val run = super.drive()
        return "빨리 $run"
//        println("빨리 달린다")
    }
}

class Bus100() : Car100(){

}