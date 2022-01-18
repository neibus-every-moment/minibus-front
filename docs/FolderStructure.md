## Folder Structure
```
boilerplate
├── .github : pr,issue template
├── docs
├── src
    ├── components : react components
    ├── hooks       
    ├── routes     : route elements
    ├── scss
        ├── base        : font,reset...(global setting)
        ├── components  : react components style
        ├── constants   : color, font-size...
        ├── layouts     : gnb,lnb,sidebar...(common layout)
        ├── main.scss
        ├── mixins      
        └── modules     : icon, button, tags...
    └── utils
├── static     : assets
└── index.html
```

### 설명
1. ie10까지 지원합니다.
2. react(17버전),typescript,scss을 기본으로 사용합니다.

### 실행
1. development mode : npm run dev (scss도 별도 명령어 없이 변경 확인 가능, hot module reloading 지원중)<br/>
2. production mode  : npm run build

### 기타
- temp.txt는 폴더 구조를 유지하기 위해 추가한 파일입니다. 보일러 플레이트를 다운 받으면 삭제해주세요.
- eslint를 제대로 적용하기 위해 prettier는 비활성화 해주세요.
- scss-lint를 사용하기 위해 vscode 확장탭에서 scss-lint를 다운받아주세요. (sass-lint가 아닙니다.)
- eslint가 적용이 안되시는 경우에는 맥북을 기준으로 Shift+Command+P를 눌러 Preferences: Open Settings (JSON)을 켜주세요.
  맨 아래에 "eslint.validate": ["typescript","typescriptreact"]를 추가해주시면 JSON 파일로 작성된 eslint 규칙이 적용될 것입니다.