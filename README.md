# softeer-candidate-test-app

softeer-candidate-test-app

## Project Run script

| pnpm             | Description          |
| ---------------- | -------------------- |
| `pnpm install`   | node modules install |
| `pnpm dev`       | dev client           |
| `pnpm storybook` | dev storybook        |

</br>

## 폴더구조

<details>
<summary>폴더구조</summary>

<!-- ```

root
├── build : electron config
├── config : webpack config
├── dist : build files
├── docs : 프로젝트 문서
├── public : webpack entry
├── server : local server
├── src
│ ├── @types : typescript custom module
│ ├── api
│ │ ├── apiBase
│ │ ├── interface
│ │ ├── common
│ │ ├── analysis
│ │ └── pivottable
│ ├── assets
│ │ ├── fonts
│ │ ├── images
│ │ ├── styles
│ │ └── svg
│ ├── components
│ ├── constants
│ ├── hooks
│ ├── lang
│ ├── lib
│ ├── store : redux store
│ ├── App.ts
│ └─── index.ts
├── tools: DB 관련
├── .babelrc
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc.js
├── package.jon
├── README.md
└── tsconfig.jon

``` -->

</details>

</br>

## Frontend 설치 프로그램

<details>
<summary>VS Code extension</summary>

1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
3. [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

</details>

<details>
<summary>Chrome extension</summary>

1. [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

</details>

<br />

## Frontend Covention

<details>
<summary>기본 규칙</summary>
<br />

- 파일당 하나의 컴포넌트 파일만 포함한다.
  - 하지만, 다수의 [Stateless, or Pure, Components](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) 들은 파일에 존재해도 된다.
  - 참고: eslint: `[react/no-multi-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless)`.
- 항상 JSX 구문을 사용한다.
- 만약 JSX를 이용해 앱을 개발 중이라면 `React.createElement` 구문을 사용하지 않는다.

</details>

<br />

<details>
<summary>폴더 및 파일</summary>
<br />

- 컴포넌트 폴더는 Pascal Case로 작성
  - 각 컴포넌트에 index.tsx로 만들고 function명을 폴더명과 동일하게 한다.
  - 컴포넌트내에 공통 컴포넌트가 있다면 하위폴더로 common을 작성하고 추가한다.

```

// component: FilterComponent

// bad

// folder: filterComponent
// file: filterwrap.tsx
function filterwrap() {
...
}

// good
// folder: FilterComponent
// file: intex.tsx
function FilterComponent() {
...
}

```

- 컴포넌트를 제외한 파일 및 폴더는 Camel Case로 작성

</details>

<br />

<details>
<summary>함수 및 변수</summary>
<br />

- 컴포넌트를 제외한 함수는 Camel Case로 작성
- 이벤트 핸들러 함수는 handle이라는 접두사를 붙인다.
- 컴포넌트 분할로 인해 함수를 props로 넘길 경우 속성이름에 on을 붙여준다.

```

const handleOption = () => {
...
}

<Component
    onOption = {handleOption}
/>

```

- boolean 변수는 is로 접두사를 붙인다. (ex: isShow, isTable)

</details>

<br />

<details>
<summary>Interface</summary>
<br />

- 이름은 Pascal Case로 작성한다.
- 속성은 Camel Case로 작성한다.

```

// bad
interface example_interface {
temp: string;
tempproperty: boolean;
}

// bad
interface exampleInterface {
temp: string
tempproperty: boolean;
}

// good
interface ExampleInterface {
temp: string
tempProperty: boolean;
}

```

</details>

<br />

<details>
<summary>이미지파일</summary>
<br />

파일의 카테고리별로 각각의 접두사를 붙인다

- 아이콘: icon\-
- 배경: bg\-
- 그 외 이미지 img\-

</details>

<br />

<details>
<summary>api 호출</summary>
<br/>

api 폴더에 page 또는 컴포넌트 별로 작성

```

// api/filter.ts

import { api } from './apiBase';

export const filterApi = {
getProductList: (productline: number[]) =>
api.post<ProductPathogenList[]>('analysis/prevalence', { productline: [...productline] }),
};

```

데이터가 필요한 곳에서 react-query를 사용해 호출

```

// components/Filter/Products.tsx

import { useQuery, UseQueryResult } from 'react-query';

const {
data: getFilterData,
isLoading,
isError,
refetch,
} = useQuery('filter', () => filterApi.getProductList(PRODUCT_LINES[productLineFilter].ids), {
select: (getFilterData) =>
getFilterData.data.filter(({ prdtCd }: ProductPathogenList) =>
selectedProducts[productLineFilter].includes(prdtCd),
),
});

```

backend에서 데이터를 간단하게 보고싶은 경우

```

import { api } from '~/api/apiBase';

const { data }: any = useQuery('test', () =>
api.post('analysis/prevalence', { productline: [1, 2] }),
);

console.log(data);

```

</details>
<br/>

<details>
<summary>주석</summary>
<br />

_TODO_

당장 구현하기 어려운 일, 추후 해야할 일, 개선 할 사항 등

나쁜 코드를 남겨놓고 너무 어려워서 다음에 하겠다는 핑계의 의미로 TODO는 사용하지 않는다.

```

function FilterComponent() {
... // TODO: description
}

```

<br />

_FIXME_

문제는 있는데 당장 수정할 수 없어 차후에 해결할 항목

```

function FilterComponent() {
... // FIXME: description
}

```

</details>
