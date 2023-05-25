# 🎃201930314 육영현 3학년2반

## 🐣13주차 5월25일

14장 여러 개의 컨텍스트 사용
- Context.Provider를 중첩해서 사용
- p393 예제는 테마 컨텍스트와 로그인유저 컨텍스트 두 개를 다룸(실습에도 나옴)
- Provider를 중첩으로 해서 Consumer도 중첩으로 사용
- 두 개 또는 그 이상의 컨텍스트의 값이 자주 함께 사용될 경우 모든 값을 한 번에 제공하는 별도의 render prop컴포넌트를 직접 만드는 것을 고려

useContext
- 함수형 컴포넌트에서 컨텍스트를 사용하기 위함
- useContext() or React.createContext() 함수 호출로 생성된 컨텍스트 객체를 인자로 받아 현재 컨텍스트의 값을 리턴
```javascript
function MyCom(props) {
  const value = useContext(MyContext);
  return (
    ...
  )
}
```
- 이 방법도 가장 가까운 상위 Provider로부터 컨텍스트의 값을 받아옴
- 만일 값이 변경되면 useContext() 훅을 사용하는 컴포넌트가 재 렌더링 된다.
- 파라미터로 컨텍스트 객체를 넣어야함
```javascript
//옳은 예시
useContext(MyContext);
//틀린 예시
useContext(MyContext.Consumer);
```
14장 실습

15장 입장

css 기초


## 🐣12주차 5월18일

합성(Composition)은 컴포넌트를 합쳐 새로운 컴포넌트 생성
- Containment 방법 
  1. 특정 컴포넌트가 하위 컴포넌트를 포함하는 형태의 합성방법
  2. 컴포넌트에 따라 어떤 자식 엘리먼트가 들어올 지 미리 예상할 수 없는 경우가 있다.
  3. 이럴 때 컴포넌트에서 children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋다.
  4. 이 때 children prop은 컴포넌트의 props에 기본적으로 들어있는 children 속성을 사용한다.
  ```javascript
  function FancyBorder(props){
    return(
      <div className={'FancyBorder FancyBorder-'+props.color}>
        {props.children}
      </div>
    )
  }
  ```
  5. props.children을 사용하면 해당 컴포넌트의 하위 컴포넌트가 모두 children으로 들어오게 된다.
  ```javascript
  //FancyBorder 컴포넌트를 사용하는 예제
  function WelcomDialog(props){
    return(
      <FancyBorder color="blue">
        <h1 className="Dialog-title">어서오세요</h1>
        <p className="Dialog-message">방문하신것을환영</p>
      </FancyBorder>
    );
  }
  ```
  6. 리액트에서는 props.children을 통해 하위 컴포넌트를 하나로 모아서 제공.
  7. 여러개의 children 집합이 필요한 경우는 별도로 props를 정의해서 각 원하는 컴포넌트를 넣어준다.
  ```javascript
  function SpliPane(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
    );
  }
  function App(props) {
    return (
      <SplitPane
        left={
          <Contacts />
        }
        right={
          <Chat />
        }
      />
    );
  }
  ```
- Specialization 방법
  1. WelcomDialog는 Dialog의 특별한 케이스이다.
  2. 범용적 개념을 구별이 되게 구체화 하는 방법
  3. 객체지향에서는 상속을 사용하여 특수화를 구현, 리액트에서는 합성을 사용
  ```javascript
  function Dialog(props){
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">{props.title}</h1>
        <p className="Dialog-message">{props.message}</p>
      </FancyBorder>
    );
  }
  function WelcomDialog(props){
    return(
      <Dialog title="어서오세요" message="방문한것을 환영" />
    )
  }
  ```
