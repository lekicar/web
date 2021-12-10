// import { Button } from './Button';
import { App } from 'vue'
import Navigation from './globalComp/navigation.vue'

const compList = [Navigation]

export function registerGlobComp(app: App) {
  compList.forEach((comp: any) => {
    console.log(comp.name, comp.displayName)
    app.component(comp.name || comp.displayName, comp)
  })
}
