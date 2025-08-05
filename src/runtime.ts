import { initRuntime } from "@c3framework/core";
import Config from "./addon";
import Instance from "./instance";

/*
 * Automatic injection...
 * If you need to extend base and type classes:
 * - Remove this function
 * - Create new classes that extends the `Behavior.Base()` & `Behavior.Type()` functions
 * - Call the `injectAces()` at the end
 * See the `initBehavior` function for reference.
 */
initRuntime(Config, { Instance });
