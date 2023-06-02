### Rick And Morty

## Getting Started

Please ensure you are using node version 16.

Create .env for frontend:

```
BACKEND_API_URL=localhost:8000
```

Create .env for backend:

```
API_URL=https://rickandmortyapi.com/api/
```

First, run the development server:

cd frontend

```bash
npm i
npm run dev:frontend
```

cd backend

```bash
npm i
npm run dev:backend
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## App Structure

**Backend:**

**server.ts** - entry point. Calls on relevant middleware (including morgan for request logging) and defines port and route for data call.

**lib/rickAndMortyApiClient.ts** - contains the API url.

**routes/index.ts** - uses express router to define the route and the controller to use.

**routes/characters.ts** - contains functions to get and format the data from the external API.

**services/characterService.ts** - contains a reusable function to get all pages of data per character from the API.

**services/locationService.ts** - passed ID of location to API to retrieve location data in order to attach the details to the character

**types/api.d.ts** - contains a reusable function to get all pages of data per character from the API.

**utils/** - formats data passed to return data in the correct form for type matching.

**test/routes.test.ts** - uses jest to illustrate a sample test, displaying a successful call to the server.

Filtering of characters was carried out on the backend through use of query params.

**Frontend:**

**\_app.ts:** app entry point, contains no more than structure and entry.

**index.ts:** app landing page. This gets all the data for the app to be passed down from the API i.e. all characters and passes single character ID further down the app.

**characters/index.ts:** contains all the data and layout for the individual character page. Uses next router to retrieve the character ID, which is then passed through to the backend.

**api/characters.ts:** both uses next.ts api request to get data from the backend with characters/id using the id passed from the frontend file.

Each template has its own styles.tsx file, which uses styled-components.

Organised into \_shared components (e.g. header, character cards, loading spinner etc), \_template components used for the page layout.

## Testing

cd backend
npm run test
(make sure api server is not running)

## Future improvements, bugs & challenges

- With more time I would have liked to add some proper testing for both backend and frontend, whilst also incorporating E2E Cypress testing
- Fix bug: some data not coming through correctly e.g. Mortys step dad. This could be fixed through filtering by name to ensure only actual Rick/Morty characters come through.
- In future, would be nice to incorporate pagination, a search bar and tab functionality to show either Rick or Mortys.
- For deplopyment, would like to implement Terraform and AWS secrets for any URLs that need hiding.
- Challenges around getting all the data to fit correct TS interfaces, as well as ensuring all characters from all pages were displaying. Also, faced some challenges with configuration within the app e.g. ESLint, TS imports and testing, however was able to overcome all these challenges and successfuly install the necessary plugins and features.
