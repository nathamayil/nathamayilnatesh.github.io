"use strict";
exports.id = "component---src-pages-archive-js";
exports.ids = ["component---src-pages-archive-js"];
exports.modules = {

/***/ "./src/pages/archive.js?export=default":
/*!*********************************************!*\
  !*** ./src/pages/archive.js?export=default ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-helmet'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'styled-components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@utils/sr'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@hooks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());









const StyledTableContainer = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'styled-components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())`
  margin: 100px -20px;

  @media (max-width: 768px) {
    margin: 50px -10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none;
      }
    }

    tbody tr {
      &:hover,
      &:focus {
        background-color: var(--light-navy);
      }
    }

    th,
    td {
      padding: 10px;
      text-align: left;

      &:first-child {
        padding-left: 20px;

        @media (max-width: 768px) {
          padding-left: 10px;
        }
      }
      &:last-child {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    tr {
      cursor: default;

      td:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      td:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }

    td {
      &.year {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }

      &.title {
        padding-top: 15px;
        padding-right: 20px;
        color: var(--lightest-slate);
        font-size: var(--fz-xl);
        font-weight: 600;
        line-height: 1.25;
      }

      &.company {
        font-size: var(--fz-lg);
        white-space: nowrap;
      }

      &.tech {
        font-size: var(--fz-xxs);
        font-family: var(--font-mono);
        line-height: 1.5;
        .separator {
          margin: 0 5px;
        }
        span {
          display: inline-block;
        }
      }

      &.links {
        min-width: 100px;

        div {
          display: flex;
          align-items: center;

          a {
            ${({
  theme
}) => theme.mixins.flexCenter};
            flex-shrink: 0;
          }

          a + a {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;
const ArchivePage = ({
  location,
  data
}) => {
  const projects = data.allMarkdownRemark.edges;
  const revealTitle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const revealTable = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const revealProjects = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const prefersReducedMotion = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@hooks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (prefersReducedMotion) {
      return;
    }
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@utils/sr'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(revealTitle.current, Object(function webpackMissingModule() { var e = new Error("Cannot find module '@config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@utils/sr'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(revealTable.current, Object(function webpackMissingModule() { var e = new Error("Cannot find module '@config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(200, 0));
    revealProjects.current.forEach((ref, i) => Object(function webpackMissingModule() { var e = new Error("Cannot find module '@utils/sr'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(ref, Object(function webpackMissingModule() { var e = new Error("Cannot find module '@config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(i * 10)));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    location: location
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-helmet'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    title: "Archive"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    ref: revealTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "big-heading"
  }, "Archive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "subtitle"
  }, "A big list of things I\u2019ve worked on")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledTableContainer, {
    ref: revealTable
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Year"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: "hide-on-mobile"
  }, "Made at"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: "hide-on-mobile"
  }, "Built with"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Link"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, projects.length > 0 && projects.map(({
    node
  }, i) => {
    const {
      date,
      github,
      external,
      ios,
      android,
      title,
      tech,
      company
    } = node.frontmatter;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: i,
      ref: el => revealProjects.current[i] = el
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "overline year"
    }, `${new Date(date).getFullYear()}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "title"
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "company hide-on-mobile"
    }, company ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, company) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u2014")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "tech hide-on-mobile"
    }, (tech === null || tech === void 0 ? void 0 : tech.length) > 0 && tech.map((item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: i
    }, item, '', i !== tech.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "separator"
    }, "\xB7")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "links"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, external && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: external,
      "aria-label": "External Link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      name: "External"
    })), github && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: github,
      "aria-label": "GitHub Link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      name: "GitHub"
    })), ios && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: ios,
      "aria-label": "Apple App Store Link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      name: "AppStore"
    })), android && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: android,
      "aria-label": "Google Play Store Link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@components/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      name: "PlayStore"
    })))));
  }))))));
};
ArchivePage.propTypes = {
  location: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  data: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArchivePage);
const pageQuery = "357801700";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-archive-js.js.map