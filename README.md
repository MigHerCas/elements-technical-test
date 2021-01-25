<img src="https://assets.website-files.com/5cd40c117f1ff810bf42803b/5d2f00e046b3c5b7475d4b76_elements_logo_landscape_black_nospacing.svg" align="right"
     alt="Elements.nl logo" width="220" height="100">
     
# Elements Candidate Assignment - Frontend

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 

# Pre-requisites 📋
This project has been built with: 

- `yarn [1.22.4]`
- `node [12.19.0]`
- `Typescript [^4.1.3]`
- `React [17.0.1]`
- `Next [10.0.5]`

# Installation 🛠️
First, project dependencies installation:

```bash
npm install
# or
yarn install
```

As .env variables are used within this project, you need to set them up.

```bash
cp .env.sample .env.local
```

Next.js has its own environment variables system, so you need to copy those variables within `next.config.js`

```js
// next.js.config
...
env: {
    {VariableName}: {value},
  },
}
...
```

This being done, there are only two remaing steps to have our application running 🚀: 

Tab 1 in our terminal: 

Init a [cors-anywhere](https://github.com/Rob--W/cors-anywhere) instance.

```bash
npm run server
# or
yarn run server
```
Tab 2:

```bash
npm run dev
# or
yarn run dev
```

You should now see something like this: 
```bash
yarn run v1.22.4
$ next dev

Loaded env from {yourPath}/elements-technical-test/.env.local
ready - started server on http://localhost:3000
event - compiled successfully
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design 🎨

As I always try to bring my own value or touch to every project I work on, I decided to create my own Elements themed design. 

_⚠️ Please note ⚠️:_

_As this is not a real-life project, the design has established a serie of guidelines such as layout, colors and elements. During development phase, a few things have changed, so take it as a `sandbox` where I've projected my ideas as long as they were popping up in my head._

Built with Figma 

[Design](https://www.figma.com/file/V6iTcUUcfUGp2iKcIhTqFQ/Elements) 

## Documentation 📖

### Project architecture 🧰

| Project field | Tech / library used |
| ------------- | ------------- |
| Styling  | `scss`  |
| Main language  | `Typescript`  |
| Formatting  | `ESLint - Prettier`  |
| Pre-commit hooks  | `Husky - Lint-staged`  |
| External libraries  | `Swiper -  AOS - cors-anywhere`  |

Now more in depth: 

| Folder | Motive |
| ------------- | ------------- |
| /components  | `React components`  |
| /scss  | `styling modules`  |
| /global  | `Global tooling used accross this app`  |
| /global/constants  | `Immutable constants `  |
| /global/utils  | `Reusable functions`  |
| /global/models  | `Typescript interfaces and types`  |
| /global/context  | `Context provider, reducer and actions`  |
| /pages  | `Next.js pages directory. Includes dynamic routing`  |
| /pages/location/[name]  | `Dynamic routing for different locations`  |
| /server  | `Server file that runs cors-anywhere`  |

### User stories 👤
Completed / uncompleted user stories or requirements:  

- [x] 1. As a Reviewer, I want a web application that can show the weather data that is supplied by my server.
- [x] 2. As a User, I want to see a home screen with all the cities that are available on the API.
- [x] 3. As a User, I want the cities to be sorted alphabetically.
- [x] 4. As a User, I want to be able to refresh the data that is on the home screen.
- [x] 5. As a User, I want to be able to click on a city and see the weather results on a separate detail screen. The detail screen should be reachable
by a direct URL.
- [x] 6. As a User, I want all the temperatures to be displayed in Celsius.
- [x] 7. As a User, I want the temperatures to be displayed in chronological order.
- [ ] 8. As a User, I want to have the ability to hide/unhide a city and remember my choice after a page reload.
- [x] 9. As a Reviewer, I want a subject in the README.md explaining how to run the application.
- [x] 10. As a Reviewer, I want a subject in the README.md explaining the chosen architecture.
- [x] 11. As a Reviewer, I want the application delivered in a private GitHub repo, please invite elements-interviews. The GitHub repo may not be
published to a public location.
- [x] 12. As a Reviewer, I want a report of User Stories that couldn't be finished or have a comment. Please add it to the README.md of your project.
- [x] 13. As a Reviewer, I value the usage of the React or Vue framework. If there is a reason for using another framework, please specify it in the
README.md.
- [x] 14. As a Reviewer, I value the usage of TypeScript over JavaScript. If there is a reason for writing JavaScript, please specify it in the README.
md.

### Features
- [ ] Unit testing: after trying many set-ups using: [Jest - Typescript - Nextjs - ESLint], I didn't make it. 
 Resources used: 
 - [GitHub - Prottoy2938/nextjs-typescript-eslint-jest-template: Starter Template for Nextjs, TypeScript, ESLint and Jest](https://github.com/Prottoy2938/nextjs-typescript-eslint-jest-template)
- [Testing with typescript + jest + ts-jest · Issue #8663 · vercel/next.js · GitHub](https://github.com/vercel/next.js/issues/8663)
- [Jest Typescript: Unit Testing with Typescript and Jest - DEV Community](https://dev.to/muhajirdev/unit-testing-with-typescript-and-jest-2gln)
- https://medium.com/@benjaminwfox/next-js-setup-config-for-testing-linting-and-absolute-imports-605959d7bd6f
- [next.js/examples/with-jest at canary · vercel/next.js · GitHub](https://github.com/vercel/next.js/tree/canary/examples/with-jest)

- [ ] Error handling (API error | connection issue). 
Due to a lack of time, I haven't gone through this user story. Feel free to check this project that covers this functionality: [spotify-react-app](https://github.com/MigHerCas/spotify-react-app)

### Time spent ⏱️

| Development phase | Hours |
| ------------- | ------------- |
| Styling  | 5h |
| Design  | 6h  |
| Set-up  | 2h  |
| Development  | 20h / 25h  |
| Documentation  | 2h  |

### Personal comment
As this assessment allows to use as much time as desired, I tried to build something really cool since that's why I try to do with every assessment that I've completed. In my opinion, I owe this to myself if I always deffend my creativeness during the interviews.

## Things I am more proud of

- Use of utils as the core of the project: this folder contains the most complex part of the project. 
- Use of Map and Set JS objects. 
- Clip-path on background image. 
- More structured design
- Nice theme switcher
- Redux-way app state management

## Author
Miguel Hernanz 

## License
[MIT](https://choosealicense.com/licenses/mit/)

