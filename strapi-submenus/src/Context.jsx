import { createContext, useState, useContext, children } from "react";
const AppContext = createContext()



export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const openSidebar = () => {
        setIsSidebarOpen(true)
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    };
    return <AppContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, openSidebar, closeSidebar }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}