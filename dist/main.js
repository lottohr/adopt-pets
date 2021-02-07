/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_helpers_getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/helpers/getData.js */ \"./src/js/helpers/getData.js\");\n/* harmony import */ var _js_components_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/list.js */ \"./src/js/components/list.js\");\n/* harmony import */ var _js_components_carousel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/components/carousel.js */ \"./src/js/components/carousel.js\");\n\r\n\r\n\r\n\r\nconst carousel = async () => {\r\n    let data = (0,_js_helpers_getData_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n    data = await data; \r\n    (0,_js_components_carousel_js__WEBPACK_IMPORTED_MODULE_2__.default)(data);\r\n}\r\n\r\nconst list = async () => {\r\n    let data = (0,_js_helpers_getData_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n    data = await data;\r\n\r\n    let jsonData = data.sort((a, b) => a.age - b.age);\r\n    let state = {\r\n        currentItems: 20,\r\n        totalItems: data.length,\r\n        sortBy: \"age\",\r\n        sortOrder: \"asc\",\r\n        filterAge1: \"null\",\r\n        filterAge2: \"null\",\r\n        filterColor: \"null\",\r\n    };\r\n    (0,_js_components_list_js__WEBPACK_IMPORTED_MODULE_1__.default)(state, jsonData);\r\n}\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n    // Init components\r\n    carousel();\r\n    list();\r\n\r\n    // Remove modal on click outside\r\n    let modal = document.querySelector(\".modal_overlay\");\r\n    modal.addEventListener(\"click\", function (e) {\r\n        document.getElementById(\"adoptModal\").style.display = \"none\";\r\n        document.body.classList.remove(\"modal-opened\");\r\n    });\r\n});\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/js/components/carousel.js":
/*!***************************************!*\
  !*** ./src/js/components/carousel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _js_templates_carouselTemplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/templates/carouselTemplate.js */ \"./src/js/templates/carouselTemplate.js\");\n/* harmony import */ var _js_templates_modalTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/templates/modalTemplate.js */ \"./src/js/templates/modalTemplate.js\");\n\r\n\r\n\r\nfunction carouselController(data){\r\n    (0,_js_templates_carouselTemplate_js__WEBPACK_IMPORTED_MODULE_0__.default)(data.sort((a, b) => a.age - b.age).slice(0, 4));\r\n    const nextBtn = document.getElementById(\"nextSlide\");\r\n    const prevBtn = document.getElementById(\"prevSlide\");\r\n    const carousel = document.querySelector(\"#carouselContent\");\r\n    const interval = 2000;\r\n    const carouselModalLoaded = new Event('modalLoaded');\r\n    let slideId;\r\n    let slides = carousel.querySelectorAll(\".carousel__item\");\r\n \r\n    const initCarousel = () => {    \r\n        slideId = setInterval(() => {\r\n            nextSlide();\r\n        }, interval);\r\n    };\r\n \r\n    function cloneSlides(){\r\n        let slides = carousel.querySelectorAll(\".carousel__item\");\r\n        const firstClone = slides[0].cloneNode(true);\r\n        const secondClone = slides[1].cloneNode(true);\r\n        const lastClone = slides[slides.length - 1].cloneNode(true);\r\n        const secondLastClone = slides[slides.length - 2].cloneNode(true);\r\n        carousel.prepend(lastClone);\r\n        carousel.prepend(secondLastClone);\r\n        carousel.append(firstClone);\r\n        carousel.append(secondClone);\r\n    }\r\n\r\n    function nextSlide(){\r\n        removeCurrentClass();\r\n        let slides = carousel.querySelectorAll(\".carousel__item\");\r\n        let currentSlide = slides[3];\r\n        currentSlide.classList.add(\"current__slide\");\r\n        carousel.appendChild(slides[0]);\r\n        showModalOnCurrentSlideClick();\r\n        stopSliderOnCurrentSlideHover();\r\n    }\r\n\r\n    function prevSlide(){\r\n        removeCurrentClass();\r\n        let slides = carousel.querySelectorAll(\".carousel__item\");\r\n        slides[1].classList.add(\"current__slide\"); \r\n        carousel.insertBefore(slides[slides.length - 1], slides[0]);\r\n        showModalOnCurrentSlideClick();\r\n    }\r\n\r\n    function removeCurrentClass(){\r\n        let slides = carousel.querySelectorAll(\".carousel__item\");\r\n        for (let i = 0; i < slides.length; i++) {\r\n            slides[i].classList.remove(\"current__slide\");\r\n        }\r\n    }\r\n\r\n    function showModalOnCurrentSlideClick(){\r\n        let slides = document.querySelectorAll(\".carousel__item\");\r\n        slides.forEach((slide)=>{\r\n            if(slide.classList.contains('current__slide')){\r\n                slide.onclick = ()=>{\r\n                    (0,_js_templates_modalTemplate_js__WEBPACK_IMPORTED_MODULE_1__.default)(data.filter(el => el.id == slide.id));\r\n                    document.getElementById(\"adoptModal\").style.display=\"block\";\r\n                    document.body.classList.add(\"modal-opened\"); \r\n                    document.dispatchEvent(carouselModalLoaded);\r\n                }\r\n            }else{\r\n                slide.onclick = null;\r\n            }\r\n        })\r\n    }\r\n\r\n    function stopSliderOnCurrentSlideHover(){\r\n        let slides = document.querySelectorAll(\".carousel__item\");\r\n        slides.forEach((slide)=>{\r\n            if(slide.classList.contains('current__slide')){\r\n                slide.addEventListener(\"mouseenter\", stopSlider );\r\n                slide.addEventListener(\"mouseleave\", initCarousel);\r\n            }else{\r\n                removeMouseEvents(slide);   \r\n            }\r\n        })\r\n    }\r\n\r\n    function stopSlider(){\r\n        clearInterval(slideId);\r\n    }\r\n\r\n    function removeMouseEvents(slide) {  \r\n        slide.removeEventListener('mouseenter', stopSlider);\r\n        slide.removeEventListener('mouseleave', initCarousel);\r\n    }\r\n\r\n    nextBtn.addEventListener(\"mouseenter\", stopSlider);\r\n    prevBtn.addEventListener(\"mouseenter\", stopSlider);\r\n    nextBtn.addEventListener(\"mouseleave\", initCarousel);\r\n    prevBtn.addEventListener(\"mouseleave\", initCarousel);\r\n    nextBtn.addEventListener(\"click\", nextSlide);\r\n    prevBtn.addEventListener(\"click\", prevSlide);\r\n\r\n    document.addEventListener(\"carouselUpdated\", (ev) => {   \r\n        (0,_js_templates_carouselTemplate_js__WEBPACK_IMPORTED_MODULE_0__.default)(ev.detail.data.sort((a, b) => a.age - b.age).slice(0, 4));\r\n        cloneSlides();\r\n        let slides = carousel.querySelectorAll(\".carousel__item\");\r\n        let currentSlide = slides[3];\r\n        currentSlide.classList.add(\"current__slide\");\r\n    })\r\n\r\n    cloneSlides();\r\n    // Set first slide to current slide\r\n    slides[0].classList.add(\"current__slide\");\r\n    initCarousel();\r\n    showModalOnCurrentSlideClick();\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carouselController);\n\n//# sourceURL=webpack://webpack-demo/./src/js/components/carousel.js?");

