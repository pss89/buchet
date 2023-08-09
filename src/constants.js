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
    TECH:{
        list:[
            {
                name:'PHP',
                // description:'웹개발에 주로 사용되는 인터프리터 서버언어 입니다. <br>Codeigniter, Laravel Framework 사용 경험이 있습니다.',
                description:'웹개발에 주로 사용되는 인터프리터 서버언어 입니다. <br>실무에서 주로 사용 한 서버언어입니다.',
                icon: require('@/assets/img/main/php.png')
            },
            {
                name:'Codeigniter',
                description:'PHP 언어 베이스의 웹개발 프레임워크입니다. <br>MVC 아키텍쳐의 경량화 된 웹프레임워크입니다.<br>경력의 대부분을 Codeigniter 프레임워크를 사용하여 개발을 하였습니다.',
                icon: require('@/assets/img/main/codeigniter.png')
            },
            {
                name:'Laravel',
                description:'PHP 언어 베이스의 웹개발 프레임워크입니다. <br>다양한 기능과 도구를 갖추고 있는 전체 스택 프레임워크이며 대표적인 PHP 언어 베이스의 프레임워크입니다.',
                icon: require('@/assets/img/main/laravel.png')
            },
            {
                name:'Angular',
                description:'구글에서 개발한 자바스크립트 프론트엔드 프레임워크, 사용자와 상호작용하며 데이터를 효과적으로 제어하고 표시하는 데에 강력한 기능을 제공합니다.',
                icon: require('@/assets/img/main/angular.png')
            },
            {
                name:'BootStrap',
                description:'HTML, CSS 및 JavaScript를 사용하여 웹 애플리케이션과 웹 사이트를 빠르고 쉽게 디자인할 수 있도록 도움을 주는 오픈 소스 프론트엔드 프레임워크입니다.',
                icon: require('@/assets/img/main/bootstrap.png')
            },
            {
                name:'Shell Script',
                description:'컴퓨터의 운영 체제 쉘(Shell)에서 실행되는 스크립트 언어입니다.',
                icon: require('@/assets/img/main/shell_script.png')
            },
            {
                name:'Python',
                description:'파이썬은 간결하고 읽기 쉬운 문법을 가진 프로그래밍 언어로, 다양한 분야에서 사용되는 언어입니다.',
                icon: require('@/assets/img/main/python.png')
            },
            {
                name:'MySQL (DataBase)',
                description:'MySQL은 오픈 소스 관계형 데이터베이스 관리 시스템(RDBMS)입니다.',
                icon: require('@/assets/img/main/mysql.png')
            },
            {
                name:'API',
                description:'애플리케이션 간 상호 작용을 위한 인터페이스로, 소프트웨어 구성 요소들이 서로 통신할 수 있도록 합니다.',
                icon: require('@/assets/img/main/api.png')
            },
            {
                name:'JavaScript',
                description:'웹 페이지의 동적인 동작을 추가하기 위해 사용되는 프로그래밍 언어입니다.',
                icon: require('@/assets/img/main/javascript.png')
            },
            {
                name:'JQuery',
                description:'자바스크립트 라이브러리로, HTML 문서의 요소를 조작하고 다루는 작업을 쉽게 만들어 줍니다.',
                icon: require('@/assets/img/main/jquery.png')
            },
            {
                name:'Git',
                description:'버전 관리 시스템(VCS)으로, 코드 변경 사항을 추적하고 관리할 수 있는 도구입니다',
                icon: require('@/assets/img/main/git.png')
            },
            {
                name:'GitHub',
                description:'깃을 기반으로 하는 웹 기반 호스팅 서비스로, 코드 저장소를 온라인으로 관리하고 협업할 수 있는 플랫폼입니다.',
                icon: require('@/assets/img/main/github.png')
            },
            {
                name:'SourceTree',
                description:'Git 및 Mercurial 버전 관리 시스템을 사용하는 프로젝트를 관리하기 위한 무료 Git GUI 클라이언트입니다.',
                icon: require('@/assets/img/main/sourcetree.png')
            },
            {
                name:'Slack',
                description:'비즈니스 및 팀 커뮤니케이션을 위한 협업 플랫폼입니다.',
                icon: require('@/assets/img/main/slack.png')
            },
            {
                name:'Docker',
                description:'도커는 컨테이너화된 응용 프로그램을 만들고 배포하기 위한 오픈 소스 플랫폼입니다.',
                icon: require('@/assets/img/main/docker.png')
            }
        ]
    }
})