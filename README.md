# kloans-interview-ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

## Tasks

* Add a new route for the contact view component.
* Create a ContactForm component with two input fields (Name, Email), and a submit button.
* The ContactForm form should submit the user input to our API using our ContactClient.
* Once submitted, the contact form should also update our contact data store (ContactModule).
* Update the Result component to display the submitted contact information available in the store. 

* Add a new route for the User view component which will contain the user id in the url. Ex.: /user/123
* The user component should receive the user id from route url.
* The user component should never access the $router object directly.

* Add tests to the ContactForm component and Result view component.
