package com.example.myapplication.Kotlin

fun main(array:Array<String>){
//    val channels = listOf<String>("K","M","S")
    val tv = TV(listOf<String>("K","M","S"))

//    tv.switch()
//    println(tv.onOrOff)
//    tv.switch()
//    println(tv.onOrOff)

    tv.channelDown()
    println(tv.checkCurrentChannel())
    tv.channelDown()
    println(tv.checkCurrentChannel())
    tv.channelDown()
    println(tv.checkCurrentChannel())
    tv.channelDown()
    println(tv.checkCurrentChannel())
}

// tv클래스
// on/off 기능
// 채널을 돌리는 기능
// 초기 채널은 (s,m,k 3개)

class TV(val channels:List<String>){
    // 함수들에 필요 한 변수 초기화
    var onOrOff :Boolean = false // true -> on, false -> off
    var currentChannelNumber = 0
        // 위에 선언 된 currentChannelNumber 값이 할당 될 경우 set 함수가 계속 실행 됨
        set(value){
            field = value
            if(field > 2){
                field = 0
            } else if(field < 0){
                field = 2
            }
        }
        get(){
            // 누구간에 의해서 변수가 호출 되었을 때 실행 됨
            println("호출되었습니다")
            return field
        }

    // 리모컨 켜기,끄기 기능
    fun switch(){
        onOrOff = !onOrOff
    }

    fun checkCurrentChannel(): String {
        return channels[currentChannelNumber]
    }

    // 채널을 돌리는 기능
    fun channelUp(){
        currentChannelNumber = currentChannelNumber + 1
//        channels.forEachIndexed { index, value ->
//            if(currentChannelNumber == index){
//                currentChannelNumber = currentChannelNumber + 1
//                return
//            }
//        }
    }

    fun channelDown(){
        currentChannelNumber = currentChannelNumber - 1
//        channels.forEachIndexed { index, value ->
//            if(currentChannelNumber == index){
//                currentChannelNumber = currentChannelNumber - 1
//                return
//            }
//        }
    }
}