/***/ }),

/***/ "./src/js/components/list.js":
/*!***********************************!*\
  !*** ./src/js/components/list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _js_helpers_sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/helpers/sort.js */ \"./src/js/helpers/sort.js\");\n/* harmony import */ var _js_helpers_filters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/helpers/filters.js */ \"./src/js/helpers/filters.js\");\n/* harmony import */ var _js_helpers_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/helpers/search.js */ \"./src/js/helpers/search.js\");\n/* harmony import */ var _js_templates_listTemplate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../js/templates/listTemplate.js */ \"./src/js/templates/listTemplate.js\");\n/* harmony import */ var _js_templates_modalTemplate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../js/templates/modalTemplate.js */ \"./src/js/templates/modalTemplate.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction listController(state, jsonData){\r\n    let data = jsonData.slice(0, state.currentItems);\r\n    let deletedData = [];\r\n    const btnLoadMore = document.getElementById(\"btnLoadMore\");\r\n    const sortByBtns = document.formSortBy.sortBy;\r\n    const sortOrderBtns = document.formSortOrder.sortOrder;\r\n    const filterAge1 = document.getElementById(\"filterAge1\");\r\n    const filterAge2 = document.getElementById(\"filterAge2\");\r\n    const filterColor = document.getElementById(\"filterColor\");\r\n    const orderBtn = document.getElementById(\"age\");\r\n    const sortBtn = document.getElementById(\"asc\");\r\n    const adoptBtn = document.getElementsByClassName(\"btn__adopt\");\r\n\r\n    // Load first num of items\r\n    (0,_js_templates_listTemplate_js__WEBPACK_IMPORTED_MODULE_3__.default)(data);\r\n    setSearchInput();\r\n    showModal();\r\n\r\n    btnLoadMore.onclick = function() {\r\n        state.currentItems += 20;\r\n        state.sortOrder = \"asc\";\r\n        state.sortBy =\"age\";\r\n\r\n        // Set radio buttons to default value\r\n        orderBtn.checked = true;\r\n        sortBtn.checked = true;\r\n\r\n        // Set filter to default value\r\n        filterAge1.checked = false;\r\n        filterAge2.checked = false;\r\n        filterColor.checked = false;\r\n\r\n        data = jsonData.slice(0, state.currentItems);\r\n\r\n        if(state.currentItems >= state.totalItems){\r\n            btnLoadMore.setAttribute(\"style\", \"display:none\"); \r\n        }\r\n        document.dispatchEvent(dataUpdated);\r\n    };    \r\n\r\n    sortByBtns.forEach((btn)=>{\r\n        btn.addEventListener(\"change\", function() {\r\n            state.sortBy = this.value;\r\n            document.dispatchEvent(dataUpdated);\r\n        });\r\n    })\r\n\r\n    sortOrderBtns.forEach((btn)=>{\r\n        btn.addEventListener(\"change\", function() {\r\n            state.sortOrder = this.value;\r\n            document.dispatchEvent(dataUpdated);\r\n        }); \r\n    })\r\n    \r\n    function setFilter(filter){\r\n        let filterName = filter.id;\r\n        filter.addEventListener(\"change\", function(){\r\n            if (this.checked == 1){\r\n                state[`${filterName}`] = this.value;\r\n                data = (0,_js_helpers_filters_js__WEBPACK_IMPORTED_MODULE_1__.default)(data, state);\r\n            } else{\r\n                state[`${filterName}`] = \"null\";\r\n                data = (0,_js_helpers_filters_js__WEBPACK_IMPORTED_MODULE_1__.default)(jsonData.slice(0, state.currentItems), state);\r\n            }\r\n            document.dispatchEvent(dataUpdated);\r\n        })\r\n    }\r\n\r\n    // Init filters\r\n    setFilter(filterColor);\r\n    setFilter(filterAge2);\r\n    setFilter(filterAge1);\r\n\r\n    function setSearchInput(){\r\n        const search_input = document.getElementById(\"search\");\r\n        let search_term = \"\";\r\n        search_input.addEventListener(\"input\", (e) => {\r\n            search_term = e.target.value;\r\n            data = (0,_js_helpers_search_js__WEBPACK_IMPORTED_MODULE_2__.default)(jsonData, state, search_term);\r\n            document.dispatchEvent(dataUpdated);\r\n            if(state.currentItems >= state.totalItems || search_term !==\"\" ){\r\n                btnLoadMore.setAttribute(\"style\", \"display:none\"); \r\n            }else{\r\n                btnLoadMore.setAttribute(\"style\", \"display:block\");\r\n            }\r\n        });\r\n    }\r\n\r\n    function showModal(){\r\n        for (let i = 0; i < adoptBtn.length; i++) {\r\n            adoptBtn[i].onclick = ()=>{\r\n              (0,_js_templates_modalTemplate_js__WEBPACK_IMPORTED_MODULE_4__.default)(data.filter(el => el.id == adoptBtn[i].parentNode.dataset.id));\r\n              document.dispatchEvent(listModalLodade);\r\n            }\r\n        }\r\n    }\r\n\r\n    // Custom events\r\n    const dataUpdated = new Event(\"updated\");\r\n    const listModalLodade = new Event(\"modalLoaded\");\r\n\r\n    document.addEventListener(\"updated\", () => {   \r\n        data = data.filter(e  => !deletedData.includes(e) )\r\n        ;(0,_js_helpers_sort_js__WEBPACK_IMPORTED_MODULE_0__.default)(data, state);\r\n        (0,_js_templates_listTemplate_js__WEBPACK_IMPORTED_MODULE_3__.default)(data);\r\n        showModal();\r\n    })\r\n\r\n    document.addEventListener(\"modalLoaded\", () => {   \r\n        let btnReject = document.getElementById(\"btnReject\");\r\n        let btnConfirm = document.getElementById(\"btnConfirm\");\r\n        let body = document.body;\r\n        body.classList.add(\"modal-opened\");\r\n\r\n        document.getElementById(\"adoptModal\").style.display=\"block\";\r\n        btnConfirm.onclick = ()=>{\r\n            data.forEach((el)=>{\r\n                if(el.id == btnConfirm.dataset.id){\r\n                    deletedData = [...deletedData, el];\r\n                } \r\n            })\r\n            let carouselData = data.filter(e  => !deletedData.includes(e) )\r\n            const carouselUpdated = new CustomEvent('carouselUpdated', { detail: { 'data': carouselData }});\r\n            document.dispatchEvent(carouselUpdated);\r\n            document.dispatchEvent(dataUpdated);\r\n            document.getElementById(\"adoptModal\").style.display=\"none\";\r\n            body.classList.remove(\"modal-opened\");\r\n        }\r\n\r\n        btnReject.onclick = ()=>{\r\n            document.getElementById(\"adoptModal\").style.display=\"none\";\r\n            body.classList.remove(\"modal-opened\");\r\n        }\r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listController);\n\n//# sourceURL=webpack://webpack-demo/./src/js/components/list.js?");

