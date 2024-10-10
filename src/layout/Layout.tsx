import { AppTopbar } from "./AppTopbar";
import { ChildContainerProps } from "app/types";
import { AppFooter } from "./AppFooter";
import AppSidebar from "./AppSidebar";

const Layout = ({ children }: ChildContainerProps) => {
    return (
        <>
            <div className="layout-wrapper layout-static">
                <AppTopbar/>
                <div className="layout-sidebar">
                    <AppSidebar />
                </div>
                <div className="layout-main-container">
                    <div className="layout-main">{children}</div>
                    <AppFooter />
                </div>
            </div>
        </>
    )
}

export default Layout;