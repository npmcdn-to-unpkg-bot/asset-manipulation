/* */ 
"format cjs";
'use strict';"use strict";
var lang_1 = require('angular2/src/facade/lang');
var di_1 = require('angular2/src/core/di');
var application_tokens_1 = require('./application_tokens');
var application_ref_1 = require('./application_ref');
var change_detection_1 = require('./change_detection/change_detection');
var view_utils_1 = require("./linker/view_utils");
var component_resolver_1 = require('./linker/component_resolver');
var component_resolver_2 = require("./linker/component_resolver");
var dynamic_component_loader_1 = require('./linker/dynamic_component_loader');
var dynamic_component_loader_2 = require("./linker/dynamic_component_loader");
var __unused; // avoid unused import when Type union types are erased
/**
 * A default set of providers which should be included in any Angular
 * application, regardless of the platform it runs onto.
 */
exports.APPLICATION_COMMON_PROVIDERS = lang_1.CONST_EXPR([
    application_ref_1.APPLICATION_CORE_PROVIDERS,
    new di_1.Provider(component_resolver_1.ComponentResolver, { useClass: component_resolver_2.ReflectorComponentResolver }),
    application_tokens_1.APP_ID_RANDOM_PROVIDER,
    view_utils_1.ViewUtils,
    new di_1.Provider(change_detection_1.IterableDiffers, { useValue: change_detection_1.defaultIterableDiffers }),
    new di_1.Provider(change_detection_1.KeyValueDiffers, { useValue: change_detection_1.defaultKeyValueDiffers }),
    new di_1.Provider(dynamic_component_loader_1.DynamicComponentLoader, { useClass: dynamic_component_loader_2.DynamicComponentLoader_ })
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25fY29tbW9uX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtNG5vM1pRdk8udG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2FwcGxpY2F0aW9uX2NvbW1vbl9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUErQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQzFELG1CQUF1RCxzQkFBc0IsQ0FBQyxDQUFBO0FBQzlFLG1DQUFxQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzVELGdDQUF5QyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzdELGlDQUtPLHFDQUFxQyxDQUFDLENBQUE7QUFDN0MsMkJBQXdCLHFCQUFxQixDQUFDLENBQUE7QUFDOUMsbUNBQWdDLDZCQUE2QixDQUFDLENBQUE7QUFDOUQsbUNBQXlDLDZCQUE2QixDQUFDLENBQUE7QUFDdkUseUNBQXFDLG1DQUFtQyxDQUFDLENBQUE7QUFDekUseUNBQXNDLG1DQUFtQyxDQUFDLENBQUE7QUFFMUUsSUFBSSxRQUFjLENBQUMsQ0FBRSx1REFBdUQ7QUFFNUU7OztHQUdHO0FBQ1Usb0NBQTRCLEdBQW1DLGlCQUFVLENBQUM7SUFDckYsNENBQTBCO0lBQzFCLElBQUksYUFBUSxDQUFDLHNDQUFpQixFQUFFLEVBQUMsUUFBUSxFQUFFLCtDQUEwQixFQUFDLENBQUM7SUFDdkUsMkNBQXNCO0lBQ3RCLHNCQUFTO0lBQ1QsSUFBSSxhQUFRLENBQUMsa0NBQWUsRUFBRSxFQUFDLFFBQVEsRUFBRSx5Q0FBc0IsRUFBQyxDQUFDO0lBQ2pFLElBQUksYUFBUSxDQUFDLGtDQUFlLEVBQUUsRUFBQyxRQUFRLEVBQUUseUNBQXNCLEVBQUMsQ0FBQztJQUNqRSxJQUFJLGFBQVEsQ0FBQyxpREFBc0IsRUFBRSxFQUFDLFFBQVEsRUFBRSxrREFBdUIsRUFBQyxDQUFDO0NBQzFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VHlwZSwgQ09OU1RfRVhQUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7cHJvdmlkZSwgUHJvdmlkZXIsIEluamVjdG9yLCBPcGFxdWVUb2tlbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGknO1xuaW1wb3J0IHtBUFBfSURfUkFORE9NX1BST1ZJREVSfSBmcm9tICcuL2FwcGxpY2F0aW9uX3Rva2Vucyc7XG5pbXBvcnQge0FQUExJQ0FUSU9OX0NPUkVfUFJPVklERVJTfSBmcm9tICcuL2FwcGxpY2F0aW9uX3JlZic7XG5pbXBvcnQge1xuICBJdGVyYWJsZURpZmZlcnMsXG4gIGRlZmF1bHRJdGVyYWJsZURpZmZlcnMsXG4gIEtleVZhbHVlRGlmZmVycyxcbiAgZGVmYXVsdEtleVZhbHVlRGlmZmVyc1xufSBmcm9tICcuL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbic7XG5pbXBvcnQge1ZpZXdVdGlsc30gZnJvbSBcIi4vbGlua2VyL3ZpZXdfdXRpbHNcIjtcbmltcG9ydCB7Q29tcG9uZW50UmVzb2x2ZXJ9IGZyb20gJy4vbGlua2VyL2NvbXBvbmVudF9yZXNvbHZlcic7XG5pbXBvcnQge1JlZmxlY3RvckNvbXBvbmVudFJlc29sdmVyfSBmcm9tIFwiLi9saW5rZXIvY29tcG9uZW50X3Jlc29sdmVyXCI7XG5pbXBvcnQge0R5bmFtaWNDb21wb25lbnRMb2FkZXJ9IGZyb20gJy4vbGlua2VyL2R5bmFtaWNfY29tcG9uZW50X2xvYWRlcic7XG5pbXBvcnQge0R5bmFtaWNDb21wb25lbnRMb2FkZXJffSBmcm9tIFwiLi9saW5rZXIvZHluYW1pY19jb21wb25lbnRfbG9hZGVyXCI7XG5cbnZhciBfX3VudXNlZDogVHlwZTsgIC8vIGF2b2lkIHVudXNlZCBpbXBvcnQgd2hlbiBUeXBlIHVuaW9uIHR5cGVzIGFyZSBlcmFzZWRcblxuLyoqXG4gKiBBIGRlZmF1bHQgc2V0IG9mIHByb3ZpZGVycyB3aGljaCBzaG91bGQgYmUgaW5jbHVkZWQgaW4gYW55IEFuZ3VsYXJcbiAqIGFwcGxpY2F0aW9uLCByZWdhcmRsZXNzIG9mIHRoZSBwbGF0Zm9ybSBpdCBydW5zIG9udG8uXG4gKi9cbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9DT01NT05fUFJPVklERVJTOiBBcnJheTxUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXT4gPSBDT05TVF9FWFBSKFtcbiAgQVBQTElDQVRJT05fQ09SRV9QUk9WSURFUlMsXG4gIG5ldyBQcm92aWRlcihDb21wb25lbnRSZXNvbHZlciwge3VzZUNsYXNzOiBSZWZsZWN0b3JDb21wb25lbnRSZXNvbHZlcn0pLFxuICBBUFBfSURfUkFORE9NX1BST1ZJREVSLFxuICBWaWV3VXRpbHMsXG4gIG5ldyBQcm92aWRlcihJdGVyYWJsZURpZmZlcnMsIHt1c2VWYWx1ZTogZGVmYXVsdEl0ZXJhYmxlRGlmZmVyc30pLFxuICBuZXcgUHJvdmlkZXIoS2V5VmFsdWVEaWZmZXJzLCB7dXNlVmFsdWU6IGRlZmF1bHRLZXlWYWx1ZURpZmZlcnN9KSxcbiAgbmV3IFByb3ZpZGVyKER5bmFtaWNDb21wb25lbnRMb2FkZXIsIHt1c2VDbGFzczogRHluYW1pY0NvbXBvbmVudExvYWRlcl99KVxuXSk7Il19