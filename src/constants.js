export default Object.freeze({
    S_CAREER:{ // school career
        subject : '학력 소개',
        list : [
            {
                name : '청운대학교',
                major : '컴퓨터학과',
                period : {
                    startDate : '200803',
                    endDate : '201502'
                }
            },
            {
                name : '안산국제비즈니스고등학교',
                major : '정보처리과',
                period : {
                    startDate : '200503',
                    endDate : '200802'
                }
            }
        ]
    },
    C_CAREER:{ // company career
        subject:'경력 소개',
        list:[
            {
                name : '오아',
                belong: '개발본부/서버개발팀',
                position : '매니저/TL',
                period : {
                    startDate : '201904',
                    endDate : '202303'
                }
            },
            {
                name : '인터넷토마토',
                belong: '개발팀',
                position : '대리',
                period : {
                    startDate : '201511',
                    endDate : '201812'
                }
            }
        ]
    },
    MENU:{
        list:[
            {key:"intro",title:'소개'},
            {key:"career",title:'경력'},
            {key:"tech",title:'기술'},
            {key:"project",title:'프로젝트'},
            {key:"hobby",title:'취미'}
        ]
    },
    SOCIAL:{
        list:[
            {key:"github",fa:"fa-brands fa-github"},
            {key:"blog",fa:"fa-solid fa-blog"},
            {key:"insta",fa:"fa-brands fa-instagram"}
        ]
    },
    HOBBY:{
        list:[
            {
                img:require('@/assets/img/main/football.png'),
                title: "축구",
                description: "하는것도 좋아하지만 축구 직관이나 경기 시청, 관련 게임들을 주로 합니다."
                // image: "/src/assets/hobbies/photography.jpg",
            },
            {
                img:require('@/assets/img/main/it_machine.png'),
                title: "IT기기",
                description: "전자기기에 대한 관심이 많고 구매하여 직접 사용해보는것에 대해 관심이 많다.",
                // image: "/src/assets/hobbies/cooking.jpg",
            },
            {
                img:require('@/assets/img/main/movie.png'),
                title: "영화",
                description: "영화 관람을 좋아하고 관련 유튜브를 보는것도 좋아합니다.",
                // image: "/src/assets/hobbies/cooking.jpg",
            }
        ]
    },
    TECH:{
        list:[
            {
                name:'PHP',
                // description:'웹개발에 주로 사용되는 인터프리터 서버언어 입니다. <br>Codeigniter, Laravel Framework 사용 경험이 있습니다.',
                description:'웹개발에 주로 사용되는 인터프리터 서버언어 입니다. <br>실무에서 주로 사용 한 서버언어입니다.',
                codeTitle:'레거시 코드',
                languageType:'php',
                code:'',
                icon: require('@/assets/img/main/php.png')
            },
            {
                name:'Codeigniter',
                description:'PHP 언어 베이스의 웹개발 프레임워크입니다. <br>MVC 아키텍쳐의 경량화 된 웹프레임워크입니다.<br>경력의 대부분을 Codeigniter 프레임워크를 사용하여 개발을 하였습니다.',
                codeTitle:'네이버 배송상태 크롤링 소스코드',
                languageType:'php',
                code:`
                function deliveryTracker($params = array())
                {
                    // 리턴해줄 배열
                    $result = [
                        'result'=>true
                        ,'msg'=>null
                        ,'data'=>[]
                    ];
            
                    // 데이터 없으면 실행 안되도록
                    if (!isset($params) || empty($params)) {
                        $result['result'] = false;
                        $result['msg'] = "확인을 위한 데이터가 없습니다.";
                        return $result;
                    }
            
                    // 필수값 없으면 실행 안되도록
                    if (!array_key_exists('post_type',$params) || !array_key_exists('post_no',$params) || !array_key_exists('check_con',$params)) {
                        $result['result'] = false;
                        $result['msg'] = "확인을 위한 필수 데이터가 없습니다.";
                        return $result;
                    }
            
                    // 배송 유형 선택(택배사..)
                    if (!in_array($params['post_type'],array('01','04','05'))) {
                        $result['result'] = false;
                        $result['msg'] = "허용하는 택배사가 아닙니다.";
                        return $result;
                    }
            
                    // check_on 없거나 mypage, batch 아니면 리턴
                    if (!in_array(strtolower($params['check_con']),array('mypage','batch'))) {
                        $result['result'] = false;
                        $result['msg'] = "허용하는 메뉴가 아닙니다.";
                        return $result;
                    }
            
                    // 사용되는 컨트롤러 클래스명
                    $checkCon = $params['check_con'];
            
                    // 검색페이지 QueryString
                    $searchQuery = '';
                    switch($params['post_type']){
                        case '01' : $searchQuery = '우체국+배송조회'; break;
                        case '04' : $searchQuery = 'CJ택배+배송조회'; break;
                        case '05' : $searchQuery = '한진택배+배송조회'; break;
                    }
            
                    // 검색값 없으면 리턴
                    if($searchQuery == ''){
                        $result['result'] = false;
                        $result['msg'] = "배송조회를 위한 데이터가 없습니다.";
                        return $result;
                    }
            
                    // api 호출
                    $curlClient = new \\GuzzleHttp\\Client(array(
                        'base_uri'=>'https://search.naver.com'
                    ));
            
                    // 검색페이지 호출
                    $defaultUrl = "/search.naver?sm=tab_hty.top&where=nexearch&query={$searchQuery}";
                    $defaultHeaders = array(
                        'User-Agent'=>'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36'
                    );
            
                    //호출 후 응답값
                    $response = $curlClient->request('GET',$defaultUrl, $defaultHeaders);
                
                    //응답코드
                    $statusCode = $response->getStatusCode();
            
                    // 배송업체유형, 송장번호
                    $postType = $params['post_type'];
                    $postNo = $params['post_no']; // 420769424751, 420989285345
            
                    // 응답코드 200일 경우에만 실행
                    if($statusCode == 200){
                        // body의 내용을 저장
                        $responseBodyContents = $response->getBody()->getContents();
            
                        preg_match("/\\"passportKey\\"\\: (\\".*\\")\\ }/i", $responseBodyContents, $passportKey);
            
                        if(!isset($passportKey) || empty($passportKey)){
                            $result['result'] = false;
                            $result['msg'] = "배송조회를 위한 토큰이 없습니다.";
                            return $result;
                        }
            
                        // 네이버에서 택배조회를 위해 요청값에 같이 보내는 인증키
                        $passportKey = $passportKey[1];
            
                        // api 호출
                        $curlClient = new \\GuzzleHttp\\Client(array(
                            'base_uri'=>'https://m.search.naver.com'
                        ));
            
                        // 배송상태 조회
                        $deliveryStatusUrl = "/p/csearch/ocontent/util/headerjson.nhn?callapi=parceltracking&t_code={$postType}&t_invoice={$postNo}&passportKey={$passportKey}";
            
                        // 배송상태 응답값 받기
                        $response = $curlClient->request('GET',$deliveryStatusUrl,$defaultHeaders);
            
                        //응답코드
                        $statusCode = $response->getStatusCode();
            
                        // 배송상태 정보
                        $responseBodyContents = $response->getBody()->getContents();
            
                        // 배송상태 decode 처리
                        $responseBodyContentsDecode = json_decode($responseBodyContents,true);
            
                        // 예외처리
                        if(array_key_exists('message',$responseBodyContentsDecode) && array_key_exists('error',$responseBodyContentsDecode['message'])){
                            if(str_replace(" ","",$responseBodyContentsDecode['message']['error']) == '유효한키가아닙니다.'){
                                $result['result'] = false;
                                $result['msg'] = "배송조회 에러입니다.";
                                return $result;
                            }
                        }
            
                        // 예외처리
                        if ($statusCode == 200 || array_key_exists('trackingDetails',$responseBodyContentsDecode) || 
                            array_key_exists('completeYN',$responseBodyContentsDecode) || array_key_exists('result',$responseBodyContentsDecode)
                        ) {
                            switch($checkCon){
                                case 'mypage' : // 배송목록 전달
                                    if (array_key_exists('trackingDetails',$responseBodyContentsDecode)) {
                                        $result['data']['delivery_list'] = $responseBodyContentsDecode['trackingDetails'];
                                    }
                                break;
                                case 'batch' : // 배송완료인것만 확인하여 전달
                                    if (array_key_exists('completeYN',$responseBodyContentsDecode)) {
                                        $result['data']['delivery_status'] = $responseBodyContentsDecode['completeYN'];
                                    }
                                    foreach($responseBodyContentsDecode['trackingDetails'] as $details){
                                        if (array_key_exists('kind',$details) || array_key_exists('timeString',$details)) {
                                            if ($details['kind'] == '배송완료') {
                                                $result['data']['delivery_complete_date'] = date("YmdHis",strtotime($details['timeString']));
                                            }
                                        }
                                    }
                                break;
                            }
                        }
                    }
            
                    return $result;
                }`,
                icon: require('@/assets/img/main/codeigniter.png')
            },
            {
                name:'Laravel',
                description:'PHP 언어 베이스의 웹개발 프레임워크입니다. <br>다양한 기능과 도구를 갖추고 있는 전체 스택 프레임워크이며 대표적인 PHP 언어 베이스의 프레임워크입니다.',
                codeTitle:'소셜라이트',
                languageType:'php',
                code:'',
                icon: require('@/assets/img/main/laravel.png')
            },
            {
                name:'Angular',
                description:'구글에서 개발한 자바스크립트 프론트엔드 프레임워크, 사용자와 상호작용하며 데이터를 효과적으로 제어하고 표시하는 데에 강력한 기능을 제공합니다.',
                codeTitle:'커스텀 filter directive',
                languageType:'javascript',
                code:`
                //쿠폰명 아래 쿠폰의 조건들을 노출해주는 부분
                oaStoreApp.directive('couponCondition', function($filter){
                    return {
                        restrict: 'E', // html 엘리먼트로 사용
                        scope:{couponInfo: '@couponInfo'}, // 쿠폰정보를 couponInfo 라는 값으로 공유를 받는다
                        link:function(scope, element) { // link 의 매개변수를 통해 데이터를 제어
                            
                            // scope 를 통해 쿠폰정보를 제공 받은 후 json 으로 파싱
                            scope.couponInfo = JSON.parse(scope.couponInfo);
                            
                            // html 변수를 공백으로 초기화
                            var html = '';

                            // 쿠폰의 조건들을 반복문으로 순회
                            for(var i in scope.couponInfo) {
                                // 순회한만큼 html 변수에 추가
                                html += "<span class='m-l-10'>- "+$filter('currency')(scope.couponInfo[i],'',0)+"원 이상 구매시 적용 가능</span>";
                            }
                            
                            // html 로 출력
                            element.html(html);
                        }
                    };
                });

                // 위 directive를 호출하는 방법
                <coupon-condition coupon-info='{{coupon.condition}}'></coupon-condition>
                `,
                icon: require('@/assets/img/main/angular.png')
            },
            {
                name:'BootStrap',
                description:'HTML, CSS 및 JavaScript를 사용하여 웹 애플리케이션과 웹 사이트를 빠르고 쉽게 디자인할 수 있도록 도움을 주는 오픈 소스 프론트엔드 프레임워크입니다.',
                codeTitle:'bootstrap css 코드',
                languageType:'css',
                code:'',
                icon: require('@/assets/img/main/bootstrap.png')
            },
            {
                name:'Shell Script',
                description:'컴퓨터의 운영 체제 쉘(Shell)에서 실행되는 스크립트 언어입니다.',
                codeTitle:'shell script 코드',
                languageType:'shell',
                code:'',
                icon: require('@/assets/img/main/shell_script.png')
            },
            {
                name:'Python',
                description:'파이썬은 간결하고 읽기 쉬운 문법을 가진 프로그래밍 언어로, 다양한 분야에서 사용되는 언어입니다.',
                codeTitle:'python 크롤링',
                languageType:'python',
                code:'',
                icon: require('@/assets/img/main/python.png')
            },
            {
                name:'MySQL (DataBase)',
                description:'MySQL은 오픈 소스 관계형 데이터베이스 관리 시스템(RDBMS)입니다.',
                codeTitle:'join 쿼리',
                languageType:'sql',
                code:'',
                icon: require('@/assets/img/main/mysql.png')
            },
            {
                name:'API',
                description:'애플리케이션 간 상호 작용을 위한 인터페이스로, 소프트웨어 구성 요소들이 서로 통신할 수 있도록 합니다.',
                codeTitle:'공공데이터 포탈 api',
                languageType:'php',
                code:'',
                icon: require('@/assets/img/main/api.png')
            },
            {
                name:'JavaScript',
                description:'웹 페이지의 동적인 동작을 추가하기 위해 사용되는 프로그래밍 언어입니다.',
                codeTitle:'자바스크립트 기본문법',
                languageType:'javascript',
                code:'',
                icon: require('@/assets/img/main/javascript.png')
            },
            {
                name:'jQuery',
                description:'자바스크립트 라이브러리로, HTML 문서의 요소를 조작하고 다루는 작업을 쉽게 만들어 줍니다.',
                codeTitle:'jquery 이벤트',
                languageType:'javascript',
                code:'',
                icon: require('@/assets/img/main/jquery.png')
            },
            {
                name:'Git',
                description:'버전 관리 시스템(VCS)으로, 코드 변경 사항을 추적하고 관리할 수 있는 도구입니다',
                codeTitle:'git 사용법',
                languageType:'shell',
                code:'',
                icon: require('@/assets/img/main/git.png')
            },
            {
                name:'GitHub',
                description:'깃을 기반으로 하는 웹 기반 호스팅 서비스로, 코드 저장소를 온라인으로 관리하고 협업할 수 있는 플랫폼입니다.',
                codeTitle:'깃허버 링크',
                languageType:'shell',
                code:'',
                icon: require('@/assets/img/main/github.png')
            },
            {
                name:'SourceTree',
                description:'Git 및 Mercurial 버전 관리 시스템을 사용하는 프로젝트를 관리하기 위한 무료 Git GUI 클라이언트입니다.',
                codeTitle:'소스트리 사용법',
                languageType:'shell',
                code:'',
                icon: require('@/assets/img/main/sourcetree.png')
            },
            {
                name:'Slack',
                description:'비즈니스 및 팀 커뮤니케이션을 위한 협업 플랫폼입니다.',
                codeTitle:'slack api',
                languageType:'php',
                code:'',
                icon: require('@/assets/img/main/slack.png')
            },
            {
                name:'Docker',
                description:'도커는 컨테이너화된 응용 프로그램을 만들고 배포하기 위한 오픈 소스 플랫폼입니다.',
                codeTitle:'도커 사용법',
                languageType:'shell',
                code:'',
                icon: require('@/assets/img/main/docker.png')
            }
        ]
    }
})