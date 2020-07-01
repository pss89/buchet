package com.example.myapplication.Kotlin

// 28. Interface
// - 인터페이스도 구현이 있는 함수를 만들 수 있다
// - 인터페이스에 구현이 있는 함수는 그 인터페이스를 구현하는 클래스에서 그 함수를 구현 할 필요가 없다.

fun main(array:Array<String>){
    val student__ = Student__()
    student__.eat()
    student__.sleep()
    student__.study()
}

interface Person__ {
    // 아래와 같이 구현 후 다른 클래스에서 해당 인터페이스를 사용 할 경우
    // 다른 클래스에서 굳이 아래 함수를 정의 할 필요 없이
    // 사용 가능 하다.

    fun eat(){
        println("먹는다")
    }
    fun sleep(){
        println("잔다")
    }
    // abstract : 해당 함수는 인터페이스를 사용하는 클래스에서는 반드시 사용해야 한다는 의미
    abstract fun study()
}

// 인터페이시를 구현하기 위한 클래스
class Student__() : Person__ {
    override fun study() {
        println("학생이 공부한다")
    }
}

// 인터페이시를 구현하기 위한 클래스
class Teacher__ : Person__{
    override fun study() {
        println("가르치면서 공부한다")
    }
}