/***/ }),

/***/ "./src/js/helpers/filters.js":
/*!***********************************!*\
  !*** ./src/js/helpers/filters.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _filter(data, state) {\r\n    if (state.filterColor !== \"null\") {\r\n        data = data.filter(el => el.color == state.filterColor.toLowerCase());\r\n    }\r\n    if (state.filterAge1 !== \"null\") {\r\n        data = data.filter(el => el.age <= state.filterAge1);\r\n    }\r\n    if (state.filterAge2 !== \"null\") {\r\n        data = data.filter(el => el.age <= state.filterAge2);\r\n    }\r\n    return data;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_filter);\n\n//# sourceURL=webpack://webpack-demo/./src/js/helpers/filters.js?");

/***/ }),

/***/ "./src/js/helpers/getData.js":
/*!***********************************!*\
  !*** ./src/js/helpers/getData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst getData = async () =>{\r\n    const response = await fetch(\"./data.json\");\r\n    const data = await response.json();\r\n\r\n    if (!response.ok) {\r\n        throw new Error(`HTTP error! status: ${response.status}`);\r\n    } else {\r\n        data.forEach((obj, id) => {\r\n            Object.assign(obj, {\r\n                id: id,\r\n                img: `img/${obj.name.toLowerCase()}.jpg`\r\n            })\r\n        });\r\n    }\r\n    return data;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://webpack-demo/./src/js/helpers/getData.js?");

/***/ }),

