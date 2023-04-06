**# 🎃201930314 육영현 3학년2반**
---
**# 🐣6주차 4월06일**

5장 실습은 5주차에 미리함

컴포넌트합성, 추출 5.5,5.6 최종 렌더링은 index.html

6장 state
- 리액트 컴포넌트의 상태
- 상태 = 컴포넌트의 변경 가능한 데이터
- State가 변하면 re-rendering, 관련된 값만 state에 포함

state 특징 클래스형 컴포넌트와 같이 공부
- JS의 객체
- 클래스형 컴포넌트에서는 this.state 로 선언
- 함수형 컴포넌트에서는 useState()
- state 변경 = setState()


생명주기
- constructor가 실행 되면서 컴포넌트가 생성
- 생성 직후 componentDidMount()함수 호출
- 컴포넌트가 소멸하기 전까지 여러 번 렌더링
- 렌더링은 props, setState(), forceUpdate() 에 의해 이루어짐.
- 렌더링이 끝나면 componentDidUpdate() 함수 호출
- 컴포넌트가 언마운트 되면 componentWillUnmount() 호출

6장 실습 ReactDeveloperTools 사용까지

**# 🐣5주차 3월30일**

엘리먼트의 정의
- 리액트 앱을 구성하는 요소, 가장 작은 빌딩 블록
- 웹사이트의 경우 DOM 엘리먼트, HTML요소를 의미

엘리먼트의 생김새
- JS객체의 형태
- 컴포넌트, 속성 및 내부의 모든 children을 포함하는 일반 JS객체
- 마음대로 변경할 수 없는 불변성

내부적으로 자바 스크립트 객체를 만드는 함수 createElement()
- React.createElement(type, [props], [...children])
- type : 태그가 들어감. 컴포넌트가 들가도 태그가 됨
- props : element의 속성
- children : 자식 element

엘리먼트의 특징
- 한 번 생성된 엘리먼트의 children이나 속성을 바꿀 수 없당.
- 내용이 바뀌면 새 엘리먼트 생성, 이전 엘리먼트와 교체
- 교체작업은 Virtual DOM을 사용

***130p예제 cdn방식으로 dom 굴러가는거 확인. chapter04/test.html***

***4챕터 실습 시 index.js에서 렌더링 방식이 책과 다르니 주석처리 해 둔것 참고하기***

5장 진입 - 컴포넌트란
- 컴포넌트 = JS함수, 입력과 출력이 있어 유사
- 입력은 props, 출력은 react elemet의 형태
- 엘리먼트를 필요한 만큼 만들어 사용 = 객체 지향과 유사

props의 개념, 특징
- 컴포넌트의 속성, 컴포넌트에 전달 할 정보를 담은 JS 객체
- 읽기 전용 = 속성이 다른 엘리먼트를 생성하려면 새 객체를 만들어야함

함수형 컴포넌트, 클래스 컴포넌트 두 종류인데 Hook이 나오고 함수형을 주로 쓰지만 클래스도 이해를 해두어야함.

함수 컴포넌트
```javascript
function Welcome(props){
  return <h1>hi {props.name}</h1>;
}
```
클래스 컴포넌트
```javascript
class Welcom extends React.Component{
  render() {
    return <h1>hi {this.props.name}</h1>;
    //상속 때문에 this로 자신임을 표시
  }
}
```
컴포넌트의 이름은 대문자로. 소문자로 시작하면 DOM태그로 인식.

**154p 렌더링 요즘방식으로 바꿔보기**
```javascript
function Welcom(props){
  return <h1>hi, {props.name}</hi>;
}
const element = <Welcome name="yyh" />;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  element
);
```

5장 실습까지 미리 함 컴포넌트 이름들이 비슷하니 주의

---
**# 🐣4주차 3월23일**

기존 github레포 삭제, 로컬 삭제, 새 리액트 프로젝트 생성

JSX 형식
```javascript
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
````
내가 했던 코어태그를 떠올리자. 비슷한 점이 있다.

Babel(일종의 컴파일러) 예시

```javascript
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
); 
=
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
//createElement 사용하면 다음과 같은 JS객체가 생성된다.
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

JSX의 역할 -교재 98p
- 내부적으로 HTML/XML 코드를 JS로 변환
- REACT가 createElement함수를 사용, 자동으로 JS로 변환
- JS로 작업 시 reateElement 사용
- 가독성을 높여 주는 역할 -> 98p(JSX 사용), 99p(JS 사용) 비교

JSX 장점 : 코드 간결, 가독성, Injection Attack 방어

JSX 사용법 : 104p 참고, 태그의 속성값 지정 시
```javascript
//큰따옴표 사이에 문자열
const  element = <div taIndex="0"></div>;
//중괄호 사이에 JS코드를 삽입
const element = <img src={user.avatarUrl}></img>;
```

교재 107p 실습까지 함.

---
**# 🐣3주차 3월16일**

README 작성 규칙
1. 이름 h1
2. 강의 날자 h2
3. 학습내용(필수) h2 이하
4. 작성코드 
5. 최근 내용이 위로
6. 날자 별 구분 꼭하기 <br>
Node.js 설치 및 Chocolatey(선택) 설치(난 했음)<br>
리액트 정의 : ui를 만들기 위한 js라이브러리<br>
복잡한 사이트를 쉽고 빠르게 맨들고, 관리하기 위해 만들어짐+<br>
SinglePageApplication을 쉽고 빠르게 맨들 수 있게 해줌<br><br>


리액트의 장점
- 빠른 업데이트와 렌더링 속도를 가능하게 하는 VirtualDOM
  - DOM = xml, html 문서의 각 항목을 계층으로 표현, 생성, 변형 삭제할 수 있도록 돕는 인터페이스. W3C 표준
  - Virtual DOM(비동기식)은 돔(동기식)이 느려서 고안됨
- 컴포넌트 기반 구조
  - 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성 할 수 있다.= 재사용성이 뛰어나다.
  - 재사용이 가능하려면 모듈의 의존성이 없어야한다.

리액트의 단점
- 방대한 학습량??, 높은 상태 관리 <br>
3week 폴더 createreactapp없이 리액트하기, my-app 폴더 npx명령어로 리액트 프로젝트 생성<br>
**과제 제출 시 .gitignore, node_modules 파일 제출하면 안된다.**
<br><br>
---

**# 🐣2주차 3월09일**
1. Visual Studio Code의 확장 기능을 통해 소스를 commit.<br>
2. VS code와 git hub간 연동 후 원격 리모트.<br>
3. 로컬에 커밋된 소스를 push로 git hub에 업로드.<br>

4. html이란
5. css란
6. Single Page Application
7. JS ES6(ECMAScript6), 자료형
8. JSON
