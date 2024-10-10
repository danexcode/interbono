import { AppMenuItem } from "../types/index"
import { AppMenuitem } from "./AppMenuItem"

export const AppMenu = () => {
    const model: AppMenuItem[] = [
        {
            label:"Transacciones",
            items: [
                { label: "General", icon: "pi pi-fw pi-chart-bar", to: "/transacciones" },
                { label: "Abiertas", icon: "pi pi-fw pi-share-alt", to: "/transacciones/abiertas" },
                { label: "Cerradas", icon: "pi pi-fw pi-check-square", to: "/transacciones/cerradas" }
            ]
        },
        {
            label:"Clientes",
            items: [
                { label: "General", icon: "pi pi-fw pi-user", to: "/clientes" },
                { label: "Crear", icon: "pi pi-fw pi-pencil", to: "/clientes" }
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