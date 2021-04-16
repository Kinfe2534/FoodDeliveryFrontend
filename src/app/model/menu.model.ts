import { MenuItem } from './menuItem.model';
export class Menu {
    
    constructor(private menuName: string=null, private menuList:MenuItem[]=[]){
        //this.menu=[];
    }

    get getMenuName(): string{
        return this.menuName;
    }
    get getMenuList(): readonly MenuItem[]{
        return this.menuList;
    }

    addMenuItem(item: MenuItem){
        this.menuList.push(item);
    }
}