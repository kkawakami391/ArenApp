
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */
"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.getBabyAge = /*#__PURE__*/ $mkFactory("SELECT TO_CHAR(AGE($1, $2), 'YY \"años\" mm \"meses\"') AS age;")