/***/ "./src/js/helpers/search.js":
/*!**********************************!*\
  !*** ./src/js/helpers/search.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _js_helpers_filters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/helpers/filters.js */ \"./src/js/helpers/filters.js\");\n\r\n\r\nfunction _search(jsonData, state, input) {\r\n    let data;\r\n    if(input !== \"\"){\r\n        data = (0,_js_helpers_filters_js__WEBPACK_IMPORTED_MODULE_0__.default)(jsonData, state);\r\n        data = data.filter(\r\n            el => el.name.toLowerCase().includes(input.toLowerCase())\r\n        );\r\n    }else{\r\n        data = (0,_js_helpers_filters_js__WEBPACK_IMPORTED_MODULE_0__.default)(jsonData.slice(0, state.currentItems), state);\r\n    }\r\n    return data;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_search);\n\n//# sourceURL=webpack://webpack-demo/./src/js/helpers/search.js?");

/***/ }),

/***/ "./src/js/helpers/sort.js":
/*!********************************!*\
  !*** ./src/js/helpers/sort.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _sort(data, state) {\r\n    if (state.sortOrder === \"asc\" && state.sortBy === \"age\") {\r\n        return data.sort((a, b) => a.age - b.age);\r\n    }\r\n    else if (state.sortOrder === \"desc\" && state.sortBy === \"age\") {\r\n        return data.sort((a, b) => b.age - a.age);\r\n    }\r\n    else if (state.sortOrder === \"asc\" && state.sortBy === \"name\") {\r\n        return data.sort((a, b) => a.name.localeCompare(b.name));\r\n    }\r\n    else if (state.sortOrder === \"desc\" && state.sortBy === \"name\") {\r\n        return data.sort((a, b) => b.name.localeCompare(a.name));\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sort);\n\n//# sourceURL=webpack://webpack-demo/./src/js/helpers/sort.js?");

/***/ }),

