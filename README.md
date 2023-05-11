**# 🎃201930314 육영현 3학년2반**
---

**# 🐣11주차 5월11일**

shared State
- 어떤 컴포넌트의 state에 있는 데이터를 여러 개의 하위 컴포넌트에서 공통적으로 사용하는 경우

하위 컴포넌트에서 state 공유

== 12장 실습에서 자세히 나옴. 코드 참고할 것
- 섭씨를 입력하면 화씨 자동계산 반대도 됨
- Calculator 내의 두개의 temperautrInput이 state를 공유하는 것을 확인
- const [temperature, setTemperature] = useState("");



**# 🐣10주차 5월04일**

리스트는 자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열

키는 각 객체나 아이템을 구분할 수 있는 고유한 값, 리스트에서 아이템을 구별하기 위한 고유한 문자열

같은 컴포넌트를 화면에 반복적으로 나타내야 할 경우 배열에 들어있는 엘리먼트를 map() 함수를 이용하여 렌더링
```javascript
const doubled = numbers.map((number) => number * 2);
```
numbers 배열에 들어있는 요소를 map()을 이용하여 추출 후 2를 곱함
```javascript
const numbers = [1,2,3,4,5];
const listItems = numbers.map((number) => 
  <li>{number}</li>
);
```
NumbersList 컴포넌트
```javascript
function NumberList(props){
  const { numbers } = props;
  const listItems = numbers.map((number) => 
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  )
}
const numbers = [1,2,3,4,5];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NumberList numbers={numbers} />
  </React.StrictMode>
)
```
키 props가 없어서 경고문구 나옴

10장 실습 chapter_10

이하 11장

제어 컴포넌트 = 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트

HTML 폼을 리액트 제어 컴포넌트로 만든 것
```javascript
function NameForm(props){
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  const handleSubmit = (event) => {
    alert('입력한 이름' + value);
    event.preventDefault(); //현재 페이지에 남겨짐
  }
  return(
    <form onSubmit={handleSubmit}>
      <label>
        이름 : 
        <input type="text" value={value} onChange={handleChange}/>
      </label>
      <button type="submit">제출</button>
    </form>
  )
}
```
TextArea 리액트에서는 state를 통해 태그의 vlaue라는 attribute를 변경
```javascript
function NameForm(props){
  const [value, setValue] = useState('요청사항을 입력하세요');
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  const handleSubmit = (event) => {
    alert('입력한 요청사항' + value);
    event.preventDefault(); //현재 페이지에 남겨짐
  }
  return(
    <form onSubmit={handleSubmit}>
      <label>
        요청사항 : 
        <textarea value={value} onChange={handleChange}/>
      </label>
      <button type="submit">제출</button>
    </form>
  )
}
```
select 태그
```javascript
function NameForm(props){
  const [value, setValue] = useState('grape');
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  const handleSubmit = (event) => {
    alert('입력한 과일' + value);
    event.preventDefault(); //현재 페이지에 남겨짐
  }
  return(
    <form onSubmit={handleSubmit}>
      <label>
        과일 선택 : 
        <select value={value} onChange={handleChange}>
          <option value="appele">사과</option>
          <option value="banana">바나난</option>
          <option value="grape">포도</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  )
}
```
File input 태그는 그 값이 읽기 전용이기 때문에 리액트에서는 비제어 컴포넌트가 된다.

하나의 컴포넌트에서 여러 개의 입력을 다루기
```javascript
function NameForm(props){
  const [haveBreakFast, setHaveBreakfast] = useState(true);
  const [numberOfGuest, setNumberOfGuest] = useState(2);

  const handleSubmit = (event) => {
    alert(`아침 식사 여부 : ${haveBreakfast}, 방문객 수 : ${numberOfGuest}`);
    event.preventDefault(); //현재 페이지에 남겨짐
  }
  return(
    <form onSubmit={handleSubmit}>
      <label>
        아침식사 여부 :
        <input type="checkbox"
          checked={haveBreakfast} onChange ={(event) => {
            setHaveBreakfast(event.target.checked);
          }} />
      </label>
      <br />
      <label>
        방문객 수 :
        <input type="number" 
        value={numberOfGuest} onChange={(event) => {
          setNumberOfGuest(event.target.value);
        }} />
      </label>
      <button type="submit">제출</button>
    </form>
  )
}
```
Null value 처음에는 값을 지정 후, 후에 null이 되면 입력 가능한 상태가 됨.

11장 실습



**# 🐣9주차 4월27일**

React에서 클릭 이벤트 처리
1. onclick => onClick 카멜케이스
2. 전달하려는 함수는 문자열에서 함수 그대로 전달 "active()" => {active}
3. 이벤트 처리함수 = 이벤트 핸들러 = 이벤트 리스너

251p 두번째 예제 함수 안에 함수, 화살표 함수 사용하여 함수형 컴포넌트로 bind없이 구현

arguments
- 함수를 정의할 때는 parameter 혹은 매개변수
- 함수를 사용할 때는 argument 혹은 인수
```javascript
<button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>
<button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
```
- event 라는 매개변수는 리액트의 이벤트 객체
- 두 방법 모두 1번 매개변수는 id, 2번 매개변수는 event
- 1번은 명시적으로 event를 매개변수 지정, 2번은 id 이후 event가 자동전달(클래스형에서 사용)
- 함수형 컴포넌트에서 이벤트 핸들러에 매개변수를 전달 => 254p
```javascript
function MyButton(props){
  const handleDelete = (id, event) => {
    console.log(id, event.target);
  }
  return(
    <button onClick={(event) => handleDelete(1, event)}>삭제하기</button>
  )
}
```
**조건부 렌더링**

