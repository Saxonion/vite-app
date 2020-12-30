/**
 * Prevent repeated clicks (Debounce)
 * @default delayTime 1000 ms | function
 * @Example v-repeat-click="delayTime" just for button tag
 * @Example v-repeat-click="function"  general 
 */

import type { App, Directive, DirectiveBinding } from 'vue';

const handler = (el: any, binding: DirectiveBinding<any>) => {
  const isFunc:boolean = typeof binding.value === 'function';

  if(isFunc) {
    let timeout:any = null;
    return () =>  {
      if(timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        binding.value();
      }, 1000);
    };
  } else {
    el.disabled = false;
    return () => {
      el.disabled = true;
      setTimeout(() => {
        el.disabled = false;
      }, binding.value | 1000);
    }
  }
}

const repeatDirective: Directive = {
  mounted(el: any, binding: DirectiveBinding<any>) {
    el.addEventListener('click', handler(el, binding));
  },
  unmounted(el: any, binding: DirectiveBinding<any>) {
    el.removeEventListener('click', handler(el, binding))
  }
}

export function setupRepeatClickDirective(app: App) {
  app.directive('repeat-click', repeatDirective);
}

export default repeatDirective;