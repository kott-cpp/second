(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{371:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(372);var taggedTemplateLiteral=__webpack_require__(63),react=__webpack_require__(0),react_default=__webpack_require__.n(react),react_router_dom=__webpack_require__(43),react_router=__webpack_require__(73),react_toastify=__webpack_require__(58),Home_Home=(__webpack_require__(734),function Home(){return react_default.a.createElement("div",null,react_default.a.createElement("div",null,react_default.a.createElement("p",null,"Home")),react_default.a.createElement("div",null,react_default.a.createElement(react_toastify.a,{enableMultiContainer:!0,containerId:"C",position:react_toastify.b.POSITION.BOTTOM_RIGHT}),react_default.a.createElement("button",{onClick:function notifyC(){return Object(react_toastify.b)("Button was clicked!",{containerId:"C"})}},"What does this do?")),react_default.a.createElement("div",null,react_default.a.createElement(react_toastify.a,{enableMultiContainer:!0,containerId:"A",position:react_toastify.b.POSITION.BOTTOM_LEFT}),react_default.a.createElement(react_toastify.a,{enableMultiContainer:!0,containerId:"B",position:react_toastify.b.POSITION.TOP_RIGHT}),react_default.a.createElement("button",{onClick:function notifyA(){return Object(react_toastify.b)("This is on the Bottom-Left corner",{containerId:"A"})}},"Notify A"),react_default.a.createElement("button",{onClick:function notifyB(){return Object(react_toastify.b)("This is on the Top-Right corner",{containerId:"B"})}},"Notify B")))}),components_Home=Home_Home;Home_Home.__docgenInfo={description:"",methods:[],displayName:"Home"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Home.js"]={name:"Home",docgenInfo:Home_Home.__docgenInfo,path:"src/components/Home.js"});var bundle_esm=__webpack_require__(32),react_hooks_esm=__webpack_require__(96),react_common_esm=__webpack_require__(27),Helmet=__webpack_require__(95),Helmet_default=__webpack_require__.n(Helmet);function _templateObject2(){var data=Object(taggedTemplateLiteral.a)(['\n    {\n      Starship(name: "Millennium Falcon") {\n        name\n        hyperdriveRating\n        pilots(orderBy: height_DESC) {\n          name\n          height\n          homeworld {\n            name\n          }\n          species {\n            name\n          }\n          films {\n            title\n          }\n        }\n      }\n    }\n  ']);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(taggedTemplateLiteral.a)(['\n      {\n        Starship(name: "Millennium Falcon") {\n          name\n          hyperdriveRating\n          pilots(orderBy: height_DESC) {\n            name\n            height\n            homeworld {\n              name\n            }\n            species {\n              name\n            }\n            films {\n              title\n            }\n          }\n        }\n      }\n    ']);return _templateObject=function _templateObject(){return data},data}var client=new bundle_esm.a({uri:"https://api.graphcms.com/simple/v1/swapi"});function PilotName(){var _useQuery=Object(react_hooks_esm.b)(Object(bundle_esm.b)(_templateObject2())),loading=_useQuery.loading,error=_useQuery.error,data=_useQuery.data;return loading?react_default.a.createElement("p",null,"Loading..."):error?react_default.a.createElement("p",null,"Error :("):data.Starship.pilots.map(function(_ref){var name=_ref.name,height=_ref.height,homeworld=_ref.homeworld;return react_default.a.createElement("div",null,react_default.a.createElement("ul",null,react_default.a.createElement("li",null,"Name: ",name," - Height: ",height,"cm -",homeworld.name)))})}function Pilot(){return react_default.a.createElement(react_common_esm.a,{client:client},react_default.a.createElement(react_router_dom.a,null,react_default.a.createElement("div",null,react_default.a.createElement(Helmet_default.a,null,react_default.a.createElement("title",null,"My Page")),react_default.a.createElement("p",null,"Pilot"),react_default.a.createElement(PilotName,null))))}client.query({query:Object(bundle_esm.b)(_templateObject())}).then(function(result){return console.log(result.data.Starship.pilots[0])});var components_Pilot=Pilot;function Films_templateObject2(){var data=Object(taggedTemplateLiteral.a)(["\n    {\n      allFilms {\n          title\n          director\n        }\n      }\n  "]);return Films_templateObject2=function _templateObject2(){return data},data}function Films_templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n      {\n        allFilms {\n            title\n            director\n          }\n        }\n    "]);return Films_templateObject=function _templateObject(){return data},data}Pilot.__docgenInfo={description:"",methods:[],displayName:"Pilot"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pilot.js"]={name:"Pilot",docgenInfo:Pilot.__docgenInfo,path:"src/components/Pilot.js"});var Films_client=new bundle_esm.a({uri:"https://api.graphcms.com/simple/v1/swapi"});function FilmName(){var _useQuery=Object(react_hooks_esm.b)(Object(bundle_esm.b)(Films_templateObject2())),loading=_useQuery.loading,error=_useQuery.error,data=_useQuery.data;return loading?react_default.a.createElement("p",null,"Loading..."):error?react_default.a.createElement("p",null,"Error :("):data.allFilms.map(function(_ref){var title=_ref.title,director=_ref.director;return react_default.a.createElement("div",null,react_default.a.createElement("ul",null,react_default.a.createElement("li",null,"Title: ",title," - Director: ",director)))})}function Films(){return react_default.a.createElement(react_common_esm.a,{client:Films_client},react_default.a.createElement(react_router_dom.a,null,react_default.a.createElement("div",null,react_default.a.createElement(Helmet_default.a,null,react_default.a.createElement("title",null,"My Page")),react_default.a.createElement("p",null,"Films"),react_default.a.createElement(FilmName,null))))}Films_client.query({query:Object(bundle_esm.b)(Films_templateObject())}).then(function(result){return console.log(result.data.allFilms.films)});var components_Films=Films;Films.__docgenInfo={description:"",methods:[],displayName:"Films"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Films.js"]={name:"Films",docgenInfo:Films.__docgenInfo,path:"src/components/Films.js"});var About_About=function About(){return react_default.a.createElement("div",null,react_default.a.createElement("p",null,"About"))},components_About=About_About;About_About.__docgenInfo={description:"",methods:[],displayName:"About"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/About.js"]={name:"About",docgenInfo:About_About.__docgenInfo,path:"src/components/About.js"});var Contact_Contact=function Contact(){return react_default.a.createElement("div",null,react_default.a.createElement("p",null,"Contact"))},components_Contact=Contact_Contact;Contact_Contact.__docgenInfo={description:"",methods:[],displayName:"Contact"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Contact.js"]={name:"Contact",docgenInfo:Contact_Contact.__docgenInfo,path:"src/components/Contact.js"});var Error_Error=function Error(){return react_default.a.createElement("div",null,react_default.a.createElement("p",null,"Error: Path does not exist!!!"))},components_Error=Error_Error;Error_Error.__docgenInfo={description:"",methods:[],displayName:"Error"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Error.js"]={name:"Error",docgenInfo:Error_Error.__docgenInfo,path:"src/components/Error.js"});var button_module=__webpack_require__(98),button_module_default=__webpack_require__.n(button_module),Navigation_Navigation=function Navigation(){return react_default.a.createElement("div",null,react_default.a.createElement(react_router_dom.b,{to:"/",className:button_module_default.a.button},"Home"),react_default.a.createElement(react_router_dom.b,{to:"/pilot",className:button_module_default.a.button},"Pilot"),react_default.a.createElement(react_router_dom.b,{to:"/films",className:button_module_default.a.button},"Films"),react_default.a.createElement(react_router_dom.b,{to:"/about",className:button_module_default.a.button},"About"),react_default.a.createElement(react_router_dom.b,{to:"/contact",className:button_module_default.a.button},"Contact"))},components_Navigation=Navigation_Navigation;function App_templateObject2(){var data=Object(taggedTemplateLiteral.a)(["\n  mutation PortToJackAssignment($input: PortToJackAssignmentInput!) {\n    portToJackAssignment(input: $input) {\n      panelJack {\n        id\n        connectedState\n        switchPortId\n      }\n      switchPort {\n        id\n        connectedState\n        panelJackId\n      }\n    }\n  }\n"]);return App_templateObject2=function _templateObject2(){return data},data}function App_templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n    {\n      patchPanel(patchPanelId: 1) {\n        panelJacks {\n          nodes {\n            id\n            connectedState\n            switchPortId\n          }\n        }\n        switchPorts {\n          nodes {\n            id\n            connectedState\n            panelJackId\n          }\n        }\n      }\n    }\n  "]);return App_templateObject=function _templateObject(){return data},data}Navigation_Navigation.__docgenInfo={description:"",methods:[],displayName:"Navigation"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation.js"]={name:"Navigation",docgenInfo:Navigation_Navigation.__docgenInfo,path:"src/components/Navigation.js"});var App_client=new bundle_esm.a({uri:"http://localhost:3000/graphql"});App_client.query({query:Object(bundle_esm.b)(App_templateObject())});Object(bundle_esm.b)(App_templateObject2());function App(){return react_default.a.createElement(react_common_esm.a,{client:App_client},react_default.a.createElement(react_router_dom.a,null,react_default.a.createElement("div",null,react_default.a.createElement(Helmet_default.a,null,react_default.a.createElement("title",null,"My Page")),react_default.a.createElement(components_Navigation,null),react_default.a.createElement(react_router.c,null,react_default.a.createElement(react_router.a,{path:"/",component:components_Home,exact:!0}),react_default.a.createElement(react_router.a,{path:"/pilot",component:components_Pilot}),react_default.a.createElement(react_router.a,{path:"/films",component:components_Films}),react_default.a.createElement(react_router.a,{path:"/about",component:components_About}),react_default.a.createElement(react_router.a,{path:"/contact",component:components_Contact}),react_default.a.createElement(react_router.a,{component:components_Error})))))}__webpack_exports__.a=App;App.__docgenInfo={description:"",methods:[],displayName:"App"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/App.js"]={name:"App",docgenInfo:App.__docgenInfo,path:"src/App.js"})},373:function(module,exports,__webpack_require__){__webpack_require__(374),__webpack_require__(516),module.exports=__webpack_require__(517)},408:function(module,exports){},517:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(715),module)}.call(this,__webpack_require__(192)(module))},715:function(module,exports,__webpack_require__){var map={"./index.js":716};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=715},716:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(97),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(220),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(363),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(168),_App__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(371);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Welcome",module).add("to Storybook",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_4__.Welcome,{showApp:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_3__.linkTo)("Button")})}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Button",module).add("with text",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_4__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Hello Button")}).add("with some emoji",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_4__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"😀 😎 👍 💯")}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("App",module).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__.a,null)})}.call(this,__webpack_require__(192)(module))},98:function(module,exports,__webpack_require__){module.exports={button:"button_button__21nkQ"}}},[[373,1,2]]]);
//# sourceMappingURL=main.b22399779becc76d7cd9.bundle.js.map