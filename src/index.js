/*
 * @Descripttion: Project entry file
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-07-30 09:43:32
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-07-30 10:14:57
 */
import { ContextMenu } from 'jquery-contextmenu'
import 'jquery-contextmenu/dist/jquery.contextMenu.min.css'
import './style/index.css'

const contextMenu = new ContextMenu()
contextMenu.create({
    // define which elements trigger this menu
    selector: '.context-menu-trigger',
    // define the elements of the menu
    items: {
        foo: {name: 'Foo', callback: function(e, key, currentMenuData){ alert('Foo!'); }},
        bar: {name: 'Bar', callback: function(e, key, currentMenuData){ alert('Bar!') }}
    }
    // there's more, have a look at the demos and docs...
})
