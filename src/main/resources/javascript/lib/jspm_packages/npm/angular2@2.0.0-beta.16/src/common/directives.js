/* */ 
"format cjs";
'use strict';"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
/**
 * @module
 * @description
 * Common directives shipped with Angular.
 */
var ng_class_1 = require('./directives/ng_class');
exports.NgClass = ng_class_1.NgClass;
var ng_for_1 = require('./directives/ng_for');
exports.NgFor = ng_for_1.NgFor;
var ng_if_1 = require('./directives/ng_if');
exports.NgIf = ng_if_1.NgIf;
var ng_template_outlet_1 = require('./directives/ng_template_outlet');
exports.NgTemplateOutlet = ng_template_outlet_1.NgTemplateOutlet;
var ng_style_1 = require('./directives/ng_style');
exports.NgStyle = ng_style_1.NgStyle;
var ng_switch_1 = require('./directives/ng_switch');
exports.NgSwitch = ng_switch_1.NgSwitch;
exports.NgSwitchWhen = ng_switch_1.NgSwitchWhen;
exports.NgSwitchDefault = ng_switch_1.NgSwitchDefault;
var ng_plural_1 = require('./directives/ng_plural');
exports.NgPlural = ng_plural_1.NgPlural;
exports.NgPluralCase = ng_plural_1.NgPluralCase;
exports.NgLocalization = ng_plural_1.NgLocalization;
__export(require('./directives/observable_list_diff'));
var core_directives_1 = require('./directives/core_directives');
exports.CORE_DIRECTIVES = core_directives_1.CORE_DIRECTIVES;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtNG5vM1pRdk8udG1wL2FuZ3VsYXIyL3NyYy9jb21tb24vZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7R0FJRztBQUNILHlCQUFzQix1QkFBdUIsQ0FBQztBQUF0QyxxQ0FBc0M7QUFDOUMsdUJBQW9CLHFCQUFxQixDQUFDO0FBQWxDLCtCQUFrQztBQUMxQyxzQkFBbUIsb0JBQW9CLENBQUM7QUFBaEMsNEJBQWdDO0FBQ3hDLG1DQUErQixpQ0FBaUMsQ0FBQztBQUF6RCxpRUFBeUQ7QUFDakUseUJBQXNCLHVCQUF1QixDQUFDO0FBQXRDLHFDQUFzQztBQUM5QywwQkFBc0Qsd0JBQXdCLENBQUM7QUFBdkUsd0NBQVE7QUFBRSxnREFBWTtBQUFFLHNEQUErQztBQUMvRSwwQkFBcUQsd0JBQXdCLENBQUM7QUFBdEUsd0NBQVE7QUFBRSxnREFBWTtBQUFFLG9EQUE4QztBQUM5RSxpQkFBYyxtQ0FBbUMsQ0FBQyxFQUFBO0FBQ2xELGdDQUE4Qiw4QkFBOEIsQ0FBQztBQUFyRCw0REFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tbW9uIGRpcmVjdGl2ZXMgc2hpcHBlZCB3aXRoIEFuZ3VsYXIuXG4gKi9cbmV4cG9ydCB7TmdDbGFzc30gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2NsYXNzJztcbmV4cG9ydCB7TmdGb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19mb3InO1xuZXhwb3J0IHtOZ0lmfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfaWYnO1xuZXhwb3J0IHtOZ1RlbXBsYXRlT3V0bGV0fSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfdGVtcGxhdGVfb3V0bGV0JztcbmV4cG9ydCB7TmdTdHlsZX0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX3N0eWxlJztcbmV4cG9ydCB7TmdTd2l0Y2gsIE5nU3dpdGNoV2hlbiwgTmdTd2l0Y2hEZWZhdWx0fSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfc3dpdGNoJztcbmV4cG9ydCB7TmdQbHVyYWwsIE5nUGx1cmFsQ2FzZSwgTmdMb2NhbGl6YXRpb259IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19wbHVyYWwnO1xuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmVzL29ic2VydmFibGVfbGlzdF9kaWZmJztcbmV4cG9ydCB7Q09SRV9ESVJFQ1RJVkVTfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29yZV9kaXJlY3RpdmVzJztcbiJdfQ==