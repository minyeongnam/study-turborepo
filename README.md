# turborepo-test

Turborepo를 적용 테스트 프로젝트
<br />

## Advance Preparation

package manager는 pnpm을 사용한다.

1. pnpm 설치

```
npm install -g pnpm
```

2. Storybook 설치

```
cd apps/candidate
pnpm install --save-dev @storybook/cli

cd apps/author
pnpm install --save-dev @storybook/cli
```

3. root에서 전체 설치

```
pnpm install
```
<br />

## Project Run script

| pnpm             | Description          |
| ---------------- | -------------------- |
| `pnpm install`   | node modules install |
| `pnpm dev`       | dev client           |
| `pnpm storybook` | dev storybook        |

</br>