엘리먼트 변수
- 렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법
- 272p 코드처럼 state에 따라 button 변수에 컴포넌트의 객체를 저장, return문에서 사용
```javascript
//271p
function LoginButton(props){
  return(
    <button onClick={props.onClick}>로그인</button>
  )
}
//272p
function LoginControl(props){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }
  let button;
  if(isLoggendIn){
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }
  return (
    <div>
      <Greegint isLoggedIn={isLoggedIn} />
      {button}
    </div>
  )
}
```
인라인 조건
```html
true && ex -> true
flase && ex -> false
{unreadMessages.length > 0 &&
  <h2>
    현재 {unreadMessages.length}개의 읽지 않은 메세지가 있습니다.
  </h2>
}
```
인라인 ifelse 삼항연산자 사용
```javascript
function LoginControl(props){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }
  return (
    <div>
      <Greegint isLoggedIn={isLoggedIn} />
      {isLoggedIn 
        ? <LogoutButton onClick={handleLogoutClick}>
        : <LoginBUtton onClick={handleLoginClick}>}
    </div>
  )
}
```
컴포넌트를 렌더링하고 싶지 않을 때는 null을 리턴
```javascript
function MainPageprops(props){
  const [showWarning, setShowWarning] = useState(false);
  const handleToggleClick = () => {
    setShowWarning(prevShowWarning => !prevShowWarning);
  }
  return (
    <div>
      <WarningBanner warning={showWarning} />
      <button onClick={handleToggleClick}>
        {showWarning ? '감추기' : '보이기'}
      </button>
    </div>
  )
}
```
9장까지 완료

**# 🐣7주차 4월13일**

훅이란
- 클래스형 컴포넌트에서는 생성자(constructor)에서 state를 정의하고, setState() 함수를 통해 state를 업데이트
- 예전 사용하던 함수형 컴포넌트는 별도로 state를 정의, 생명주기에 맞춰 동작되도록 할 수 없었다.
- 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 함
- state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만듬 함수
- 훅의 이름은 use로 시작

useState()
- const[변수명, set함수명] = useState(초깃값);
```javascript
function Counter(props){
  const [count, setCount] = useState(0);
  return(
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count+1)}>
        클릭
      </button>
    </div>
  )
}
```
useEffect()
- 사이드 이펙트를 수행
- 렌더링 작업 중에는 작업이 완료될 수 없다
- 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공
- useEffect(이펙트함수, 의존성배열);
```javascript
//배열 없이 사용해서 dom이 변경된 이후에 해당 이펙트 함수를 실행
function Counter(props){
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title =`총 ${count}번 클릭`;
  })
  return(
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count+1)}>
        클릭
      </button>
    </div>
  )
}
```
```javascript
//componentwillUnMount()와 동일한 기능
//useEffect에서 리턴하는 함수는 컴포넌트가 마운트 해제될 때 호출
function Counter(props){
  const [isOnline, setIsOnLine] = useState(null);
  function handleStatusChange(status){
    setIsOnLine(status.isOnline);
  }
  useEffect(() =>{
    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    return () => {
      ServerAPI.unsubscriberUsersStatus(props.user.id, handleStatusChange);
    };
  });
  if(isOnline === null){
    return '대기중';
  }
  return isOnline ? '온라인':'오프라인';
}
```
결론
```javascript
useEffect(() => {
  //컴포넌트가 마운트 된 이후,
  1.의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행
  2.의존성 배열에 빈 배열을 넣으면 마운트와 언마운트 시에 한번 씩 실행
  3.의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행

  return () => {
    //컴포넌트가 마운트 해제되기 전에 실행
  }
},의존배열)
```
useMemo()
- 이전 계산값을 갖고 있기 때문에 연산량이 많은 작업의 반복을 피함
- 렌더링이 일어나는 동안 실행
- 이전에 줬던 변수를 주면 기억해서 값만 반환
```javascript
const memoizedValue = useMemo(() => {
  //연산량이 높은 작업을 수행하여 결과를 반환
  return computeExpensiveValue(의존변수,의존변수);
},[의존변수, 의존변수]);
```
useCallback()
- useMemo와의 차이점 값이 아닌 함수를 반환

useRef()
- 레퍼런스를 사용하기 위한 훅
- 레퍼런스 = 특정 컴포넌트에 접근할 수 있는 객체
- useRef()는 객체를 반환
- const refContainer = useRef(초깃값);
- 반환된 레퍼런스 객체는 생명주기 전체에 걸쳐 유지

훅 규칙
1. 초상의 레벨에서만 호출
   1. 반복문이나 조건문 또는 중첩된 함수들 안에서 안됨
   2. 컴포넌트가 렌더링 될 때마다 같은 순서로 호출
   3. 224p는 잘못된 코드
2. 리액트 함수형 컴포넌트에서만 훅을 호출

커스텀 훅을 만들어야하는 상황 227p 예제 next에 적용해보기

230p 예제 최종, 7장 마지막 요약 다시보기

**# 🐣6주차 4월06일**

...5장 실습은 5주차에 미리함

컴포넌트합성, 추출 5.5,5.6 최종 렌더링은 index.html

state란
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
