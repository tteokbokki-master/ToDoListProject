# 알게 된 점

## CSS 선택자 관련

    Example p:nth-child(1){}
nth-child를 사용하면 원하는 자식 요소만에게 css를 적용할 수 있다. 위는 Example의 p태그 중 첫 번째 요소에만 적용하는 것.<br/><br/>

    .Example p:not(:nth-child(1)){}
p 태그 중 첫 번째 p 태그를 제외한 나머지 p태그에 적용하는 태그이다.<br/><br/>

    .A > p{} 
A의 직계 p 태그만 선택하는 것<br/><br/>


    .A p{}
A에 속한 모든 p 태그를 선택하는 것<br/><br/>


## 리액트에서 사진 끌어오기

     import A from ‘./assets/a.jpg’
     <img src={A} alt=“A”/>
이런식으로 상대경로를 지정해서 import를 한 뒤, src 경로로 넣어주면 됨<br/><br/>

## input 태그 사진으로 대체하기


    input[type="checkbox"]+label{
      margin-left: 5px;
      width: 40px;
      height: 40px;
      background: url('./assets/isDone_X.png') no-repeat 0 0px / contain;
    }
    
    input[type='checkbox']:checked+label {
      background: url('./assets/isDone_O.png') no-repeat 0 0px / contain;
    }
    
    input[type="checkbox"]{
      display: none;
    }
일종의 꼼수다. label 태그를 선택해서 사진을 넣고, 최종적으로 input 태그에 display:none을 넣음으로써 체크박스를 사라지게 한다.

no-repeat은 이미지를 반복하지 않도록 설정하는 속성이고, 0 0px은 배경 이미지의 위치를 지정하는 부분이며, 마지막으로 contain은 비율을 유지하면서 width,height가 요소를 벗어나지 않는 범위에서 최대로 확대시키는 속성이다.<br/><br/>

## text-shadow 사용법

    text-shadow : 1 2 3 4;

text-shadow의 기본 문법이다. 각각

1. 그림자의 수평 위치 지정
2. 그림자의 수직 위치 지정
3. 그림자의 흐림 정도(생략 가능)
4. 그림자 색상

이다

즉 `text-shadow : 1px 1px 0 white;` 이면 수평에서 오른쪽으로 1px만큼, 수직에서 아래쪽으로 1px만큼 하얀색 그림자를 생성한다.

각 방향 마다 shadow를 지정하면 글씨 테두리를 만들 수 있다.<br/><br/>

## hover로 색 부드럽게(?) 바꾸기

    transition: background-color 0.5s ease;
    
css 애니메이션의 transition을 사용하면 된다.
위 코드는 background-color 속성에 대해 0.5초의 transitoin를 준다는 뜻이다.

ease는 CSS 트랜지션에서 사용되는 타이밍 함수 중 하나로, 변화가 처음에 빠르게 시작되어 후에는 느리게 끝나도록 만드는 함수이다. 변화가 자연스럽게 일어나는 느낌을 주며,.기본값이라 생략해도 무방하다.
  

## id 선택자를 조심하자
[id 선택자를 조심하자](https://studysmart.tistory.com/92)
<br/><br/> 블로그에 정리했다. <br/><br/>

## CSS overflow 속성
    overflow:  visible 
기본 값이며, 넘칠 경우 컨텐츠가 상자 밖으로 보여짐<br/><br/>


    overflow: hidden 
넘치는 부분은 잘려서 보여지지 않음<br/><br/>


    overflow: scroll 
스크롤바가 추가되어 스크롤할 수 있음
overflow-x ,overflow-y를 통해 가로만 또는 세로만 스크롤을 만들 수도 있다.<br/><br/>


    overflow: auto
컨텐츠 량에 따라 스크롤바를 추가할지 자동으로 결정<br/><br/>