- Containment와 Specialization을 같이 사용
  1. Containment를 위해서 props.children을 사용, Specialization을 위해 직접 정의한 props를 사용하면 된다.
  ```javascript
  function Dialog(props){
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
      </FancyBorder>
    );
  }
  function SignUpDialog(props){
    const [nickname, setNickname] = useState('');
    const handleChange = (event) => {
      setNickname(event.target.value);
    }
    const handleSignUp = () => {
      alert(`어서오세${nickname}`);
    }
    
    //Dialog 내의 input button이 props.children으로 전달됨
    return (
      <Dialog 
        title="타이틀"
        message="이름입력"
        <input 
          value = {nickname}
          onChange={handleChange}
        />
        <button onClick={handleSignUp}>
          가입하기
        </button>
      />
    )
  }
  ```
  2. Dialog컴포넌트는 이전의 것과 비슷하나 Containment를 위해 끝부분에 props.children을 추가
  3. Dialog를 사용하는 SignUpDialog는 Specialization을 위해 props인 title, message에 값을 넣어주고 있고, 입력을 받기 위해 <input value="인풋태그">와 <button>버튼</button> 태그가 있다.
  4. 두 개의 태그 모두 props.children으로 전달 되어 다이얼로그에 표시 된다.
13장 실습 p369

14장 컨텍스트란
- 기존의 일반적인 리액트에서는 데이터가 컴포넌트의 props를 통해 부모에게 자식으로 단방향으로 전달되었다.
- 컨텍스트는 리액트 컴포넌트들 사이에서 데이터를 기존의 props를 통해 전달하는 방식 대신 '컴포넌트 트리를 통해 곧바로 컴포넌트에 전달하는 새로운 방식'을 제공
- 이를 통해 어떤 컴포넌트라도 쉽게 데이터에 접근할 수 있다.

**그래서 언제 쓰는데**
- p382 예제처럼 props를 통해 데이터를 전달하는 방식은 실제 데이터를 필요로 하는 컴포넌트까지의 깊이가 깊어질 수록 복잡해진다.
- 또한 반복적인 코드를 계속해서 작성해 주어야 하기 때문에 비효율적이고 가독성은 떨어진다
- p383 아래의 예제는 컨텍스트를 사용한 예
```javascript
//컨텍스트는 데이터를 매번 컴포넌트를 통해 전달할 필요 없이 컴포넌트 트리로 곧바로 전달하게 해준다.
//여기서는 현재 테마를 위한 컨텍스트를 생성하며, 기본값을 'light'
const ThemeContext = React.createContext('light');

//Provider를 사용하여 하위 컴포넌트들에게 현재 테마 데이터를 전달한다.
//모든 하위 컴포넌트들은 컴포넌트 트리 하단에 얼마나 깊이 있는지에 관계없이 데이터를 읽을 수 있다.
//여기선 현재 테마값으로 'dark'를 전달
function App(props) {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  )
}

//이제 중간에 위치한 컴포넌트는 테마 데이터를 하위 컴포넌트로 전달할 필요가 없다
function Toolbar(props) {
  return (
    <div>
      <ThemeButton />
    </div>
  )
}

function ThemeButton(props) {
  //리액트는 가장 가까운 상위테마 Provider를 찾아서 해당되는 값을 사용.
  // 만약 해당되는 Provider가 없을 경우 기본값(여기서는 light)을 사용
  // 여기서는 상위 Provider가 있어 현재 테마 값은 dark가 된다
  return (
    <ThemeContext.Consumer>
      {value => <Button theme = {value} />}
    </ThemeContext.Consumer>
  )
}
```
컨텍스트를 사용하기 전 고려할 점
- 컨텍스트는 다른 레벨의 많은 컴포넌트가 특정 데이터를 필요로 하는 경우 주로 사용한다.
- 컨포넌트와 컨텍스트가 연동되면 재사용성이 떨어짐
- 다른 레벨의 많은 컴포넌트가 데이터를 필요로 하는 경우가 아니면 props를 통해 데이터를 전달하는 컴포넌트 합성 방법이 더 적합하다.
```javascript
//page는 pagelayout을 pagelayout은 navigationBar를 렌더링
<Page user={user} avatarSize={avatarSize} />
<PageLayout user={user} avatarSize={avatarSize} />
<NavigationBar user={user} avatarSize={avatarSize} />

//link컴포넌트는 avatar 컴포넌트를 렌더링
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize}>
</Link>
```
- p386 예제는 중간 레벨의 컴포넌트를 통해 전달해야 하는 props를 없애고, 코드를 더욱 간결하게 만들어 준다.
- 또한 최상위 컴포넌트에 좀 더 많은 권한을 부여
- 다만 데이터가 많아질수록 상위 컴포넌트에 몰리기 때문에 상위 컴포넌트는 점점 복잡해지고, 하위 컴포넌트는 너무 유연해진다. p387 예제 최종
```javascript
function Page(props) {
  const user = props.user;
  const topBar = (
    <NavigationBar>
      <Link href={user.permalink}>
        <Avatar user={user} size={props.avatarSize}>
      </Link>
    </NavigationBar>
  );

  const content = <Feed user={user} />;
  return (
    <PageLayout
      topBar={topBar}
      content={content}
    />
  )
}
```
컨텍스트 API
- React.createContext
  1. 컨텍스트를 생성하기 위한 함수
  2. 파라미터에는 기본값을 넣어주면 된다.
  3. 하위 컴포넌트는 가장 가까운 상위베렐의 Provider로 부터 컨텍스트를 받게 되지만, Provider를 찾을 수 없다면 위에서 설정한 기본값을 사용
