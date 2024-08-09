# Word Clone App

배포 주소: [Deployment](https://voluble-faun-b50299.netlify.app)

## 버전

- Node >= 20 (20.3.0)
- Npm >= 9 (9.6.7)

## 설치방법

```javascript
// 패키지 파일 다운로드
npm i
// 설치되지 않는 경우
npm install --legacy-peer-deps
// 실행
npm start
// 혹은
npm run start
```

## CI / CD 배포방법

- .env 파일 요청
- ruby 2.7.5 이상 설치
- fastlane 설치

```javascript
brew install fastlane
```

- 준비사항이 준비되었을시 터미널에 다음을 입력

```javascript
fastlane web deploy
```

## Features

### TypeScript

### Eslint



### Zustand


## 폴더구조

```
src/
├── App.tsx # 앱의 메인 컴포넌트
├── components
│   ├── Divider # margin 컴포넌트
│   │   ├── index.tsx
│   │   └── type.ts
│   ├── Icons # 앱에서 사용할 아이콘 컴포넌트
│   │   ├── icons
│   │   │   ├── index.ts
│   │   │   └── svgs
│   │   │   ├── Backspace.tsx
│   │   │   ├── Close.tsx
│   │   │   ├── DarkMode.tsx
│   │   │   ├── LightMode.tsx
│   │   │   ├── Reset.tsx
│   │   │   └── Share.tsx
│   │   ├── index.tsx
│   │   └── type.ts
│   ├── Modal # modal 컴포넌트
│   │   ├── ConfirmModal
│   │   │   ├── index.tsx
│   │   │   └── type.ts
│   │   ├── hook.ts
│   │   └── type.ts
│   ├── Text # text 컴포넌트
│   │   ├── index.tsx
│   │   └── type.ts
│   ├── Theme # 앱의 테마 관리 프로바이더 컴포넌트
│   │   └── index.tsx
│   └── Toast # toast / snackbar 컴포넌트
│   ├── index.tsx
│   └── type.ts
├── containers # page 내 부속 컴포넌트
│   └── WordlePlay
│        ├── WordlePlayContents.tsx
│        ├── WordlePlayResultModal.tsx
│        ├── WordlePlayKeyboard.tsx
│        ├── WordlePlayTop.tsx
│        ├── index.ts
│        └── type.ts
├── hooks  # React 커스텀 훅의 재사용성을 위한 저장 폴더
│   └── answer
│        ├── type.ts
│        └── useAnswerElements.ts
├── index.tsx # 앱의 엔트리 포인트
├── lib  # 사용할 함수 및 상수를 모아놓은 폴더
│   ├── color.ts
│   ├── constant.ts
│   ├── day.ts
│   ├── event.ts
│   ├── init.ts
│   ├── set.ts
│   ├── text.ts
│   └── wordle.ts
├── pages # 각 페이지 컴포넌트
│   └── WordlePlay
│   └── index.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── setupTests.ts
├── stores # 상태 변환 라이브러리 폴더
│   ├── index.ts
│   ├── modal.ts
│   ├── system.ts
│   ├── theme.ts
│   └── toast.ts
├── themes # 타입 및 모델 구성 폴더
│   ├── colors.ts
│   └── reset.ts
└── types # 타입 및 모델 구성 폴더
    ├── common.ts
    ├── element.ts
    └── react.ts
```

## Eslint

- VsCode 확장 탭 내 Prettier ESLint 설치
- 작동되지 않는다면 User setting.json에 다음을 설정

```json
{
  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint",
  "editor.formatOnType": false,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnSaveMode": "file",
  "files.autoSave": "onFocusChange",
  "vs-code-prettier-eslint.prettierLast": false
}
```

## 코드스니펫 설정 (선택)

### 설정방법

- 상단 애플로고 옆 Code 클릭 (Mac 기준 VsCode)
- 기본설정 내 사용자 코드 조각 구성 선택
- typescript.json / typescriptreact.json 내 아래 코드를 추가 혹은 설정

```
{
  "web-ui text component": {
			"prefix": "wtext",
			"body": [
				"<Text",
				"  fontSize=$1",
				"  fontWeight=$2",
				"  color={COLORS.$3}",
				">",
				"  $4",
				"</Text>"
			]
		},
  "web-ui divider component": {
			"prefix": "wdivider",
			"body": [
				"<Divider",
				"  horizontal={$1}",
				"  vertical={$2}",
				"  backgroundColor={$3}",
				"/>",
			]
		},
}
```

### 사용법

- 필요한 컴포넌트의 prefix를 입력

```
// ex text component
wtext
```

- 아래와 같이 자동완성 되며 import 하여 사용

```
    <Text
      fontSize=
      fontWeight=
      color={COLORS.}
    >

    </Text>
```
