export default Object.freeze({
    INTRO:{
        description:`
        <h2 class="text-2xl font-bold mb-4">안녕하세요! 박성식입니다.</h2>
        <p class="text-stone-900">
          웹프로그래머로 경력을 쌓고 있습니다.<br>
          FrontEnd는 기본적으로 html,css,javascript/jquery 사용 경험이 있으며 추가적으로 bootstrap, angularjs 와 같은 FrontEnd FrameWork 사용 경험이 있습니다.
          <br><br>
          주업무인 BackEnd는 PHP 언어를 사용하였으며 Codeigniter3.x , Laravel 5.x 사용 경험이 있습니다. 주로 Codeigniter 환경에서 개발을 진행하였습니다.
          <br><br>
          이 외 linux(centos, ubuntu) cli , db(mysql, mariadb) , DevOps(slack, jira/confluence, redmine) , git/github/bitbucket 등을 업무에서 사용 한 경험이 있습니다.
        </p>
        `
    },
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
                },
                desc : `
                <div class="mb-2.5">
                    <h4 class="font-bold text-red-800">자사 쇼핑몰</h4>
                    <ul class="list-none p-0 m-0">
                        <li class="list-disc ml-5">백엔드 : PHP Codeigniter 프레임워크</li>
                        <li class="list-disc ml-5">프론트 : Angular JS 프레임워크</li>
                        <li class="list-disc ml-5">DB : AWS RDS MySQL</li>
                        <li class="list-disc ml-5">웹서버 : Apache</li>
                        <li class="list-disc ml-5">서버 환경 : AWS EC2 - CentOS</li>
                        <li class="list-disc ml-5">기타 : 공공데이터 포털 API(기상/미세먼지 정보), Batch(Crontab), 이니시스 결제 모듈 등</li>
                        <li class="list-disc ml-5">담당업무 : 회원가입,로그인,쿠폰,포인트,장바구니,기상/미세먼지 정보를 톨한 상품추천,고객센터 페이지 등</li>
                    </ul>
                </div>
                <div class="mb-2.5">
                    <h4 class="font-bold text-red-800">쇼핑몰 연계 프로모션 페이지</h4>
                    <ul class="list-none p-0 m-0">
                        <li class="list-disc ml-5">백엔드 : PHP Codeigniter 프레임워크</li>
                        <li class="list-disc ml-5">프론트 : Angular JS 프레임워크</li>
                        <li class="list-disc ml-5">DB : AWS RDS MySQL</li>
                        <li class="list-disc ml-5">웹서버 : Apache</li>
                        <li class="list-disc ml-5">서버 환경 : AWS EC2 - CentOS</li>
                        <li class="list-disc ml-5">기타 : single page 스크롤링, 랜덤쿠폰, withCredentials 를 통한 스토어 상품구매 연동 등</li>
                        <li class="list-disc ml-5">담당업무 : 프로모션별 프론트-백엔드 연동, 백엔드 db 트랜잭션, db 설계 담당</li>
                    </ul>
                </div>
                <div class="mb-2.5">
                    <h4 class="font-bold text-red-800">그룹웨어</h4>
                    <ul class="list-none p-0 m-0">
                        <li class="list-disc ml-5">백엔드 : PHP Codeigniter 프레임워크</li>
                        <li class="list-disc ml-5">프론트 : Angular JS 프레임워크</li>
                        <li class="list-disc ml-5">DB : AWS RDS MySQL</li>
                        <li class="list-disc ml-5">웹서버 : Apache</li>
                        <li class="list-disc ml-5">서버 환경 : AWS EC2 - CentOS</li>
                        <li class="list-disc ml-5">기타 : 공공데이터 포털 API(공휴일 정보), 이니시스 결제 모듈 등</li>
                        <li class="list-disc ml-5">담당업무 : 스토어 관리자 기능인 쿠폰/포인트/회원내역/주문내역 등의 기능, 사내 주차관리 기능</li>
                    </ul>
                </div>
                <div class="mb-2.5">
                    <h4 class="font-bold text-red-800">자사 ERP</h4>
                    <ul class="list-none p-0 m-0">
                        <li class="list-disc ml-5">백엔드 : PHP Codeigniter RestServer 프레임워크</li>
                        <li class="list-disc ml-5">프론트 : React 프레임워크</li>
                        <li class="list-disc ml-5">DB : AWS RDS MySQL</li>
                        <li class="list-disc ml-5">웹서버 : Apache</li>
                        <li class="list-disc ml-5">서버 환경 : AWS EC2 - CentOS</li>
                        <li class="list-disc ml-5">기타 : 사방넷 솔루션, Batch(Crontab) 등</li>
                        <li class="list-disc ml-5">담당업무 : 백엔드 API 개발, ERP 흐름에 대한 구조 및 DB 설계</li>
                    </ul>
                </div>
                `
            },
            {
                name : '인터넷토마토',
                belong: '개발팀',
                position : '대리',
                period : {
                    startDate : '201511',
                    endDate : '201812'
                },
                desc :
                `
                <div class="mb-2.5">
                    <h4 class="font-bold text-red-500">크로스미디어 광고솔루션</h4>
                    <ul class="list-none p-0 m-0">
                        <li class="list-disc ml-5">백엔드 : PHP Laravel 프레임워크</li>
                        <li class="list-disc ml-5">프론트 : HTML, CSS, JQUERY, JAVASCRIPT</li>
                        <li class="list-disc ml-5">DB : AWS RDS MySQL</li>
                        <li class="list-disc ml-5">웹서버 : Nginx</li>
                        <li class="list-disc ml-5">서버 환경 : AWS EC2 - CentOS</li>
                        <li class="list-disc ml-5">기타 : Wecandeo CDN 서비스(API) 사용</li>
                        <li class="list-disc ml-5">담당업무 : 캠페인/슬롯/아이템/리포트/회원가입/로그인 등 CRUD 및 백오피스 CRUD 개발, DB Dump 담당</li>
                    </ul>
                </div>
                <div class="mb-2.5">
                    <h4 class="font-bold text-red-500">자사 관리자페이지</h4>
                    <ul class="list-none p-0 m-0">
                        <li class="list-disc ml-5">백엔드 : PHP 자체 MVC 패턴 프레임워크</li>
                        <li class="list-disc ml-5">프론트 : HTML, CSS, JQUERY, JAVASCRIPT</li>
                        <li class="list-disc ml-5">DB : 자사 서버 IDC 호스팅(코로케이션) - MySQL</li>
                        <li class="list-disc ml-5">웹서버 : Nginx</li>
                        <li class="list-disc ml-5">서버 환경 : CentOS</li>
                        <li class="list-disc ml-5">담당업무 : 전체 개발 담당(물리/vm 서버 관리, 기타장비 관리, 스냅샷 로그 관리 등)</li>
                    </ul>
                </div>
                <div class="mb-2.5">
                    <h4 class="font-bold text-red-500">모니터링 페이지</h4>
                    <ul class="list-none p-0 m-0">
                        <li class="list-disc ml-5">백엔드 : PHP 자체 MVC 패턴 프레임워크</li>
                        <li class="list-disc ml-5">프론트 : HTML, CSS, JQUERY, JAVASCRIPT</li>
                        <li class="list-disc ml-5">DB : 자사 서버 IDC 호스팅(코로케이션) - MySQL</li>
                        <li class="list-disc ml-5">웹서버 : Nginx</li>
                        <li class="list-disc ml-5">서버 환경 : CentOS</li>
                        <li class="list-disc ml-5">기타 : FusionCharts 라이브러리 사용</li>
                        <li class="list-disc ml-5">담당업무 : 업체 서버 모니터링 페이지 개발</li>
                    </ul>
                </div>
                <div class="mb-2.5">
                    <h4 class="font-bold text-red-500">거래처 홈페이지 유지보수 - gameY</h4>
                    <ul class="list-none p-0 m-0">
                        <li class="list-disc ml-5">백엔드 : PHP 자체 MVC 패턴 프레임워크</li>
                        <li class="list-disc ml-5">프론트 : HTML, CSS, JAVASCRIPT, JQUERY</li>
                        <li class="list-disc ml-5">DB : 자체 서버 IDC 호스팅(코로케이션) - MySQL</li>
                        <li class="list-disc ml-5">웹서버 : Nginx</li>
                        <li class="list-disc ml-5">서버 환경 : CentOS</li>
                        <li class="list-disc ml-5">담당업무 : 거래처 요청에 따른 개발 및 유지보수</li>
                    </ul>
                </div>
                `
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
                description: `
                축구 내용 작성
                `
            },
            {
                img:require('@/assets/img/main/it_machine.png'),
                title: "IT기기",
                description: `
                IT기기 내용 작성
                `
            },
            {
                img:require('@/assets/img/main/movie.png'),
                title: "영화",
                description: `
                영화 내용 작성
                `
            }
        ]
    },
    PROJECT:{
        list:[
            {
                code:"mall",
                title:"자사 쇼핑몰"
            },
            {
                code:"promotion",
                title:"쇼핑몰 연계 프로모션 페이지"
            },
            {
                code:"groupware",
                title:"자사 그룹웨어"
            },
            {
                code:"erp",
                title:"자사 ERP"
            },
            {
                code:"advertiser",
                title:"광고솔루션 백오피스 - 크로스미디어"
            },
            {
                code:"admin",
                title:"자사 관리자페이지"
            },
            {
                code:"monitoring",
                title:"모니터링 페이지"
            },
            {
                code:"gamey",
                title:"거래처 홈페이지 유지보수 - GameY"
            }
        ],
        capture: {
            mall:[
                {
                    title:'로그인',
                    img:'img1'
                },
                {
                    title:'로그인',
                    img:'img2'
                },
                {
                    title:'로그인',
                    img:'img3'
                }
            ],
            promotion:[
                {
                    title:'로그인',
                    img:'img1'
                },
                {
                    title:'로그인',
                    img:'img2'
                },
                {
                    title:'로그인',
                    img:'img3'
                }
            ],
            groupware:[
                {
                    title:'로그인',
                    img:'img1'
                },
                {
                    title:'로그인',
                    img:'img2'
                },
                {
                    title:'로그인',
                    img:'img3'
                }
            ],
            erp:[
                {
                    title:'로그인',
                    img:'img1'
                },
                {
                    title:'로그인',
                    img:'img2'
                },
                {
                    title:'로그인',
                    img:'img3'
                }
            ],
            advertiser:[
                {
                    title:'로그인',
                    img:require('@/assets/img/capture/advertiser/login.png'),
                },
                {
                    title:'대시보드',
                    img:require('@/assets/img/capture/advertiser/dashboard.png'),
                },
                {
                    title:'소재 등록',
                    img:require('@/assets/img/capture/advertiser/item.png'),
                },
                {
                    title:'리포트 목록',
                    img:require('@/assets/img/capture/advertiser/report.png'),
                },
                {
                    title:'리포트 상세',
                    img:require('@/assets/img/capture/advertiser/report_detail.png'),
                },
                {
                    title:'통계 페이지',
                    img:require('@/assets/img/capture/advertiser/statistics.png'),
                }
            ],
            admin:[
                {
                    title:'로그인',
                    img:'img1'
                },
                {
                    title:'로그인',
                    img:'img2'
                },
                {
                    title:'로그인',
                    img:'img3'
                }
            ],
            monitoring:[
                {
                    title:'로그인',
                    img:'img1'
                },
                {
                    title:'로그인',
                    img:'img2'
                },
                {
                    title:'로그인',
                    img:'img3'
                }
            ],
            gamey:[
                {
                    title:'로그인',
                    img:'img1'
                },
                {
                    title:'로그인',
                    img:'img2'
                },
                {
                    title:'로그인',
                    img:'img3'
                }
            ],
        }
        
    },
    TECH:{
        list:[
            {
                name:'PHP',
                // description:'웹개발에 주로 사용되는 인터프리터 서버언어 입니다. <br>Codeigniter, Laravel Framework 사용 경험이 있습니다.',
                description:'웹개발에 주로 사용되는 인터프리터 서버언어 입니다. <br>실무에서 주로 사용 한 서버언어입니다.',
                codeTitle:'네이버 리뷰 파싱 배치 함수',
                languageType:'php',
                code:`
                // 네이버 스마트 스토어 쇼핑몰 코드
                $mechantNo = '1234567';

                // 요청 url
                $requestUrl = 'https://brand.naver.com/n/v1/reviews/paged-reviews';

                // 요청 할 상품번호
                $requestProductNoList = [
                    '상품번호1','상품번호2'
                ];

                // 요청정보
                $reauestData = [
                    "merchantNo" => $mechantNo,
                    "page" => '호출 할 페이지번호',
                    "pageSize" => "30" // 호출 할 리뷰 개수
                ];

                // 파싱하여 저장 할 배열 초기화
                $resultArray = [];

                $ch = curl_init();
                foreach($requestProductNoList as $productNo){
                    
                    curl_setopt($ch, CURLOPT_URL, $requestUrl);
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); // 응답 데이터를 문자열로 반환
                    curl_setopt($ch, CURLOPT_POST, 1);
                    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($reauestData));
                    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                        "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.51"
                    ));
                    curl_setopt($ch, CURLOPT_TIMEOUT, 10);      //cURL 함수를 실행할 수 있는 최대 시간(초)
                    $result = curl_exec($ch);
                    
                    $response = curl_exec($ch); // cURL 요청 실행

                    // json decode 함수를 사용하여 배열로 저장
                    $result = json_decode($response,true);

                    if (!empty($result['contents'])) {
                        // 상품번호별로 리뷰 30개씩을 호출
                        $resultArray[$productNo]]][] = $result['contents'];
                    } else {
                        break;
                    }
                }

                curl_close($ch);

                // 아래 배열을 활용하여 다양한 작업 가능 ex) db 저장, 파일에 저장 등
                echo "<pre>";
                print_r($resultArray);
                echo "</pre>";
                `,
                icon: require('@/assets/img/main/php.png')
            },
            {
                name:'Codeigniter',
                description:'PHP 언어 베이스의 웹개발 프레임워크입니다. <br>MVC 아키텍쳐의 경량화 된 웹프레임워크입니다.<br>경력의 대부분을 Codeigniter 프레임워크를 사용하여 개발을 하였습니다.',
                codeTitle:'네이버 배송상태 크롤리 소스코드',
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
                codeTitle:'라라벨 소셜라이트를 통한 소셜로그인 메서드',
                languageType:'php',
                code:`
                use Laravel\\Socialite\\Facades\\Socialite;

                class SocialController extends Controller
                {
                    /**
                     * @desc : 소셜정보 인가코드 발급을 위한 메서드
                     */
                    public function socialRedirect(String $provider)
                    {
                        // 소셜라이트 설치 후 드라이버 호출
                        return Socialite::driver($provider)
                            ->with(['service_terms' => 'true']) // 필수약관의 경우에만 재호출
                            ->redirect();
                    }

                    /**
                     * @desc : 소셜 애플리케인션에 등록되어야 하는 callback url의 메서드
                     */
                    public function loginCallback(string $provider)
                    {
                        // 소셜회원 정보 호출
                        $socialUser = Socialite::driver($provider)->user();

                        // 응답메시지
                        $message = '';
                        
                        try {
                            // db에 저장 할 정보
                            $socialId = $socialUser->id ?? null;
                            $name = $socialUser->name ?? null;
                            $email = $socialUser->email ?? null;
                            $password = \\getRandomString((15));

                            // 이름정보가 있는지 체크
                            if ($name === null) {
                                throw new \\Exception($provider. ' 회원정보를 확인 할 수 없습니다.');
                            }
                
                            // 회원정보 있는지 체크
                            $user = User::where('email', $email)->first();

                            // 소셜 회원정보 있는지 체크
                            $socialUser = SocialUser::where('user_id', $socialId)->first();

                            // 트랜잭션 시작
                            DB::beginTransaction();
                            
                            // 소셜 연동 목록
                            $socialType = [
                                'kakao' => 1,
                                'naver' => 2
                            ];

                            // 두 항목 모두 없으면 회원가입 처리 
                            if (!$user && !$socialUser) {
                                
                                // user table에 생성
                                $user = User::create([
                                    'name' => $name,
                                    'email' => $email,
                                    'password' => Hash::make($password),
                                ]);

                                // 소셜회원정보 생성
                                SocialUser::create([
                                    'social_type' => $socialType[$provider],
                                    'social_id' => $socialId,
                                    'user_id' => $user->id
                                ]);

                            } else if ($user && !$socialUser) {
                                // 회원정보가 있는데 소셜정보는 없을경우 소셜정보를 추가 (어떤 소셜정보로 접속해서 이메일이 동일하면 로그인 가능하도록)
                                // 통합 로그인 형태
                                SocialUser::create([
                                    'social_type' => $socialType[$provider],
                                    'social_id' => $socialId,
                                    'user_id' => $user->id
                                ]);

                            }

                            event(new Registered($user));

                            // 모든 작업이 성공적으로 완료되면 트랜잭션을 커밋하여 변경사항을 유지합니다.
                            DB::commit();
                    
                            Log::info('트랜잭션 성공 - '. $user);

                            // 로그인 시키키
                            Auth::login($user);

                            return redirect(RouteServiceProvider::HOME);
                        } catch (\\Exception $e) {
                            // 예외 발생 시 트랜잭션을 롤백하여 변경사항을 취소합니다.
                            DB::rollback();

                            $message = $e->getMessage();

                            Log::error('트랜잭션 실패 - '. $message);

                            echo "<script>alert('".$message."');window.location.href='/login';</script>";
                        }
                    }
                }
                `,
                icon: require('@/assets/img/main/laravel.png')
            },
            {
                name:'Angular',
                description:'구글에서 개발한 자바스크립트 프론트엔드 프레임워크, 사용자와 상호작용하며 데이터를 효과적으로 제어하고 표시하는 데에 강력한 기능을 제공합니다.',
                codeTitle:'AngularJs 커스팀 directive',
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
                codeTitle:'여러대의 원격서버에서 파일 가져오기 - 아파치 로그파일',
                languageType:'bash',
                code:`
                #!/bin/bash

                ### define variable begin
                # 원격서버에서 가져오는 파일들을 저장하는 폴더
                DATA_PATH=/psstest/srv_apache_logs

                # 일자별로 폴더,파일 생성을 위한 변수 지정
                YESTER_DAY_FOLDER=\`date -d '1 day ago' +%Y%m%d\`
                YESTER_DAY_FILE=\`date -d '1 day ago' +%y%m%d\`

                # 원격 서버 아이피 정보
                srv_ip_array=('아이피1' '아이피2' '아이피3')
                ### define variable end

                ### define function begin
                # 경로 체크하는 함수
                function checkPath() {
                        local path=$1
                        if [ ! -d \${path} ]; then
                                /bin/mkdir \${path}
                        fi
                }
                ### define function end

                # 경로 있는지 체크
                checkPath \${DATA_PATH}/\${YESTER_DAY_FOLDER}

                # 서버 ip별로 scp 시작
                for srv_ip in \${srv_ip_array[@]}
                do
                    // 원격 파일을 로컬서버로 복사해오기
                    // 구분을 위해 로컬서버에 저장 할 때는 로그파일명에 아이피정보를 붙여주도록 처리
                    scp -P 22 username@\${srv_ip}:/etc/httpd/conf/apachelogs/logfile.\${YESTER_DAY_FILE} \${DATA_PATH}/\${YESTER_DAY_FOLDER}/\${srv_ip}-logfile.\${YESTER_DAY_FILE}
                done
                `,
                icon: require('@/assets/img/main/shell_script.png')
            },
            {
                name:'Python',
                description:'파이썬은 간결하고 읽기 쉬운 문법을 가진 프로그래밍 언어로, 다양한 분야에서 사용되는 언어입니다.',
                codeTitle:'Paramiko 모듈을 활용 한 원격서버 명령어 실행',
                languageType:'python',
                code:`
                #!/usr/bin/python

                import sys
                import paramiko
                from paramiko import AutoAddPolicy

                // 호스트 정보
                host = sys.argv[1]
                // 호스트 접속 시 public key
                pkey = paramiko.RSAKey.from_private_key_file('{publickey.pem}')
                // 실행하는 명령어
                command = '{{ 원격서버에 실행시킬 명령어 }}'

                // 원격서버 접속하여 명령어 실행
                client = paramiko.SSHClient()
                client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
                client.connect(host,port=22,username='{username}',pkey=pkey)
                stdin, stdout, stderr = client.exec_command(command,get_pty=True)

                // 명령어 실행 후 결과 출력
                for line in iter(stdout.readline, ""):
                    print(host+' : '+line)

                // 원격접속 닫기
                client.close()
                `,
                icon: require('@/assets/img/main/python.png')
            },
            {
                name:'MySQL (DataBase)',
                description:'MySQL은 오픈 소스 관계형 데이터베이스 관리 시스템(RDBMS)입니다.',
                codeTitle:'제품 입고내역을 호출하기 위해 join,union 등을 사용 한 쿼리',
                languageType:'sql',
                code:`
                SELECT *
                FROM (
                -- 구매정보 조회  
                SELECT
                    b.id as stk_no,
                    a.id as stkorg_no,
                    substring(a.created, 1, 10) AS stk_dt,
                    0 as fg,
                    '구매' as stk_tp,
                    CASE WHEN a.sub_id = '0' THEN a.pa_code ELSE c.pa_code END AS pa_code,
                    a.k2c_model as acc_code,
                    a.pri_code as acc_code2,
                    b.position,
                    '' AS cancel_yn,
                    '' AS del_yn,
                    a.m_type AS exch_cd
                FROM buy_acc a INNER JOIN acc_stock_log b ON a.id = b.log_value AND b.log_type = 'ba_id'
                                LEFT OUTER JOIN (
                                                SELECT
                                                        group_id,
                                                        max(pa_code) AS pa_code
                                                FROM buy_acc
                                                WHERE sub_id = 0
                                                GROUP BY group_id
                                                ) c ON a.group_id = c.group_id
                WHERE a.received = '1'
                AND a.created BETWEEN '202230822000000' AND '20230822235959'
                UNION ALL
                -- wetak_1 정보 조회
                SELECT 
                    a.id AS stk_no,
                    b.log_value AS stkorg_no, 
                    substring(a.created, 1, 10) AS stk_dt,
                    1 AS fg,
                    CASE concat(b.wetak_send_type, b.wetak_sent) WHEN 'B1' THEN '반품'
                                                                    WHEN 'S2' THEN '반환'
                                                                    WHEN 'E2' THEN '교환' ELSE '' END AS stk_tp,
                    b.pa_code,                                             
                    b.k2c_model AS acc_code,
                    0 AS acc_code2,
                    a.POSITION,
                    b.yn_cancel AS cancel_yn,
                    b.is_del AS del_yn,
                    null AS exch_cd
                FROM acc_stock_log a INNER JOIN wetak_1 b ON a.log_value = b.id
                                                        AND b.log_type = 'as_id'                                            
                WHERE a.log_type = 'we_id'
                AND a.created BETWEEN '202230822000000' AND '20230822235959'
                AND concat(b.wetak_send_type, b.wetak_sent) IN ('B1', 'S2', 'E2')  
                UNION ALL
                -- tb_order_return 정보 조회
                SELECT 
                    a.id AS stk_no,
                    b.log_value AS stkorg_no, 
                    substring(a.created, 1, 10) AS stk_dt,
                    2 AS fg,
                    CASE b.type_detail WHEN 'B1' THEN '반품'
                                        WHEN 'S2' THEN '반환'
                                        WHEN 'E2' THEN '교환' ELSE '' END AS stk_tp,
                    b.pa_code,
                    b.k2c_model AS acc_code,
                    0 AS acc_code2,
                    a.POSITION,
                    CASE WHEN COALESCE(b.yn_cancel, '') = 'Y' THEN '취소' ELSE '' END AS cancel_yn,
                    CASE WHEN b.is_del = '1' THEN '삭제' ELSE '' END AS del_yn,
                    null AS exch_cd
                FROM acc_stock_log a INNER JOIN tb_order_return b ON a.log_value = b.id
                                                                AND b.log_type = 'as_id'                                            
                WHERE a.log_type = 'or_id'
                AND a.created BETWEEN '202230822000000' AND '20230822235959'
                AND b.type_detail IN ('B1', 'S2', 'E2')
                ) a 
                ORDER BY a.stk_dt, a.fg, a.stkorg_no
                ;
                `,
                icon: require('@/assets/img/main/mysql.png')
            },
            {
                name:'API',
                description:'애플리케이션 간 상호 작용을 위한 인터페이스로, 소프트웨어 구성 요소들이 서로 통신할 수 있도록 합니다.',
                codeTitle:'공공데이터 포탈 - 미세먼지 정보 API 호출(php)',
                languageType:'php',
                code:`
                public function city_dust_avg_api(){
                    //서비스 사용을 위한 인증키
                    $service_key = SERVICE_KEY;
                    
                    // 호출 기준이 달라짐 (미세먼지 기준값 -> 시도이름)
                    // 혹시 시도이름을 추가할 수 있기때문에 배열로 정의
                    $call_array = array(
                        'seoul'=>'서울'
                    );
                    
                    //한국환경공단_에어코리아_대기오염정보 API 호출 URL(대기오염정보 조회 서비스 시도별 실시간 평균정보 조회)
                    $url = 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty'; /*URL*/
                    $queryParams = '?' . urlencode('serviceKey') . '='.$service_key.''; /*Service Key*/
                    $queryParams .= '&' . urlencode('returnType') . '=' . urlencode('json'); /**/
                    $queryParams .= '&' . urlencode('numOfRows') . '=' . urlencode('3'); /**/
                    $queryParams .= '&' . urlencode('pageNo') . '=' . urlencode('1'); /**/
                    $queryParams .= '&' . urlencode('ver') . '=' . urlencode('1.0'); /**/
                    
                    //배열 초기화
                    $pm_array = array();
            
                    foreach($call_array as $key => $value){        
                        $ch = curl_init();            
                        // curl_setopt($ch, CURLOPT_URL,$call_url.$call.$param_url);
                        $sidoName = '&' . urlencode('sidoName') .'='.urlencode($value);
                        $call_url = $url.$queryParams.$sidoName;
                        curl_setopt($ch, CURLOPT_URL, $call_url);
                        curl_setopt($ch, CURLOPT_HEADER, FALSE);
                        curl_setopt($ch, CURLOPT_FOLLOWLOCATION , 1);
                        curl_setopt($ch, CURLOPT_RETURNTRANSFER , TRUE);
                        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
                        curl_setopt($ch, CURLOPT_TIMEOUT, 5);      //cURL 함수를 실행할 수 있는 최대 시간(초)
                        curl_setopt($ch, CURLOPT_FORBID_REUSE, true);
                        $result = curl_exec($ch);
                        curl_close($ch);
            
                        // json 형태로 응답받은 데이터를 배열 형태로 변환
                        $result_array = json_decode($result,true);
            
                        // 위에서 초기화 한 배열에 저장
                        if(isset($result_array['response']['body']['items'])){
                            foreach($result_array['response']['body']['items'] as $k => $value){
                                if((isset($value['pm10Value']) || !empty($value['pm10Value'])) && $value['pm10Value'] != '-'){
                                    $pm_array[$key] = $result_array['response']['body']['items'][$k];
                                    $pm_array[$key]['resultCode'] = $result_array['response']['header']['resultCode'];
                                    break;
                                }
                            }
                        }
                    }
            
                    // 초미세먼지는 제외, 미세먼지 정보만 받음
                    $insert_data = array(
                        'dust_type'=>'PM10'
                        ,'itemCode'=>'PM10'
                        ,'dataGubun'=>'시간평균'
                        ,'seoul'=>$pm_array['seoul']['pm10Value']
                        ,'busan'=>'0'
                        ,'daegu'=>'0'
                        ,'incheon'=>'0'
                        ,'gwangju'=>'0'
                        ,'daejeon'=>'0'
                        ,'ulsan'=>'0'
                        ,'gyeonggi'=>'0'
                        ,'gangwon'=>'0'
                        ,'chungbuk'=>'0'
                        ,'chungnam'=>'0'
                        ,'jeonbuk'=>'0'
                        ,'jeonnam'=>'0'
                        ,'gyeongbuk'=>'0'
                        ,'gyeongnam'=>'0'
                        ,'jeju'=>'0'
                        ,'sejong'=>'0'
                        ,'dataTime'=>date("YmdH",strtotime($pm_array['seoul']['dataTime']))
                        ,'reg_date'=>date("YmdHis")
                    );
                }
                `,
                icon: require('@/assets/img/main/api.png')
            },
            {
                name:'JavaScript',
                description:'웹 페이지의 동적인 동작을 추가하기 위해 사용되는 프로그래밍 언어입니다.',
                codeTitle:'자바스크립트 라이브러리 사용 - SweetAlert',
                languageType:'javascript',
                code:`
                // js 로드
                <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

                <script type="text/javascript">
                    // 성공 or 확인
                    swal("확인","완료되었습니다.","success");

                    // 경고
                    swal("경고","확인이 필요합니다.","warning");

                    // 오류
                    swal("오류","오류가 확인되었습니다.","error");

                    // 정보 확인
                    swal("정보","정보가 확인되었습니다.","info");

                    // confirm 구현
                    swal({
                        title: "정보 확인",
                        text: "진행하시겠습니까?",
                        icon: "info",
                        buttons: {
                            cancel: "취소",
                            confirm: {
                              text: "진행",
                              value: "confirm",
                            }
                        }
                    }).then(function(value) {
                        if (value == 'confirm') {
                            // 진행하려는 작업 처리

                            // 완료 후 해당 메서드 호출
                            swal("진행", "진행 완료되었습니다", "success")
                        }
                    });
                </script>
                `,
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
                languageType:'bash',
                code:'',
                icon: require('@/assets/img/main/git.png')
            },
            {
                name:'GitHub',
                description:'깃을 기반으로 하는 웹 기반 호스팅 서비스로, 코드 저장소를 온라인으로 관리하고 협업할 수 있는 플랫폼입니다.',
                codeTitle:'깃허브 링크',
                languageType:'bash',
                code:'',
                icon: require('@/assets/img/main/github.png')
            },
            {
                name:'SourceTree',
                description:'Git 및 Mercurial 버전 관리 시스템을 사용하는 프로젝트를 관리하기 위한 무료 Git GUI 클라이언트입니다.',
                codeTitle:'소스트리 사용법',
                languageType:'bash',
                code:'',
                icon: require('@/assets/img/main/sourcetree.png')
            },
            {
                name:'Slack',
                description:'비즈니스 및 팀 커뮤니케이션을 위한 협업 플랫폼입니다.',
                codeTitle:'slack postMessage API',
                languageType:'php',
                code:`
                // slack 메시지 전송을 위한 메서드
                function send_slack_message($channel, $message, $username = '{userName}') {
                    // 요청 정보
                    $postData = array(
                        'token'    => '{slackToken}',
                        'channel'  => $channel,
                        'username' => $username,
                        'text'     => $message
                    );
            
                    // curl 실행
                    $ch = curl_init('https://slack.com/api/chat.postMessage');
                    curl_setopt($ch, CURLOPT_CUSTOMREQUEST,  'POST');
                    curl_setopt($ch, CURLOPT_POSTFIELDS,     $postData);
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
                    curl_exec($ch);
                    curl_close($ch);
                }

                // 위 함수 호출하기
                send_slack_message('메시지 보낼 채널', '메시지 내용');
                `,
                icon: require('@/assets/img/main/slack.png')
            },
            {
                name:'Docker',
                description:'도커는 컨테이너화된 응용 프로그램을 만들고 배포하기 위한 오픈 소스 플랫폼입니다.',
                codeTitle:'도커 사용법',
                languageType:'bash',
                code:'',
                icon: require('@/assets/img/main/docker.png')
            }
        ]
    }
})