- Contxt.Provider
  1. 하위 컴포넌트들을 감싸주면 모든 하위 컴포넌트들이 해당 컨텍스트의 데이터에 접근할 수 있게 된다.
  2. Provier 에는 value라는 props이 있고 하위 컴포넌트에 전달된다.
  3. 하위 컴포넌트를 consumer 컴포넌트라고 부른다.
- Class.contextType
  1. Provider 하위에 있는 클래스 컴포넌트에서 컨텍스트의 데이터에 접근하기 위해 사용
- Context.Consumer
  1. 함수형 컴포넌트에서 사용하여 컨텍스트를 구독할 수 있다.
  2. 컴포넌트의 자식으로 함수가 올 수 잇는데 이것을 function as a child라고 함.
  3. Context.Consumer로 감싸면 자식으로 들어간 함수가 현재 컨텍스트의 value를 받아 리액트 노드로 리턴
  4. 함수로 전달되는 value는 Provider의 value prop 과 동일
- Context.displayName
  1. 컨텍스트 객체는 displayNAme이라는 문자열 속성을 갖는다.
  2. 크롬의 리액트 개발자 도구에서는 컨텍스트의Provider나 Consumer를 표시할 때 displayName을 함께 표시한다.


## 🐣11주차 5월11일

shared State
- 어떤 컴포넌트의 state에 있는 데이터를 여러 개의 하위 컴포넌트에서 공통적으로 사용하는 경우

하위 컴포넌트에서 state 공유

== 12장 실습에서 자세히 나옴. 코드 참고할 것
- 섭씨를 입력하면 화씨 자동계산 반대도 됨
- Calculator 내의 두개의 temperautrInput이 state를 공유하는 것을 확인
- const [temperature, setTemperature] = useState("");



## 🐣10주차 5월04일

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



## 🐣9주차 4월27일

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

## 🐣7주차 4월13일

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

## 🐣6주차 4월06일

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

## 🐣5주차 3월30일

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
## 🐣4주차 3월23일

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
## 🐣3주차 3월16일

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

## 🐣2주차 3월09일
1. Visual Studio Code의 확장 기능을 통해 소스를 commit.<br>
2. VS code와 git hub간 연동 후 원격 리모트.<br>
3. 로컬에 커밋된 소스를 push로 git hub에 업로드.<br>

4. html이란
5. css란
6. Single Page Application
7. JS ES6(ECMAScript6), 자료형
8. JSON
