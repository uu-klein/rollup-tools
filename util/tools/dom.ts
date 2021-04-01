/*
 * @Author: tyson
 * @LastEditTime: 2021-04-01 16:35:03
 * @LastEditors: Please set LastEditors
 * @Description: dom事件
 * @FilePath: \obtool\util\tools\dom.ts
 * 
 * @Date: 2021-04-01 16:30:51
 */

/**
 * @author: Full
 * @description: 阻止冒泡
 * @param {Event} event
 * @return {*}
 * @Date: 2021-04-01 16:31:09
 */
export function stopPropagation(event: Event) {
    event.stopPropagation();
}

/**
 * @author: Full
 * @description: 默认事件
 * @param {Event} event
 * @param {boolean} isStopPropagation
 * @return {*}
 * @Date: 2021-04-01 16:32:20
 */
export function preventDefault(event: Event, isStopPropagation ? : boolean) {
    /* istanbul ignore else */
    if (typeof event.cancelable !== "boolean" || event.cancelable) {
        event.preventDefault();
    }

    if (isStopPropagation) {
        stopPropagation(event);
    }
}

/**
 * @author: Full
 * @description:  trigger 触发被选元素的指定事件
 * @param {Element} target
 * @param {string} type
 * @return {*}
 * @Date: 2021-04-01 16:32:05
 */
export function trigger(target: Element, type: string) {
    const inputEvent = document.createEvent("HTMLEvents");
    inputEvent.initEvent(type, true, true);
    target.dispatchEvent(inputEvent);
}

