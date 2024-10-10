import { AppMenuItem } from "../types/index"
import { AppMenuitem } from "./AppMenuItem"

export const AppMenu = () => {
    const model: AppMenuItem[] = [
        {
            label:"Transacciones",
            items: [
                { label: "General", icon: "pi pi-fw pi-home", to: "/transacciones" },
                { label: "General", icon: "pi pi-fw pi-home", to: "/transacciones" }
            ]
        },
        {
            label:"Clientes",
            items: [
                { label: "General", icon: "pi pi-fw pi-user", to: "/clientes" },
                { label: "General", icon: "pi pi-fw pi-user", to: "/clientes" }
            ]
        }
    ]
    console.log(model)

    return (
        <div className="">
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return <AppMenuitem 
                                item={item} 
                                root={true} 
                                index={i}
                                key={item.label}
                            />
                })}
            </ul>
        </div>
    )
}