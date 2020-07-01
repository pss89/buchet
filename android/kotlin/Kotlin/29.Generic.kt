package com.example.myapplication.Kotlin

// 29.Generic(제너릭)

// 목적 : 다양한 타입의 객체들을 다루는 메서드나 컬렉션
// 클래스에서 컴파일 시에 타입을 체크해주는 기능
// -> 타입을 체크하는 기능
// 제너릭은 만들기 어렵고, 실제로 만들일이 거의 없기때문에 사용하는 방법만 숙지

// main의 <String> 이 제너릭
fun main(array: Array<String>) {
    // 제너릭을 사용하지 않은 경우
    val list1 = listOf(1, 2, 3, "가")
    // toString() : 형 변환시킨다 (타입이 바뀐다)
    val b: String = list1[2].toString()

    // 제너릭을 사용하는 경우 -> 타입이 안전, 명시적으로 정의한다
    val list2 = listOf<String>("a", "b", "c")
    // 제너릭을 사용하는 경우 형에 맞도록 사용할 경우 형변환 할 필요 없다다
    val c: String = list2[2]
    
    // 강한 타입 체크 (타입 체크 힘듬)
    val list3 = listOf(1,2,3,4,"가","나",3.0)
    // list는 에러    
    // val list4 = listOf<Int>(1,2,3,"가") // 강한 타입 체크
    
    // 제너릭을 사용 하지 않은 경우
    // 아래 리스트는 any라는 타입으로 정의 됨
    val list5 = listOf(1,2,3,"가")
    // 부모 : Any
    // 자식 : String, Int, Float
}