/***/ "./src/js/templates/carouselTemplate.js":
/*!**********************************************!*\
  !*** ./src/js/templates/carouselTemplate.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ carouselTemplate\n/* harmony export */ });\nfunction carouselTemplate(data){\r\n    let output = \"\";\r\n    data.forEach((item)=>{\r\n        output += `\r\n            <div id=\"${item.id}\" class=\"slide carousel__item \">\r\n                <div class=\"carousel__item__info\" style=\"background-image:url('${item.img}')\">\r\n                    <h2 class=\"carousel__item__info__title\"> ${item.name}</h2>\r\n                </div>\r\n            </div>\r\n        `;\r\n    });\r\n    document.getElementById(\"carouselContent\").innerHTML = output;\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/js/templates/carouselTemplate.js?");

/***/ }),

/***/ "./src/js/templates/listTemplate.js":
/*!******************************************!*\
  !*** ./src/js/templates/listTemplate.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ listTemplate\n/* harmony export */ });\nfunction listTemplate(data){\r\n    let output = \"\";\r\n    if(data.length > 0){\r\n        data.forEach((item)=>{\r\n            output += `\r\n                <div class=\"card\" data-id=\"${item.id}\">\r\n                <img src=\"${item.img}\" >\r\n                    <div class=\"card__info\">\r\n                        <h2> ${item.name}</h2>\r\n                        <p>Age: ${item.age}</p>\r\n                        <p>Color: ${item.color}</p>\r\n                    </div>\r\n                    <button class=\"btn btn__adopt\">Adopt me</button>\r\n                </div>\r\n            `;\r\n        });\r\n    }else{\r\n        output += \"<h2>Sorry no results found</h2>\";\r\n    }\r\n    document.getElementById(\"listData\").innerHTML = output;\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/js/templates/listTemplate.js?");

/***/ }),

/***/ "./src/js/templates/modalTemplate.js":
/*!*******************************************!*\
  !*** ./src/js/templates/modalTemplate.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ modalTemplate\n/* harmony export */ });\nfunction modalTemplate(item){\r\n    let output  = `\r\n        <div id=\"modal_content\" >\r\n        <button id=\"btnReject\" class=\"btn btn_close\" ><i class=\"fas fa-times-circle\"></i></button>\r\n            <h2 class=\"modal_title\">Are you sure, you wanna adopt ${item[0].name}?</h2>\r\n            <div id=\"itemID_${item[0].id}\" >\r\n                <h2>Name: ${item[0].name}</h2>\r\n                <p>Color: ${item[0].color}</p>\r\n                <p>Age: ${item[0].age}</p>\r\n            </div>\r\n        </div>\r\n        <button id=\"btnConfirm\" data-name=\"${item[0].name}\" data-id=\"${item[0].id}\" class=\"btn btn__load_more\">Yes</button>\r\n        `; \r\n    document.getElementById('adoptModalInfo').innerHTML = output;\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/js/templates/modalTemplate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;